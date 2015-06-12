var gulp          = require ('gulp'),
    minifyHTML    = require ('gulp-minify-html'),
    templateCache = require ('gulp-angular-templatecache'),
    notify        = require ('gulp-notify'),
    paths         = require ('../../config'),
    replace       = require ('replace'),
    replaceFiles  = ['./www/js/app.js'];

gulp.task ('templates', function () {
    gulp.src (['./www/modules/**/*.html'])
        .pipe (minifyHTML ({quotes: true}))
        .pipe (templateCache ({
        module    : 'cachemodules',
        filename  : 'cachemodules.js',
        root      : 'modules',
        standalone: true
    }))
        .pipe (gulp.dest ('./www/js/'))
        .pipe (notify ({message: 'Templates Cache complete'}));
});

// Cache Modules
gulp.task ('cachemodules:add', function () {
    return replace ({
        regex      : "//'cachemodules'",
        replacement: "'cachemodules'",
        paths      : replaceFiles,
        recursive  : false,
        silent     : false
    });
});

gulp.task ('cachemodules:remove', function () {
    return replace ({
        regex      : "'cachemodules'",
        replacement: "//'cachemodules'",
        paths      : replaceFiles,
        recursive  : false,
        silent     : false
    });
});