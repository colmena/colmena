// Default
var gulp        = require ('gulp'),
    runSequence = require ('run-sequence');


// Default
gulp.task ('default', function (cb) {
    return runSequence (
        'bower',
        // 'sass',
        //'fonts',
        'translate',
        'templates',
        'index',
        'server',
        cb
    );
});

