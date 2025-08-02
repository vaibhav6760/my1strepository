from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    # return HttpResponse("Hello,this is the index view index view of the vishnu app.")
    return render(request,'index.html')
    

def about(request):
    # return HttpResponse("This is the about page of the vishnu app.")
    return render(request,'about.html')

