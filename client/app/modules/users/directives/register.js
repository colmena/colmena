(function(window, angular, undefined) {
  'use strict';
  /**
   * @ngdoc directive
   * @name com.module.core.directive:register
   * @description
   * # register
   */
  angular
    .module('com.module.users')
    .directive('register', function() {
      return {
        templateUrl: 'modules/users/views/register.html',
        restrict: 'E'
      };
    });

})(window, window.angular);
