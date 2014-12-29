'use strict';
angular.module ('com.module.core')
  .directive('smallBox', function () {
    return {
      restrict: 'E',
      templateUrl: 'modules/core/views/elements/small-box.html',
      scope: {
        title: '@',
        color: '@',
        icon: '@',
        quantity: '@',
        href: '@'
      }
    }
  })
