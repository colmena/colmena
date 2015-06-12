var gulp       = require ('gulp'),
    gettext    = require ('gulp-angular-gettext'),
    wrap       = require ('gulp-wrap'),
    extend     = require ('gulp-extend'),
    ngAnnotate = require ('gulp-ng-annotate'),
    uglify     = require ('gulp-uglify'),
    rename     = require ('gulp-rename'),
    notify     = require ('gulp-notify'),
    paths      = require ('../../config');


gulp.task ('gettext:po', function () {
    return gulp.src ([
        paths.source + '/js/*.js',
        paths.source + '/modules/**/*.js',
        paths.source + '/modules/**/*.html'
    ])
        .pipe (gettext.extract ('template.pot', {
        // options to pass to angular-gettext-tools...
    }))
        .pipe (gulp.dest ('./po/'))
        .pipe (notify ({message: 'Translate PO Generate'}));
});

gulp.task ('gettext:compile', function () {
    return gulp.src ('po/*.po') // Stream PO translation files.
        .pipe (gettext.compile ({format: 'json'})) // Compile to json
        .pipe (extend ('.tmp.json')) // use .json extension for gulp-wrap to load json content
        .pipe (wrap ( // Build the translation module using gulp-wrap and lodash.template
        '\'use strict\';\n\n' +
        'angular.module(\'translate\',[]).run(function (gettextCatalog) {\n' +
        '/* jshint -W100,-W109 */\n' +
        '<% var langs = Object.keys(contents); var i = langs.length; while (i--) {' +
        'var lang = langs[i]; var translations = contents[lang]; %>' +
        '  gettextCatalog.setStrings(\'<%= lang %>\', <%= JSON.stringify(translations, undefined, 2) %>);\n' +
        '<% }; %>' +
        '/* jshint +W100,+W109 */\n' +
        '});'))
        .pipe (ngAnnotate ())
        .pipe (uglify ())
        .pipe (rename ('translations.js')) // Rename to final javascript filename
        .pipe (gulp.dest (paths.source + '/js/'))
        .pipe (notify ({message: 'Translations.js Generate'}));
});

gulp.task ('translate', [
    'gettext:po',
    'gettext:compile'
]);