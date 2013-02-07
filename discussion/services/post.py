from django.contrib import auth

# import models
from discussion.models import Posts, Topics, Categories

# user model
User = auth.get_user_model()


class PostService:

    @staticmethod
    def createPost(topic, user, message, reply_to_post=None):

        # get topic instance
        try:
            topicObj = Topics.objects.get(id=topic)
        except Topics.DoesNotExist:
            return False

        # top level post
        if reply_to_post == None or reply_to_post == '':
            post_type = 'post'
            parentPost = None

        # reply post
        else:
            post_type = 'reply'

            # get parent post
            try:
                parentPost = Posts.objects.get(id=reply_to_post)
            except Posts.DoesNotExist:
                return False


        postObj = Posts.objects.create_post(topic=topicObj, post_type=post_type, raw=message, cooked=message, reply_to_post=parentPost, user=user)

        return postObj
