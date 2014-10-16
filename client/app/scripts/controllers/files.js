'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:FilesCtrl
 * @description
 * # FilesCtrl
 * Controller of the clientApp
 */
angular.module('loopbackApp')

.config(function($stateProvider) {
  $stateProvider.state('app.files', {
    abstract: true,
    url: '/files',
    templateUrl: 'views/files/main.html',
    controller: 'FilesCtrl'
  })
    .state('app.files.list', {
      url: '',
      templateUrl: 'views/files/list.html',
      controller: 'FilesCtrl'
    })
    .state('app.files.upload', {
      url: '/upload',
      templateUrl: 'views/files/upload.html',
      controller: 'FilesCtrl'
    });
  })

  .controller('UploadCtrl', function($scope, $fileUploader, ENV) {

    // create a uploader with options
    var uploader = $scope.uploader = $fileUploader.create({
      scope: $scope, // to automatically update the html. Default: $rootScope
      url: ENV.apiUrl + '/containers/container1/upload',
      formData: [{
        key: 'value'
      }],
      filters: [

        function(item) { // first user filter
          console.info('filter1');
          console.log(item);
          return true;
        }
      ]
    });

    // ADDING FILTERS

    uploader.filters.push(function(item) { // second user filter
      console.info('filter2');
      console.log(item);
      return true;
    });

    // REGISTER HANDLERS

    uploader.bind('afteraddingfile', function(event, item) {
      console.info('After adding a file', item);
    });

    uploader.bind('whenaddingfilefailed', function(event, item) {
      console.info('When adding a file failed', item);
    });

    uploader.bind('afteraddingall', function(event, items) {
      console.info('After adding all files', items);
    });

    uploader.bind('beforeupload', function(event, item) {
      console.info('Before upload', item);
    });

    uploader.bind('progress', function(event, item, progress) {
      console.info('Progress: ' + progress, item);
    });

    uploader.bind('success', function(event, xhr, item, response) {
      console.info('Success', xhr, item, response);
      $scope.$broadcast('uploadCompleted', item);
    });

    uploader.bind('cancel', function(event, xhr, item) {
      console.info('Cancel', xhr, item);
    });

    uploader.bind('error', function(event, xhr, item, response) {
      console.info('Error', xhr, item, response);
    });

    uploader.bind('complete', function(event, xhr, item, response) {
      console.info('Complete', xhr, item, response);
    });

    uploader.bind('progressall', function(event, progress) {
      console.info('Total progress: ' + progress);
    });

    uploader.bind('completeall', function(event, items) {
      console.info('Complete all', items);
    });

  })
  .controller('FilesCtrl', function($scope, $http, ENV) {

    $scope.load = function() {
      $http.get(ENV.apiUrl + '/containers/container1/files').success(function(data) {
        console.log(data);
        $scope.files = data;
      });
    };

    $scope.delete = function(index, id) {
      $http.delete(ENV.apiUrl + '/containers/container1/files/' + encodeURIComponent(id)).success(function(data, status, headers) {
        console.log(data);
        console.log(status);
        console.log(headers);
        $scope.files.splice(index, 1);
      });
    };

    $scope.$on('uploadCompleted', function(event) {
      console.log('uploadCompleted event received');
      console.log(event);
      $scope.load();
    });

  });
