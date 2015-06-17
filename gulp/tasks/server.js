var gulp = require('gulp'),
    paths = require('../config'),
    spawn = require('child_process')
    .spawn,
    plugins = require('gulp-load-plugins')(),
    livereload = require('gulp-livereload'),
    node;

/*
NOTE: gulp server : producao
TODO: gulp server:dev : livereload front, livreload back
TODO: gulp server:test : livereload front, livreload back, test 
*/

gulp.task('server', function () {
    if (node) node.kill()
    node = spawn('node', ['server/server.js'], {
        stdio: 'inherit'
    })
    node.on('close', function (code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    });
});


// clean up if an error goes unhandled.
process.on('exit', function () {
    if (node) node.kill()
})