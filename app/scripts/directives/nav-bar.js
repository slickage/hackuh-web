'use strict';
angular.module('hackuhWebApp').directive('navBar', ['$rootScope', '$location', function ($rootScope, $location) {
  return {
    restrict : 'A',
    templateUrl : 'views/navbar.html',
    replace: true,
    link: function (scope, element, attrs, controller) {
      // smooth scroll
      function smoothScroll() {
        if ($location.path() === '/') {
          var position = 0;
          if ($location.hash() !== '') {
            var anchor = $('a[name=\'' + $location.hash() + '\']');
            position = anchor.offset().top;
          }
          else {
            position = 0;
          }
          // assuming relative position to ofset the nav
          $('html, body').animate(
          {
            scrollTop : position
          }, 500);
        }
      }
      // on location change, smooth scroll
      $rootScope.$on('$routeChangeSuccess', function () {
        smoothScroll();
        // our custom scroll spy
      });
      $rootScope.$on('$routeUpdate', function () {
        smoothScroll();
      });

      // manually do the collapse for the navbar
      var collapseBtn = $(element).find('#collapse-btn');
      var collapsible = $(element).find('.nav-collapse');
      collapseBtn.on('click', function () {
        collapsible.collapse('toggle');
      });
    }
  };
}]);
