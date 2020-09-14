from django.db import models
from django.contrib.auth.models import AbstractUser


class Detail(models.Model):
    ip_address = models.CharField(max_length=20, primary_key=True)
    time_visit = models.CharField(max_length=10, default='0')


class DetailView(models.Model):
    ip_address = models.CharField(max_length=20, primary_key=True)
    visit = models.CharField(max_length=5)
    time_visit = models.CharField(max_length=10, default='0')
