'use strict';
angular.module ('com.module.core')
  .config (['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state ('login', {
    url: '/login',
    template: '<login></login>',
    controller: 'LoginCtrl'
  }).state ('register', {
    url: '/register',
    template: '<register></register>',
    controller: 'RegisterCtrl'
  }).state ('router', {
    url: '/router',
    template: '<div class="lockscreen" style="height: 100%"></div>',
    controller: 'RouteCtrl'
  })
    .state ('app', {
    abstract: true,
    url: '/app',
    templateUrl: 'modules/core/views/app.html',
    controller: 'MainCtrl'
  })
    .state ('app.home', {
      url: '',
      templateUrl: 'modules/core/views/home.html',
      controller: 'HomeCtrl'
    });
  $urlRouterProvider.otherwise ('/router');
}]);
