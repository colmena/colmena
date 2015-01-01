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
    basePath: '../client',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-formly/dist/formly.min.js',
      'bower_components/angular-toasty/js/ng-toasty.js',
      'bower_components/angular-file-upload/angular-file-upload.js',
      'bower_components/angular-filter/dist/angular-filter.js',
      'bower_components/sweetalert/lib/sweet-alert.js',
      'bower_components/angular-sweetalert/SweetAlert.js',
      'bower_components/angular-gravatar/build/md5.js',
      'bower_components/angular-gravatar/build/angular-gravatar.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
      'bower_components/codemirror/lib/codemirror.js',
      'bower_components/codemirror/addon/mode/overlay.js',
      'bower_components/codemirror/mode/gfm/gfm.js',
      'bower_components/codemirror/mode/markdown/markdown.js',
      'bower_components/angular-ui-codemirror/ui-codemirror.js',
      'bower_components/showdown/compressed/showdown.js',
      'bower_components/angular-markdown-directive/markdown.js',
      'bower_components/angular-elastic/elastic.js',
      'js/**.js',
      'modules/*/*.js',
      'modules/**/**/*.js'
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

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // coverage reporter generates the coverage
    reporters: [ 'progress', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'js/*.js' : 'coverage',
      'modules/**/controllers/*.js' : 'coverage',
      'modules/**/services/*.js' : 'coverage',
      'modules/**/directives/*.js' : 'coverage',
      '!modules/**/tests/*': 'coverage'
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : '../coverage/'
    }

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
