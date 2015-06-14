// Default
var gulp        = require ('gulp'),
    runSequence = require ('run-sequence');

gulp.task ('dev', function (cb) {
    runSequence (
        //'sass',
        // 'bower',
        'translate',
        'index',
        cb);
});