var gulp = require('gulp');
// var browserify = require('gulp-browserify'),
var browserify = require('browserify');
   transform = require('vinyl-transform');
    uglify = require('gulp-uglify'),
    // notify = require( 'gulp-notify'),
    size = require('gulp-size');

// Basic usage
gulp.task('default', function() {

  // gulp.watch(['amf.js', 'lib/**/*.js'], function(e) {
    var browserified = transform(function(filename) {
      var b = browserify(filename);
      return b.bundle();
    });
    

    gulp.src('amf.js')
        .pipe(browserified)
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
        // .pipe(notify('Done!'))
        .pipe(size());
  // });
});