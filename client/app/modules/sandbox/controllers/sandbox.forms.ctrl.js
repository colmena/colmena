'use strict';
angular
    .module ('com.module.sandbox')
    .controller ('SandboxFormsCtrl', function ($scope, CoreService) {
        $scope.formData = {};

        $scope.formFields = [{
            key     : 'name',
            type    : 'text',
            label   : 'Name',
            required: true
        }, {
            key     : 'description',
            type    : 'text',
            label   : 'Description',
            required: true
        }, {
            key     : 'startDate',
            required: true,
            label   : 'Start Date',
            type    : 'date',
            format  : 'dd/MM/yyyy'
        }, {
            key       : 'startTime',
            required  : true,
            label     : 'Start Time',
            type      : 'time',
            hstep     : 1,
            mstep     : 5,
            ismeridian: true
        }, {
            key   : 'endDate',
            label : 'End',
            type  : 'date',
            format: 'dd/MM/yyyy'
        }, {
            key       : 'endTime',
            required  : true,
            label     : 'End Time',
            type      : 'time',
            hstep     : 1,
            mstep     : 5,
            ismeridian: true
        }];

        $scope.formOptions = {
            hideSubmit: false,
            submitCopy: 'Submit'
        };

        $scope.onSubmit = function () {
            CoreService.alertSuccess ('Good job!', 'Well done, ' + $scope.formData
                    .name);
        };
    });
