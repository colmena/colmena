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
  .controller ('MainCtrl', function ($scope, $rootScope, $state, $location, toasty, AppAuth, User) {

  AppAuth.ensureHasCurrentUser (User);
  $scope.currentUser = AppAuth.currentUser;

  $scope.menuoptions = $rootScope.menu;

  $scope.logout = function () {
    User.logout (function () {
      $scope.currentUser = AppAuth.currentUser = null;
      $state.go ('login');
      toasty.pop.success ({title: 'Logged out', msg: 'You are logged out!', sound: false});
    });
  };

});
