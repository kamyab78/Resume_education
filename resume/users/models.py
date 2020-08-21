from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager,\
    PermissionsMixin
from django.dispatch import receiver
from django.conf import settings
from django.db.models.signals import post_save


class UserManager(BaseUserManager):
    def create_user(self, ip_address, **extra_fields):

        if not ip_address:
            raise ValueError('Users must have a ip_address')
        user = self.model(username=ip_address, **extra_fields)

        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password):

        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
            username=username,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractUser, PermissionsMixin):
    ip_address = models.CharField(max_length=20, primary_key=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    objects = UserManager()
    USERNAME_FIELD = 'ip_address'