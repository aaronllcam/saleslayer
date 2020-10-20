const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css(){
    return gulp
            .src('./public/scss/styles.scss')
            .pipe(autoprefixer({
                overrideBrowsersList: ['last 2 versions'],
                cascade: false
            }))
            .pipe(sass({
                outputStyle: "expanded"
            }))
            .pipe(gulp.dest('./public/css'));
}
function modalCss(){
    return gulp
            .src('./public/scss/modal.scss')
            .pipe(autoprefixer({
                overrideBrowsersList: ['last 2 versions'],
                cascade: false
            }))
            .pipe(sass({
                outputStyle: "expanded"
            }))
            .pipe(gulp.dest('./public/css'));
}

//vamos a realizar un watch para gulp y cada vez que guardemos carge los cambios directamnete.
function watchFiles(){
    gulp.watch('./public/scss/*.scss', css);
    gulp.watch('index.html');
}
function watchFilesModal(){
    gulp.watch('./public/scss/*.scss', modalCss);
    gulp.watch('./views/popups/*.html');
}

//registramos la funcion como una tarea para porde correrla

gulp.task('css', css);
gulp.task('watch', gulp.parallel(watchFiles));

gulp.task('modal', modalCss);
gulp.task('watchmodal', gulp.parallel(watchFilesModal));



