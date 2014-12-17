'use strict';

/**
 * @ngdoc directive
 * @name loopbackApp.directive:adminHeader
 * @description
 * # adminHeader
 */
angular.module('loopbackApp')
  .directive('adminHeader', function () {
    return {
      templateUrl: 'views/elements/admin-header.html',
      transclude: true,
      scope: {
        title: '@',
        subTitle: '@'
      },
      restrict: 'A'
    };
  });
