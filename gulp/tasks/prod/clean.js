var gulp  = require ('gulp'),
    clean = require ('gulp-clean'),
    paths = require ('../../config');

gulp.task ('clean', function () {
    return gulp.src (paths.dist, {read: false})
        .pipe (clean ());
});