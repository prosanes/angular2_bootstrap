var gulp = require('gulp'),
    gulp_jspm = require('gulp-jspm');

gulp.task('default', function() {
  return gulp.src('app/bootstrap.ts')
    .pipe(gulp_jspm({
        selfExecutingBundle: true,
        minify: true
      }))
    .pipe(gulp.dest('build/'));
});
