'use strict';

/**
 * @ngdoc directive
 * @name loopbackApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('loopbackApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'views/elements/navbar.html',
      restrict: 'E'
    };
  });
