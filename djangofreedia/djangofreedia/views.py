from django.http import HttpResponse
import datetime
import json
from djangofreedia.models import *

def login(request):
    #check username in local_user and password matches
    #return user_id to frontend
    return HttpResponse(request)

def register(request):
    #check username does not exist in local_user
    #insert username, password into local_user
    return HttpResponse(request)

def create_comment(request):
    #Get content, user_id, parent_id, and post_id from request
    # comment = Comment(comment_id = reqComment_id, user_id = reqUser_id, parent_id = reqParent_id, post_id = reqPost_id)
    #comment.save()
    return HttpResponse("Connected to backend.")

def create_post(request):
    post = Post(title = request.content_params['title'], body = request.content_params['body'], subtopic_id = request.content_params['subtopic_id'], user_id = request.content_params['user_id'])
    post.save()
    return HttpResponse(request)

def get_comments(request):
    #get post_id from request
    #get comments with post_id
    print(request)
    return HttpResponse("Connected to backend.")

def create_topic(request):
    #get title from request
    # topic = Topic(title = reqTitle)
    #topic.save()
    return HttpResponse("Connected to backend.")

def create_subtopic(request):
    #get title, topic_id from request
    # subtopic = Subtopic(title = reqTitle, topic_id = reqTopic_id)
    #subtopic.save()
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