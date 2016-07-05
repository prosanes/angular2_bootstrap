var gulp = require('gulp'),
    shell = require('gulp-shell');

gulp.task('default', shell.task('jspm build app/main.ts dist/build.js --minify --skip-source-maps'))

