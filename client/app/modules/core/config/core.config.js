'use strict';
angular.module ('com.module.core')
  .run (function ($rootScope) {

  $rootScope.menu = [];

  $rootScope.addMenu = function (name, uisref, icon) {
    $rootScope.menu.push ({
      name: name,
      sref: uisref,
      icon: icon
    });
  };

  $rootScope.addMenu ('Dashboard', 'app.home', 'fa-dashboard');

  $rootScope.dashboardBox = [];

  $rootScope.addDashboardBox = function (name, color, icon, quantity, href) {
    $rootScope.dashboardBox.push ({
      name: name,
      color: color,
      icon: icon,
      quantity: quantity,
      href: href
    });
  };

})
  .config (function (formlyConfigProvider) {
  var templates = 'modules/core/views/elements/fields/';
  var formly = templates + 'formly-field-';
  var fields = [
    'checkbox',
    'email',
    'hidden',
    'number',
    'password',
    'radio',
    'select',
    'text',
    'textarea'
  ];

  angular.forEach (fields, function (val) {
    formlyConfigProvider.setTemplateUrl (val, formly + val + '.html');
  });

  formlyConfigProvider.setTemplateUrl ('date', templates + 'date.html');
  formlyConfigProvider.setTemplateUrl ('time', templates + 'time.html');

});
