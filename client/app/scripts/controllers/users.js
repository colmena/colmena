'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .config(function($stateProvider) {
    $stateProvider.state('app.users', {
      abstract: true,
      url: '/users',
      templateUrl: 'views/users.html',
      controller: 'UsersCtrl'
    });
  })
  .controller('UsersCtrl', function() {

  });
