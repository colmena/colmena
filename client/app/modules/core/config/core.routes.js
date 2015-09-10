(function () {
  'use strict';
  angular
    .module('com.module.core')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('router', {
          url: '/router',
          template: '<div class="lockscreen" style="height: 100%"></div>',
          controller: 'RouteCtrl'
        })
        .state('error', {
          url: '/error',
          template: '<div class="text-center alert alert-danger" style="margin: 100px">An error occurred.</div>'
        })
        .state('app', {
          abstract: true,
          url: '/app',
          templateUrl: 'modules/core/views/app.html',
          controller: 'MainCtrl'
        })
        .state('app.home', {
          url: '',
          templateUrl: 'modules/core/views/home.html',
          controller: 'HomeCtrl'
        });
      $urlRouterProvider.otherwise('/router');
    });

})();
