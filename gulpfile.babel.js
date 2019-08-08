/* global require */

const libraryFileName = 'template-cli',
    sourceDir = 'src',
    outputDir = 'bin';

const gulp = require('gulp'),
    del = require('del'),
    gulpConcat = require('gulp-concat'),
    gulpSourceMaps = require('gulp-sourcemaps'),
    gulpBabel = require('gulp-babel'),
    gulpUglify = require('gulp-uglify'),
    gulpEslint = require('gulp-eslint');

const clean = (done) => {
    return del([outputDir], done);
};

const scriptsPrimaryDebug = () =>
    gulp.src(sourceDir + '/' + libraryFileName + '-primary.js')
        .pipe(gulpSourceMaps.init())
        .pipe(gulpBabel())
        .pipe(gulpSourceMaps.write('.'))
        .pipe(gulp.dest(outputDir + '/'));

const scriptsSecondaryDebug = () =>
    gulp.src(sourceDir + '/' + libraryFileName + '-secondary.js')
        .pipe(gulpSourceMaps.init())
        .pipe(gulpBabel())
        .pipe(gulpSourceMaps.write('.'))
        .pipe(gulp.dest(outputDir + '/'));

const scriptsDebug = gulp.parallel(
    scriptsPrimaryDebug,
    scriptsSecondaryDebug
);

const scriptsPrimary = () =>
    gulp.src(sourceDir + '/' + libraryFileName + '-primary.js')
        .pipe(gulpBabel())
        .pipe(gulpUglify())
        .pipe(gulp.dest(outputDir + '/'));

const scriptsSecondary = () =>
    gulp.src(sourceDir + '/' + libraryFileName + '-secondary.js')
        .pipe(gulpBabel())
        .pipe(gulpUglify())
        .pipe(gulp.dest(outputDir + '/'));

const scripts = gulp.parallel(
    scriptsPrimary,
    scriptsSecondary
);

const lint = () =>
    gulp.src(sourceDir + '/**/*.js')
        .pipe(gulpEslint())
        .pipe(gulpEslint.format())
        .pipe(gulpEslint.failAfterError());

const debug = gulp.series(
    clean,
    scriptsDebug,
    lint
);

const build = gulp.series(
    clean,
    scripts
);

const develop = () => {
    gulp.watch(
        [
            sourceDir + '/**/*.js'
        ],
        scriptsDebug
    );
};

export {
    debug,
    build,
    develop,
    lint
}

export default build;
