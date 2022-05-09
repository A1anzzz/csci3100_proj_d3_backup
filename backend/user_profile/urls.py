from django.urls import path, include
from user_profile import views

urlpatterns = [
    path('signup/', views.signup, name='signup')
]

# Use static() to add url mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

from django.views.generic import TemplateView

from .views import personal_page_view

urlpatterns += [
    path('personal_page/',  TemplateView.as_view(template_name='personal_page.html'), name='personal')
]

urlpatterns += [
    path('personal_page/refresh/', personal_page_view, name='refresh')
]

from .views import profile_image_view, success, upload_image, simple_upload

urlpatterns += [
    path('change_profile_pic/', TemplateView.as_view(template_name='change_profile_pic.html'), name = 'update'),
    path('update_image/', simple_upload, name = 'image_upload'),
    path('success/', success, name = 'success'),
]