var gulp  = require ('gulp'),
    karma = require ('gulp-karma');

var testFiles = [
    'client/js/*.js',
    'client/js/modules/*.js',
    'client/js/modules/*/*.spec.js',
];

gulp.task ('test', function () {
    // Be sure to return the stream
    return gulp.src (testFiles)
        .pipe (karma ({
            configFile: './karma.conf.js',
            action    : 'run'
        }))
        .on ('error', function (err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
});

gulp.task ('karma', function () {
    gulp.src (testFiles)
        .pipe (karma ({
            configFile: 'karma.conf.js',
            action    : 'watch'
        }));
});
