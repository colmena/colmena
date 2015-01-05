'use strict';
angular.module ('com.module.settings')
  .run(function ($rootScope) {
    $rootScope.addMenu('Settings','app.settings.list','fa-cog');
  });
