const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

let outputStyle = 'compressed';
let sourceComments = false;

/** Compila el scss a css comprimido */
function compile() {
  //Ruta inicial del sass
  return gulp.src('./scss/terminos_condiciones.scss')
    //Compila compressed sin comentarios
    .pipe(sass())
    //Destino
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  //Escuchando para compilar
  gulp.watch('./scss/components/*.scss', compile);
  gulp.watch('./scss/terminos_condiciones.scss', compile);
  //Escuchando cambios en los archivos html
  gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.compile = compile;
exports.watch = watch;
