var gulp     = require ('gulp'),
    gulpDocs = require ('gulp-ngdocs'),
    notify   = require ('gulp-notify'),
    paths    = require ('../../config');

gulp.task ('docs', [], function () {
    var options = {};

    return gulpDocs.sections ({
        app: {
            glob : [paths.source + '/modules/**/*.js'],
            api  : true,
            title: 'Modules'
        }
    })
        .pipe (gulpDocs.process (options))
        .pipe (gulp.dest (paths.docs));
});