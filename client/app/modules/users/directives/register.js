/**
 * @ngdoc directive
 * @name com.module.core.directive:register
 * @description
 * # register
 */
'use strict';
angular
    .module ('com.module.users')
    .directive ('register', function () {
    return {
        templateUrl: 'modules/users/views/register.html',
        restrict   : 'E'
    };
});
