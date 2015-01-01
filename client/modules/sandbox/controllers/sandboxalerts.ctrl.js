'use strict';
angular.module ('com.module.sandbox')
  .controller ('SandboxAlertsCtrl', [
  '$scope',
  'SweetAlert',
  function ($scope, SweetAlert) {
    $scope.demo1 = function () {
      SweetAlert.swal ('Here\'s a message');
    };
    $scope.demo2 = function () {
      SweetAlert.swal ('Here\'s a message!', 'It\'s pretty, isn\'t it?');
    };
    $scope.demo3 = function () {
      SweetAlert.swal ('Good job!', 'You clicked the button!', 'success');
    };
    $scope.demo4 = function () {
      SweetAlert.swal ({
        title: 'Are you sure?',
        text: 'Your will not be able to recover this imaginary file!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!'
      }, function () {
        SweetAlert.swal ('Booyah!');
      });
    };
    $scope.demo5 = function () {
      SweetAlert.swal ({
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
          SweetAlert.swal ('Deleted!', 'Your imaginary file has been deleted.', 'success');
        } else {
          SweetAlert.swal ('Cancelled', 'Your imaginary file is safe :)', 'error');
        }
      });
    };
    $scope.demo6 = function () {
      SweetAlert.swal ({
        title: 'Sweet!',
        text: 'Here\'s a custom image.',
        imageUrl: 'http://oitozero.com/img/avatar.jpg'
      });
    };
  }
]);
