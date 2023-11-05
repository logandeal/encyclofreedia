from django.http import HttpResponse
import datetime
import json
from djangofreedia.models import *

def login(request):
    #get username and password from request
    #check username in local_user and password matches
    #return user_id to frontend to store for future commands
    return HttpResponse(request)

def register(request):
    #get username, password from request
    #check username does not exist in local_user
    #insert username, password into local_user
    return HttpResponse(request)

def create_comment(request):
    #get user_id, post_id, parent_id, content from frontend
    #insert into comment
    return HttpResponse("Connected to backend.")

def create_post(request):
    #get subtopic_id, user_id, title, body from frontend
    #insert into post
    post = Post(title = request.content_params['title'], body = request.content_params['body'], subtopic_id = request.content_params['subtopic_id'], user_id = request.content_params['user_id'])
    post.save()
    return HttpResponse(request)

def get_comments(request):
    #get post_id from request
    #get comments with post_id
    #return to frontend
    print(request)
    return HttpResponse("Connected to backend.")

def create_topic(request):
    #get title from request
    #insert into topic
    return HttpResponse("Connected to backend.")

def create_subtopic(request):
    #get title, topic_id from request
    #insert into subtopic
    return HttpResponse("Connected to backend.")

def get_posts(request):
    #get subtopic_id from request
    #return posts where subtopic_id 
    print(request)
    return HttpResponse("Connected to backend.")

def like_post(request):
    #get user_id, post_id
    #add to reaction with user_id, post_id, true
    print(request)
    return HttpResponse("Connected to backend.")

def dislike_post(request):
    #get user_id, post_id
    #add to reaction with user_id, post_id, false
    print(request)
    return HttpResponse("Connected to backend.")

def like_count(request):
    #get post_id
    #subtract total likes from total dislikes
    print(request)
    return HttpResponse("Connected to backend.")