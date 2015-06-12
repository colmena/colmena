/**
 * @ngdoc directive
 * @name module.core.directive:register
 * @description
 * # register
 */
'use strict';
angular
    .module ('module.users')
    .directive ('register', function () {
    return {
        templateUrl: 'modules/users/views/register.html',
        restrict   : 'E'
    };
});
