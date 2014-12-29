'use strict';

/**
 * @ngdoc directive
 * @name loopbackApp.directive:adminForm
 * @description
 * # adminForm
 */
angular.module('com.module.core')
  .directive('adminForm', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the adminForm directive');
      }
    };
  });
