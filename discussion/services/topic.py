from django.contrib import auth

# import models
from discussion.models import Topics, Categories

# user model
User = auth.get_user_model()


class TopicService:

    @staticmethod
    def createTopic(title, category, user):

        # get category instance
        try:
            categoryObj = Categories.objects.get(id=category)
        except Categories.DoesNotExist:
            return False

        topicObj = Topics.objects.create_topic(title=title, category=categoryObj, user=user)

        return topicObj
