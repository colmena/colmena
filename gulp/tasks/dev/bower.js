var gulp  = require ('gulp'),
    bower = require ('gulp-bower'),
    gutil = require ('gulp-util');

gulp.task ('bower', function () {
    return bower ({cmd: 'install'})
        .on ('log', function (data) {
        gutil.log ('bower', gutil.colors.cyan (data.id), data.message);
    });
});