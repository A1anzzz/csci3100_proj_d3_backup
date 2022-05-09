from distutils.command.upload import upload
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class userProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profilePic = models.ImageField(upload_to = 'profilePics', null = True, blank = True)

    def _str_(self):
        return self.user.username