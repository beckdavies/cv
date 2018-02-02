var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    svgo = require('gulp-svgo');

var paths = {
    sass: {
        src: 'src/scss/*.scss',
        dest: 'built/css/'
    },
    js: {
        src: 'src/js/*.js',
        dest: 'built/js/'
    },
    svg: {
        src: 'src/svg/*.svg',
        dest: 'built/svg/'
    },

  };

// ---- //
// SASS //
// ---- //

gulp.task('sass', function(){
  return gulp.src(paths.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest(paths.sass.dest))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(paths.sass.dest))
});

// -- //
// JS //
// -- //

gulp.task('js', function() {  
  return gulp.src(paths.js.src)
    .pipe(gulp.dest(paths.js.dest))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify().on('error', function(e){
        console.log(e);
     }))
    .pipe(gulp.dest(paths.js.dest));
});


// --- //
// SVG //
// --- //
 
gulp.task('svg', function() {
  return gulp.src(paths.svg.src)
    .pipe(svgo())
    .pipe(gulp.dest(paths.svg.dest));
});


// ----- //
// WATCH //
// ----- //

gulp.task('watch', function(){
  gulp.watch(paths.sass.src, ['sass']);
  gulp.watch(paths.js.src, ['js']); 
  gulp.watch(paths.svg.src, ['svg']); 
  // Other watchers
})

