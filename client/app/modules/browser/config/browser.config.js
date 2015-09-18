(function(window, angular, undefined) {
  'use strict';
  angular
    .module('com.module.browser')
    .run(function($rootScope, Event, gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('Browser'), 'app.browser.models', 'fa-globe');
    });

})(window, window.angular);
