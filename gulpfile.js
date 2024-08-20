var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var merge = require('merge-stream');
var path = require('path');
var fs = require('fs');

gulp.task('lint', function() {
  return gulp.src('app/components/**/*.js')
	  .pipe($.jshint())
	  .pipe($.jshint.reporter('default'))
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('copy', function () {

	$.util.log($.util.colors.blue('Copying layout files...'));
	var layout = gulp.src('app/layout/**/*.html')
		.pipe($.minifyHtml({
			quotes: true,
			empty: true,
			spare: true
	    }))
		.pipe(gulp.dest('dist/layout'));

	$.util.log($.util.colors.blue('Copying component files...'));
	var components = gulp.src('app/components/**/*.html')
		.pipe($.minifyHtml({
			quotes: true,
			empty: true,
			spare: true
	    }))
		.pipe(gulp.dest('dist/components'))

	$.util.log($.util.colors.blue('Copying bower_component files...'));
	var bower = gulp.src([
		'bower_components/**/*'
	]).pipe(gulp.dest('dist/bower_components'));

	return merge(layout, components, bower)
		.pipe($.size({title: 'copy'}));
});

gulp.task('fonts', function () {
	gulp.src([
		'bower_components/font-awesome/fonts/fontawesome-webfont.*',
		'bower_components/simple-line-icons/fonts/Simple-Line-Icons.*',
		'bower_components/bootstrap/fonts/glyphicons-halflings-regular.*',
		])
        .pipe(gulp.dest('dist/fonts/'))
    	.pipe($.size({title: 'fonts'}));
});

gulp.task('images', function () {
  return gulp.src('app/layout/theme/img/**/*')
    .pipe(gulp.dest('dist/layout/theme/img'))
    .pipe($.size({title: 'images'}));
});

gulp.task('html', function () {

    var assets = $.useref.assets({searchPath: ['app', 'dist']});

    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe($.if('*.js', $.uglify()))
        .pipe($.if('*.css', $.cssmin()))
        .pipe($.rev())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.if('*.html', $.minifyHtml({
			quotes: true,
			empty: true,
			spare: true
	    })))
	    .pipe($.revReplace())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean'], function (cb) {
	runSequence(
		'copy',
		['fonts', 'images'],
		'html',
	cb);
});
