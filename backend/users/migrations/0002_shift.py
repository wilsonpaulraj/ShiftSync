# Generated by Django 5.1 on 2024-08-14 04:20

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Shift",
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
                ("shiftTitle", models.CharField(max_length=50)),
                (
                    "shiftType",
                    models.CharField(
                        choices=[
                            ("Morning", "Morning"),
                            ("Afternoon", "Afternoon"),
                            ("Night", "Night"),
                        ],
                        max_length=10,
                    ),
                ),
                ("startTime", models.TimeField()),
                ("endTime", models.TimeField()),
                ("date", models.DateField()),
                ("numberOfStaffRequired", models.PositiveIntegerField()),
            ],
        ),
    ]
