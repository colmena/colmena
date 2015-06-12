/**
 * @ngdoc function
 * @name com.module.about.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
'use strict';
angular
    .module ('com.module.about')
    .controller ('AboutCtrl', function ($scope) {
        $scope.angular = angular;
    });
