'use strict';
angular.module ('com.module.pages')
  .run (function ($rootScope, Page) {
  $rootScope.addMenu('Pages','app.pages.list','fa-file-o');

  Page.find (function (data) {
    $rootScope.addDashboardBox ('Pages', 'bg-blue', 'ion-document-text', data.length, 'app.pages.list');
  });

});
