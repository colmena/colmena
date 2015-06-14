var gulp    = require ('gulp'),
    plugins = require ('gulp-load-plugins') (),
    paths   = require ('../../config');

gulp.task ('usemin', function () {
    return gulp.src (paths.source + '/index.html')
        .pipe (plugins.usemin ({
        css      : [
            plugins.minifyCss ()
        ],
        cssvendor: [
            plugins.minifyCss ()
        ],
        html     : [plugins.minifyHtml ({empty: true})],
        jsvendor : [
            // jshint.reporter ('default'),
            plugins.uglify (),
            plugins.rev ()
        ],
        js       : [
            plugins.jshint.reporter ('default'),
            plugins.stripDebug (),
            plugins.ngAnnotate ({
                add: true
            }),
            plugins.uglify ({
                preserveComments: false
            }),
            plugins.rev ()
        ]
    }))
        .pipe (gulp.dest (paths.dist));
});

gulp.task ('anote', function () {
    return gulp.src (paths.src.js)
        .pipe (plugins.jshint.reporter ())
        .pipe (plugins.ngAnnotate ())
        .pipe (gulp.dest ('dist'));
});