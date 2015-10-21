var browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    gulpif = require('gulp-if'),
    rename = require('gulp-rename'),
    stringify = require('stringify'),
    argv = require('yargs').argv,
    header = require('gulp-header'),
    production = !!argv.production;

console.log('ENV:', production ? 'Production' : 'Development');

gulp.task('js', function() {
    var bundler = browserify({
        entries: ['./js/index.js']
    })
    .transform(
        stringify({
            extensions: ['.html', '.md', '.hbs', '.bars'],
            minify: false,
            minifier: {
                extensions: ['.html'],
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }
        })
    );

    var bundle = function() {
        return bundler
            .bundle()
            .pipe(source('./js/index.js'))
            .pipe(buffer())
            .pipe(rename('script.js'))
            .pipe(gulpif(production, uglify()))
            .pipe(gulp.dest('./assets'));
    };

    return bundle();
});

gulp.task('scss', function () {
    gulp.src('./scss/index.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(header('/* Gov.vote 2015 */'))
        .pipe(rename('./style.css'))
        .pipe(gulp.dest('./assets'));
});

gulp.task('watch', ['default'], function(){
    gulp.watch(['scss/**/*'], ['scss']);
    gulp.watch(['js/**/*'], ['js']);
});

gulp.task('default', ['scss', 'js']);
