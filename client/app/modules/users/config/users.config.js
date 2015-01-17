'use strict';
angular.module('com.module.users')
  .run(function ($rootScope, gettextCatalog) {
    $rootScope.addMenu(gettextCatalog.getString('Users'), 'app.users.list', 'fa-user');

  });
