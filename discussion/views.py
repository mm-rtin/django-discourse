from django.shortcuts import render_to_response, get_object_or_404
from django.http import HttpResponseRedirect
from django.template import RequestContext

# services

# models
from discussion.models import Categories, Topics, Posts
from django.contrib import auth

# user model
User = auth.get_user_model()


def index(request):

    # get topics
    context = {'topics': 'test'}

    return render_to_response('discussion_home.html', context, context_instance=RequestContext(request))

def getTopic(request):

    return 'test'
