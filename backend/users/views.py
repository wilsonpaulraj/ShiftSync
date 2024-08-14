from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import check_password
from .models import User, Shift, EmployeeProfile, ManagerProfile
from .serializers import UserSerializer, EmployeeProfileSerializer, ManagerProfileSerializer, ShiftSerializer

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
                    'employeeRole': data.get('employeeRole'),
                    'user': user.id  # Save the user foreign key
                })
                if employee_serializer.is_valid():
                    employee_serializer.save()
                    return Response({'status': 'Employee created'}, status=status.HTTP_201_CREATED)
                return Response(employee_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            elif role == 'Manager':
                manager_serializer = ManagerProfileSerializer(data={
                    'businessType': data.get('businessType'),
                    'organizationName': data.get('organizationName'),
                    'organizationAddress': data.get('organizationAddress'),
                    'managerID': data.get('managerID'),
                    'department': data.get('department'),
                    'user': user.id  # Save the user foreign key
                })
                if manager_serializer.is_valid():
                    manager_serializer.save()
                    return Response({'status': 'Manager created'}, status=status.HTTP_201_CREATED)
                return Response(manager_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            return Response({'error': 'Invalid role'}, status=status.HTTP_400_BAD_REQUEST)

        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def list_employees(request):
    if request.method == 'GET':
        employees = EmployeeProfile.objects.all()
        serializer = EmployeeProfileSerializer(employees, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = EmployeeProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Save the employee profile
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def list_managers(request):
    email = request.query_params.get('email')
    if email:
        managers = ManagerProfile.objects.filter(user__email=email)
    else:
        managers = ManagerProfile.objects.all()
    
    manager_serializer = ManagerProfileSerializer(managers, many=True)
    return Response(manager_serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
def shift_list(request):
    if request.method == 'GET':
        shifts = Shift.objects.all()
        serializer = ShiftSerializer(shifts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serializer = ShiftSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def shift_detail(request, pk):
    try:
        shift = Shift.objects.get(pk=pk)
    except Shift.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ShiftSerializer(shift)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ShiftSerializer(shift, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        shift.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
