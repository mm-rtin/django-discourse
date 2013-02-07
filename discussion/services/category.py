from django.contrib import auth

# import models
from discussion.models import Categories

# user model
User = auth.get_user_model()


class CategoryService:

    @staticmethod
    def getOrCreateCategory(title):

        categoryObj, created = Categories.objects.get_or_create(title=title)

        return categoryObj, created


    @staticmethod
    def deleteCategory(user, discussionName, itemID):

        return True
