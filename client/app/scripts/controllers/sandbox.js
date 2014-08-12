'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:SandboxCtrl
 * @description
 * # SandboxCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .config(function($stateProvider) {
    $stateProvider.state('app.sandbox', {
      abstract: true,
      url: '/sandbox',
      templateUrl: 'views/sandbox/main.html',
      controller: 'SandboxCtrl'
    })

    .state('app.sandbox.index', {
      url: '',
      templateUrl: 'views/sandbox/index.html',
      controller: 'SandboxCtrl'
    })
    .state('app.sandbox.toasts', {
      url: '/toasts',
      templateUrl: 'views/sandbox/toasts.html',
      controller: 'SandboxCtrl'
    })

    .state('app.sandbox.forms', {
      url: '/forms',
      templateUrl: 'views/sandbox/forms.html',
      controller: 'SandboxCtrl'
    })

    .state('app.sandbox.storage', {
      url: '/storage',
      templateUrl: 'views/sandbox/storage.html',
      controller: 'SandboxCtrl'
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
    });
  })
  .controller('SandboxCtrl', function($scope, $http, toasty) {

    $scope.items = [{
      name: 'Index',
      sref: '.index'
    }, {
      name: 'Toasts',
      sref: '.toasts'
    }, {
      name: 'Forms',
      sref: '.forms'
    }, {
      name: 'Storage',
      sref: '.storage'
    }];

    $scope.toasty = {
      title: 'Notify me!',
      text: 'This is the body!'
    };

    $scope.toast = function() {
      toasty.pop.success({
        title: $scope.toasty.title,
        msg: $scope.toasty.text,
        sound: false
      });
      toasty.pop.warning({
        title: $scope.toasty.title,
        msg: $scope.toasty.text,
        sound: false
      });
      toasty.pop.wait({
        title: $scope.toasty.title,
        msg: $scope.toasty.text,
        sound: false
      });
      toasty.pop.error({
        title: $scope.toasty.title,
        msg: $scope.toasty.text,
        sound: false
      });
      toasty.pop.info({
        title: $scope.toasty.title,
        msg: $scope.toasty.text,
        sound: false
      });
    };


    $scope.formData = {};
    $scope.formFields = [{
        //the key to be used in the result values {... "username": "johndoe" ... }
        key: 'username',

        //default value
        default: 'uberuser',
        type: 'text',
        label: 'Username',
        placeholder: 'johndoe',
        required: true,
        disabled: false //default: false
      }, {
        key: 'password',
        type: 'password',
        label: 'Password',
        required: true,
        disabled: false, //default: false
        hideExpression: '!username' // hide when username is blank
      }

    ];

    $scope.formOptions = {

      //Set the id of the form
      uniqueFormId: 'myFormId',

      //Hide the submit button that is added automaticaly
      //default: false
      hideSubmit: false,

      //Set the text on the default submit button
      //default: Submit
      submitCopy: 'Login'
    };

    $scope.onSubmit = function() {
      console.log('form submitted:', $scope.formData);
    };

  })
  .controller('UploadCtrl', function($scope, $fileUploader) {

    // create a uploader with options
    var uploader = $scope.uploader = $fileUploader.create({
      scope: $scope, // to automatically update the html. Default: $rootScope
      url: 'http://localhost:3000/api/containers/container1/upload',
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
  .controller('FilesCtrl', function($scope, $http) {

    $scope.load = function() {
      $http.get('http://localhost:3000/api/containers/container1/files').success(function(data) {
        console.log(data);
        $scope.files = data;
      });
    };

    $scope.delete = function(index, id) {
      $http.delete('http://localhost:3000/api/containers/container1/files/' + encodeURIComponent(id)).success(function(data, status, headers) {
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
