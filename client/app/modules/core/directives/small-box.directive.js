(function(window, angular, undefined) {
  'use strict';
  /**
   * @ngdoc directive
   * @name com.module.core.directive:smallbBox
   * @restrict E
   * @description Dashboard Box
   * @param {string} name Box Title
   * @param {string} color Admin-Lte bg-color
   * @param {string} icon Ionic-icon class
   * @param {string} quantity Title
   * @param {string} href ui-shref link
   */
  angular
    .module('com.module.core')
    .directive('smallBox', function() {
      return {
        restrict: 'E',
        templateUrl: 'modules/core/views/elements/small-box.html',
        scope: {
          name: '@',
          color: '@',
          icon: '@',
          quantity: '@',
          href: '@'
        }
      };
    });

})(window, window.angular);
