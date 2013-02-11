// localmotorsApp
var App = angular.module('localmotorsApp');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Reply Post Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('replyPost', ['discussion', function(discussion) {

    return {
        restrict: 'A',
        scope: {
            replyPost: '=replyPost'
        },
        templateUrl: '/apps/discussion/src/partials/reply_post.html',

        // The linking function will add behavior to the template
        link: function($scope, element, attrs) {

            $('body').on('click', '#repliesTab_' + $scope.replyPost, function(e) {

                // load reply post
                discussion.getReplies($scope.replyPost, function(data) {

                    console.info(data.objects);
                    $scope.replies = data.objects;
                });
            });
        }
    };
}]);
