from django.contrib import admin
from django.urls import path
from mrcet.views import  contact, details
from.views import register
from.views import login
from.views import logout
from.import views

urlpatterns = [
    path('admin/', admin.site.urls), 
    path('', contact, name="contact"),  
    path('details/<slug:slug>/', details, name="details"),
    path('register/', views.register, name='register'),  
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
]