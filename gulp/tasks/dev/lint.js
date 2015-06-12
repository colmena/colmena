var gulp    = require ('gulp'),
    jshint  = require ('gulp-jshint'),
    stylish = require ('jshint-stylish'),
    notify  = require ('gulp-notify'),
    paths   = require ('../../config');

gulp.task ('dev:lint', function () {
    return gulp.src (paths.src.js)
        .pipe (jshint ())
        .pipe (jshint.reporter (stylish));
});
