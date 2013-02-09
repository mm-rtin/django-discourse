/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Discussion Controller - view category list
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var DiscussionController = function($scope, $http, $routeParams, discussion) {

    // scope data
    $scope.categoryList = {};

    initialize();

    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * getItems -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function initialize() {

        // load category list
        getCategories();
    }

    /**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    * getCategories -
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function getCategories() {

        // get categories
        discussion.getCategories(function(categoryList) {
            $scope.categoryList = categoryList;
        });
    }
};


var App = angular.module('localmotorsApp');
App.controller('DiscussionController', DiscussionController);

DiscussionController.$inject = ['$scope', '$http', '$routeParams', 'discussion'];
