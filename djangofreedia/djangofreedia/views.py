from django.http import HttpResponse
import datetime
from djangofreedia.models import *

def login(request):
    return HttpResponse(request)

def register(request):
    return HttpResponse(request)

def create_comment(request):
    #Get content, user_id, parent_id, and post_id from request
    # comment = Comment(comment_id = reqComment_id, user_id = reqUser_id, parent_id = reqParent_id, post_id = reqPost_id)
    #comment.save()
    return HttpResponse("Connected to backend.")

def create_post(request):
    #Get title, body, topic_id, user_id from request
    # post = Post(title = reqTitle, body = reqBody, topic_id = reqTopic_id, user_id = reqUser_id)
    # post.save()
    return HttpResponse(request)

def get_comments(request):
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