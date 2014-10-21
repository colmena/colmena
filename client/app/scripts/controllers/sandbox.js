'use strict';

/**
 * @ngdoc function
 * @name loopbackApp.controller:SandboxCtrl
 * @description
 * # SandboxCtrl
 * Controller of the loopbackApp
 */
angular.module('loopbackApp')
  .config(function ($stateProvider) {
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
        controller: function ($scope, User) {
          $scope.users = User.find({}, function (err, data) {
            console.log(data);
            return;
          });
        }
      });
  })
  .controller('SandboxCtrl', function ($scope, $http, toasty, SweetAlert) {

    $scope.items = [
      {
        name: 'Index',
        sref: '.index'
      },
      {
        name: 'Toasts',
        sref: '.toasts'
      },
      {
        name: 'Forms',
        sref: '.forms'
      },
      {
        name: 'Alerts',
        sref: '.alerts'
      },
      {
        name: 'Bootstrap',
        sref: '.bootstrap'
      }
    ];

    $scope.toasty = {
      title: 'Notify me!',
      text: 'This is the body!'
    };

    $scope.toast = function () {
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

    $scope.formFields = [
      {
        key: 'name',
        type: 'text',
        label: 'Name',
        required: true
      },
      {
        key: 'description',
        type: 'text',
        label: 'Description',
        required: true
      },
      {
        key: 'startDate',
        required: true,
        label: 'Start Date',

        // required by date
        type: 'date',
        format: 'dd/MM/yyyy'
      },
      {
        key: 'startTime',
        required: true,
        label: 'Start Time',

        // required by time
        type: 'time',
        hstep: 1,
        mstep: 5,
        ismeridian: true
      },
      {
        key: 'endDate',
        label: 'End',

        // required by date
        type: 'date',
        format: 'dd/MM/yyyy'
      },
      {
        key: 'endTime',
        required: true,
        label: 'End Time',

        // required by time
        type: 'time',
        hstep: 1,
        mstep: 5,
        ismeridian: true
      }
    ];


    $scope.formOptions = {

      //Hide the submit button that is added automaticaly
      //default: false
      hideSubmit: false,

      //Set the text on the default submit button
      //default: Submit
      submitCopy: 'Submit'
    };

    $scope.onSubmit = function () {
      SweetAlert.swal('Good job!', 'Well done, ' + $scope.formData.name, 'success');
    };

  }).controller('AlertCtrl', ['$scope', 'SweetAlert', function ($scope, SweetAlert) {

    $scope.demo1 = function () {
      SweetAlert.swal('Here\'s a message');
    };

    $scope.demo2 = function () {
      SweetAlert.swal('Here\'s a message!', 'It\'s pretty, isn\'t it?');
    };

    $scope.demo3 = function () {
      SweetAlert.swal('Good job!', 'You clicked the button!', 'success');
    };

    $scope.demo4 = function () {
      SweetAlert.swal({
        title: 'Are you sure?',
        text: 'Your will not be able to recover this imaginary file!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!'
      }, function () {
        SweetAlert.swal('Booyah!');
      });
    };

    $scope.demo5 = function () {
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
      }, function (isConfirm) {
        if (isConfirm) {
          SweetAlert.swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
        } else {
          SweetAlert.swal('Cancelled', 'Your imaginary file is safe :)', 'error');
        }
      });
    };

    $scope.demo6 = function () {
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

    $scope.addAlert = function () {
      $scope.alerts.push({msg: 'Another alert!'});
    };

    $scope.closeAlert = function (index) {
      $scope.alerts.splice(index, 1);
    };
  }).controller('DatepickerDemoCtrl', function ($scope) {
    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
  });
