var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	plumber = require('gulp-plumber'),
    browserSync = require('browser-sync').create(),
    notify = require('gulp-notify');

// Browser definitions for autoprefixer
var browsers = [
    'last 2 versions',
    'ie >= 9',
    'IOS 7',
    'android >= 4.4',
    'bb >= 10'
];

// browsersync
gulp.task('browsersync-reload', function () {
    browserSync.reload();
});

// Sass
gulp.task('sass', function () {
  return gulp.src('./assets/scss/**/*.scss')
      .pipe(plumber({
          errorHandler: notify.onError("SASS ERROR: <%= error.message %>")
      }))
    .pipe(sourcemaps.init())
        .pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
        .pipe(autoprefixer(browsers))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/css'))
      .pipe(notify({
          title: "SASS",
          message: "File Compiled Successfully",
          onLast: true
      }));
});

gulp.task('sass-watch', ['sass'], function (done) {
    browserSync.reload();
    done();
});

// Watch
gulp.task('watch', function(){

    browserSync.init({
        proxy: 'http://lapetitemerveille.local',
        port: 3020,
        ghostMode: {
            clicks: false,
            scroll: false,
            forms: false
        }
    });

    gulp.watch('./assets/scss/**/*.scss', ['sass-watch']);
    gulp.watch(['./assets/css/style.css', '../templates/**/*.html.twig', './assets/js/*.js'], ['browsersync-reload']);
});
