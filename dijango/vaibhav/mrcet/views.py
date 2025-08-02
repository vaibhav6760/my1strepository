from django.shortcuts import render,redirect
# from django.http import HttpResponse
from .models import Csd
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import AuthenticationForm

# Create your views here.
def contact(request):
     c = Csd.objects.all()
     return render(request, 'contact.html', {'csd_list': c})

def details(request, slug):
   
        csd = Csd.objects.get(slug=slug)
        return render(request, 'details.html', {'csd': csd})


def register(request):
     if request.method == 'POST':
          
          form = UserCreationForm(request.POST)
          if form.is_valid():
               form.save()
               
               return redirect("contact")
          
     else:
          form = UserCreationForm()
     return render(request, 'register.html', {'form' : form})


def login(request):
     if request.method == 'POST':
          form = AuthenticationForm(data=request.POST)
          if form.is_valid():
               user = form.get_user()
               auth_login(request, user)
               return redirect("contact")
     else:
          form = AuthenticationForm()
     return render(request, 'login.html', {'form': form})


def logout(request):
     if request.method == 'POST':
          logout(request)
          return redirect("contact")
     return render(request, 'logout.html')