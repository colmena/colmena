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
  .controller ('MainCtrl', function ($scope, $state, $location, toasty, AppAuth, User) {

  AppAuth.ensureHasCurrentUser (User);
  $scope.currentUser = AppAuth.currentUser;

  $scope.menuoptions = [
    {
      name: 'Dashboard',
      sref: 'app.home',
      icon: 'fa-dashboard'
    },
    {
      name: 'Posts',
      sref: 'app.posts.list',
      icon: 'fa-edit'
    },
    {
      name: 'Events',
      sref: 'app.events.list',
      icon: 'fa-calendar-o'
    },
    {
      name: 'Pages',
      sref: 'app.pages.list',
      icon: 'fa-file-o'
    },
    {
      name: 'Notes',
      sref: 'app.notes.list',
      icon: 'fa-file-o'
    },
    {
      name: 'Products',
      sref: 'app.products.list',
      icon: 'fa-file'
    },
    {
      name: 'Files',
      sref: 'app.files.list',
      icon: 'fa-file-o'
    },
    {
      name: 'Sandbox',
      sref: 'app.sandbox.index',
      icon: 'fa-inbox'
    },
    {
      name: 'Settings',
      sref: 'app.settings.list',
      icon: 'fa-cog'
    }
  ];

  $scope.logout = function () {
    User.logout (function () {
      $scope.currentUser = AppAuth.currentUser = null;
      $state.go ('login');
      toasty.pop.success ({title: 'Logged out', msg: 'You are logged out!', sound: false});
    });
  };

});
