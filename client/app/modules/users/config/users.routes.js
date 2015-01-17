'use strict';
angular.module('com.module.users')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<login></login>',
        controller: 'LoginCtrl'
      })
      .state('register', {
        url: '/register',
        template: '<register></register>',
        controller: 'RegisterCtrl'
      })
      .state('app.users', {
        abstract: true,
        url: '/users',
        templateUrl: 'modules/users/views/main.html'
      })
      .state('app.users.profile', {
        url: '/profile',
        templateUrl: 'modules/users/views/profile.html',
        controller: 'ProfileCtrl'
      })
      .state('app.users.list', {
        url: '',
        templateUrl: 'modules/users/views/list.html',
        controller: 'UsersCtrl',
        authenticate: true
      })
      .state('app.users.add', {
        url: '/add',
        templateUrl: 'modules/users/views/form.html',
        controller: 'UsersCtrl',
        authenticate: true
      })
      .state('app.users.edit', {
        url: '/edit/:id',
        templateUrl: 'modules/users/views/form.html',
        controller: 'UsersCtrl',
        authenticate: true
      })
      .state('app.users.view', {
        url: '/view/:id',
        templateUrl: 'modules/users/views/view.html',
        controller: 'UsersCtrl',
        authenticate: false
      })
      .state('app.users.delete', {
        url: '/delete/:id',
        controller: 'UsersCtrl',
        authenticate: true
      });
  });
