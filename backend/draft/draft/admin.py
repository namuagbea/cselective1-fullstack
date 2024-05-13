from django.contrib import admin
from .models import Appointment

class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('user', 'service', 'dentist', 'date', 'first_name', 'last_name', 'email', 'contact_number', 'address', 'other', 'created_at')  # Fields to display in the list view
    search_fields = ('service', 'dentist', 'first_name', 'last_name', 'email', 'contact_number')  # Fields to search by in the admin interface
    list_filter = ('service', 'dentist', 'created_at')  # Filter options

admin.site.register(Appointment, AppointmentAdmin)