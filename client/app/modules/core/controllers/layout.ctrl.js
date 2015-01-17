'use strict';
angular.module('com.module.core')
/**
 * @ngdoc function
 * @name com.module.core.controller:LayoutCtrl
 * @description Layout controller
 * @requires $scope
 * @requires Setting
 * @requires Env
 **/
.controller('LayoutCtrl', function($scope, $rootScope, gettextCatalog, Setting, ENV) {

  $scope.langs = $rootScope.langs;

  $scope.setLang = function(lang) {
    gettextCatalog.setCurrentLanguage(lang);
  };

  $scope.appName = 'LB-NG-BS';
  $scope.apiUrl = ENV.apiUrl;
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
  };

  $scope.settings = $rootScope.settings;

  $rootScope.loadSettings();

});
