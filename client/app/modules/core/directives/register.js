'use strict';

/**
 * @ngdoc directive
 * @name loopbackApp.directive:register
 * @description
 * # register
 */
angular.module('com.module.core')
  .directive('register', function () {
    return {
      templateUrl: 'modules/core/views/elements/register.html',
      restrict: 'E'
    };
  });
