/**
 * @ngdoc function
 * @name com.module.core.controller:HomeCtrl
 * @description Dashboard
 * @requires $scope
 * @requires $rootScope
 **/
'use strict';
angular
    .module ('com.module.core')
    .controller ('HomeCtrl', function ($scope, $rootScope) {

    $scope.count = {};
    $scope.boxes = $rootScope.dashboardBox;

});
