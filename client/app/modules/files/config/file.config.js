'use strict';
angular.module('com.module.files')
  .run(function ($rootScope, $http, ENV, gettextCatalog) {
    $rootScope.addMenu('Files', 'app.files.list', 'fa-file');

    $http.get(ENV.apiUrl + '/containers/files/files').success(function (data) {
      $rootScope.addDashboardBox(gettextCatalog.getString('Files'), 'bg-blue', 'ion-paperclip', data.length, 'app.files.list');
    });

  });
