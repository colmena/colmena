'use strict';
angular.module('com.module.core')
<<<<<<< HEAD
/**
 * @ngdoc function
 * @name com.module.core.controller:LayoutCtrl
 * @description Layout controller
 * @requires $scope
 * @requires $rootScope
 * @requires CoreService
 * @requires gettextCatalog
 **/
.controller('LayoutCtrl', function ($scope, $rootScope, $cookies, CoreService, gettextCatalog) {
=======
  /**
   * @ngdoc function
   * @name com.module.core.controller:LayoutCtrl
   * @description Layout controller
   * @requires $scope
   * @requires $rootScope
   * @requires CoreService
   * @requires gettextCatalog
   **/
  .controller('LayoutCtrl', function($scope, $rootScope, $cookies, CoreService,
    gettextCatalog) {

>>>>>>> FETCH_HEAD
    // angular translate
    $scope.locale = {
        isopen: false
    };
    $scope.locales = $rootScope.locales;
    $scope.selectLocale = $rootScope.locale;
<<<<<<< HEAD
    $scope.setLocale = function (locale) {
        // set the current lang
        $scope.locale = $scope.locales[locale];
        $scope.selectLocale = $scope.locale;
        $rootScope.locale = $scope.locale;
        $cookies.lang = $scope.locale.lang;
        // You can change the language during runtime
        $scope.locale.isopen = !$scope.locale.isopen;
        // Set Faker Language
        faker.locale = $rootScope.locale.lang;
        // Set Language
        gettextCatalog.setCurrentLanguage($scope.locale.lang);
=======

    $scope.setLocale = function(locale) {
      // set the current lang
      $scope.locale = $scope.locales[locale];
      $scope.selectLocale = $scope.locale;
      $rootScope.locale = $scope.locale;
      $cookies.lang = $scope.locale.lang;

      // You can change the language during runtime
      $scope.locale.isopen = !$scope.locale.isopen;

      gettextCatalog.setCurrentLanguage($scope.locale.lang);
>>>>>>> FETCH_HEAD
    };
    $scope.appName = 'LB-NG-BS';
    $scope.apiUrl = CoreService.env.apiUrl;
    $scope.appTheme = 'skin-blue';
    $scope.appThemes = [{
        'name': 'Black',
        'class': 'skin-black'
    }, {
        'name': 'Blue',
        'class': 'skin-blue'
    }];
    $scope.appLayout = '';
    $scope.appLayouts = [{
        'name': 'Fixed',
        'class': 'fixed'
    }, {
        'name': 'Scrolling',
        'class': 'not-fixed'
    }];
<<<<<<< HEAD
      // Toasty
  $scope.toasty = {
    'timeout': 3000,
    'close-button': true,
    'sound': false
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
=======

    $scope.toggleSidebar = function() {
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
>>>>>>> FETCH_HEAD
    };
    $scope.settings = $rootScope.settings;
    $rootScope.loadSettings();
});
