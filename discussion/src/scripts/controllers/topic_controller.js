/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Topic Controller - view topic and its posts
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var TopicController = function($scope, $http, $routeParams, discussion) {

    // scope data
    $scope.topicInfo = {};
    $scope.posts = {};

    initialize();

    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * getItems -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function initialize() {

        // get route parameters
        $scope.topicInfo['topicSlug'] = $routeParams.topicSlug;
        $scope.topicInfo['topicID'] = $routeParams.topicID;

        // load posts for topic slug
        getPosts($scope.topicInfo.topicSlug);
    }

    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * getPosts -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function getPosts(topicSlug) {

        // get posts
        discussion.getPosts(topicSlug, function(posts) {
            $scope.posts = posts;
        });
    }
};

var App = angular.module('localmotorsApp');
App.controller('TopicController', TopicController);

TopicController.$inject = ['$scope', '$http', '$routeParams', 'discussion'];
