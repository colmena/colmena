var gulp         = require ('gulp'),
    replace      = require ('replace'),
    paths        = require ('../../config'),
    replaceFiles = ['./www/js/config.js'];


// Cache Modules
gulp.task ('server:prod', function () {
    return replace ({
        regex      : paths.server.dev,
        replacement: paths.server.prod,
        paths      : replaceFiles,
        recursive  : false,
        silent     : false
    });
});

gulp.task ('server:dev', function () {
    return replace ({
        regex      : paths.server.prod,
        replacement: paths.server.dev,
        paths      : replaceFiles,
        recursive  : false,
        silent     : false
    });
});