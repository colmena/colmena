var gulp            = require('gulp'),
    fs              = require('fs'),
    gutil           = require('gulp-util'),
    bower           = require('bower'),
    rename          = require('gulp-rename'),
    sh              = require('shelljs'),
    clean           = require('gulp-clean'),
    inject          = require('gulp-inject'),
    bowerFiles      = require('main-bower-files'),
    gettext         = require('gulp-angular-gettext'),
    wrap            = require('gulp-wrap'),
    extend          = require('gulp-extend'),
    ngAnnotate      = require('gulp-ng-annotate'),
    uglify          = require('gulp-uglify'),
    jshint          = require('gulp-jshint'),
    stylish         = require('jshint-stylish'),
    minifyHTML      = require('gulp-minify-html'),
    minifyCSS       = require('gulp-minify-css'),
    templateCache   = require('gulp-angular-templatecache'),
    replace         = require('replace'),
    usemin          = require('gulp-usemin'),
    header          = require('gulp-header'),
    imagemin        = require('gulp-imagemin'),
    stripDebug      = require('gulp-strip-debug'),
    rev             = require('gulp-rev'),
    karma           = require('gulp-karma'),
    iife            = require("gulp-iife"),
    runSequence     = require('run-sequence'),
    rev             = require('gulp-rev'),
    webserver       = require('gulp-webserver'),
    opn             = require('opn'),
    ngConstant      = require('gulp-ng-constant'),
    prettify        = require('gulp-jsbeautifier'),
    loopbackAngular = require('gulp-loopback-sdk-angular'),
    nodemon         = require('gulp-nodemon'),
    config          = require('./gulp.config');


gulp.task('api', function () {
  return nodemon({
    script: 'server/server.js',
    ext   : 'js json',
    watch : [
      'common',
      'server'
    ]
  })
})

gulp.task('webserver', function () {
  return gulp.src('./client/www')
    .pipe(webserver({
      host            : config.server.host,
      port: config.server.live,
      livereload: true,
      directoryListing: false
    }));
});


gulp.task('openbrowser', function () {
  return opn('http://' + config.server.host + ':' + config.server.live);
});



gulp.task('default', function (cb) {
  runSequence(
    'loopback',
    'api',
    'config',
    'translate',
    'inject',
    'prettify',
    'watch',
    'webserver',
    'openbrowser',
    cb);
});

gulp.task('build', function (cb) {
  runSequence(
    // 'bower',
    'translate',
    'copy:font',
    'inject',
    cb);
});

gulp.task('prod', function (cb) {
  return runSequence(
    'templates',
    'dev',
    'clean',
    'copy',
    'cacheapp:add',
    'cachemodule:add',
    'usemin',
    'cacheapp:remove',
    'cachemodule:remove',
    cb
  );
});

gulp.task('clean', function () {
  return gulp.src(config.dist, {read: false})
    .pipe(clean());
});

// Generate config file
gulp.task('config', function () {
  return gulp.src('./config.json')
    .pipe(ngConstant({
        name     : 'config',
        space: ' ',
        wrap : '(function(window, angular, undefined) { \'use strict\'; \n\n <%= __ngModule %> }  )(window, window.angular);',
        constants: {
          ENV: {
            apiUrl : config.server.api,
            siteUrl: config.server.site
          }
        }
      }
    ))
    .pipe(gulp.dest(config.source + '/js'));
  ;
});


// Inject Files
gulp.task('inject', function () {
  return gulp.src(config.src.index)
    .pipe(inject(gulp.src(bowerFiles(), {read: false}), {
      name    : 'bower',
      relative: true
    }))
    .pipe(inject(gulp.src(config.src.js, {read: false}), {relative: true}))
    .pipe(inject(gulp.src(config.src.css, {read: false}), {relative: true}))
    .pipe(gulp.dest(config.source));
});


// Watch
gulp.task('watch', function () {
  gulp.watch(config.src.lib, ['inject']);
  gulp.watch(config.src.js, [
    'inject',
    'translate'
  ]);
});


// Install
gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
    .on('log', function (data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});


// Git Check
gulp.task('git-check', function (done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});


// Translate
gulp.task('gettext:po', function () {
  return gulp.src(config.src.translate)
    .pipe(gettext.extract('template.pot', {
      // options to pass to angular-gettext-tools...
    }))
    .pipe(gulp.dest(config.translate));
});

gulp.task('gettext:compile', function () {
  return gulp.src(config.translate + '/*.po') // Stream PO translation files.
    .pipe(gettext.compile({format: 'json'})) // Compile to json
    .pipe(extend('.tmp.json')) // use .json extension for gulp-wrap to load json content
    .pipe(wrap( // Build the translation module using gulp-wrap and lodash.template
      '(function(window, angular, undefined) { \'use strict\';' +
      'angular.module(\'translate.app\',[\'ionic\'])\n' +
      '.run(function (gettextCatalog) {\n' +
      '<% var langs = Object.keys(contents); var i = langs.length; while (i--) {' +
      'var lang = langs[i]; var translations = contents[lang]; %>' +
      '  gettextCatalog.setStrings(\'<%= lang %>\', <%= JSON.stringify(translations, undefined, 2) %>);\n' +
      '<% }; %>' +
      '});' +
      '})(window, window.angular);'
    ))
    //.pipe (ngAnnotate ())
    //.pipe (uglify ())
    .pipe(rename('translate.js')) // Rename to final javascript filename
    .pipe(iife())
    .pipe(gulp.dest(config.source + '/js/'));
});

