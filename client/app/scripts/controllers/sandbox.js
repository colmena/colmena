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
    $stateProvider.state('sandbox', {
      abstract: true,
      url: '/sandbox',
      templateUrl: 'views/sandbox/main.html',
      controller: 'SandboxCtrl'
    })

    .state('sandbox.notifications', {
      url: '',
      templateUrl: 'views/sandbox/notifications.html',
      controller: 'SandboxCtrl'
    })

    .state('sandbox.forms', {
      url: '/forms',
      templateUrl: 'views/sandbox/forms.html',
      controller: 'SandboxCtrl'
    })

    ;
  })
  .controller('SandboxCtrl', function ($scope, $notification) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.items = [{
      name: 'Notifications',
      sref: '.notifications'
    } , {
      name: 'Forms',
      sref: '.forms'
    }];



    $scope.notification = {
      title: 'Notify me!',
      text: 'This is the body!'
    };


    $scope.notify = function() {
      $notification.info($scope.notification.title, $scope.notification.text, $scope.notification);
      $notification.error($scope.notification.title, $scope.notification.text);
      $notification.success($scope.notification.title, $scope.notification.text);
      $notification.warning($scope.notification.title, $scope.notification.text);
    };


    $scope.formData = {};
    $scope.formFields = [
        {
            //the key to be used in the result values {... "username": "johndoe" ... }
            key: 'username',

            //default value
            default: 'uberuser',
            type: 'text',
            label: 'Username',
            placeholder: 'johndoe',
            required: true,
            disabled: false //default: false
        },
        {
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


  });
