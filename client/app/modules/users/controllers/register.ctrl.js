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
  .controller ('RegisterCtrl', function ($scope, $routeParams, $location, $filter, toasty, User, AppAuth, gettextCatalog) {

  $scope.registration = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  $scope.schema = [
    {
      label: '',
      property: 'firstName',
      placeholder: gettextCatalog.getString('First Name'),
      type: 'text',
      attr: {ngMinlength: 4, required: true},
      msgs: {minlength: 'Needs to have at least 4 characters'}
    },
    {
      label: '',
      property: 'lastName',
      placeholder: gettextCatalog.getString('Last Name'),
      type: 'text',
      attr: {ngMinlength: 4, required: true},
      msgs: {minlength: 'Needs to have at least 4 characters'}
    },
    {
      label: '',
      property: 'email',
      placeholder: 'email',
      type: 'email',
      help: 'Don\'t worry we won\'t spam your inbox',
      attr: {required: true, ngMinlength: 4},
      msgs: {
        required: 'You need an email address',
        email: 'Email address needs to be valid',
        valid: 'Nice email address!'
      }
    },

    {
      type: 'multiple', fields: [
      {
        label: '',
        property: 'password',
        placehodler: gettextCatalog.getString('Password'),
        type: 'password',
        attr: {required: true, ngMinlength: 6}
      },
      {
        label: '',
        property: 'confirmPassword',
        placeholder: gettextCatalog.getString('Confirm Password'),
        type: 'password',
        attr: {confirmPassword: 'user.password', required: true, ngMinlength: 6},
        msgs: {match: 'Your passwords need to match'}
      }
    ], columns: 6
    }
  ];

  $scope.options = {
    validation: {
      enabled: true,
      showMessages: false
    },
    layout: {
      type: 'basic',
      labelSize: 3,
      inputSize: 9
    }
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
            toasty.pop.success ({
              title: gettextCatalog.getString ('Registered'),
              msg: gettextCatalog.getString ('You are registered!'),
              sound: false
            });
            $location.path ('/');
          },
          function (res) {
            toasty.pop.warning ({
              title: gettextCatalog.getString ('Error signin in after registration!'),
              msg: res.data.error.message,
              sound: false
            });
            $scope.loginError = res.data.error;
          }
        );

      },
      function (res) {
        toasty.pop.error ({
          title: gettextCatalog.getString ('Error registering!'), msg: res.data.error.message, sound: false
        });
        $scope.registerError = res.data.error;
      }
    );
  };

})
  .directive ('confirmPassword', [
  function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        var validate = function (viewValue) {
          var password = scope.$eval (attrs.confirmPassword);
          ngModel.$setValidity ('match', ngModel.$isEmpty (viewValue) || viewValue == password);
          return viewValue;
        }
        ngModel.$parsers.push (validate);
        scope.$watch (attrs.confirmPassword, function (value) {
          validate (ngModel.$viewValue);
        })
      }
    }
  }
]);
