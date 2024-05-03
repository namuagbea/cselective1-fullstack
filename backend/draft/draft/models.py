from django.db import models
from django.contrib.auth.models import User

class Appointment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None) 
    service = models.CharField(max_length=100)
    dentist = models.CharField(max_length=100)
    date = models.DateTimeField()
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    contact_number = models.CharField(max_length=20)
    address = models.TextField()
    other = models.TextField(blank=True)
