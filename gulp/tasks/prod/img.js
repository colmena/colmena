var gulp     = require ('gulp'),
    imagemin = require ('gulp-imagemin'),
    notify   = require ('gulp-notify'),
    paths    = require ('../../config');

gulp.task ('img', function () {
    return gulp.src ('./www/img/**/*')
        //.pipe(imageResize({width: 1080}))
        .pipe (imagemin ({optimizationLevel: 4, progressive: true, interlace: true}))
        .pipe (gulp.dest (paths.dist + '/img'));
});

gulp.task ('img_x2', function () {
    return gulp.src ('./www/img_x2/**/*')
        //.pipe(imageResize({width: 1080}))
        .pipe (imagemin ({optimizationLevel: 4, progressive: true, interlace: true}))
        .pipe (gulp.dest (paths.dist + '/img_x2'));
});