from django.urls import path
from users.views import CreateUserView, ViewUser


app_name = 'users'

urlpatterns = [
    path('create/', CreateUserView.as_view(), name='create'),
    path('visited/', ViewUser.as_view(), name='create'),
]
