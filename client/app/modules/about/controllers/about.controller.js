/**
 * @ngdoc function
 * @name module.about.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
'use strict';
angular
    .module ('module.about')
    .controller ('AboutCtrl', function ($scope) {
        $scope.angular = angular;
    });
