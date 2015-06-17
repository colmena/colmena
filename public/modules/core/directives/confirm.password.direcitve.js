'use strict';
angular
    .module ('module.core')
    .directive ('confirmPassword', [
    function () {
        return {
            restrict: 'A',
            require : 'ngModel',
            link    : function (scope, element, attrs, ngModel) {
                var validate = function (viewValue) {
                    var password = scope.$eval (attrs.confirmPassword);
                    ngModel.$setValidity ('match', ngModel.$isEmpty (viewValue) ||
                        viewValue === password);
                    return viewValue;
                };
                ngModel.$parsers.push (validate);
                scope.$watch (attrs.confirmPassword, function () {
                    validate (ngModel.$viewValue);
                });
            }
        };
    }
])