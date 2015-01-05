'use strict';
angular.module ('com.module.projects')
  .config (function ($stateProvider) {
    $stateProvider
      .state ('app.projects', {
      abstract: true,
      url: '/projects',
      templateUrl: 'modules/projects/views/main.html'
    })
      .state ('app.projects.list', {
      url: '',
      templateUrl: 'modules/projects/views/list.html',
      controller: 'ProductsCtrl'
    })
    ;

  });
