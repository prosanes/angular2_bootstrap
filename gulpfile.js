var gulp = require('gulp'),
    gulp_jspm = require('gulp-jspm');

gulp.task('default', function() {
  return gulp.src('lib/main.js')
    .pipe(gulp_jspm({
        selfExecutingBundle: true
      }))
    .pipe(gulp.dest('build/'));
});
