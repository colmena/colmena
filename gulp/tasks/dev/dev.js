// Default
var gulp        = require ('gulp'),
    runSequence = require ('run-sequence');

gulp.task ('dev', function (cb) {
    runSequence (
        // 'bower',
        'sass',
        'translate',
        'index',
        cb);
});