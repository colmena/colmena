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
    basePath: './public/',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'lib/jquery/dist/jquery.js',
      'lib/angular/angular.js',
      'lib/bootstrap/dist/js/bootstrap.js',
      'lib/angular-resource/angular-resource.js',
      'lib/angular-cookies/angular-cookies.js',
      'lib/angular-route/angular-route.js',
      'lib/angular-sanitize/angular-sanitize.js',
      'lib/angular-animate/angular-animate.js',
      'lib/angular-touch/angular-touch.js',
      'lib/angular-ui-router/release/angular-ui-router.js',
      'lib/angular-formly/dist/formly.min.js',
      'lib/angular-toasty/js/ng-toasty.js',
      'lib/angular-file-upload/angular-file-upload.js',
      'lib/angular-filter/dist/angular-filter.js',
      'lib/sweetalert/dist/sweetalert-dev.js',
      'lib/angular-sweetalert/SweetAlert.js',
      'lib/angular-gravatar/build/md5.js',
      'lib/angular-gravatar/build/angular-gravatar.js',
      'lib/angular-bootstrap/ui-bootstrap-tpls.js',
      'lib/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
      'lib/codemirror/lib/codemirror.js',
      'lib/codemirror/addon/mode/overlay.js',
      'lib/codemirror/mode/gfm/gfm.js',
      'lib/codemirror/mode/markdown/markdown.js',
      'lib/angular-ui-codemirror/ui-codemirror.js',
      'lib/angular-markdown-directive/markdown.js',
      'lib/angular-elastic/elastic.js',
      'lib/angular-autoFields-bootstrap/autofields.min.js',
      'lib/angular-autoFields-bootstrap/autofields-bootstrap.min.js',
      'lib/angular-gettext/dist/angular-gettext.js',
      'lib/angular-translate/angular-translate.js',
      'lib/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'lib/angular-translate-loader-url/angular-translate-loader-url.js',
      'lib/angular-ui-grid/ui-grid.js',
      'lib/angular-loading-bar/build/loading-bar.js',
      'lib/Faker/build/build/faker.js',
      'lib/angular-mocks/angular-mocks.js',
      'js/*.js',
      'modules/*/*.js',
      'modules/**/*.js'
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
      'modules/**/controllers/*.js': 'coverage',
      'modules/**/directives/*.js': 'coverage',
      'modules/**/services/*.js': 'coverage'
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
