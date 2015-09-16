(function(window, angular, undefined) {
  'use strict';
  angular
    .module('com.module.sandbox')
    .run(function($rootScope) {
      $rootScope.addMenu('Sandbox', 'app.sandbox.index', 'fa-inbox');
    });

})(window, window.angular);
