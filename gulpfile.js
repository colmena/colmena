'use strict';
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    bower = require('gulp-bower'),
    less = require('gulp-less'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    ngAnnotate = require('gulp-ng-annotate'),
    inject = require('gulp-inject'),
    bowerFiles = require('main-bower-files'),
    notify = require('gulp-notify'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    minifyCss = require('gulp-minify-css'),
    rev = require('gulp-rev'),
    templateCache = require('gulp-angular-templatecache'),
    gettext = require('gulp-angular-gettext'),
    extend = require('gulp-extend'),
    wrap = require('gulp-wrap'),
    stylish = require('jshint-stylish'),
    sh = require('shelljs'),
    loopbackAngular = require('gulp-loopback-sdk-angular'),
    spawn = require('child_process').spawn,
    gulpDocs = require('gulp-ngdocs'),
    node;
// Directories
var paths = {
    js: ['./client/app/js/*.js', './client/app/modules/*.js', './client/app/modules/**/*.js'],
    html: ['./client/app/modules/**/*.html'],
    images: ['./client/app/images/*'],
    css: ['./client/app/css/**/*.css', './client/app/modules/**/*.css'],
    less: ['./client/less/less/AdminLTE.less'],
    libs: ['./client/app/lib'],
    dist: './client/dist/',
    source: './client/app',
    docs: './docs',
    bower: ['bower.json', '.bowerrc']
};
gulp.task('index', function () {
    return gulp.src(paths.source + '/index.html').pipe(inject(gulp.src(bowerFiles(), {
        read: false
    }), {
        name: 'bower',
        relative: true
    })).pipe(inject(gulp.src(paths.js, {
        read: false
    }), {
        relative: true
    })).pipe(inject(gulp.src(paths.css, {
        read: false
    }), {
        relative: true
    })).pipe(gulp.dest(paths.source));
});
gulp.task('loopback', function () {
    return gulp.src('./server/server.js').pipe(loopbackAngular()).pipe(rename('lb-services.js')).pipe(gulp.dest('./client/app/js'));
});
//// Images
gulp.task('images', function () {
    gulp.src(paths.images)
    //.pipe(imageResize({width: 1080}))
    .pipe(imagemin({
        optimizationLevel: 4,
        progressive: true,
        interlace: true
    })).pipe(gulp.dest(paths.dist + '/images')).pipe(notify({
        message: 'Images task complete'
    }));
});
// Docs
gulp.task('docs', [], function () {
    var options = {};
    return gulpDocs.sections({
        app: {
            glob: [paths.source + '/modules/**/*.js'],
            api: true,
            title: 'Modules'
        },
        api: {
            glob: [paths.source + '/js/lb-services.js'],
            api: true,
            title: 'LoopBack Services'
        }
    }).pipe(gulpDocs.process(options)).pipe(gulp.dest(paths.docs));
});
// Bower
gulp.task('bower', function () {
    return bower().on('log', function (data) {
        gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});
/* $ gulp server
 * description: launch the server. If there's a server already running, kill it.
 */
gulp.task('server', function () {
    if (node) node.kill();
    node = spawn('node', ['./server/server.js'], {
        stdio: 'inherit'
    });
    node.on('close', function (code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    });
});
// Copy Fonts
gulp.task('sourcefonts', function () {
    // Ionic
    gulp.src(paths.source + '/bower_components/bootstrap/fonts/*').pipe(gulp.dest(paths.dist + '/fonts'));
    // Bootstrap
    gulp.src(paths.source + '/bower_components/ionic/fonts/*').pipe(gulp.dest(paths.dist + '/fonts'));
    // Flags
    gulp.src(paths.source + '/bower_components/flag-icon-css/flags/**/*').pipe(gulp.dest(paths.dist + '/flags'));
    // Ionicons
    gulp.src(paths.source + '/bower_components/ionicons/fonts/*').pipe(gulp.dest(paths.dist + '/fonts'));
    // Font Awesome
    gulp.src(paths.source + '/bower_components/font-awesome/fonts/*').pipe(gulp.dest(paths.dist + '/fonts'));
});
// Start Build
gulp.task('usemin', function () {
    return gulp.src(paths.source + '/index.html').pipe(usemin({
        css: [
            minifyCss()
        ],
        cssvendor: [
            minifyCss()
        ],
        html: [minifyHTML({
            empty: true
        })],
        jsvendor: [
            //jshint.reporter ('default'),
            uglify(),
            rev()
        ],
        js: [
            //jshint.reporter ('default'),
            ngAnnotate(),
            uglify(),
            rev()
        ]
    })).pipe(gulp.dest(paths.dist));
});
// Build Template
gulp.task('templates', function () {
    gulp.src([paths.source + '/modules/**/*.html']).pipe(minifyHTML({
        quotes: true
    })).pipe(templateCache({
        module: 'templatescache',
        filename: 'templatescache.js',
        root: 'modules',
        standalone: true
    })).pipe(gulp.dest(paths.js + '/js/')).pipe(notify({
        message: 'Templates Cache complete'
    }));
});
// Translate
gulp.task('gettext:po', function () {
    return gulp.src([
        paths.source + '/js/*.js',
        paths.source + '/modules/*.js',
        paths.source + '/modules/**/*.js',
        paths.source + '/modules/**/*.html'
    ]).pipe(gettext.extract('template.pot', {
        // options to pass to angular-gettext-tools...
    })).pipe(gulp.dest('./client/po/')).pipe(notify({
        message: 'Translate PO Generate'
    }));
});
gulp.task('gettext:compile', function () {
    return gulp.src('./client/po/*.po') // Stream PO translation files.
        .pipe(gettext.compile({
            format: 'json'
        })) // Compile to json
        .pipe(extend('.tmp.json')) // use .json extension for gulp-wrap to load json content
        .pipe(wrap( // Build the translation module using gulp-wrap and lodash.template
            '\'use strict\';\n\n' + 'angular.module(\'translate\',[]).run(function (gettextCatalog) {\n' + '/* jshint -W100,-W109 */\n' + '<% var langs = Object.keys(contents); var i = langs.length; while (i--) {' + 'var lang = langs[i]; var translations = contents[lang]; %>' + '  gettextCatalog.setStrings(\'<%= lang %>\', <%= JSON.stringify(translations, undefined, 2) %>);\n' + '<% }; %>' + '/* jshint +W100,+W109 */\n' + '});')).pipe(ngAnnotate()).pipe(uglify()).pipe(rename('translations.js')) // Rename to final javascript filename
        .pipe(gulp.dest(paths.source + '/js/')).pipe(notify({
            message: 'Translations.js Generate'
        }));
});
gulp.task('translate', ['gettext:po', 'gettext:compile']);
gulp.task('default', ['bower', 'less', 'index', 'translate']);
gulp.task('build', ['default', 'usemin', 'images', 'templates', 'sourcefonts'], function () {
    console.log('Build success!');
});
// Build Template
gulp.task('templates', function () {
    gulp.src(['./client/app/modules/**/*.html']).pipe(minifyHTML({
        quotes: true
    })).pipe(templateCache({
        module: 'templatescache',
        filename: 'templatescache.js',
        root: 'modules',
        standalone: true
    })).pipe(gulp.dest('./client/app/js/')).pipe(notify({
        message: 'Templates Cache complete'
    }));
});
// Translate
gulp.task('gettext:po', function () {
    return gulp.src(['./client/app/js/*.js', './client/app/modules/*.js', './client/app/modules/**/*.js', './client/app/modules/**/*.html']).pipe(gettext.extract('template.pot', {
        // options to pass to angular-gettext-tools...
    })).pipe(gulp.dest('./po/')).pipe(notify({
        message: 'Translate PO Generate'
    }));
});
gulp.task('gettext:compile', function () {
    return gulp.src('po/*.po') // Stream PO translation files.
        .pipe(gettext.compile({
            format: 'json'
        })) // Compile to json
        .pipe(extend('.tmp.json')) // use .json extension for gulp-wrap to load json content
        .pipe(wrap( // Build the translation module using gulp-wrap and lodash.template
            '\'use strict\';\n\n' + 'angular.module(\'translate\',[]).run(function (gettextCatalog) {\n' + '/* jshint -W100,-W109 */\n' + '<% var langs = Object.keys(contents); var i = langs.length; while (i--) {' + 'var lang = langs[i]; var translations = contents[lang]; %>' + '  gettextCatalog.setStrings(\'<%= lang %>\', <%= JSON.stringify(translations, undefined, 2) %>);\n' + '<% }; %>' + '/* jshint +W100,+W109 */\n' + '});')).pipe(ngAnnotate()).pipe(uglify()).pipe(rename('translations.js')) // Rename to final javascript filename
        .pipe(gulp.dest('./client/app/js/')).pipe(notify({
            message: 'Translations.js Generate'
        }));
});
gulp.task('translate', ['gettext:po', 'gettext:compile']);
gulp.task('libcopy', function () {
    // the base option sets the relative root for the set of files,
    // preserving the folder structure
    gulp.src(paths.libs, {
        base: 'app'
    }).pipe(gulp.dest('www/'));
    gulp.src('app/data/**/*', {
        base: 'app'
    }).pipe(gulp.dest('www/'));
});
gulp.task('less', function (done) {
    gulp.src(paths.less).pipe(less()).pipe(gulp.dest(paths.source + '/css/')).on('end', done);
});
gulp.task('watch', function () {
    gulp.watch(paths.less, ['less']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.js, ['js']);
});
// run source scripts through JSHint
gulp.task('lint', function () {
    return gulp.src(paths.js).pipe(jshint()).pipe(jshint.reporter(stylish));
});
gulp.task('install', ['git-check'], function () {
    return bower.commands.install().on('log', function (data) {
        gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});
gulp.task('git-check', function (done) {
    if (!sh.which('git')) {
        console.log('  ' + gutil.colors.red('Git is not installed.'), '\n  Git, the version control system, is required to download Ionic.', '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.', '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.');
        process.exit(1);
    }
    done();
});
// clean up if an error goes unhandled.
process.on('exit', function () {
    if (node) node.kill();
});
