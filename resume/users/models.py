from django.db import models
from django.contrib.auth.models import AbstractUser


class Detail(models.Model):
    ip_address = models.CharField(max_length=20, primary_key=True)
