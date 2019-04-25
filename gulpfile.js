var gulp = require('gulp');
var sass = require('gulp-sass');

// gulp.task('default', function () {
//     return gulp.src('./scss/*.scss')
//         .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
//         .pipe(gulp.dest('./css'))
// });
// gulp.watch('./scss/*.scss', ['default']);

gulp.task('default', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});
gulp.watch('./scss/*.scss', async () => {
    gulp.src('./scss/*.scss').pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});