'use strict';
angular.module('com.module.sandbox')
  .controller('SandboxBootstrapTabsCtrl', function ($scope, CoreService) {
    $scope.tabs = [
      {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
      {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true}
    ];

    $scope.alertMe = function () {
      CoreService.alert('You\'ve selected the alert tab!');
    };
  });
