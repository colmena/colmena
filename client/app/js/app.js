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
  'ui.router',
  'toasty',
  'autofields',
  'gettext',
  'com.module.about',
  'com.module.core',
  'com.module.events',
  'com.module.files',
  'com.module.notes',
  'com.module.pages',
  'com.module.posts',
  'com.module.products',
  'com.module.sandbox',
  'com.module.components',
  'com.module.settings',
  'com.module.users'
])
  .run(function (gettextCatalog) {
    var LangVar = navigator.language || navigator.userLanguage;
    var userLangVar = LangVar.substring (0, 2);
    gettextCatalog
      .setCurrentLanguage(userLangVar);

  });
