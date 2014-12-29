'use strict';

/**
 * @ngdoc directive
 * @name loopbackApp.directive:login
 * @description
 * # login
 */
angular.module('com.module.core')
  .directive('login', function () {
    return {
      templateUrl: 'modules/core/views/elements/login.html',
      restrict: 'E'
    };
  });
