'use strict';
angular.module ('com.module.sandbox')
  .controller ('SandboxCtrl', function ($scope) {
    $scope.items = [
    {
        name: 'Dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Autofields',
        sref: '.autofields'
      },
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
  });
