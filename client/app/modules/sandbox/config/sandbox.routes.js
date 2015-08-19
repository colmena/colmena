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
          $state.go('app.sandbox.autofields');
        }
      })
      .state('app.sandbox.schemaform', {
        url: '/schemaform',
        templateUrl: 'modules/sandbox/views/schemaform.html',
        controller: 'SandboxSchemaformCtrl',
        controllerAs: 'ctrl'
      })
      .state('app.sandbox.forms', {
        url: '/forms',
        templateUrl: 'modules/sandbox/views/forms.html',
        controller: 'SandboxFormsCtrl'
      })
      .state('app.sandbox.icons', {
        url: '/icons',
        templateUrl: 'modules/sandbox/views/icons.html',
        controller: 'SandboxIconsCtrl'
      })
      .state('app.sandbox.faker', {
        url: '/faker',
        templateUrl: 'modules/sandbox/views/faker.html',
        controller: 'SandboxFakerCtrl'
      })
      .state('app.sandbox.coreservice', {
        url: '/coreservice',
        templateUrl: 'modules/sandbox/views/coreservice.html',
        controller: 'SandboxCoreServiceCtrl'
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
      .state('app.sandbox.grid', {
        url: '/grid',
        templateUrl: 'modules/sandbox/views/grid.html',
        controller: 'SandboxGridCtrl'
      })
      .state('app.sandbox.autofields', {
        url: '/autofields',
        templateUrl: 'modules/sandbox/views/autofields.html',
        controller: 'AutoFieldsCtrl'
      });
  });
