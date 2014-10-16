'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .config(function ($stateProvider) {
    $stateProvider.state('app.home', {
      url: '',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    });
  })
  .controller('HomeCtrl', function ($scope, $http, Post, Product, Event) {

    $scope.count = {};

    Post.find(function (posts) {
      $scope.count.posts = posts.length;
    });

    Product.find(function (products) {
      $scope.count.products = products.length;
    });

    $scope.count.events = 0;
    $scope.count.files = 0;


    $http.get('/api/containers/container1/files').success(function (data) {
      $scope.count.files = data.length;
    });

    Event.find(function (events) {
      $scope.count.events = events.length;
    });

    // Post.find(function(posts){
    //   $scope.count.posts = posts.length;
    // });

  });
