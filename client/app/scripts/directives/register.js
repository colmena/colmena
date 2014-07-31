'use strict';

/**
 * @ngdoc directive
 * @name loopbackApp.directive:register
 * @description
 * # register
 */
angular.module('loopbackApp')
  .directive('register', function () {
    return {
      templateUrl: 'views/elements/register.html',
      restrict: 'E'
    };
  });
