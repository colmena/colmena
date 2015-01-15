'use strict';
angular.module ('com.module.users')
  .config (function ($stateProvider) {
  $stateProvider
    .state ('login', {
    url: '/login',
    template: '<login></login>',
    controller: 'LoginCtrl'
  })
    .state ('register', {
    url: '/register',
    template: '<register></register>',
    controller: 'RegisterCtrl'
  })
    .state ('app.users', {
    abstract: true,
    url: '/users',
    templateUrl: 'modules/users/views/main.html',
    controller: 'UsersCtrl'
  })
    .state ('app.users.profile', {
    url: '/profile',
    templateUrl: 'modules/users/views/profile.html',
    controller: 'UsersCtrl'
  });
});