gulp.task('translate', [
  'gettext:po',
  'gettext:compile'
]);

// Lint

gulp.task('jshint', function () {
  return gulp.src(config.src.js)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// Templates
gulp.task('template:module', function () {
  return gulp.src([config.source + '/module/**/*.html'])
    .pipe(minifyHTML({quotes: true}))
    .pipe(templateCache({
      module    : 'cachemodule',
      filename: 'cachemodule.js',
      root    : 'module',
      standalone: true
    }))
    .pipe(iife())
    .pipe(gulp.dest(config.source + '/js/'));
});

gulp.task('templates', [
  'template:module'
]);

// Cache Modules
// ADD
gulp.task('cacheapp:add', function () {
  return replace({
    regex      : "//'cacheapp'",
    replacement: "'cacheapp'",
    paths      : replaceFiles,
    recursive  : false,
    silent     : false
  });
});

gulp.task('cachemodule:add', function () {
  return replace({
    regex      : "//'cachemodule'",
    replacement: "'cachemodule'",
    paths      : replaceFiles,
    recursive  : false,
    silent     : false
  });
});

// Copy
gulp.task('copy', function () {
  // Images
  gulp.src(config.source + '/img/**').pipe(gulp.dest(config.dist + '/img'));

  // Deploy
  gulp.src(config.source + '/fonts/**').pipe(gulp.dest(config.dist + '/fonts'));

});

// Copy Fonts
gulp.task('copy:font', function () {

  // Ionic
  gulp.src(config.source + '/lib/ionic/fonts/**').pipe(gulp.dest(config.source + '/fonts'));

  // Ionic Icons
  gulp.src(config.source + '/lib/simple-line-icons/fonts/**').pipe(gulp.dest(config.source + '/fonts'));


});

// Image Mim

gulp.task('img', function () {
  return gulp.src(config.source + '/img/**/*')
    //.pipe(imageResize({width: 1080}))
    .pipe(imagemin({
      optimizationLevel: 4,
      progressive      : true,
      interlace        : true
    }))
    .pipe(gulp.dest(config.dist + '/img'));
});

gulp.task('img_x2', function () {
  return gulp.src(config.source + '/img_x2/**/*')
    //.pipe(imageResize({width: 1080}))
    .pipe(imagemin({
      optimizationLevel: 4,
      progressive      : true,
      interlace        : true
    }))
    .pipe(gulp.dest(config.dist + '/img_x2'));
});

// Minify
// Get copyright using NodeJs file system
var getCopyright = function () {
  return fs.readFileSync('./LICENSE.md');
};


gulp.task('usemin', function () {
  return gulp
    .src(config.source + '/index.html')
    .pipe(usemin({
      css      : [
        minifyCSS()
      ],
      cssvendor: [
        minifyCSS()
      ],
      html     : [
        minifyHTML({
          empty: true
        })
      ],
      jsvendor : [
        // jshint.reporter ('default'),
        uglify(),
        rev()
      ],
      js       : [
        stripDebug(),
        //iife (),
        jshint.reporter('default'),
        ngAnnotate({
          add: true
        }),
        uglify(),
        header(getCopyright(), {
          version: config.version
        }),
        rev()
      ]
    }))
    .pipe(gulp.dest(config.dist));
});

// Replaces
gulp.task('replace:prod', function () {
  return replace({
    regex      : config.const.api.dev,
    replacement: config.const.api.prod,
    paths      : config,
    recursive  : false,
    silent     : false
  });
});

gulp.task('replace:dev', function () {
  return replace({
    regex      : config.const.api.prod,
    replacement: config.const.api.dev,
    paths      : config,
    recursive  : false,
    silent     : false
  });
});

// Imagemin images and ouput them in dist
gulp.task('imagemin', ['clean'], function () {
  gulp.src(config.images)
    .pipe(imagemin())
    .pipe(gulp.dest(config.dist + 'img'));
});

// Karma Test
gulp.task('test', function () {
  return gulp.src(config.src.js)
    .pipe(karma({
      configFile: './karma.conf.js',
      action    : run
    }))
    .on('error', function (err) {
      throw err;
    });
});

// Bump
gulp.task('bump', require('gulp-cordova-bump'));

// Loopback
gulp.task('loopback', function () {
  return gulp.src('./server/server.js')
    .pipe(loopbackAngular({}))
    .pipe(rename('lb-services.js'))
    .pipe(gulp.dest(config.source + '/js/'));
});

// Prettify Code
gulp.task('prettify', [
  'prettify:js:js',
  'prettify:js:modules',
  'prettify:html:modules'
]);

gulp.task('prettify:js:js', function () {
  return gulp.src(config.source + '/js/*.js')
    .pipe(prettify({config: ".jsbeautifyrc"}))
    .pipe(gulp.dest(config.source + '/js'));
});

gulp.task('prettify:js:modules', function () {
  return gulp.src([
      config.source + '/modules/*.js',
      config.source + '/modules/**/*.js'
    ])
    .pipe(prettify({config: ".jsbeautifyrc"}))
    .pipe(gulp.dest(config.source + '/modules'));
});

// HTML
gulp.task('prettify:html:modules', function () {
  return gulp.src(config.source + '/modules/*/view/*.html')
    .pipe(prettify({
      braceStyle         : "collapse",
      indentChar: " ",
      indentScripts: "keep",
      indentSize   : 4,
      maxPreserveNewlines: 10,
      preserveNewlines   : true,
      wrapLineLength     : 0
    }))
    .pipe(gulp.dest(config.source + '/modules'));
});
