'use strict';
angular.module('com.module.files')
  .config(function($stateProvider) {
    $stateProvider.state('app.files', {
        abstract: true,
        url: '/files',
        templateUrl: 'modules/files/views/main.html'
      })
      .state('app.files.list', {
        url: '',
        templateUrl: 'modules/files/views/list.html',
        controller: 'FilesCtrl'
      })
      .state('app.files.upload', {
        url: '/upload',
        templateUrl: 'modules/files/views/upload.html',
        controller: 'FilesCtrl'
      });
  });
