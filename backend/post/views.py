from fileinput import filename
from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from post.models import Item, Comment, PostImage
from post.serializers import ItemSerializer, CommentSerializer, PostImageSerializer
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from django.http.response import JsonResponse

# Create your views here.
class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all().order_by('-postDate')
    serializer_class = ItemSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class PostImageViewset(viewsets.ModelViewSet):
   queryset = PostImage.objects.all()
   serializer_class = PostImageSerializer