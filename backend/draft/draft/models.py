from django.db import models

class Appointment(models.Model):
    service = models.CharField(max_length=100)
    dentist = models.CharField(max_length=100)
    date = models.DateTimeField()
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    contact_number = models.CharField(max_length=20)
    address = models.TextField()
    other = models.TextField(blank=True)
    
