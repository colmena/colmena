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
        'cacheviews:add',
        'server:prod',
        'usemin',
        'cacheviews:remove',
        'server:dev',
        cb
    );
});