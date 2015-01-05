'use strict';
/**
  * @ngdoc function
  * @name com.module.core.controller:MainCtrl
  * @description Login Controller
  * @requires $scope
  * @requires $state
  * @requires $location
  * @requires toasty
  * @requires AppAuth
  * @requires User
**/
angular.module ('com.module.core')
  .controller ('MainCtrl', function ($scope, $rootScope, $state, $location, toasty, Auth, User) {

  Auth.ensureCurrentUser();
  $scope.currentUser = Auth.currentUser;
  $scope.menuoptions = $rootScope.menu;

  $scope.logout = function () {
    User.logout (function () {
      $scope.currentUser = Auth.currentUser = null;
      $state.go ('login');
      toasty.pop.success ({title: 'Logged out', msg: 'You are logged out!', sound: false});
    });
  };

});
