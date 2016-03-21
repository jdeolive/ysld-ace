var gulp = require('gulp')
var connect = require('gulp-connect')
var concat = require('gulp-concat')
var minify = require('gulp-minify')
var clean = require('gulp-clean')
var debug = require('gulp-debug')

var paths = {
  src: 'src/*.js',
  dist: 'dist'
};
gulp.task('scripts', function() {
  gulp.src(paths.src)
    .pipe(concat('ysld-ace.js'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('minify', ['scripts'], function() {
  gulp.src(paths.dist + '/*.js')
    .pipe(debug())
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      }
    }))
    .pipe(gulp.dest(paths.dist))
});

gulp.task('clean', function() {
  gulp.src(paths.dist)
    .pipe(clean());
});

gulp.task('watch', function() {
  gulp.watch(paths.src, ['scripts'])
});

gulp.task('serve', function() {
  connect.server({
    root: ['.'],
    port: 9000,
    livereload: true
  })
});

gulp.task('dev', ['scripts', 'serve', 'watch']);
gulp.task('build', ['scripts']);
gulp.task('dist', ['minify']);
