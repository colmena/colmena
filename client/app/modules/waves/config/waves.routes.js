'use strict';

var app = angular.module('com.module.waves');

app.config(function ($stateProvider) {
  $stateProvider.state('app.waves', {
    abstract: true,
    url: '/waves',
    templateUrl: 'modules/waves/views/main.html',
    controller: 'WavesCtrl',
    controllerAs: 'ctrl'
  }).state('app.waves.list', {
    url: '',
    templateUrl: 'modules/waves/views/list.html',
    resolve: {
      waves: ['WavesService', function (WavesService) {
        return WavesService.getWaves();
      }]
    },
    controller: function ($scope, waves) {
      $scope.waves = waves;
    }
  }).state('app.waves.add', {
    url: '/add',
    templateUrl: 'modules/waves/views/form.html',
    controller: 'WavesCtrl'
  }).state('app.waves.edit', {
    url: '/:id/edit',
    templateUrl: 'modules/waves/views/form.html',
    controller: 'WavesCtrl'
  }).state('app.waves.view', {
    url: '/:id',
    templateUrl: 'modules/waves/views/view.html',
    resolve: {
      wave: ['$stateParams', 'WavesService', function ($stateParams, WavesService) {
        return WavesService.getWave($stateParams.id);
      }]
    },
    controller: function ($scope, wave) {
      $scope.wave = wave;
    }
  });
});
