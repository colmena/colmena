'use strict';
/**
 * @ngdoc function
 * @name com.module.users.controller:LoginCtrl
 * @description Login Controller
 * @requires $scope
 * @requires $routeParams
 * @requires $location
 * Contrller for Login Page
 **/
angular.module ('com.module.users')
  .controller ('LoginCtrl', function ($scope, $routeParams, $location, toasty, User, AppAuth) {

  var TWO_WEEKS = 1000 * 60 * 60 * 24 * 7 * 2;

  $scope.credentials = {
    email: 'admin@admin.com',
    password: 'admin',
    ttl: TWO_WEEKS,
    rememberMe: true
  };

  $scope.loginGoogle = function () {
    window.location = '/auth/google';
  };

  $scope.loginFacebook = function () {
    window.location = '/auth/facebook';
  };

  $scope.login = function () {


    $scope.loginResult = User.login ({
        include: 'user',
        rememberMe: $scope.credentials.rememberMe
      }, $scope.credentials,
      function (user) {

        console.log (user.id);      // => acess token
        console.log (user.ttl);     // => 1209600 time to live
        console.log (user.created); // => 2013-12-20T21:10:20.377Z
        console.log (user.userId);  // => 1

        var next = $location.nextAfterLogin || '/';
        $location.nextAfterLogin = null;
        AppAuth.currentUser = $scope.loginResult.user;
        toasty.pop.success ({title: 'Logged in', msg: 'You are logged in!', sound: false});
        if (next === '/login') {
          next = '/';
        }
        $location.path (next);

      },
      function (res) {
        $scope.loginError = res.data.error;
      });


  };


});
