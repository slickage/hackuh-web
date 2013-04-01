'use strict';

angular.module('hackuhWebApp')
  .directive('feet', function () {
    return {
      templateUrl: 'views/footer.html',
      restrict: 'A',
      replace: true,
      link: function postLink(scope, element, attrs) {
      }
    };
  });
