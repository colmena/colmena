'use strict';

/**
 * @ngdoc directive
 * @name loopbackApp.directive:login
 * @description
 * # login
 */
angular.module('loopbackApp')
  .directive('login', function () {
    return {
      templateUrl: 'views/elements/login.html',
      restrict: 'E'
    };
  });
