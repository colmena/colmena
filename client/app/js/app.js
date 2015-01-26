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
  .run(function ($rootScope, gettextCatalog) {

    $rootScope.langs = {
      'pt-BR': gettextCatalog.getString('Portuguese Brazil'),
      'us': gettextCatalog.getString('English'),
      'nl': gettextCatalog.getString('Dutch'),
      'de': gettextCatalog.getString('German'),
      'fr': gettextCatalog.getString('Français')
    };

    var LangVar = navigator.language || navigator.userLanguage;
    var userLangVar = LangVar.substring(0, 2) + '-' + LangVar.substring(3, 5).toUpperCase();
    $rootScope.lang = userLangVar;
    gettextCatalog.setCurrentLanguage(userLangVar);

  });
