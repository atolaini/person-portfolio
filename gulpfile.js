let gulp = require ('gulp');
let sass = require ('gulp-sass');
let prefix = require ('gulp-autoprefixer');

gulp.task('sass', function(){
    return gulp.src(['src/scss/**/*.scss'], ['sass'])
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix('last 2 versions', 'Firefox > 20'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('serve', ['sass'], function(){
    gulp.watch(['src/scss/**/*.scss'], ['sass'])
});

gulp.task('default', ['serve']);

