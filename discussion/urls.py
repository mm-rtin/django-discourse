from django.conf.urls import patterns, include, url


urlpatterns = patterns('discussion.views',

    # home
    url(r'^$', 'getTopic'),
)
