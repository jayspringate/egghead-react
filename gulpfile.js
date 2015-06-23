var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    browserify('./app/js/client.js')
      .transform('reactify')
      .bundle()
      .pipe(source('client.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
  gulp.src('app/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('app/assets/**/*/*')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('default', ['browserify', 'copy'], function() {
  return gulp.watch('app/**/*.*', ['browserify', 'copy'])
});