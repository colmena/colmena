'use strict';
angular.module('com.module.notes')
  .run(function ($rootScope, Note, gettextCatalog) {
    $rootScope.addMenu('Notes', 'app.notes.list', 'fa-file-o');

    Note.find(function (data) {
      $rootScope.addDashboardBox(gettextCatalog.getString('Notes'), 'bg-green', 'ion-calendar', data.length, 'app.notes.list');
    });

  });
