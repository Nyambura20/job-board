from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Ensure password is write-only

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password', 'role']

    def create(self, validated_data):
        # Get role from validated_data or default to 'job_seeker'
        role = validated_data.get('role', 'job_seeker')
        
        # Create the user with the role, username, email, and password
        user = CustomUser.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
            role=role  # Assign role to the user
        )
        print(f"Created user: {user}")
        return user
