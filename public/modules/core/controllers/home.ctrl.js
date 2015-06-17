/**
 * @ngdoc function
 * @name module.core.controller:HomeCtrl
 * @description Dashboard
 * @requires $scope
 * @requires $rootScope
 **/
'use strict';
angular
    .module ('module.core')
    .controller ('HomeCtrl', function ($scope, $rootScope) {

    $scope.count = {};
    $scope.boxes = $rootScope.dashboardBox;

});
