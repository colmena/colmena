var gulp = require('gulp'),
		plugins = require('gulp-load-plugins'),
		rename = require('gulp-rename'),
		loopbackAngular = require('gulp-loopback-sdk-angular'),
		paths      = require ('../../config');

gulp.task('loopback', function(){
		return gulp.src('./server/server.js')
					.pipe(loopbackAngular())
					.pipe(rename('lb-services.js'))
					.pipe(gulp.dest('./client/app/js/'));
});
