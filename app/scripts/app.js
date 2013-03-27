'use strict';

var App = angular.module('hackuhWebApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/calendar', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sponsors', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

App.config(['$locationProvider', function($location) {
  $location.html5Mode(true); //now there won't be a hashbang within URLs for browers that support HTML5 history
}]);
