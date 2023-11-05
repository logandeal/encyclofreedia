from datetime import datetime

from django.db import models


class Comment(models.Model):
    comment_id = models.BigIntegerField()
    parent_id = models.BigIntegerField()
    user_id = models.BigIntegerField()
    post_id = models.BigIntegerField()
    content = models.CharField(max_length = 5000)
    comment_time = models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
        return self.comment_id
    
    class Meta:
         db_table = 'comment'
         managed = False
    

class Post(models.Model):
    post_id = models.BigIntegerField()
    subtopic_id = models.BigIntegerField()
    original_post_id = models.BigIntegerField()
    instance_id = models.BigIntegerField()
    user_id = models.BigIntegerField()
    title = models.CharField(max_length = 500)
    body = models.CharField(max_length = 5000)
    link = models.CharField(max_length = 500)
    post_time = models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
        return self.post_id
    
    class Meta:
         db_table = 'post'
         managed = False
    

class User(models.Model):
    username = models.CharField(max_length = 45)
    password = models.CharField(max_length = 45)
    local_user_id = models.BigIntegerField()
    user_id = models.BigIntegerField()

    def __str__(self):
        return self.user_id
    
    class Meta:
         db_table = 'user'
         managed = False
    

class LocalUser(models.Model):
    username = models.CharField(max_length = 45)
    password = models.CharField(max_length = 45)
    user_id = models.BigIntegerField()

    def __str__(self):
        return self.user_id
    
    class Meta:
         db_table = 'local_user'
         managed = False
    

class InstanceTopic(models.Model):
    instance_id = models.BigIntegerField()
    source_topic_id = models.BigIntegerField()
    subtopic_id = models.BigIntegerField()

    def __str__(self):
        return self.source_topic_id
    
    class Meta:
         db_table = 'instance_topic'
         managed = False
    

class Instance(models.Model):
    instance_id = models.BigIntegerField()
    default_topic_id = models.BigIntegerField()
    instance_name = models.CharField(max_length = 500)
    last_update = models.DateTimeField()

    def __str__(self):
        return self.instance_id
    
    class Meta:
         db_table = 'instance'
         managed = False
    

class Topic(models.Model):
    title = models.CharField(max_length = 45)
    topic_id = models.BigIntegerField()

    def __str__(self):
        return self.topic_id
    
    class Meta:
         db_table = 'topic'
         managed = False
    

class Subtopic(models.Model):
    subtopic_id = models.BigIntegerField()
    topic_id = models.BigIntegerField()
    title = models.CharField(max_length = 500)

    def __str__(self):
        return self.subtopic_id
    
    class Meta:
         db_table = 'subtopic'
         managed = False
    

class Reaction(models.Model):
    user_id = models.BigIntegerField()
    post_id = models.BigIntegerField()
    like = models.BooleanField()

    def __str__(self):
        return self.user_id
    
    class Meta:
         db_table = 'reaction'
         managed = False