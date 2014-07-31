'use strict';

/**
 * @ngdoc directive
 * @name loopbackApp.directive:home
 * @description
 * # home
 */
angular.module('loopbackApp')
  .directive('home', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the home directive ' + attrs);
      }
    };
  });
