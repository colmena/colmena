/**
 * @ngdoc directive
 * @name module.core.directive:login
 * @description
 * # login
 */
'use strict';
angular
    .module ('module.users')
    .directive ('login', function () {
    return {
        templateUrl: 'modules/users/views/login.html',
        restrict   : 'E'
    };
});
