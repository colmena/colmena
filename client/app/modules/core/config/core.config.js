'use strict';
angular.module ('com.module.core')
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
