from rest_framework import routers
from django.urls import path
from django.conf.urls import include
from post import views

router1 = routers.DefaultRouter()
router2 = routers.DefaultRouter()
router3 = routers.DefaultRouter()
router1.register(r'items', views.ItemViewSet, '[item]')
router2.register(r'comments', views.CommentViewSet, '[comment]')
router3.register(r'postImages', views.PostImageViewset,'[postImage]')

urlpatterns = [
    path('', include(router1.urls)),
    path('', include(router2.urls)),
    path('', include(router3.urls)),
]

