'use strict';
/**
 * @ngdoc function
 * @name com.module.users.controller:RegisterCtrl
 * @description Login Controller
 * @requires $scope
 * @requires $routeParams
 * @requires $location
 * Controller for Register Page
 **/
angular.module ('com.module.users')
  .controller ('RegisterCtrl', function ($scope, $routeParams, $location, toasty, User, Auth) {

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
            Auth.currentUser = $scope.loginResult.user;
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
