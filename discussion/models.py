from django.db import models
from django.contrib import auth
User = auth.get_user_model()

POST_TYPE_CHOICES = (
    ('post', 'post'),
    ('reply', 'reply'),
)


# category manager
class CategoryManager(models.Manager):

    # create category
    def create_category(self, title, slug=''):

        if slug == '':
            slug = title.lower().replace(' ', '-')

        category = self.create(title=title, slug=slug)

        return category

    # get or create
    def get_or_create(self, title):
        try:
            category = Categories.objects.get(title=title)
        except Categories.DoesNotExist:
            return (self.create_category(title), True)

        return (category, False)


# categories model
class Categories(models.Model):

    title = models.CharField(max_length=120)
    slug = models.SlugField()

    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)

    topic_count = models.PositiveIntegerField(default=0)
    topics_year = models.PositiveIntegerField(default=0)
    topics_month = models.PositiveIntegerField(default=0)
    topics_week = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = "Categories"

    objects = CategoryManager()

    def __unicode__(self):
        return self.title


# topic manager
class TopicManager(models.Manager):

    # create category
    def create_topic(self, title, category, user, slug=''):

        if slug == '':
            slug = title.lower().replace(' ', '-')

        topic = self.create(title=title, slug=slug, category=category, user=user)

        return topic


# topics model
class Topics(models.Model):

    category = models.ForeignKey(Categories)
    user = models.ForeignKey(User, related_name='topic_user')
    last_post_user = models.ForeignKey(User, related_name='topic_last_post_user', blank=True, null=True)
    highest_post = models.ForeignKey('Posts', blank=True, null=True)

    title = models.CharField(max_length=255)
    slug = models.SlugField()

    last_posted_at = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    bumped_at = models.DateTimeField(blank=True, null=True)

    views = models.PositiveIntegerField(default=0)
    posts_count = models.PositiveIntegerField(default=0)
    reply_count = models.PositiveIntegerField(default=0)
    like_count = models.PositiveIntegerField(default=0)
    bookmark_count = models.PositiveIntegerField(default=0)
    star_count = models.PositiveIntegerField(default=0)
    moderator_posts_count = models.PositiveIntegerField(default=0)
    vote_count = models.PositiveIntegerField(default=0)
    spam_count = models.PositiveIntegerField(default=0)
    illegal_count = models.PositiveIntegerField(default=0)
    inappropriate_count = models.PositiveIntegerField(default=0)

    visible = models.BooleanField(default=True)
    closed = models.BooleanField(default=False)
    pinned = models.BooleanField(default=False)
    archived = models.BooleanField(default=False)
    has_best_of = models.BooleanField(default=False)

    objects = TopicManager()

    class Meta:
        verbose_name_plural = "Topics"

    def __unicode__(self):
        return self.title





# post manager
class PostManager(models.Manager):

    # create category
    def create_post(self, topic, post_type, raw, cooked, reply_to_post, user):

        post = self.create(topic=topic, post_type=post_type, raw=raw, cooked=cooked, reply_to_post=reply_to_post, user=user)

        return post


class Posts(models.Model):
    topic = models.ForeignKey(Topics)
    user = models.ForeignKey(User, related_name='post_user')
    reply_to_post = models.ForeignKey('self', related_name='post_reply_to', blank=True, null=True)
    reply_below_post = models.ForeignKey('self', related_name='post_reply_below', blank=True, null=True)
    last_editor = models.ForeignKey(User, related_name='post_last_editor', blank=True, null=True)

    post_type = models.CharField(max_length=60, choices=POST_TYPE_CHOICES)
    raw = models.TextField(blank=False, null=False)
    cooked = models.TextField(blank=False, null=False)

    created_at = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True)
    delete_at = models.DateTimeField(blank=True, null=True)

    reply_count = models.PositiveIntegerField(default=0)
    quote_count = models.PositiveIntegerField(default=0)
    like_count = models.PositiveIntegerField(default=0)
    bookmark_count = models.PositiveIntegerField(default=0)
    spam_count = models.PositiveIntegerField(default=0)
    reads = models.PositiveIntegerField(default=0)
    inappropriate_count = models.PositiveIntegerField(default=0)

    score = models.IntegerField(default=0)
    vote_count = models.IntegerField(default=0)

    objects = PostManager()

    class Meta:
        verbose_name_plural = "Posts"

    def __unicode__(self):
        return '%s - %s' % (self.raw, self.topic.title)
