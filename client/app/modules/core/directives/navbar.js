/**
 * @ngdoc directive
 * @name com.module.core.directive:navbar
 * @description
 * # navbar
 */
'use strict';
angular
    .module ('com.module.core')
    .directive ('navbar', function () {
    return {
        templateUrl: 'modules/core/views/elements/navbar.html',
        restrict   : 'E'
    };
});
