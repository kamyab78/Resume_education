from rest_framework import generics
from users.serializer import UserSerializer


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
