'use strict';
angular.module('com.module.sandbox')
  .controller('SandboxCtrl', function ($scope) {
  $scope.items = [
    {
      name: 'CoreService',
      sref: '.coreservice'
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
      name: 'Faker',
      sref: '.faker'
    },
    {
      name: 'Icons',
      sref: '.icons'
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
