var
    dev         = require ('../dev/dev'),
    gulp        = require ('gulp'),
    runSequence = require ('run-sequence');

gulp.task ('prod', function (cb) {
    return runSequence (
        'templates',
        'dev',
        'clean',
        'fonts',
        'cachemodules:add',
        'server:prod',
        'usemin',
        'cachemodules:remove',
        'server:dev',
        cb
    );
});