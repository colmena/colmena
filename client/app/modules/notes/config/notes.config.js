'use strict';
var app = angular.module('com.module.notes');

app.run(function ($rootScope, Note, gettextCatalog) {
  $rootScope.addMenu('Notes', 'app.notes.list', 'fa-file-o');

  Note.find(function (data) {
    $rootScope.addDashboardBox(gettextCatalog.getString('Notes'), 'bg-green', 'ion-clipboard', data.length, 'app.notes.list');
  });

});
