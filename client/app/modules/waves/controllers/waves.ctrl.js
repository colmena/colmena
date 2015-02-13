'use strict';
angular.module('com.module.waves')
  .controller('WavesCtrl', function ($scope, $state, $stateParams, CoreService, FormHelper, gettextCatalog, Wave, WavesService) {

    $scope.delete = function (id) {
      WavesService.deleteWave(id, function () {
        $state.reload();
      });
    };

    this.formHelper = new FormHelper(Wave);
    $scope.cancel = function () {
      console.log('Cancel');
      console.log(this.formHelper);
      //this.formHelper.cancel('app.waves.list');
    };

    var waveId = $stateParams.id;

    if (waveId) {
      $scope.wave = Wave.findById({
        id: waveId
      }, function () {
      }, function (err) {
        console.log(err);
      });
    } else {
      $scope.wave = {};
    }

    $scope.formFields = [
      {
        key: 'title',
        type: 'text',
        label: gettextCatalog.getString('Title'),
        required: true
      },
      {
        key: 'content',
        type: 'textarea',
        label: gettextCatalog.getString('Content'),
        required: true
      },
      {
        key: 'image',
        type: 'text',
        label: gettextCatalog.getString('image'),
        required: true
      }
    ];

    $scope.formOptions = {
      uniqueFormId: true,
      hideSubmit: false,
      submitCopy: gettextCatalog.getString('Save')
    };

    $scope.onSubmit = function () {
      Wave.upsert($scope.wave, function () {
        CoreService.toastSuccess(gettextCatalog.getString('Wave saved'), gettextCatalog.getString('Your wave is safe with us!'));
        $state.go('^.list');
      }, function (err) {
        console.log(err);
      });
    };

  });
