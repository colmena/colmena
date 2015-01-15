'use strict';
angular.module('com.module.sandbox')
  .config(function($stateProvider) {
    $stateProvider
      .state('app.sandbox', {
        abstract: true,
        url: '/sandbox',
        templateUrl: 'modules/sandbox/views/main.html',
        controller: 'SandboxCtrl'
      })
      .state('app.sandbox.index', {
        url: '',
        controller: function($state) {
          $state.go('app.sandbox.alerts');
        }
      })
      .state('app.sandbox.forms', {
        url: '/forms',
        templateUrl: 'modules/sandbox/views/forms.html',
        controller: 'SandboxFormsCtrl'
      })
      .state('app.sandbox.alerts', {
        url: '/alerts',
        templateUrl: 'modules/sandbox/views/alerts.html',
        controller: 'SandboxAlertsCtrl'
      })
      .state('app.sandbox.bootstrap', {
        url: '/bootstrap',
        templateUrl: 'modules/sandbox/views/bootstrap.html'
      })
      .state('app.sandbox.trees', {
        url: '/trees',
        templateUrl: 'modules/sandbox/views/trees.html',
        controller: 'SandboxTreesCtrl'
      })
      .state('app.sandbox.users', {
        url: '/users',
        template: '<pre>{{users | json}}</pre>',
        controller: function($scope, User) {
          $scope.users = User.find({}, function(err, data) {
            console.log(data);
            return;
          });
        }
      })
      .state('app.sandbox.dashboard', {
        url: '',
        templateUrl: 'modules/sandbox/views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .state('app.sandbox.autofields', {
        url: '/autofields',
        templateUrl: 'modules/sandbox/views/autofields.html',
        controller: 'AutoFieldsCtrl'
      });
  });
