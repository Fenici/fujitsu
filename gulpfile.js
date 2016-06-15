var gulp = require('gulp');
    sass = require('gulp-sass');
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    watch = require('gulp-watch');


gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
    // content
    //
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('js/'));
});


gulp.task('styles', function() {
    // content
    gulp.src('css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('minCSS'));

});

gulp.task('watch', function() {
    gulp.watch('js/*.js',['scripts']);
    gulp.watch('css/*.css', ['styles']);
});

gulp.task('default',['sass','scripts','styles','watch']);
