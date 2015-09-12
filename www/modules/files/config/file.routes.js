(function () {
  'use strict';
  angular
    .module('com.module.files')
    .config(function ($stateProvider) {
      $stateProvider
        .state('app.files', {
          abstract: true,
          url: '/files',
          templateUrl: 'modules/files/views/main.html'
        })
        .state('app.files.list', {
          url: '',
          templateUrl: 'modules/files/views/list.html',
          controllerAs: 'ctrl',
          controller: function (files) {
            this.files = files.data;
          },
          resolve: {
            files: function (FileService) {
              return FileService.find();
            }
          }
        })
        .state('app.files.upload', {
          url: '/upload',
          templateUrl: 'modules/files/views/upload.html',
          controllerAs: 'ctrl',
          controller: function (FileUploader, CoreService) {
            this.uploader = new FileUploader({
              url: CoreService.env.apiUrl + '/containers/files/upload',
              formData: [
                {
                  key: 'value'
                }
              ]
            });
          }
        })
        .state('app.files.delete', {
          url: '/:fileName/delete',
          template: '',
          controllerAs: 'ctrl',
          controller: function ($stateParams, $state, FileService) {
            FileService.delete($stateParams.fileName, function () {
              $state.go('^.list');
            }, function () {
              $state.go('^.list');
            });
          }
        });
    });

})();
