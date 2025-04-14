from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.

class CustomUser(AbstractUser):
    # Defining the choices to be passed in the role field
    ROLE_CHOICES=(('job_owner','job_owner'),
                  ('job_seeker','job_seeker'))
    
    role=models.CharField(max_length=20,choices=ROLE_CHOICES,default='job_seeker')
    
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_set',  # Specify a custom related name
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_permissions_set',  # Specify a custom related name
        blank=True
    )
    
    def __str__(self):
        return self.username