var gulp          = require ('gulp'),
    minifyHTML    = require ('gulp-minify-html'),
    templateCache = require ('gulp-angular-templatecache'),
    notify        = require ('gulp-notify'),
    paths         = require ('../../config'),
    replace       = require ('replace'),
    replaceFiles  = [paths.source + '/js/app.js'];

gulp.task ('templates', function () {
    gulp.src ([paths.source + '/modules/**/*.html'])
        .pipe (minifyHTML ({quotes: true}))
        .pipe (templateCache ({
        module    : 'cacheviews',
        filename  : 'cacheviews.js',
        root      : 'modules',
        standalone: true
    }))
        .pipe (gulp.dest (paths.source + '/js/'))
        .pipe (notify ({message: 'Templates Cache complete'}));
});

// Cache Modules
gulp.task ('cacheviews:add', function () {
    return replace ({
        regex      : "//'cacheviews'",
        replacement: "'cacheviews'",
        paths      : replaceFiles,
        recursive  : false,
        silent     : false
    });
});

gulp.task ('cacheviews:remove', function () {
    return replace ({
        regex      : "'cacheviews'",
        replacement: "//'cacheviews'",
        paths      : replaceFiles,
        recursive  : false,
        silent     : false
    });
});