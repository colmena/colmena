'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:SandboxCtrl
 * @description
 * # SandboxCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .config(function($stateProvider) {
    $stateProvider.state('app.sandbox', {
      abstract: true,
      url: '/sandbox',
      templateUrl: 'views/sandbox/main.html',
      controller: 'SandboxCtrl'
    })

    .state('app.sandbox.index', {
      url: '',
      templateUrl: 'views/sandbox/index.html',
      controller: 'SandboxCtrl'
    })
    .state('app.sandbox.toasts', {
      url: '/toasts',
      templateUrl: 'views/sandbox/toasts.html',
      controller: 'SandboxCtrl'
    })

    .state('app.sandbox.forms', {
      url: '/forms',
      templateUrl: 'views/sandbox/forms.html',
      controller: 'SandboxCtrl'
    })

    .state('app.sandbox.alerts', {
      url: '/alerts',
      templateUrl: 'views/sandbox/alerts.html',
      controller: 'AlertCtrl'
    })

    .state('app.sandbox.bootstrap', {
      url: '/bootstrap',
      templateUrl: 'views/sandbox/bootstrap.html'
    })

    .state('app.sandbox.users', {
      url: '/users',
      template: '<pre>{{users | json}}</pre>',
      controller: function($scope, User) {
        $scope.users = User.find({}, function(err, data) {
          console.log(data);
          return;
        });
      }
    });
  })
  .controller('SandboxCtrl', function($scope, $http, toasty) {

    $scope.items = [{
      name: 'Index',
      sref: '.index'
    }, {
      name: 'Toasts',
      sref: '.toasts'
    }, {
      name: 'Forms',
      sref: '.forms'
    }, {
      name: 'Alerts',
      sref: '.alerts'
    }, {
      name: 'Bootstrap',
      sref: '.bootstrap'
}];

$scope.toasty = {
  title: 'Notify me!',
  text: 'This is the body!'
};

$scope.toast = function() {
  toasty.pop.success({
    title: $scope.toasty.title,
    msg: $scope.toasty.text,
    sound: false
  });
  toasty.pop.warning({
    title: $scope.toasty.title,
    msg: $scope.toasty.text,
    sound: false
  });
  toasty.pop.wait({
    title: $scope.toasty.title,
    msg: $scope.toasty.text,
    sound: false
  });
  toasty.pop.error({
    title: $scope.toasty.title,
    msg: $scope.toasty.text,
    sound: false
  });
  toasty.pop.info({
    title: $scope.toasty.title,
    msg: $scope.toasty.text,
    sound: false
  });
};


$scope.formData = {};
$scope.formFields = [{
  //the key to be used in the result values {... "username": "johndoe" ... }
  key: 'username',

  //default value
  default: 'uberuser',
  type: 'text',
  label: 'Username',
  placeholder: 'johndoe',
  required: true,
  disabled: false //default: false
}, {
  key: 'password',
  type: 'password',
  label: 'Password',
  required: true,
  disabled: false, //default: false
  hideExpression: '!username' // hide when username is blank
}

];

$scope.formOptions = {

  //Set the id of the form
  uniqueFormId: 'myFormId',

  //Hide the submit button that is added automaticaly
  //default: false
  hideSubmit: false,

  //Set the text on the default submit button
  //default: Submit
  submitCopy: 'Login'
};

$scope.onSubmit = function() {
  console.log('form submitted:', $scope.formData);
};

}).controller('AlertCtrl', ['$scope', 'SweetAlert', function($scope, SweetAlert) {

  $scope.demo1 = function() {
    SweetAlert.swal('Here\'s a message');
  };

  $scope.demo2 = function() {
    SweetAlert.swal('Here\'s a message!', 'It\'s pretty, isn\'t it?');
  };

  $scope.demo3 = function() {
    SweetAlert.swal('Good job!', 'You clicked the button!', 'success');
  };

  $scope.demo4 = function() {
    SweetAlert.swal({
      title: 'Are you sure?',
      text: 'Your will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, delete it!'
    },  function(){
      SweetAlert.swal('Booyah!');
    });
  };

  $scope.demo5 = function() {
    SweetAlert.swal({
      title: 'Are you sure?',
      text: 'Your will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel plx!',
      closeOnConfirm: false,
      closeOnCancel: false
    }, function(isConfirm){
      if (isConfirm) {
        SweetAlert.swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
      } else {
        SweetAlert.swal('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  };

  $scope.demo6 = function() {
    SweetAlert.swal({
      title: 'Sweet!',
      text: 'Here\'s a custom image.',
      imageUrl: 'http://oitozero.com/img/avatar.jpg'
    });
  };

}]).controller('AlertDemoCtrl', function ($scope) {
  $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
});
