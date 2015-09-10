var gulp          = require('gulp'),
    fs            = require('fs'),
    gutil         = require('gulp-util'),
    bower         = require('bower'),
    concat        = require('gulp-concat'),
    sass          = require('gulp-sass'),
    rename        = require('gulp-rename'),
    sh            = require('shelljs'),
    clean         = require('gulp-clean'),
    inject        = require('gulp-inject'),
    bowerFiles    = require('main-bower-files'),
    gettext       = require('gulp-angular-gettext'),
    wrap          = require('gulp-wrap'),
    extend        = require('gulp-extend'),
    ngAnnotate    = require('gulp-ng-annotate'),
    uglify        = require('gulp-uglify'),
    jshint        = require('gulp-jshint'),
    stylish       = require('jshint-stylish'),
    minifyHTML    = require('gulp-minify-html'),
    minifyCSS     = require('gulp-minify-css'),
    templateCache = require('gulp-angular-templatecache'),
    replace       = require('replace'),
    usemin        = require('gulp-usemin'),
    header        = require('gulp-header'),
    imagemin      = require('gulp-imagemin'),
    stripDebug    = require('gulp-strip-debug'),
    rev           = require('gulp-rev'),
    karma         = require('gulp-karma'),
    iife          = require("gulp-iife"),
    plumber       = require('gulp-plumber'),
    runSequence   = require('run-sequence'),
    rev           = require('gulp-rev'),
    webserver     = require('gulp-webserver'),
    opn           = require('opn'),
    paths         = require('./gulp.config'),
    replaceFiles  = ['./www/js/app.js'],
    config        = ['./www/js/config.js'];


gulp.task('webserver', function () {
  gulp.src('./www')
    .pipe(webserver({
      host            : paths.server.host,
      port            : paths.server.port,
      livereload      : true,
      directoryListing: false
    }));
});


gulp.task('openbrowser', function () {
  opn('http://' + paths.server.host + ':' + paths.server.port);
});


// Master Tasks
gulp.task('default', [
  'sass',
  'translate',
  'inject',
  'watch',
  'webserver',
  'openbrowser'
]);

gulp.task('build', function (cb) {
  runSequence(
    // 'bower',
    'sass',
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
  return gulp.src(paths.dist, {read: false})
    .pipe(clean());
});


// Inject Files
gulp.task('inject', function () {
  return gulp.src(paths.src.index)
    .pipe(inject(gulp.src(bowerFiles(), {read: false}), {
      name    : 'bower',
      relative: true
    }))
    .pipe(inject(gulp.src(paths.src.js, {read: false}), {relative: true}))
    .pipe(inject(gulp.src(paths.src.css, {read: false}), {relative: true}))
    .pipe(gulp.dest(paths.source));
});

// Sass
gulp.task('sass', function (done) {
  gulp.src(paths.src.sass)
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

// Watch
gulp.task('watch', function () {
  gulp.watch(paths.src.sassWatch, ['sass']);
  gulp.watch(paths.libs, ['inject']);
  gulp.watch(paths.src.js, [
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
  return gulp.src(paths.src.translate)
    .pipe(gettext.extract('template.pot', {
      // options to pass to angular-gettext-tools...
    }))
    .pipe(gulp.dest('./translate/'));
});

gulp.task('gettext:compile', function () {
  return gulp.src('translate/*.po') // Stream PO translation files.
    .pipe(gettext.compile({format: 'json'})) // Compile to json
    .pipe(extend('.tmp.json')) // use .json extension for gulp-wrap to load json content
    .pipe(wrap( // Build the translation module using gulp-wrap and lodash.template
      '\'use strict\';\n' +
      'angular.module(\'translate.app\',[\'ionic\'])\n' +
      '.run(function (gettextCatalog) {\n' +
      '<% var langs = Object.keys(contents); var i = langs.length; while (i--) {' +
      'var lang = langs[i]; var translations = contents[lang]; %>' +
      '  gettextCatalog.setStrings(\'<%= lang %>\', <%= JSON.stringify(translations, undefined, 2) %>);\n' +
      '<% }; %>' +
      '});'))
    //.pipe (ngAnnotate ())
    //.pipe (uglify ())
    .pipe(rename('translate.js')) // Rename to final javascript filename
    .pipe(iife())
    .pipe(gulp.dest(paths.source + '/js/'));
});

gulp.task('translate', [
  'gettext:po',
  'gettext:compile'
]);

// Lint

gulp.task('jshint', function () {
  return gulp.src(paths.src.js)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// Templates
gulp.task('template:module', function () {
  gulp.src(['./www/module/**/*.html'])
    .pipe(minifyHTML({quotes: true}))
    .pipe(templateCache({
      module    : 'cachemodule',
      filename  : 'cachemodule.js',
      root      : 'module',
      standalone: true
    }))
    .pipe(iife())
    .pipe(gulp.dest('./www/js/'));
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
  gulp.src(paths.source + '/img/**').pipe(gulp.dest(paths.dist + '/img'));

  // Deploy
  gulp.src(paths.source + '/fonts/**').pipe(gulp.dest(paths.dist + '/fonts'));

});

// Copy Fonts
gulp.task('copy:font', function () {

  // Ionic
  gulp.src(paths.source + '/lib/ionic/fonts/**').pipe(gulp.dest(paths.source + '/fonts'));

  // Ionic Icons
  gulp.src(paths.source + '/lib/simple-line-icons/fonts/**').pipe(gulp.dest(paths.source + '/fonts'));


});

// Image Mim

gulp.task('img', function () {
  return gulp.src('./www/img/**/*')
    //.pipe(imageResize({width: 1080}))
    .pipe(imagemin({
      optimizationLevel: 4,
      progressive      : true,
      interlace        : true
    }))
    .pipe(gulp.dest(paths.dist + '/img'));
});

gulp.task('img_x2', function () {
  return gulp.src('./www/img_x2/**/*')
    //.pipe(imageResize({width: 1080}))
    .pipe(imagemin({
      optimizationLevel: 4,
      progressive      : true,
      interlace        : true
    }))
    .pipe(gulp.dest(paths.dist + '/img_x2'));
});

// Minify
// Get copyright using NodeJs file system
var getCopyright = function () {
  return fs.readFileSync('./LICENSE.md');
};


gulp.task('usemin', function () {
  return gulp
    .src(paths.source + '/index.html')
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
          version: paths.version
        }),
        rev()
      ]
    }))
    .pipe(gulp.dest(paths.dist));
});

// Replaces
gulp.task('replace:prod', function () {
  return replace({
    regex      : paths.const.api.dev,
    replacement: paths.const.api.prod,
    paths      : config,
    recursive  : false,
    silent     : false
  });
});

gulp.task('replace:dev', function () {
  return replace({
    regex      : paths.const.api.prod,
    replacement: paths.const.api.dev,
    paths      : config,
    recursive  : false,
    silent     : false
  });
});

// Imagemin images and ouput them in dist
gulp.task('imagemin', ['clean'], function () {
  gulp.src(paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dist + 'img'));
});

// Karma Test
gulp.task('test', function () {
  return
  gulp.src(config.src.js)
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

