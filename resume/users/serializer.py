from django.contrib.auth import get_user_model, authenticate
from django.utils.translation import ugettext_lazy as _
from rest_framework import serializers, authentication
from django.core.exceptions import ValidationError
from django.db.models import Q
from users.models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['ip_address']

    def create(self, validated_data):
        return get_user_model().objects.create_user(**validated_data)
