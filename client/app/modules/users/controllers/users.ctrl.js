'use strict';
angular.module ('com.module.users')
  .controller ('UsersCtrl', function ($scope, User, SweetAlert, gettextCatalog) {

    $scope.user = User.getCurrent (function (user) {
      console.log (user);
    }, function (err) {
      console.log (err);
    });

    $scope.formFields = [
      {
        key: 'username',
        type: 'text',
        label: 'Username',
        required: true
      },
      {
        key: 'email',
        type: 'email',
        label: 'E-mail',
        required: true
      },
      {
        key: 'firstName',
        type: 'text',
        label: 'First name',
        required: true
      },
      {
        key: 'lastName',
        type: 'text',
        label: 'Last name',
        required: true
      },
    ];

    $scope.formOptions = {
      uniqueFormId: true,
      hideSubmit: false,
      submitCopy: 'Save'
    };

    $scope.onSubmit = function () {
      SweetAlert.swal ({
        title: gettextCatalog.getString('Sorry!'),
        text: gettextCatalog.getString('Updating your profile is not yet implemented :('),
        type: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#DD6B55'
      });

      //      User.upsert($scope.user, function () {
      //        toasty.pop.success({title: 'Profile saved', msg: 'Enjoy the new you!', sound: false});
      ////        $state.go('^.list');
      //      }, function (err) {
      //        console.log(err);
      //      });
    };
  });
