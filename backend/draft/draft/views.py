from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import UserSerializer
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User

from django.shortcuts import get_object_or_404

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated



from .models import Appointment
from .serializers import AppointmentSerializer
from django.views.decorators.csrf import csrf_exempt

@api_view(['POST'])
def login(request):
    user = authenticate(username=request.data['username'], password=request.data['password'])
    if user is None:
        return Response({"detail": "Invalid credentials."}, status=status.HTTP_401_UNAUTHORIZED)
    
    # Assuming token is returned from the backend
    refresh = RefreshToken.for_user(user)
    access = str(refresh.access_token)
    
    serializer = UserSerializer(instance=user)

    return Response({
        "refreshToken": str(refresh),
        "accessToken":str(access),
        "user": serializer.data})


@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        user.set_password(request.data['password'])
        user.save()
        
        refresh = RefreshToken.for_user(user)

        return Response({
            'refreshToken': str(refresh),
            'accessToken': str(refresh.access_token),
        })

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def test_token(request):
    return Response("Passed for {}".format(request.user.email))

@api_view(['POST'])
def create_appointment(request):
    if request.method == 'POST':
        serializer = AppointmentSerializer(data={**request.data, 'user': request.user.id})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def get_appointments(request):
    appointments = Appointment.objects.filter(user=request.user)
    serializer = AppointmentSerializer(appointments, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_username(request):
    return Response(format(request.user.username))

@api_view(['DELETE'])
def delete_appointment(request):
    try:
        appointment_id = request.data.get('id')  # Get the appointment ID from the request body
        appointment = Appointment.objects.get(id=appointment_id)
    except Appointment.DoesNotExist:
        return Response({"error": "Appointment does not exist"}, status=status.HTTP_404_NOT_FOUND)

    if request.user != appointment.user:
        return Response({"error": "You don't have permission to delete this appointment"}, status=status.HTTP_403_FORBIDDEN)

    appointment.delete()

    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def refresh_token(request):
    try:
        refresh_token = request.data.get('refresh_token')
        if not refresh_token:
            return Response({"error": "Refresh token is required"}, status=status.HTTP_400_BAD_REQUEST)

        refresh = RefreshToken(refresh_token)
        new_access_token = str(refresh.access_token)
        
        return Response({"access_token": new_access_token}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)