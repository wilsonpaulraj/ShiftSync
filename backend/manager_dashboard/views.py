from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import check_password
from .models import User, EmployeeProfile, ManagerProfile
from .serializers import UserSerializer, EmployeeProfileSerializer, ManagerProfileSerializer

@api_view(['GET', 'POST'])
def users(request):
    if request.method == 'GET':
        email = request.GET.get('email')
        password = request.GET.get('password')

        if email and password:
            try:
                user = User.objects.get(email=email)
                if check_password(password, user.password):
                    user_serializer = UserSerializer(user)
                    return Response(user_serializer.data, status=status.HTTP_200_OK)
                else:
                    return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
            except User.DoesNotExist:
                return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'error': 'Email and password required'}, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'POST':
        data = request.data
        role = data.get('role')

        user_serializer = UserSerializer(data={
            'email': data.get('email'),
            'firstName': data.get('firstName'),
            'lastName': data.get('lastName'),
            'phone': data.get('phone'),
            'countryCode': data.get('countryCode'),
            'password': data.get('password'),
            'role': role
        })

        if user_serializer.is_valid():
            user = user_serializer.save()

            if role == 'Employee':
                employee_serializer = EmployeeProfileSerializer(data={
                    'employeeID': data.get('employeeID'),
                    'department': data.get('department'),
                    'managerID': data.get('managerID'),
                    'organizationName': data.get('organizationName'),
                    'employeeRole': data.get('employeeRole')
                })
                if employee_serializer.is_valid():
                    employee_serializer.save(user=user)
                    return Response({'status': 'Employee created'}, status=status.HTTP_201_CREATED)
                return Response(employee_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            elif role == 'Manager':
                manager_serializer = ManagerProfileSerializer(data={
                    'businessType': data.get('businessType'),
                    'organizationName': data.get('organizationName'),
                    'organizationAddress': data.get('organizationAddress'),
                    'managerID': data.get('managerID'),
                    'department': data.get('department')
                })
                if manager_serializer.is_valid():
                    manager_serializer.save(user=user)
                    return Response({'status': 'Manager created'}, status=status.HTTP_201_CREATED)
                return Response(manager_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            return Response({'error': 'Invalid role'}, status=status.HTTP_400_BAD_REQUEST)

        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def list_employees(request):
    employees = EmployeeProfile.objects.all()
    employee_serializer = EmployeeProfileSerializer(employees, many=True)
    return Response(employee_serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def list_managers(request):
    managers = ManagerProfile.objects.all()
    manager_serializer = ManagerProfileSerializer(managers, many=True)
    return Response(manager_serializer.data, status=status.HTTP_200_OK)
