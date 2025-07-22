from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
# from .views import SignUpView 

def welcome_view(request):
    return JsonResponse({"message": "Django backend is running 👋"})

urlpatterns = [
    path('', welcome_view),  
    path('admin/', admin.site.urls),
    path('api/auth/', include('auth_app.urls')),  # Modular
    # path("register/", SignUpView.as_view(), name="register"),
]
