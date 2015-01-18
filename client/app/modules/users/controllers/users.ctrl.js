'use strict';
var app = angular.module('com.module.users');

app.controller('UsersCtrl', function ($scope, $stateParams, $state, User, toasty, SweetAlert, gettextCatalog) {


  if ($stateParams.id) {
    User.findOne({
      filter: {
        where: {
          id: $stateParams.id
        },
        include: ['roles', 'identities', 'credentials', 'accessTokens']
      }
    }, function (result) {
      $scope.user = result;
    }, function (err) {
      console.log(err);
    });
  } else {
    $scope.user = {};
  }


  $scope.delete = function (id) {
    SweetAlert.swal({
      title: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55'
    }, function (isConfirm) {
      if (isConfirm) {
        User.deleteById(id, function () {
            toasty.pop.success({
              title: gettextCatalog.getString('User deleted'),
              msg: gettextCatalog.getString('Your user is deleted!'), sound: false
            });
            $state.go('app.users.list');
          },
          function (err) {
            toasty.pop.error({
              title: gettextCatalog.getString('Error deleting user'),
              msg: gettextCatalog.getString('Your user is not deleted:') + err, sound: false
            });
          });
      } else {
        return false;
      }
    });
  };

  $scope.loading = true;
  $scope.users = User.find({
    filter: {
      include: ['roles']
    }
  }, function () {
    $scope.loading = false;
  });

  $scope.onSubmit = function () {
    User.upsert($scope.user, function () {
      toasty.pop.success({
        title: gettextCatalog.getString('User saved'),
        msg: gettextCatalog.getString('This user is save!'),
        sound: false
      });
      $state.go('^.list');
    }, function (err) {
      toasty.pop.error({
        title: gettextCatalog.getString('Error saving user'),
        msg: err,
        sound: false
      });
    });
  };

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

});
