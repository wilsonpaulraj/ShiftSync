# Generated by Django 5.1 on 2024-08-14 02:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "last_login",
                    models.DateTimeField(
                        blank=True, null=True, verbose_name="last login"
                    ),
                ),
                ("email", models.EmailField(max_length=254, unique=True)),
                ("firstName", models.CharField(max_length=30)),
                ("lastName", models.CharField(max_length=30)),
                ("phone", models.CharField(max_length=15)),
                ("countryCode", models.CharField(blank=True, max_length=5, null=True)),
                ("password", models.CharField(max_length=128)),
                (
                    "role",
                    models.CharField(
                        choices=[("Employee", "Employee"), ("Manager", "Manager")],
                        default="Employee",
                        max_length=10,
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="ManagerProfile",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("businessType", models.CharField(max_length=50)),
                ("organizationName", models.CharField(max_length=100)),
                ("organizationAddress", models.CharField(max_length=255)),
                ("managerID", models.CharField(max_length=20)),
                ("department", models.CharField(max_length=50)),
                (
                    "user",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE, to="users.user"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="EmployeeProfile",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("employeeID", models.CharField(max_length=20)),
                ("department", models.CharField(max_length=50)),
                ("managerID", models.CharField(max_length=20)),
                ("organizationName", models.CharField(max_length=100)),
                ("employeeRole", models.CharField(max_length=50)),
                (
                    "user",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE, to="users.user"
                    ),
                ),
            ],
        ),
    ]
