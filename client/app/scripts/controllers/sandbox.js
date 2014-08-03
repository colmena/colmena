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

    .state('sandbox.toasts', {
      url: '',
      templateUrl: 'views/sandbox/toasts.html',
      controller: 'SandboxCtrl'
    })

    .state('sandbox.forms', {
      url: '/forms',
      templateUrl: 'views/sandbox/forms.html',
      controller: 'SandboxCtrl'
    })

    .state('sandbox.users', {
      url: '/users',
      template: '<pre>{{users | json}}</pre>',
      controller: function($scope, User) {
        $scope.users = User.find({}, function(err, data){
          console.log(data);
          return;
        });
      }
    })

    ;
  })
  .controller('SandboxCtrl', function ($scope, toasty) {


    $scope.items = [{
      name: 'Toasts',
      sref: '.toasts'
    } , {
      name: 'Forms',
      sref: '.forms'
    } , {
      name: 'Users',
      sref: '.users'
    }];

    $scope.toasty = {
      title: 'Notify me!',
      text: 'This is the body!'
    };

    $scope.toast = function() {
      toasty.pop.success({title: $scope.toasty.title, msg: $scope.toasty.text, sound: false});
      toasty.pop.warning({title: $scope.toasty.title, msg: $scope.toasty.text, sound: false});
      toasty.pop.wait({title: $scope.toasty.title, msg: $scope.toasty.text, sound: false});
      toasty.pop.error({title: $scope.toasty.title, msg: $scope.toasty.text, sound: false});
      toasty.pop.info({title: $scope.toasty.title, msg: $scope.toasty.text, sound: false});
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
