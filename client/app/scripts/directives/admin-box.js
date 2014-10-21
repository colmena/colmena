'use strict';

/**
 * @ngdoc directive
 * @name loopbackApp.directive:adminBox
 * @description
 * # adminBox
 */
angular.module('loopbackApp')
  .directive('adminBox', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the adminBox directive');
      }
    };
  });
