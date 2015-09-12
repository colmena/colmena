(function(window, angular, undefined) {
  'use strict';
  /**
   * @ngdoc overview
   * @name loopbackApp
   * @description
   * # loopbackApp
   *
   * Main module of the application.
   */
  angular
    .module('loopbackApp', [
      'angular-loading-bar',
      'angular.filter',
      'angularBootstrapNavTree',
      'angularFileUpload',
      'btford.markdown',
      'oitozero.ngSweetAlert',
      'config',
      'formly',
      'formlyBootstrap',
      'lbServices',
      'monospaced.elastic',
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'ui.bootstrap',
      'ui.codemirror',
      'ui.gravatar',
      'ui.grid',
      'ui.router',
      'toasty',
      'autofields',
      'gettext',
      'angular-underscore/filters',
      'schemaForm',
      'ui.select',
      'com.module.core',
      'com.module.about',
      'com.module.browser',
      'com.module.events',
      'com.module.files',
      'com.module.notes',
      'com.module.pages',
      'com.module.posts',
      'com.module.products',
      'com.module.sandbox',
      'com.module.settings',
      'com.module.users'
    ])
    .run(function($rootScope, $cookies, gettextCatalog) {

      $rootScope.locales = {
        'de': {
          lang: 'de',
          country: 'DE',
          name: gettextCatalog.getString('German')
        },
        'en': {
          lang: 'en',
          country: 'US',
          name: gettextCatalog.getString('English')
        },
        'es_MX': {
          lang: 'es_MX',
          country: 'MX',
          name: gettextCatalog.getString('Spanish')
        },
        'fr': {
          lang: 'fr',
          country: 'FR',
          name: gettextCatalog.getString('Français')
        },
        'nl': {
          lang: 'nl',
          country: 'NL',
          name: gettextCatalog.getString('Dutch')
        },
        'pt-BR': {
          lang: 'pt_BR',
          country: 'BR',
          name: gettextCatalog.getString('Portuguese Brazil')
        },
        'ru_RU': {
          lang: 'ru_RU',
          country: 'RU',
          name: gettextCatalog.getString('Russian')
        }
      };

      var lang = $cookies.lang || navigator.language || navigator.userLanguage;

      $rootScope.locale = $rootScope.locales[lang];

      if ($rootScope.locale === undefined) {
        $rootScope.locale = $rootScope.locales[lang];
        if ($rootScope.locale === undefined) {
          $rootScope.locale = $rootScope.locales['en'];
        }
      }

      gettextCatalog.setCurrentLanguage($rootScope.locale.lang);

    })
    .run(function(formlyConfig) {
      /*
       ngModelAttrs stuff
       */
      var ngModelAttrs = {};

      function camelize(string) {
        string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
          return chr ? chr.toUpperCase() : '';
        });
        // Ensure 1st char is always lowercase
        return string.replace(/^([A-Z])/, function(match, chr) {
          return chr ? chr.toLowerCase() : '';
        });
      }

      /*
       timepicker
       */
      ngModelAttrs = {};

      // attributes
      angular.forEach([
        'meridians',
        'readonly-input',
        'mousewheel',
        'arrowkeys'
      ], function(attr) {
        ngModelAttrs[camelize(attr)] = {
          attribute: attr
        };
      });

      // bindings
      angular.forEach([
        'hour-step',
        'minute-step',
        'show-meridian'
      ], function(binding) {
        ngModelAttrs[camelize(binding)] = {
          bound: binding
        };
      });

      formlyConfig.setType({
        name: 'timepicker',
        template: '<timepicker ng-model="model[options.key]"></timepicker>',
        wrapper: [
          'bootstrapLabel',
          'bootstrapHasError'
        ],
        defaultOptions: {
          ngModelAttrs: ngModelAttrs,
          templateOptions: {
            timepickerOptions: {}
          }
        }
      });

      formlyConfig.setType({
        name: 'datepicker',
        template: '<datepicker ng-model="model[options.key]" ></datepicker>',
        wrapper: [
          'bootstrapLabel',
          'bootstrapHasError'
        ],
        defaultOptions: {
          ngModelAttrs: ngModelAttrs,
          templateOptions: {
            datepickerOptions: {}
          }
        }
      });
    });

})(window, window.angular);
