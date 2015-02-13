'use strict';
angular.module('com.module.waves')
  .run(function ($rootScope, Wave, gettextCatalog) {
    $rootScope.addMenu(gettextCatalog.getString('Waves'), 'app.waves.list', 'fa-edit');

    Wave.find(function (waves) {
      $rootScope.addDashboardBox(gettextCatalog.getString('Waves'), 'bg-red', 'ion-document-text', waves.length, 'app.waves.list');
    });

  });
