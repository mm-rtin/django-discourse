// localmotorsApp
var App = angular.module('localmotorsApp');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Parent Post Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('parentPost', ['discussion', function(discussion) {

    return {
        restrict: 'A',
        scope: {
            parentPost: '=parentPost',
            username: '=username'
        },
        templateUrl: '/apps/discussion/src/partials/parent_post.html',

        // The linking function will add behavior to the template
        link: function($scope, element, attrs) {

            var $replyToTabButton = element.find('.reply-to-tab');

            $replyToTabButton.on('click', function(e) {

                // load parent post
                discussion.getPostByID($scope.parentPost, function(data) {
                    $scope.message = data.cooked;
                });
            });
        }
    };
}]);
