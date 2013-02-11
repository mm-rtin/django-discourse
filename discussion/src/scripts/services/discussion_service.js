
// localmotorsApp
var App = angular.module('localmotorsApp');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Discussion Service -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.factory('discussion', ['$http', function($http) {

    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * private properties -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    // CONSTANTS

    // properties


    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * getCategories - return category list
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function getCategories(onSuccess) {

        var url = '/api/v1/category/';

        $http({
            method: 'GET',
            url: url

        }).success(function (data) {
            onSuccess(data);
        });
    }

    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * addCategory -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function addCategory(title) {

        var requestData = {
            'title': title
        };

        var url = '/api/v1/category/';

        $http({
            method: 'POST',
            url: url,
            data: requestData

        }).success(function (data) {

            console.info(data);

        });
    }

    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * getTopics - return topics for category slug
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function getTopics(categorySlug, onSuccess) {

        var url = '/api/v1/topic/?category_slug=' + categorySlug;

        $http({
            method: 'GET',
            url: url

        }).success(function (data) {

            parseTopics(data);

            onSuccess(data);
        });
    }

    function parseTopics(data) {

        // update topics with reply_to_post_username
        data.objects.each(function(post) {
            // console.info(post);
        });
    }

    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * addTopic -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function addTopic(title, category) {

        var requestData = {
            'title': title,
            'category': category
        };

        var url = '/api/v1/topic/';

        $http({
            method: 'POST',
            url: url,
            data: requestData

        }).success(function (data) {

            console.info(data);
        });
    }

    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * getPostByID -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function getPostByID(postID, onSuccess) {

        var url = '/api/v1/post/' + postID;

        $http({
            method: 'GET',
            url: url

        }).success(function (data) {
            onSuccess(data);
        });
    }

    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * getReplies -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function getReplies(postID, onSuccess) {

        var url = '/api/v1/post/?reply_to_post=' + postID;

        $http({
            method: 'GET',
            url: url

        }).success(function (data) {
            onSuccess(data);
        });
    }

    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * getPosts -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function getPosts(topicSlug, onSuccess) {

        var url = '/api/v1/post/?topic__slug=' + topicSlug;

        $http({
            method: 'GET',
            url: url

        }).success(function (data) {

            parsePosts(data);
            onSuccess(data);
        });
    }

    function parsePosts(data) {

        var postArray = data.objects;
        var posts = {};

        // add posts to object with post id as key
        postArray.each(function(post) {
            posts[post.id] = post;
        });

        return posts;
    }

    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * addPost -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function addPost(topic, message, reply_to_post) {

        var requestData = {
            'topic': topic,
            'message': message,
            'reply_to_post': reply_to_post
        };

        var url = '/api/v1/post/';

        $http({
            method: 'POST',
            url: url,
            data: requestData

        }).success(function (data) {

            console.info(data);
        });
    }

   /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * PUBLIC METHODS -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var publicMethods = {
        'getCategories': getCategories,
        'addCategory': addCategory,

        'getTopics': getTopics,
        'addTopic': addTopic,

        'getReplies': getReplies,
        'getPostByID': getPostByID,
        'getPosts': getPosts,
        'addPost': addPost
    };

    return publicMethods;

}]);
