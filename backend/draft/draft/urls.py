
from django.contrib import admin
from django.urls import path, re_path
from . import views


urlpatterns = [
    path('api/appointments/', views.get_appointments, name='get_appointments'),
    path('api/create_appointments/', views.create_appointment, name='create_appointment'),
    path('user/', views.get_username),
    path('admin/', admin.site.urls),
    re_path('login', views.login),
    re_path('signup', views.signup),
    re_path('test_token', views.test_token),


]
