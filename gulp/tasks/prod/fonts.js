var gulp  = require ('gulp'),
    paths = require ('../../config');

gulp.task ('fonts', function () {

    gulp.src (paths.source + '/img/**').pipe (gulp.dest (paths.dist + '/img'));

    // Ionic
    gulp.src (paths.source + '/lib/ionic/fonts/**').pipe (gulp.dest (paths.dist + '/fonts'));

    // Fonts
    gulp.src (paths.source + '/fonts/**').pipe (gulp.dest (paths.dist + '/fonts'));

    // Bootstrap
    gulp.src (paths.source + '/lib/bootstrap/fonts/**').pipe (gulp.dest (paths.dist + '/fonts'));

    // Style
    gulp.src (paths.source + '/lib/select2/*.png').pipe (gulp.dest (paths.dist + '/styles'));

    // jquery ui themes
    gulp.src (paths.source + '/lib/jquery-ui/themes/redmond/images/**').pipe (gulp.dest (paths.dist + '/styles/images'));


    // ckeditor
    gulp.src (paths.source + '/lib/ckeditor/config.js').pipe (gulp.dest (paths.dist + '/'));
    gulp.src (paths.source + '/lib/ckeditor/skins/**').pipe (gulp.dest (paths.dist + '/skins'));
    gulp.src (paths.source + '/lib/ckeditor/lang/**').pipe (gulp.dest (paths.dist + '/lang'));

});
