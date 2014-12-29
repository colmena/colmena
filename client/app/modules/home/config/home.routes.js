/**
 * Created by movibe on 29/12/14.
 */
'use strict';
angular.module ('com.module.home')
  .config(function ($stateProvider) {
    $stateProvider.state('app.home', {
      url: '',
      templateUrl: 'modules/home/views/home.html',
      controller: 'HomeCtrl'
    });
  })
