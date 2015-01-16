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
  .controller ('HomeCtrl', function ($scope, $rootScope) {

  $scope.count = {};

  $scope.boxes = $rootScope.dashboardBox;

});
