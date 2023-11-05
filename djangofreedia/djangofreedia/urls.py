"""
URL configuration for djangofreedia project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.login),
    path('register/', views.register),
    path('create-post/', views.create_post),
    path('create-comment/', views.create_comment),
    path('get-comments/', views.get_comments),
    path('create-topic/', views.create_topic),
    path('create-subtopic/', views.create_subtopic),
    path('get-posts/', views.get_posts),
    path('like-post/', views.like_post),
    path('dislike-post/', views.dislike_post),
    path('like-count/', views.like_count),
]
