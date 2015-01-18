'use strict';
angular.module('com.module.users')
  .controller('ProfileCtrl', function ($scope, CoreService, User, gettextCatalog) {

    $scope.user = User.getCurrent(function (user) {
      console.log(user);
    }, function (err) {
      console.log(err);
    });

    $scope.formFields = [{
      key: 'username',
      type: 'text',
      label: 'Username',
      required: true
    }, {
      key: 'email',
      type: 'email',
      label: 'E-mail',
      required: true
    }, {
      key: 'firstName',
      type: 'text',
      label: 'First name',
      required: true
    }, {
      key: 'lastName',
      type: 'text',
      label: 'Last name',
      required: true
    }];

    $scope.formOptions = {
      uniqueFormId: true,
      hideSubmit: false,
      submitCopy: 'Save'
    };

    $scope.onSubmit = function () {
      User.upsert($scope.user, function () {
        CoreService.toastSuccess(gettextCatalog.getString('Profile saved'), gettextCatalog.getString('Enjoy the new you!'));
      }, function (err) {
        CoreService.toastError(gettextCatalog.getString('Error saving profile'), gettextCatalog.getString('Your profile is not saved: ') + err);
      });
    };

  });
