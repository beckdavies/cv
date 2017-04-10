var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css')
    rename = require('gulp-rename');

var paths = {
      styles: {
          src: 'src/scss/*.scss',
          dest: 'built/css/'
      }
    };

gulp.task('sass', function(){
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(paths.styles.dest))
});


// Gulp watch syntax
gulp.task('watch', function(){
  gulp.watch(paths.styles.src, ['sass']); 
  // Other watchers
})