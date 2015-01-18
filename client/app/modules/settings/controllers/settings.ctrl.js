'use strict';
angular.module('com.module.settings')
  .controller('SettingsCtrl', function ($scope, $rootScope, $state, $stateParams, CoreService, Setting, gettextCatalog) {

    var settingId = $stateParams.id;

    if (settingId) {
      $scope.setting = Setting.findById({
        id: settingId
      }, function () {
      }, function (err) {
        console.log(err);
      });
    } else {
      $scope.setting = {};
    }

    $scope.settings = $rootScope.settings;


    function loadItems() {
      $rootScope.loadSettings();
    }

    loadItems();

    $scope.delete = function (id) {
      CoreService.confirm(gettextCatalog.getString('Are you sure?'), gettextCatalog.getString('Deleting this cannot be undone'), function () {
        Setting.deleteById(id, function () {
          CoreService.toastSuccess(gettextCatalog.getString('Setting deleted'), gettextCatalog.getString('Your setting is deleted!'));
          loadItems();
          $state.go('app.settings.list');
        }, function (err) {
          CoreService.toastError(gettextCatalog.getString('Error deleting setting'), gettextCatalog.getString('Your setting is not deleted: ') + err);
        });
      }, function () {
        return false;
      });
    };

    $scope.schema = [
      {
        label: '',
        property: 'key',
        placeholder: gettextCatalog.getString('Key'),
        type: 'text',
        attr: {ngMinlength: 4, required: true},
        msgs: {minlength: gettextCatalog.getString('Needs to have at least 4 characters')}
      },
      {
        label: '',
        property: 'value',
        placeholder: gettextCatalog.getString('Value'),
        type: 'text',
        attr: {ngMinlength: 4, required: true},
        msgs: {minlength: gettextCatalog.getString('Needs to have at least 4 characters')}
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
      Setting.upsert($scope.setting, function () {
        CoreService.toastSuccess(gettextCatalog.getString('Setting saved'), gettextCatalog.getString('Your setting is safe with us!'));
        $state.go('^.list');
      }, function (err) {
        console.log(err);
      });
    };

  });
