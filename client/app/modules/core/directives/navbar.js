/**
 * @ngdoc directive
 * @name module.core.directive:navbar
 * @description
 * # navbar
 */
'use strict';
angular
    .module ('module.core')
    .directive ('navbar', function () {
    return {
        templateUrl: 'modules/core/views/elements/navbar.html',
        restrict   : 'E'
    };
});
