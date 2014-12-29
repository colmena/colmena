'use strict';
angular.module ('com.module.core')
  .config (function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state ('app', {
    abstract: true,
    url: '/app',
    templateUrl: 'modules/core/views/app.html',
    controller: 'MainCtrl'
  })
    .state ('login', {
      url: '/login',
      template: '<login></login>',
      controller: 'LoginCtrl'
    }).state ('register', {
      url: '/register',
      template: '<register></register>',
      controller: 'LoginCtrl'
    }).state ('router', {
      url: '/router',
      template: '<div class="lockscreen" style="height: 100%"></div>',
      controller: 'RouteCtrl'
    });
  $urlRouterProvider.otherwise ('/router');
});
