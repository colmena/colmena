/**
 * @ngdoc directive
 * @name com.module.core.directive:login
 * @description
 * # login
 */
'use strict';
angular
    .module ('com.module.users')
    .directive ('login', function () {
    return {
        templateUrl: 'modules/users/views/login.html',
        restrict   : 'E'
    };
});
