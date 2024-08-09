from django.db import models
from apps.accounts.models import CustomUser

class Shift(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    role = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.user.username} - {self.role} - {self.start_time} to {self.end_time}"
    