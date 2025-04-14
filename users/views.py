from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from django.contrib.auth.models import User
from .serializers import UserSerializer
from .models import CustomUser
from rest_framework.permissions import AllowAny 

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# Create your views here.
class RegisterUserView(CreateAPIView):
    queryset=CustomUser.objects.all()
    serializer_class=UserSerializer
    permission_classes = [AllowAny]
    
    
    
class MyTokenObtainPairView(TokenObtainPairView):
    pass

class MyTokenRefreshView(TokenRefreshView):
    pass

