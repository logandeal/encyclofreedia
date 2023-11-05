from django.http import HttpResponse
import datetime
from djangofreedia.models import *

def create_comment(request):
    print(request)
    return HttpResponse("Connected to backend.")

def create_post(request):
    return HttpResponse(request)

def get_comments(request):
    print(request)
    return HttpResponse("Connected to backend.")

def create_topic(request):
    print(request)
    return HttpResponse("Connected to backend.")

def create_subtopic(request):
    print(request)
    return HttpResponse("Connected to backend.")

def get_posts(request):
    print(request)
    return HttpResponse("Connected to backend.")

def like_post(request):
    print(request)
    return HttpResponse("Connected to backend.")

def dislike_post(request):
    print(request)
    return HttpResponse("Connected to backend.")

def like_count(request):
    print(request)
    return HttpResponse("Connected to backend.")