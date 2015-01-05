'use strict';
angular.module ('com.module.components')
  .run (function ($rootScope) {
  // Add Sidebar Left Menu
  $rootScope.addMenu ('Components', 'app.components.dashboard', 'fa-file-o');
  // Add Dashboard Box
  //$rootScope.addDashboardBox ('es', 'bg-green', 'ion-document-text', data.length, 'app.components.list');

});
