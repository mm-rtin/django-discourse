from django.contrib import admin
from discussion.models import Categories, Topics, Posts

# register discussion models
admin.site.register(Categories)
admin.site.register(Topics)
admin.site.register(Posts)
