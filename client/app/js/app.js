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
    'angular-loading-bar',
    'angular.filter',
    'angularBootstrapNavTree',
    'angularFileUpload',
    'btford.markdown',
    'oitozero.ngSweetAlert',
    'config',
    'formly',
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
    'schemaForm-uiselect',
    'com.module.core',
    'com.module.about',
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
    }

    var lang = $cookies.lang || navigator.language || navigator.userLanguage;

    $rootScope.locale = $rootScope.locales[lang];

    if ($rootScope.locale === undefined) {
      $rootScope.locale = $rootScope.locales[lang];
      if ($rootScope.locale === undefined) {
        $rootScope.locale = $rootScope.locales['en'];
      }
    }

    gettextCatalog.setCurrentLanguage($rootScope.locale.lang);

  });
