from django.http import HttpResponse  
from django.shortcuts import render
from .models import userProfile
from user_profile.forms import SignupForm  
from django.contrib.sites.shortcuts import get_current_site  
from django.utils.encoding import force_bytes, force_str  
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode  
from django.template.loader import render_to_string  
from user_profile.tokens import account_activation_token  
from django.core.mail import EmailMessage  
from .forms import *
  
def signup(request):  
    if request.method == 'POST':  
        form = SignupForm(request.POST)  
        if form.is_valid():  
            # save form in the memory not in database  
            user = form.save(commit=False)  
            user.is_active = False  
            user.save()  

            # to get the domain of the current site  
            current_site = get_current_site(request)  
            mail_subject = 'Activation link has been sent to your email id'  
            message = render_to_string('acc_active_email.html', {  
                'user': user,  
                'domain': current_site.domain,  
                'uid':urlsafe_base64_encode(force_bytes(user.pk)),  
                'token':account_activation_token.make_token(user),  
            })  
            to_email = form.cleaned_data.get('email')  
            email = EmailMessage(  
                        mail_subject, message, to=[to_email]  
            )  
            email.send()  
            return HttpResponse('Please confirm your email address to complete the registration')  
    else:  
        form = SignupForm()  
    return render(request, 'signup.html', {'form': form})  

from django.contrib.auth import get_user_model

def activate(request, uidb64, token):  
    User = get_user_model()  
    try:  
        uid = force_str(urlsafe_base64_decode(uidb64))  
        user = User.objects.get(pk=uid)  
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):  
        user = None  
    if user is not None and account_activation_token.check_token(user, token):  
        user.is_active = True  
        user.save()  
        
        #create profile
        user_profile = userProfile(user=user)
        user_profile.save()

        return HttpResponse('Thank you for your email confirmation. Now you can login your account.')  
    else:  
        return HttpResponse('Activation link is invalid!')  

from django.shortcuts import render, redirect

def profile_image_view(request):
  
    if request.method == 'POST':
        form = userProfileForm(request.POST, request.FILES, initial={'user': request.user})
        
        if form.is_valid():
            form.save()
            return redirect('success')
    else:
        form = userProfileForm()
    return render(request, 'change_profile_pic.html', {'form' : form})
  
  
def success(request):
    return HttpResponse('successfully uploaded')

from .forms import uploadImageForm

def upload_image(request):
    if request.method == 'POST':
        form = uploadImageForm(request.POST, request.FILES)
        if form.is_valid():
            user = request.user
            prof = userProfile.objects.get(user = user)
            prof.profilePic = request.FILES
            return redirect('success')
    else:
        form = uploadImageForm()
    return render(request, 'change_profile_pic.html', {'form': form})

from django.core.files.storage import FileSystemStorage
import os

def simple_upload(request):
    if request.method == 'POST':
        old_image = userProfile.objects.get(user = request.user)
        form = userProfileForm(request.POST, request.FILES, instance=old_image)
        if form.is_valid():
            image_path = old_image.profilePic.path
            if os.path.exists(image_path):
                os.remove(image_path)
            form.save()
        else: return redirect('personal')
    
    return redirect('http://localhost:8000/user_profiles/personal_page/refresh')

def personal_page_view(request):
    prof = userProfile.objects.get(user = request.user)
    return render(request, 'personal_page.html', {'userProf': prof})