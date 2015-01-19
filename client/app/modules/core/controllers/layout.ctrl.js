'use strict';
angular.module('com.module.core')
/**
 * @ngdoc function
 * @name com.module.core.controller:LayoutCtrl
 * @description Layout controller
 * @requires $scope
 * @requires $rootScope
 * @requires CoreService
 * @requires gettextCatalog
 **/
  .controller('LayoutCtrl', function ($scope, $rootScope, CoreService, gettextCatalog) {

    // angular translate
    $scope.lang = {
      isopen: false
    };
    $scope.langs = $rootScope.langs;
    $scope.selectLang = $scope.langs[$rootScope.lang];

    $scope.setLang = function (langKey) {
      // set the current lang
      $scope.selectLang = $scope.langs[langKey];
      // You can change the language during runtime
      $scope.lang.isopen = !$scope.lang.isopen;
      gettextCatalog.setCurrentLanguage(langKey);
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

    $scope.settings = $rootScope.settings;

    $rootScope.loadSettings();

  });
