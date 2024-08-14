from django.db import models
from django.conf import settings

class EmployeeProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    employeeID = models.CharField(max_length=20)
    department = models.CharField(max_length=50)
    managerID = models.CharField(max_length=20)
    organizationName = models.CharField(max_length=100)
    employeeRole = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.user.firstName} {self.user.lastName} ({self.employeeID})"

class ManagerProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    businessType = models.CharField(max_length=50)
    organizationName = models.CharField(max_length=100)
    organizationAddress = models.CharField(max_length=255)
    managerID = models.CharField(max_length=20)
    department = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.user.firstName} {self.user.lastName} (Manager)"
