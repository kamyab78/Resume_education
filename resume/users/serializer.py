from rest_framework import serializers
from users.models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Detail
        fields = '__all__'


class ViewUserSerilazer(serializers.ModelSerializer):
    class Meta:
        model = DetailView
        fields = '__all__'
