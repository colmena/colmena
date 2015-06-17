/**
 * @ngdoc directive
 * @name module.core.directive:adminBox
 * @description
 * # adminBox
 */
'use strict';
angular
    .module ('module.core')
    .directive ('adminBox', function () {
        return {
            template: '<div></div>',
            restrict: 'E',
            link    : function postLink (scope, element) {
                element.text ('this is the adminBox directive');
            }
        };
    });
