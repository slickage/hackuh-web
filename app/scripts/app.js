'use strict';

var App = angular.module('hackuhWebApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        reloadOnSearch : false,
        controller: 'MainCtrl'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'JoinCtrl'
      })
      .when('/join', {
        templateUrl: 'views/join.html',
        controller: 'JoinCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

App.config(['$locationProvider', function($location) {
  $location.html5Mode(true); //now there won't be a hashbang within URLs for browers that support HTML5 history
}]);
