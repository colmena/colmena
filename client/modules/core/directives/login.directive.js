'use strict';

/**
 * @ngdoc directive
 * @name com.module.core.directive:login
 * @description
 * # login
 */
angular.module('com.module.core')
  .directive('login', [function () {
    return {
      templateUrl: 'modules/core/views/elements/login.html',
      restrict: 'E'
    };
  }]);
