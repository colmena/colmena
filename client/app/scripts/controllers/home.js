'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .config(function($stateProvider) {
    $stateProvider.state('app.home', {
      url: '',
      templateUrl: 'views/home.html'
    });
  })
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
