// localmotorsApp
var App = angular.module('localmotorsApp');

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Topic List Directive -
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
App.directive('topicList', ['discussion', function(discussion) {

    return {
      restrict: 'A',
      scope: {
        categorySlug: '@categorySlug',
        topicList: '=topicList'
      },
      templateUrl: '/apps/discussion/src/partials/topic_list.html',

      // The linking function will add behavior to the template
      link: function($scope, element, attrs) {

        // get topics and assign to topic list
        // discussion.getTopics(attrs.categorySlug, function(topicList) {
        //     console.info(topicList);
        //     $scope.topicList = topicList;
        // });

        $scope.$watch('topicList', function(topicList, oldValue) {

            console.info('new topic list', topicList);

        }, true);
      }
    };
}]);
