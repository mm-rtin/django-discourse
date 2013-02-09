from django.conf.urls import patterns, include, url


urlpatterns = patterns('discussion.views',

    # home
    url(r'^$', 'index'),

    # topic
    url(r'/topic^$', 'getTopic'),
)
