// localmotorsApp
var App = angular.module('localmotorsApp');

// Routes
App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        // discussion root
        when('/discussion', {templateUrl: '/apps/discussion/src/partials/category_list.html', controller: DiscussionController}).
        // view category
        when('/discussion/category/:categorySlug/:categoryID', {templateUrl: '/apps/discussion/src/partials/category.html', controller: CategoryController}).
        // view topic
        when('/discussion/topic/:topicSlug/:topicID', {templateUrl: '/apps/discussion/src/partials/topic.html', controller: TopicController});
}]);
