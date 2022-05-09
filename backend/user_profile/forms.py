from dataclasses import fields
from pyexpat import model
from django import forms  
from django.contrib.auth.forms import UserCreationForm  
from django.contrib.auth.models import User  
from .models import userProfile
  
class SignupForm(UserCreationForm):  
    email = forms.EmailField(max_length=200, help_text='Required')  
    class Meta:  
        model = User  
        fields = ('username', 'email', 'password1', 'password2')  

class userProfileForm(forms.ModelForm):
    class Meta:
        model = userProfile
        fields = ['profilePic']

class uploadImageForm(forms.Form):
    image = forms.ImageField()