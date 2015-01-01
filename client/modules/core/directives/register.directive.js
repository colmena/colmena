'use strict';

/**
 * @ngdoc directive
 * @name com.module.core.directive:register
 * @description
 * # register
 */
angular.module ('com.module.core')
  .directive ('register', [
    function () {
      return {
        templateUrl: 'modules/core/views/elements/register.html',
        restrict: 'E'
      };
    }
  ]);
