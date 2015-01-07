'use strict';
angular.module ('com.module.settings')
  .controller ('SettingsCtrl', function ($scope, $rootScope, $state, $stateParams, toasty, Setting, SweetAlert, gettextCatalog) {

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

  $scope.settings = $rootScope.settings;


  function loadItems () {
    $rootScope.loadSettings ();
  }

  loadItems ();

  $scope.delete = function (id) {
    SweetAlert.swal ({
      title: gettextCatalog.getString ('Are you sure?'),
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55'
    }, function (isConfirm) {
      if (isConfirm) {
        Setting.deleteById (id, function () {
          toasty.pop.success ({
            title: gettextCatalog.getString ('Setting deleted'),
            msg: gettextCatalog.getString ('Your setting is deleted!'),
            sound: false
          });
          loadItems ();
          $state.go ('app.settings.list');
          console.log ();
        }, function (err) {
          toasty.pop.error ({
            title: gettextCatalog.getString ('Error deleting setting'),
            msg: gettextCatalog.getString ('Your setting is not deleted: ') + err,
            sound: false
          });
        });
      } else {
        return false;
      }
    });
  };

  $scope.schema = [
    {
      label: '',
      property: 'key',
      placeholder: gettextCatalog.getString ('Key'),
      type: 'text',
      attr: {ngMinlength: 4, required: true},
      msgs: {minlength: gettextCatalog.getString ('Needs to have at least 4 characters')}
    },
    {
      label: '',
      property: 'value',
      placeholder: gettextCatalog.getString ('Value'),
      type: 'text',
      attr: {ngMinlength: 4, required: true},
      msgs: {minlength: gettextCatalog.getString ('Needs to have at least 4 characters')}
    },
  ];

  $scope.options = {
    validation: {
      enabled: true,
      showMessages: false
    },
    layout: {
      type: 'basic',
      labelSize: 3,
      inputSize: 9
    }
  };


  $scope.onSubmit = function () {
    Setting.upsert ($scope.setting, function () {
      toasty.pop.success ({
        title: gettextCatalog.getString ('Setting saved'),
        msg: gettextCatalog.getString ('Your setting is safe with us!'),
        sound: false
      });
      $state.go ('^.list');
    }, function (err) {
      console.log (err);
    });
  };

});
