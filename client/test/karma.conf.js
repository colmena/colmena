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
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/bootstrap/dist/js/bootstrap.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-touch/angular-touch.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/angular-formly/dist/formly.min.js',
      'app/bower_components/angular-toasty/js/ng-toasty.js',
      'app/bower_components/angular-file-upload/angular-file-upload.js',
      'app/bower_components/angular-filter/dist/angular-filter.js',
      'app/bower_components/sweetalert/lib/sweet-alert.js',
      'app/bower_components/angular-sweetalert/SweetAlert.js',
      'app/bower_components/angular-gravatar/build/md5.js',
      'app/bower_components/angular-gravatar/build/angular-gravatar.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/bower_components/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
      'app/bower_components/codemirror/lib/codemirror.js',
      'app/bower_components/codemirror/addon/mode/overlay.js',
      'app/bower_components/codemirror/mode/gfm/gfm.js',
      'app/bower_components/codemirror/mode/markdown/markdown.js',
      'app/bower_components/angular-ui-codemirror/ui-codemirror.js',
      'app/bower_components/angular-markdown-directive/markdown.js',
      'app/bower_components/angular-elastic/elastic.js',
      'app/bower_components/angular-autoFields-bootstrap/autofields.min.js',
      'app/bower_components/angular-autoFields-bootstrap/autofields-bootstrap.min.js',
      'app/bower_components/angular-gettext/dist/angular-gettext.js',
      'app/bower_components/angular-translate/angular-translate.js',
      'app/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'app/bower_components/angular-translate-loader-url/angular-translate-loader-url.js',
      'app/bower_components/angular-ui-grid/ui-grid.js',
      'app/bower_components/angular-loading-bar/build/loading-bar.js',
      'app/bower_components/Faker/build/build/faker.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/js/*.js',
      'app/modules/**/*.js',
      'test/**/*.js'
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
      'app/modules/**/controllers/*.js': 'coverage',
      'app/modules/**/directives/*.js': 'coverage',
      'app/modules/**/services/*.js': 'coverage'
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
