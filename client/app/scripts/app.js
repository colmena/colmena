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
  'angular.filter'
  , 'angularFileUpload'
  , 'oitozero.ngSweetAlert'
  , 'config'
  , 'formly'
  , 'lbServices'
  , 'ngAnimate'
  , 'ngCookies'
  , 'ngResource'
  , 'ngRoute'
  , 'ngSanitize'
  , 'ngTouch'
  , 'ui.gravatar'
  , 'ui.markdown'
  , 'ui.router'
  , 'toasty'
])

  .controller('LayoutCtrl', function ($scope, Setting, ENV) {

    $scope.appName = 'LB-NG-BS';
    $scope.apiUrl = ENV.apiUrl;
    $scope.appTheme = 'skin-black';
    $scope.appThemes = [
      {
        'name': 'Black',
        'class': 'skin-black'
      },
      {
        'name': 'Blue',
        'class': 'skin-blue'
      }
    ];
    $scope.appLayout = '';
    $scope.appLayouts = [
      {
        'name': 'Fixed',
        'class': 'fixed'
      },
      {
        'name': 'Scrolling',
        'class': 'not-fixed'
      }
    ];

    $scope.setTheme = function (theme) {
      $scope.appTheme = theme;
    };

    $scope.setLayout = function (layout) {
      $scope.appLayout = layout;
    };

    $scope.toggleSidebar = function () {
      var $ = angular.element;
      if ($(window).width() <= 992) {
        $('.row-offcanvas').toggleClass('active');
        $('.left-side').removeClass('collapse-left');
        $('.right-side').removeClass('strech');
        $('.row-offcanvas').toggleClass('relative');
      } else {
        // Else, enable content streching
        $('.left-side').toggleClass('collapse-left');
        $('.right-side').toggleClass('strech');
      }
    };

    $scope.settings = {};

    Setting.find(function (settings) {
      settings.forEach(function (item) {
        $scope.settings[item.key] = item.value;
      });
    });

  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('login', {
      url: '/login',
      template: '<login></login>',
      controller: 'LoginCtrl'
    }).state('register', {
      url: '/register',
      template: '<register></register>',
      controller: 'LoginCtrl'
    });

    $urlRouterProvider.otherwise('/app');

  })

  .config(function ($routeProvider, $httpProvider) {

    // Intercept 401 responses and redirect to login screen
    $httpProvider.interceptors.push(function ($q, $location, AppAuth, toasty) {
      return {
        responseError: function (rejection) {

          if (rejection.status === 401) {
            AppAuth.currentUser = null;
            // save the current location so that login can redirect back
            $location.nextAfterLogin = $location.path();

            if ($location.path() !== '/register') {
              $location.path('/login');
            }

            toasty.pop.warning({title: 'Error 401 received', msg: 'We received a 401 error from the API! Redirecting to login', sound: false});
          }
          if (rejection.status === 0) {
            $location.path('/');
            toasty.pop.error({title: 'Connection Refused', msg: 'The connection to the API is refused. Please verify that the API is running!', sound: false});
          }
          return $q.reject(rejection);
        }
      };
    });
  });
