from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("<int:college_id>/", views.college_detail, name="college_detail"),
]