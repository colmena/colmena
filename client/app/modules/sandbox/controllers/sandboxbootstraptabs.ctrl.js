/**
 * Created by movibe on 29/12/14.
 */
'use strict';
angular.module ('com.module.sandbox')
  .controller('SandboxBootstrapTabsCtrl', function ($scope, SweetAlert) {
    $scope.tabs = [
      { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
      { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
    ];

    $scope.alertMe = function () {
      setTimeout(function () {
        SweetAlert.swal({title: 'You\'ve selected the alert tab!'});
      });
    };
  });
