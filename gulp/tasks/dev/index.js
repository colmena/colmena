var gulp       = require ('gulp'),
    inject     = require ('gulp-inject'),
    bowerFiles = require ('main-bower-files'),
    notify     = require ('gulp-notify'),
    paths      = require ('../../config');

gulp.task ('index', function () {
    return gulp.src (paths.src.index)
        .pipe (inject (gulp.src (bowerFiles (), {read: false}), {name: 'bower', relative: true}))
        .pipe (inject (gulp.src (paths.src.js, {read: false}), {relative: true}))
        .pipe (inject (gulp.src (paths.src.css, {read: false}), {relative: true}))
        .pipe (gulp.dest (paths.source));
});