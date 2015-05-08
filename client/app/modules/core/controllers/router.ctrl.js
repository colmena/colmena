'use strict';
/**
 * @ngdoc function
 * @name com.module.core.controller:RouteCtrl
 * @description Redirect for acess
 * @requires $q
 * @requires $scope
 * @requires $state
 * @requires $location
 * @requires AppAuth
 **/
angular.module('com.module.core')
  .controller('RouteCtrl', function($q, $scope, $state, $location, AppAuth, User, $cookies) {
    if (AppAuth.currentUser === null && $cookies.accessToken) {
      $scope.currentUser = AppAuth.currentUser = { id: 'social' };
    }

    AppAuth.ensureHasCurrentUser(function(currentUser) {
      $scope.currentUser = currentUser;
      if (currentUser !== null) {
        console.log('Redirect to app');
        $location.path('/app')
      }
      else {
        console.log('Redirect to login');
        $location.path('/login')
      }
    })

  });
