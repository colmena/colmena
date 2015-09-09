(function(){
  'use strict';
  angular
    .module('com.module.sandbox')
    .controller('SandboxFormsCtrl', function ($scope, CoreService) {

      var now = new Date();

      $scope.formOptions = {};

      $scope.formData = {
        name: null,
        description: null,
        startDate: now,
        startTime: now,
        endDate: now,
        endTime: now
      };

      $scope.formFields = [{
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Name'
        }
      }, {
        key: 'description',
        type: 'textarea',
        templateOptions: {
          label: 'Description'
        }
      }, {
        key: 'startDate',
        type: 'datepicker',
        templateOptions: {
          label: 'Start Date'
        }
      }, {
        key: 'startTime',
        type: 'timepicker',
        templateOptions: {
          label: 'Start Time'
        }
      }, {
        key: 'endDate',
        type: 'datepicker',
        templateOptions: {
          label: 'End Date'
        }
      }, {
        key: 'endTime',
        type: 'timepicker',
        templateOptions: {
          label: 'End Time'
        }
      }];

      $scope.onSubmit = function (data) {
        CoreService.alertSuccess('Good job!', JSON.stringify(data, null, 2));
      };
    });

})();
