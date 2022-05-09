from http.client import ImproperConnectionState
from django.contrib import admin

# Register your models here.
from .models import userProfile

admin.site.register(userProfile)