'use strict';
/**
 * @ngdoc function
 * @name com.module.core.controller:HomeCtrl
 * @description Dashboard
 * @requires $scopoe
 * @requires $http
 * @requires Post
 * @requires Page
 * @requires Event
 * @requires Category
 * @requires Product
 * @requires ENV
 **/
angular.module ('com.module.core')
  .controller ('HomeCtrl', [
  '$scope',
  '$http',
  'Post',
  'Page',
  'Event',
  'Category',
  'Product',
  'ENV',
  function ($scope, $http, Post, Page, Event, Category, Product, ENV) {

    $scope.count = {};

    Product.find (function (products) {
      $scope.count.products = products.length;
    });

    Category.find (function (categories) {
      $scope.count.categories = categories.length;
    });

    Post.find (function (posts) {
      $scope.count.posts = posts.length;
    });

    Page.find (function (pages) {
      $scope.count.pages = pages.length;
    });

    Event.find (function (events) {
      $scope.count.events = events.length;
    });

    $scope.count.files = 0;

    $http.get (ENV.apiUrl + '/containers/files/files').success (function (data) {
      $scope.count.files = data.length;
    });

  }
]);
