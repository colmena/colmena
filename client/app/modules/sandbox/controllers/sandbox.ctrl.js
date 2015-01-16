'use strict';
angular.module('com.module.sandbox')
  .controller('SandboxCtrl', function ($scope) {
  $scope.items = [
    {
      name: 'Alerts',
      sref: '.alerts'
    },
    {
      name: 'Autofields',
      sref: '.autofields'
    },
    {
      name: 'Bootstrap',
      sref: '.bootstrap'
    },
    {
      name: 'Dashboard',
      sref: '.dashboard'
    },
    {
      name: 'Forms',
      sref: '.forms'
    },
    {
      name: 'Grid',
      sref: '.grid'
    },
    {
      name: 'Trees',
      sref: '.trees'
    }
  ];
});
