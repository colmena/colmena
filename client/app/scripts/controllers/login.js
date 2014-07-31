'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .controller('LoginCtrl', function ($scope, $routeParams, $location, $notification, User, AppAuth) {
    $scope.credentials = {
      email: 'foo@bar.com',
      password: '123456',
      rememberMe: true
    };

    $scope.login = function() {
      $scope.loginResult = User.login({
          include: 'user',
          rememberMe: $scope.credentials.rememberMe
        }, $scope.credentials,
        function() {
          var next = $location.nextAfterLogin || '/';
          $location.nextAfterLogin = null;
          AppAuth.currentUser = $scope.loginResult.user;
          $notification.success('Logged in', 'You are logged in!');

          if(next === '/login') {
            next = '/';
          }
          $location.path(next);
        },
        function(res) {
          $notification.warning('Error signin in!', res.data.error.message);
          $scope.loginError = res.data.error;
        }
      );
    };

    $scope.registration = {
      firstName: 'me',
      lastName: 'me',
      email: 'me@me.me',
      password: 'meme'
    };

    $scope.confirmPassword = 'meme';

    $scope.register = function() {

      console.log('reg');

      $scope.user = User.save($scope.registration,
        function() {

          $scope.loginResult = User.login({
              include: 'user',
              rememberMe: true
            }, $scope.registration,
            function() {
              AppAuth.currentUser = $scope.loginResult.user;
              $notification.success('Registered', 'You are registered!');
              $location.path('/');
            },
            function(res) {
              $notification.warning('Error signin in after registration!', res.data.error.message);
              $scope.loginError = res.data.error;
            }
          );

        },
        function(res) {
          $notification.warning('Error registering!', res.data.error.message);
          $scope.registerError = res.data.error;
        }
      );
    };

  });
