'use strict';
angular.module ('com.module.home')
  .config(function ($stateProvider) {
    $stateProvider.state('app.home', {
      url: '',
      templateUrl: 'modules/home/views/home.html',
      controller: 'HomeCtrl'
    });
  })
