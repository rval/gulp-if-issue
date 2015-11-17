const gulp = require('gulp');
const watch = require('gulp-watch');
const gulpif = require('gulp-if');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');

gulp.task('watch', function () {
    return gulp.src('index.js')
        .pipe(plumber(err => console.log(err))) 
        .pipe(watch('index.js', () => console.log('index.js changed')))
        .pipe(gulpif('*.js', babel())) // Babel quits processing files after a stream error.
        //.pipe(babel()) // Babel continues to process files even after a stream error.
        .pipe(gulp.dest('dist'));
});
