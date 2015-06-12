/**
 * @ngdoc function
 * @name com.module.core.controller:MainCtrl
 * @description Login Controller
 * @requires $scope
 * @requires $state
 * @requires $location
 * @requires CoreService
 * @requires AppAuth
 * @requires User
 * @requires gettextCatalog
 **/
'use strict';
angular
    .module ('com.module.core')
    .controller ('MainCtrl', function ($scope, $rootScope, $state, $location,
        CoreService, User, gettextCatalog) {
        $scope.currentUser = User.getCurrent ();

        $scope.menuoptions = $rootScope.menu;

        $scope.logout = function () {
            User.logout (function () {
                $state.go ('login');
                CoreService.toastSuccess (gettextCatalog.getString ('Logged out'),
                    gettextCatalog.getString ('You are logged out!'));
            });
        };
    });
