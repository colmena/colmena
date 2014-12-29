/**
 * Created by movibe on 29/12/14.
 */
'use strict';
angular.module ('com.module.home')
  .controller ('HomeCtrl', function ($scope, $http, Post, Page, Event, ENV) {

    $scope.count = {};

    Post.find (function (posts) {
      $scope.count.posts = posts.length;
    });

    Page.find (function (pages) {
      $scope.count.pages = pages.length;
    });

    $scope.count.events = 0;
    $scope.count.files = 0;


    $http.get (ENV.apiUrl + '/containers/files/files').success (function (data) {
      $scope.count.files = data.length;
    });

    Event.find (function (events) {
      $scope.count.events = events.length;
    });

    // Post.find(function(posts){
    //   $scope.count.posts = posts.length;
    // });

  });
