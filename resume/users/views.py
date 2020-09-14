from rest_framework import generics
from users.serializer import UserSerializer, ViewUserSerilazer

from rest_framework.permissions import AllowAny


class CreateUserView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer


class ViewUser(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = ViewUserSerilazer
