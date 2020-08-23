from rest_framework import generics
from users.serializer import UserSerializer

from rest_framework.permissions import AllowAny


class CreateUserView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer
