'use strict';
angular.module('com.module.users')
  .run(function ($rootScope, User, gettextCatalog) {
    $rootScope.addMenu('Users', 'app.users.list', 'fa-user');

    User.find(function (data) {
      $rootScope.addDashboardBox(gettextCatalog.getString('Users'), 'bg-maroon', 'ion-person-stalker', data.length, 'app.users.list');
    });

  });
