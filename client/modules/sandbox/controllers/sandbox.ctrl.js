'use strict';
angular.module ('com.module.sandbox')
  .controller ('SandboxCtrl', ['$scope', function ($scope) {
    $scope.items = [
      {
        name: 'Alerts',
        sref: '.alerts'
      },
      {
        name: 'Forms',
        sref: '.forms'
      },
      {
        name: 'Bootstrap',
        sref: '.bootstrap'
      },
      {
        name: 'Trees',
        sref: '.trees'
      }
    ];
  }]);
