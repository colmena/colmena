'use strict';

/**
 * @ngdoc directive
 * @name loopbackApp.directive:adminHeader
 * @description
 * # adminHeader
 */
angular.module('com.module.core')
  .directive('adminHeader', function () {
    return {
      templateUrl: 'modules/core/views/elements/admin-header.html',
      transclude: true,
      scope: {
        title: '@',
        subTitle: '@'
      },
      restrict: 'A'
    };
  });
