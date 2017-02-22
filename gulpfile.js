let gulp = require('gulp');
let sass = require('gulp-sass');
let browser = require('gulp-browser');

gulp.task('default', ['html',
    'css',
    'js'
]);

gulp.task('html', function() {
    return gulp.src('index.html')
        .pipe(gulp.dest('public/'));
})

gulp.task('css', function() {

    return gulp.src('scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/'));
})

gulp.task('js', function() {
    return gulp.src('js/app.js')
        .pipe(browser.browserify())
        .pipe(gulp.dest('public/'));
})

gulp.task('watch', ['default'], function() {
    gulp.watch('js/*.js', ['js']);
    gulp.watch('scss/*.scss', ['css']);
    gulp.watch('*.html', ['html']);
})
