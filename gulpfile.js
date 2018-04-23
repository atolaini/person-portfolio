let gulp = require ('gulp');
let sass = require ('gulp-sass');
let prefix = require ('gulp-autoprefixer');
let htmlmin = require('gulp-htmlmin');
let imagemin = require('gulp-imagemin');
let cleanCSS = require('gulp-clean-css');

gulp.task('sass', function(){
    return gulp.src(['src/scss/**/*.scss'], ['sass'])
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix('last 2 versions', 'Firefox > 20'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('minify', function() {
    return gulp.src('src/index.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist'));
  });

gulp.task('imgopt', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('minify-css', () => {
    return gulp.src('dist/css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist'));
  });

gulp.task('serve', ['sass'], function(){
    gulp.watch(['src/scss/**/*.scss'], ['sass'])
});

gulp.task('default', ['serve']);

