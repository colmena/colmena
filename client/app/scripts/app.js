'use strict';

/**
 * @ngdoc overview
 * @name loopbackApp
 * @description
 * # loopbackApp
 *
 * Main module of the application.
 */
angular.module('loopbackApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'lbServices',
  'notifications',
  'formly'
])

.controller('LayoutCtrl', function ($scope) {

  $scope.appName = "LB-NG-BS";

})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('login', {
    url: '/login',
    template: '<login></login>',
    controller: 'LoginCtrl'
  })
    .state('register', {
      url: '/register',
      template: '<register></register>',
      controller: 'LoginCtrl'
    });

  $urlRouterProvider.otherwise('/app');

})

.config(function($routeProvider, $httpProvider) {

  // Intercept 401 responses and redirect to login screen
  $httpProvider.interceptors.push(function($q, $location, AppAuth) {
    return {
      responseError: function(rejection) {
        console.log('intercepted rejection of ', rejection.config.url, rejection.status);

        if (rejection.status === 401) {
          AppAuth.currentUser = null;
          // save the current location so that login can redirect back
          $location.nextAfterLogin = $location.path();

          if ($location.path() !== '/register') {
            $location.path('/login');
          }
        }
        return $q.reject(rejection);
      }
    };
  });
});
