/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Category Controller - View Category and its topics
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var CategoryController = function($scope, $http, $routeParams, discussion) {

    // scope data
    $scope.categoryData = {};
    $scope.topicList = {};

    initialize();


    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * getItems -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function initialize() {

        // get route parameters
        $scope.categoryData['categorySlug'] = $routeParams.categorySlug;
        $scope.categoryData['categoryID'] = $routeParams.categoryID;

        // load posts for category slug
        getTopics($scope.categoryData.categorySlug);

        console.info($routeParams);
    }

    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * getTopics -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function getTopics(categorySlug) {

        // get topics
        discussion.getTopics(categorySlug, function(topicList) {
            $scope.topicList = topicList;
        });
    }
};


App = angular.module('localmotorsApp');
App.controller('CategoryController', CategoryController);

CategoryController.$inject = ['$scope', '$http', '$routeParams', 'discussion'];
