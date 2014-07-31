'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:AppCtrl
 * @description
 * # MainCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .config(function($stateProvider) {
    $stateProvider
    .state('app', {
      abstract: true,
      url: '/app',
      templateUrl: 'views/app.html',
      controller: 'MainCtrl'
    });
  })
  .controller('MainCtrl', function ($scope, $state, $location, $notification, AppAuth, User) {

    AppAuth.ensureHasCurrentUser(User);
    $scope.currentUser = AppAuth.currentUser;

    $scope.menuoptions = [{
      name: 'Home',
      sref: 'app.home'
    } , {
      name: 'Items',
      sref: 'app.items.list'
    }];

    $scope.toplinks = [{
      name: 'Logout',
      action: function() {
        User.logout(function() {
          $scope.currentUser = AppAuth.currentUser = null;
          $state.go('login');
          $notification.info('Logged out', 'You are logged out!');
        });
      }
    }];

  });
