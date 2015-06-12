// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-07-30 using
// generator-karma 0.8.3

module.exports = function (config) {
  'use strict';

  config.set ({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: './',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'client/app/lib/jquery/dist/jquery.js',
      'client/app/lib/angular/angular.js',
      'client/app/lib/bootstrap/dist/js/bootstrap.js',
      'client/app/lib/angular-resource/angular-resource.js',
      'client/app/lib/angular-cookies/angular-cookies.js',
      'client/app/lib/angular-route/angular-route.js',
      'client/app/lib/angular-sanitize/angular-sanitize.js',
      'client/app/lib/angular-animate/angular-animate.js',
      'client/app/lib/angular-touch/angular-touch.js',
      'client/app/lib/angular-ui-router/release/angular-ui-router.js',
      'client/app/lib/angular-formly/dist/formly.min.js',
      'client/app/lib/angular-toasty/js/ng-toasty.js',
      'client/app/lib/angular-file-upload/angular-file-upload.js',
      'client/app/lib/angular-filter/dist/angular-filter.js',
      'client/app/lib/sweetalert/lib/sweet-alert.js',
      'client/app/lib/angular-sweetalert/SweetAlert.js',
      'client/app/lib/angular-gravatar/build/md5.js',
      'client/app/lib/angular-gravatar/build/angular-gravatar.js',
      'client/app/lib/angular-bootstrap/ui-bootstrap-tpls.js',
      'client/app/lib/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
      'client/app/lib/codemirror/lib/codemirror.js',
      'client/app/lib/codemirror/addon/mode/overlay.js',
      'client/app/lib/codemirror/mode/gfm/gfm.js',
      'client/app/lib/codemirror/mode/markdown/markdown.js',
      'client/app/lib/angular-ui-codemirror/ui-codemirror.js',
      'client/app/lib/angular-markdown-directive/markdown.js',
      'client/app/lib/angular-elastic/elastic.js',
      'client/app/lib/angular-autoFields-bootstrap/autofields.min.js',
      'client/app/lib/angular-autoFields-bootstrap/autofields-bootstrap.min.js',
      'client/app/lib/angular-gettext/dist/angular-gettext.js',
      'client/app/lib/angular-translate/angular-translate.js',
      'client/app/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'client/app/lib/angular-translate-loader-url/angular-translate-loader-url.js',
      'client/app/lib/angular-ui-grid/ui-grid.js',
      'client/app/lib/angular-loading-bar/build/loading-bar.js',
      'client/app/lib/Faker/build/build/faker.js',
      'client/app/lib/angular-mocks/angular-mocks.js',
      'client/app/js/*.js',
      'client/app/modules/**/*.js',
      'client/test/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage'
    ],
    preprocessors: {
      'client/app/modules/**/controllers/*.js': 'coverage',
      'client/app/modules/**/directives/*.js': 'coverage',
      'client/app/modules/**/services/*.js': 'coverage'
    }
    ,
    reporters: [
      'progress',
      'coverage'
    ],
    // tell karma how you want the coverage results
    coverageReporter: {
      type: 'html',
      // where to store the report
      dir: 'coverage/'
    },

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
