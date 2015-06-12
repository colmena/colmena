/**
 * @ngdoc function
 * @name com.module.core.controller:RouteCtrl
 * @description Redirect for acess
 * @requires $q
 * @requires $scope
 * @requires $state
 * @requires $location
 * @requires AppAuth
 **/
'use strict';
angular
    .module ('com.module.core')
    .controller ('RouteCtrl', function ($q, $scope, $state, $location, AppAuth) {
    if (!AppAuth.currentUser) {
        console.log ('Redirect to login');
        $location.path ('/login');
    } else {
        console.log ('Redirect to app');
        $location.path ('/app');
    }
});
