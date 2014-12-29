'use strict';

/**
 * @ngdoc directive
 * @name loopbackApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('com.module.core')
  .directive('navbar', function () {
    return {
      templateUrl: 'modules/core/views/elements/navbar.html',
      restrict: 'E'
    };
  });
