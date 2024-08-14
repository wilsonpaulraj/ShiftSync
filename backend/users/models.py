from django.db import models
from django.contrib.auth.models import AbstractBaseUser

class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    phone = models.CharField(max_length=15)
    countryCode = models.CharField(max_length=5, null=True, blank=True)
    password = models.CharField(max_length=128)
    role = models.CharField(max_length=10, choices=(('Employee', 'Employee'), ('Manager', 'Manager')), default='Employee')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['firstName', 'lastName', 'phone', 'countryCode']

class EmployeeProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    employeeID = models.CharField(max_length=20)
    department = models.CharField(max_length=50)
    managerID = models.CharField(max_length=20)
    organizationName = models.CharField(max_length=100)
    employeeRole = models.CharField(max_length=50)
    firstName = models.CharField(default="Wilson", max_length=20)

class ManagerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    businessType = models.CharField(max_length=50)
    organizationName = models.CharField(max_length=100)
    organizationAddress = models.CharField(max_length=255)
    managerID = models.CharField(max_length=20)
    department = models.CharField(max_length=50)
    firstName = models.CharField(default="Wilson", max_length=20)



class Shift(models.Model):
    SHIFT_CHOICES = [
        ('Morning', 'Morning'),
        ('Afternoon', 'Afternoon'),
        ('Night', 'Night'),
    ]

    shiftTitle = models.CharField(max_length=50)
    location = models.CharField(max_length=30)  # Replaced shiftType with location
    startTime = models.TimeField()
    endTime = models.TimeField()
    date = models.DateField()
    numberOfStaffRequired = models.PositiveIntegerField()  # Field for the number of staff required

    def __str__(self):
        return f"{self.shiftTitle} - {self.location} ({self.date})"