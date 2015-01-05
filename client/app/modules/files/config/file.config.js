'use strict';
angular.module ('com.module.files')
  .run (function ($rootScope, $http, ENV) {
  $rootScope.addMenu ('File', 'app.files.list', 'fa-file');

  $http.get (ENV.apiUrl + '/containers/files/files').success (function (data) {
    $rootScope.addDashboardBox ('Files', 'bg-blue', 'ion-document-text', data.length, 'app.files.list');
  });
});
