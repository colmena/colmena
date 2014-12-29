'use strict';
angular.module ('com.module.settings')
  .controller ('SettingsCtrl', function ($scope, $state, $stateParams, toasty, Setting, SweetAlert) {

  var settingId = $stateParams.id;

  if (settingId) {
    $scope.setting = Setting.findById ({
      id: settingId
    }, function () {
    }, function (err) {
      console.log (err);
    });
  } else {
    $scope.setting = {};
  }

  function loadItems () {
    $scope.settings = Setting.find ();
  }

  loadItems ();

  $scope.delete = function (id) {
    SweetAlert.swal ({
      title: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55'
    }, function (isConfirm) {
      if (isConfirm) {
        Setting.deleteById (id, function () {
          toasty.pop.success ({title: 'Setting deleted', msg: 'Your setting is deleted!', sound: false});
          loadItems ();
          $state.go ('app.settings.list');
          console.log ();
        }, function (err) {
          toasty.pop.error ({
            title: 'Error deleting setting',
            msg: 'Your setting is not deleted: ' + err,
            sound: false
          });
        });
      } else {
        return false;
      }
    });
  };

  $scope.formFields = [
    {
      key: 'key',
      type: 'text',
      label: 'Value',
      required: true
    },
    {
      key: 'value',
      type: 'text',
      label: 'Value',
      required: true
    }
  ];

  $scope.formOptions = {
    uniqueFormId: true,
    hideSubmit: false,
    submitCopy: 'Save'
  };

  $scope.onSubmit = function () {
    Setting.upsert ($scope.setting, function () {
      toasty.pop.success ({title: 'Setting saved', msg: 'Your setting is safe with us!', sound: false});
      $state.go ('^.list');
    }, function (err) {
      console.log (err);
    });
  };

});
