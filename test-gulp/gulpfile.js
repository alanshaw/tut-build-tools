var gulp = require('gulp'),
        minifyCSS = require('gulp-minify-css');

gulp.task('minify-css', function() {
  gulp.src('./static/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/'))
});

