(function () {
  'use strict';
  angular
    .module('com.module.core')
    .config([
      'cfpLoadingBarProvider',
      function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
      }
    ])
    .run(function ($rootScope, Setting, gettextCatalog) {

      // Left Sidemenu
      $rootScope.menu = [];

      // Add Sidebar Menu
      $rootScope.addMenu = function (name, uisref, icon) {
        $rootScope.menu.push({
          name: name,
          sref: uisref,
          icon: icon
        });
      };

      // Add Menu Dashboard
      $rootScope.addMenu(gettextCatalog.getString('Dashboard'), 'app.home',
        'fa-dashboard');

      // Dashboard
      $rootScope.dashboardBox = [];

      // Add Dashboard Box
      $rootScope.addDashboardBox = function (name, color, icon, quantity, href) {
        $rootScope.dashboardBox.push({
          name    : name,
          color   : color,
          icon    : icon,
          quantity: quantity,
          href    : href
        });
      };

      // Get Settings for Database
      $rootScope.setSetting = function (key, value) {

        Setting.find({
          filter: {
            where: {
              key: key
            }
          }
        }, function (data) {

          if (data.length) {
            data[0].value = value;
            data[0].$save();
          } else {
            Setting.create({
              key  : key,
              value: value
            }, function (data) {
              console.log(data);
            });
          }
          $rootScope.loadSettings();
        });
      };

      // Load Settings blank
      $rootScope.settings = {};

      // Get Settings for Loopback Service
      $rootScope.loadSettings = function () {
        Setting.find(function (settings) {
          $rootScope.settings.data = settings;
        });
      };

    });

})();
