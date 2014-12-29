'use strict';
angular.module ('com.module.core')
/**
  * @ngdoc function
  * @name com.module.core.controller:LoginCtrl
  * @description Login Controller
  * @requires $scope
  * @requires $routeParams
  * @requires $location
  * Contrller for Login Page
**/
  .controller ('LoginCtrl', function ($scope, $routeParams, $location, toasty, User, AppAuth) {
  $scope.credentials = {
    email: 'admin@admin.com',
    password: 'admin',
    rememberMe: true
  };

  $scope.login = function () {
    $scope.loginResult = User.login ({
        include: 'user',
        rememberMe: $scope.credentials.rememberMe
      }, $scope.credentials,
      function () {
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
      }
    );
  };

  $scope.registration = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  $scope.confirmPassword = '';

  $scope.register = function () {

    $scope.registration.username = $scope.registration.email;
    $scope.user = User.save ($scope.registration,
      function () {

        $scope.loginResult = User.login ({
            include: 'user',
            rememberMe: true
          }, $scope.registration,
          function () {
            AppAuth.currentUser = $scope.loginResult.user;
            toasty.pop.success ({title: 'Registered', msg: 'You are registered!', sound: false});
            $location.path ('/');
          },
          function (res) {
            toasty.pop.warning ({
              title: 'Error signin in after registration!',
              msg: res.data.error.message,
              sound: false
            });
            $scope.loginError = res.data.error;
          }
        );

      },
      function (res) {
        toasty.pop.error ({title: 'Error registering!', msg: res.data.error.message, sound: false});
        $scope.registerError = res.data.error;
      }
    );
  };

});
