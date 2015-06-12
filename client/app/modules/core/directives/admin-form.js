/**
 * @ngdoc directive
 * @name com.module.core.directive:adminForm
 * @description
 * # adminForm
 */
'use strict';
angular
    .module ('com.module.core')
    .directive ('adminForm', function () {
    return {
        template: '<div></div>',
        restrict: 'E',
        link    : function postLink (scope, element) {
            element.text ('this is the adminForm directive');
        }
    };
});
