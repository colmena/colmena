'use strict';
angular.module ('com.module.components')
  .config (function ($stateProvider) {
  $stateProvider.state ('app.components', {
    abstract: true,
    url: '/components',
    templateUrl: 'modules/components/views/main.html',
    controller: 'ComponentCtrl'
  })
    .state ('app.components.dashboard', {
    url: '',
    templateUrl: 'modules/components/views/dashboard.html',
    controller: 'ComponentCtrl'
  })
    .state ('app.components.autofields', {
    url: '/autofields',
    templateUrl: 'modules/components/views/autofields.html',
    controller: 'AutoFieldsCtrl'
  })
  ;
});
