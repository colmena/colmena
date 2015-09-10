// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-07-30 using
// generator-karma 0.8.3

module.exports = function (config) {
  config.set({

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'www',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
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
      'lib/sweetalert/lib/sweet-alert.js',
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
      'module/*.js',
      'module/**/*.js',
      'js/*.js'
    ],


    // list of files to exclude
    exclude: [],


    // Which plugins to enable
    plugins         : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage'
    ],
    preprocessors   : {
      'modules/**/*.js'   : 'coverage'
    }
    ,
    reporters       : [
      'progress',
      'coverage'
    ],
    // tell karma how you want the coverage results
    coverageReporter: {
      type: 'html',
      // where to store the report
      dir : 'coverage/'
    },


    // web server port
    port: 8080,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
