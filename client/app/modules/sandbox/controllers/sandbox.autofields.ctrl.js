'use strict';
angular.module ('com.module.sandbox')
  .controller ('AutoFieldsCtrl', function ($scope, $state, toasty, $log) {

  $scope.user = {
    username: '',
    email: 'test@test.com',
    gender: null,
    genderCheck: null,
    bio: '',
    website: '',
    number: 1,
    birthdate: new Date (),
    password: '',
    confirmPassword: '',
    rememberMe: false
  };

  $scope.schema = [
    {
      property: 'username',
      type: 'text',
      attr: {ngMinlength: 4, required: true},
      msgs: {minlength: 'Needs to have at least 4 characters'}
    },
    {
      property: 'email',
      type: 'email',
      help: 'Don\'t worry we won\'t spam your inbox',
      attr: {required: true, ngMinlength: 4},
      msgs: {
        required: 'You need an email address',
        email: 'Email address needs to be valid',
        valid: 'Nice email address!'
      }
    },
    {property: 'website', type: 'url', msgs: {url: 'You need a valid url'}},
    {
      property: 'number',
      label: 'Number between 1-10',
      type: 'number',
      attr: {min: 1, max: 10},
      msgs: {min: 'You need a number no less than 1', max: 'You need a number no greater than 10'},
      validate: false
    },
    {property: 'birthdate', type: 'date', attr: {required: true}},
    {property: 'gender', type: 'select', list: 'key as value for (key,value) in genders', attr: {required: true}},
    {
      property: 'genderCheck',
      label: 'Are you really?',
      type: 'select',
      list: 'key as value for (key,value) in genderCheck',
      attr: {required: true, ngShow: '$data.gender != null'}
    },
    {property: 'bio', type: 'textarea', rows: 5, placeholder: 'A bit about yourself...', attr: {required: true}},
    {
      type: 'multiple', fields: [
      {property: 'password', type: 'password', attr: {required: true, ngMinlength: 6}},
      {
        property: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        attr: {confirmPassword: 'user.password', required: true, ngMinlength: 6},
        msgs: {match: 'Your passwords need to match'}
      }
    ], columns: 6
    },
    {property: 'rememberMe', label: 'Stay signed in', type: 'checkbox'}
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

  $scope.genders = {
    0: 'Male',
    1: 'Female'
  };

  $scope.genderCheck = {
    0: 'No',
    1: 'Yes'
  };

  $scope.toggleValidation = function () {
    $scope.options.validation.enabled = !$scope.options.validation.enabled;
  };

  $scope.togglePopovers = function () {
    $scope.options.validation.showMessages = !$scope.options.validation.showMessages;
  };

  $scope.toggleHorizontal = function () {
    $scope.options.layout.type = $scope.options.layout.type == 'horizontal' ? 'basic' : 'horizontal';
  }

  $scope.addField = function () {
    $scope.schema.push ({property: 'new' + (new Date ().getTime ()), label: 'New Field'});
  };

  $scope.join = function () {
    if (!$scope.joinForm.$valid) return;
    //join stuff....
    $log.info ($scope.user);
    alert ('You\'ve joined!\n\nSee console for additional info.');
  }
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



