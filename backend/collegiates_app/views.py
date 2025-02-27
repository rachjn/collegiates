from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.core import serializers


from .models import BlogPost, College, Nandu, RegisteredEvents, Team, UserAccount

def index(request):
    return HttpResponse("Hello, world!")

def college_detail(request, college_id):
    return HttpResponse("You're looking at college %s." % college_id)


def college_data(request):
    data = list(College.objects.values())
    return JsonResponse(data, safe=False)

def blog_data(request):
    data = list(BlogPost.objects.values())
    return JsonResponse(data, safe=False)

def nandu_data(request):
    data = list(Nandu.objects.values())
    return JsonResponse(data, safe=False)

def reg_events_data(request):
    data = list(RegisteredEvents.objects.values())
    return JsonResponse(data, safe=False)

def team_data(request):
    data = list(Team.objects.values())
    return JsonResponse(data, safe=False)

def user_data(request):
    data = list(UserAccount.objects.values())
    return JsonResponse(data, safe=False)
