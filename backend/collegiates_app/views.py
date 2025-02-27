from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

from .models import College


def index(request):
    return HttpResponse("Hello, world!")

def college_detail(request, college_id):
    return HttpResponse("You're looking at college %s." % college_id)

def index(request):
    college_list = College.objects
    output = ", ".join([q.question_text for q in college_list])
    return HttpResponse(output)