angular.module('hackuhWebApp').directive('activeLink', ['$location', function(location) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs, controller) {
      scope.location = location;
      var link = element.find('a');
      scope.$watch('location.path()', function(newPath) {
        if (link.attr('href') === newPath) {
          element.addClass('active');
        }
        else {
          element.removeClass('active');
        }
      });
    }
  };
}]);
