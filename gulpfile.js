"use strict";

var gulp = require('gulp');
var recess = require('gulp-recess');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var plumber = require('gulp-plumber');

var dist = './public/';

gulp.task('styles', function () {
    gulp.src( './styles/style.less')
        .pipe(recess()) // Linting CSS
        .pipe(plumber())
        .pipe(less()) // Compile LESS
        //.pipe(minifyCSS()) // Minify CSS
        .pipe(gulp.dest(dist + 'css'));
});

gulp.task('js', function(){

});

gulp.task('watch', function() {
    gulp.start('default');

    var onChange = function (event) {
        console.log('File '+event.path+' has been '+event.type);
    };

    gulp.watch('./styles/*.less', ['styles'])
        .on('change', onChange);

    gulp.watch('./js/*.js', ['js'])
        .on('change', onChange);
});

gulp.task('default', function () {
    gulp.start('js', 'styles');
});