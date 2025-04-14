from django.urls import path
from .views import *


urlpatterns=[
    path('register/',RegisterUserView.as_view(),name='register'),
    
    path('token/',MyTokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('token/refresh/',MyTokenRefreshView.as_view(),name='token_refresh'),
]