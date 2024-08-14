from django.urls import path
from .views import users, list_employees, list_managers, shift_list, shift_detail

urlpatterns = [
    path('users/', users, name='users'),
    path('employees/', list_employees, name='list_employees'),
    path('managers/', list_managers, name='list_managers'),
    path('shifts/', shift_list, name='shift_list'),
    path('shifts/<int:pk>/', shift_detail, name='shift_detail'),
]
