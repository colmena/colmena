'use strict';

/**
 * @ngdoc directive
 * @name loopbackApp.directive:adminForm
 * @description
 * # adminForm
 */
angular.module('loopbackApp')
  .directive('adminForm', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the adminForm directive');
      }
    };
  });
