'use strict';
angular.module('com.module.pages')
  .run(function ($rootScope, Page, gettextCatalog) {
    $rootScope.addMenu(gettextCatalog.getString('Pages'), 'app.pages.list', 'fa-file-o');

    Page.find(function (data) {
      $rootScope.addDashboardBox(gettextCatalog.getString('Pages'), 'bg-teal', 'ion-document-text', data.length, 'app.pages.list');
    });

  });
