'use strict';

angular.module('hackuhWebApp')
  .controller('FAQCtrl', function ($scope) {
    $scope.questions = ['Question 1', 'Question 2', 'Question 3'];
    $scope.answers = ['Answer 1', 'Answer 2', 'Answer 3'];
  });
