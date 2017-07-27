import gulp from 'gulp';
import babel from 'gulp-babel';
import path from 'path';
import express from 'express';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import gutil from 'gulp-util';
import del from 'del';
import runSequence from 'run-sequence';
import concatCss from 'gulp-concat-css';
import eslint from 'gulp-eslint';

gulp.task('lint', () => {
    return gulp.src('./src/**/*.js')
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
})

gulp.task('transformJS', () => {
    return gulp.src('./src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('bundleJS', () => {
    return browserify('./dist/index.js')
            .bundle()
            .on('error',gutil.log)
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./dist/'));
});

gulp.task('bundleCSS', () => {
    return gulp.src('./src/assets/**/*.css')
            .pipe(concatCss('bundle.css'))
            .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', () => {
    return del('dist')
});

gulp.task('startServer', () => {
    let app = express();

    app.use('/dist',express.static('dist'))
    app.use('/img',express.static('src/assets/img'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname,'/index.html'));
    })

    app.listen('8080', () => {
        console.log("Server is listening at 8080")
    })
});

gulp.task('default',(callback) => {
    runSequence('lint','clean','transformJS','bundleJS','bundleCSS','startServer',callback);
});