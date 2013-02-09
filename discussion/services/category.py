from django.contrib import auth

# import models
from discussion.models import Categories

# user model
User = auth.get_user_model()


class CategoryService:

    @staticmethod
    # getOrCreateCategory
    def getOrCreateCategory(title):

        categoryObj, created = Categories.objects.get_or_create(title=title)

        return categoryObj, created


    @staticmethod
    # deleteCategory
    def deleteCategory(user, discussionName, itemID):

        return True
