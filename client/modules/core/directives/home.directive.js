'use strict';

/**
 * @ngdoc directive
 * @name com.module.core.directive:home
 * @description
 * # home
 */
angular.module('com.module.core')
  .directive('home', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the home directive ' + attrs);
      }
    };
  });
