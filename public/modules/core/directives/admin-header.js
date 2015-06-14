/**
 * @ngdoc directive
 * @name module.core.directive:adminHeader
 * @description
 * @param {string} title Title
 * @param {string} subTitle Subtitle
 * # adminHeader
 */
'use strict';
angular
    .module ('module.core')
    .directive ('adminHeader', function () {
    return {
        templateUrl: 'modules/core/views/elements/admin-header.html',
        transclude : true,
        scope      : {
            title   : '@',
            subTitle: '@'
        },
        restrict   : 'A'
    };
});
