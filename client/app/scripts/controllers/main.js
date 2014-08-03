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
  .controller('MainCtrl', function ($scope, $state, $location, toasty, AppAuth, User) {

    AppAuth.ensureHasCurrentUser(User);
    $scope.currentUser = AppAuth.currentUser;

    $scope.menuoptions = [{
      name: 'Home',
      sref: 'app.home'
    } , {
      name: 'Items',
      sref: 'app.items.list'
    } , {
      name: 'Notes',
      sref: 'app.notes.list'
    }];

    $scope.toplinks = [{
      name: 'Logout',
      action: function() {
        User.logout(function() {
          $scope.currentUser = AppAuth.currentUser = null;
          $state.go('login');
          toasty.pop.success({title: 'Logged out', msg: 'You are logged out!', sound: false});
        });
      }
    }];

  });
