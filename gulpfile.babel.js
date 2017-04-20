import gulp from 'gulp';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';

const browser = browserSync.create();
const $ = gulpLoadPlugins();

gulp.task('sass', () => {
    const pe = gulp.src('src/css/*.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browser.stream());
    return pe;
});
gulp.task('js', () => {
    gulp.src('src/js/*.js')
    .pipe($.plumber())
    .pipe($.babel())
    .pipe(gulp.dest('dist/js'))
    .pipe(browser.stream());
});
gulp.task('html', () => {
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'))
    .pipe(browser.stream());
});
gulp.task('server', ['sass', 'js', 'html'], () => {
    browser.init({ server: { baseDir: './dist' } });

    gulp.watch('src/css/*.scss', ['sass']).on('change', browser.reload);
    gulp.watch('src/js/*.js', ['js']).on('change', browser.reload);
    gulp.watch('src/*.html').on('change', browser.reload);
});

gulp.task('default', ['server']);
