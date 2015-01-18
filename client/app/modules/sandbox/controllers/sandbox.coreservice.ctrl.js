'use strict';
var app = angular.module('com.module.sandbox');

app.controller('SandboxCoreServiceCtrl', function ($scope, $timeout, CoreService) {

  $scope.basicAlert = function () {
    CoreService.alert('This is the most basic alert!');
  };

  $scope.basicAlertBody = function () {
    CoreService.alert('This is the most basic alert!', 'I am the alert text!');
  };

  $scope.basicAlertSuccess = function () {
    CoreService.alertSuccess('This is a success alert!', 'I am the success text!');
  };

  $scope.basicAlertError = function () {
    CoreService.alertError('This is a error alert!', 'I am the error text!');
  };

  $scope.basicAlertWarning = function () {
    CoreService.alertWarning('This is a warning alert!', 'I am the warning text!');
  };

  $scope.basicAlertInfo = function () {
    CoreService.alertInfo('This is a info alert!', 'I am the info text!');
  };

  $scope.basicConfirm = function () {
    CoreService.confirm('This is an agreement', 'So do you agree?', function () {
      CoreService.alert('You agree!');
    }, function () {
      CoreService.alert('You don\'t agree!');
    });
  };

  $scope.toasty = {
    title: 'Notify me!',
    text: 'This is the body!'
  };

  $scope.toastSuccess = function () {
    CoreService.toastSuccess($scope.toasty.title, $scope.toasty.text);
  };

  $scope.toastError = function () {
    CoreService.toastError($scope.toasty.title, $scope.toasty.text);
  };

  $scope.toastWarning = function () {
    CoreService.toastWarning($scope.toasty.title, $scope.toasty.text);
  };

  $scope.toastInfo = function () {
    CoreService.toastInfo($scope.toasty.title, $scope.toasty.text);
  };

  $scope.toastAll = function () {
    CoreService.toastSuccess($scope.toasty.title, $scope.toasty.text);
    CoreService.toastError($scope.toasty.title, $scope.toasty.text);
    CoreService.toastWarning($scope.toasty.title, $scope.toasty.text);
    CoreService.toastInfo($scope.toasty.title, $scope.toasty.text);
  };

});
