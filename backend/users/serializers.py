from rest_framework import serializers
from .models import User, Shift, EmployeeProfile, ManagerProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'firstName', 'lastName', 'phone', 'countryCode', 'password', 'role']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create(
            email=validated_data['email'],
            firstName=validated_data['firstName'],
            lastName=validated_data['lastName'],
            phone=validated_data['phone'],
            countryCode=validated_data['countryCode'],
            role=validated_data['role']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class EmployeeProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeProfile
        fields = ['employeeID', 'department', 'managerID', 'organizationName', 'employeeRole', 'user']

class ManagerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ManagerProfile
        fields = ['businessType', 'organizationName', 'organizationAddress', 'managerID', 'department', 'user']

class ShiftSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shift
        fields = ['shiftTitle', 'location', 'startTime', 'endTime', 'date', 'numberOfStaffRequired']
