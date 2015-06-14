/**
 * @ngdoc overview
 * @name loopbackApp
 * @description
 * # loopbackApp
 *
 * Main module of the application.
 */
'use strict';
angular
    .module ('loopbackApp', [
    'angular-loading-bar',
    'angular.filter',
    'angularBootstrapNavTree',
    'angularFileUpload',
    'btford.markdown',
    'oitozero.ngSweetAlert',
    'formly',
    'config',
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
    //'cacheviews',
    'module.core',
    'module.about',
    'module.events',
    'module.files',
    'module.notes',
    'module.pages',
    'module.posts',
    'module.products',
    'module.sandbox',
    'module.settings',
    'module.users'
])
    .run (function ($rootScope, $window, gettextCatalog) {

    $rootScope.locales = {

        'en'   : {
            lang   : 'en',
            country: 'US',
            name   : gettextCatalog.getString ('English')
        },
        'pt-BR': {
            lang   : 'pt_BR',
            country: 'BR',
            name   : gettextCatalog.getString ('Portuguese Brazil')
        },
        'nl'   : {
            lang   : 'nl',
            country: 'NL',
            name   : gettextCatalog.getString ('Dutch')
        },
        'de'   : {
            lang   : 'de',
            country: 'DE',
            name   : gettextCatalog.getString ('German')
        },
        'fr'   : {
            lang   : 'fr',
            country: 'FR',
            name   : gettextCatalog.getString ('Français')
        }
    }

    var lang = $window.localStorage.lang || navigator.language || navigator.userLanguage;

    $rootScope.locale = $rootScope.locales[lang];

    if ($rootScope.locale === undefined) {
        $rootScope.locale = $rootScope.locales[lang];
        if ($rootScope.locale === undefined) {
            $rootScope.locale = $rootScope.locales['en'];
        }
    }

    gettextCatalog.setCurrentLanguage ($rootScope.locale.lang);

});
