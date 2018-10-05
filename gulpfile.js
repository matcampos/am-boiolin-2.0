var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

/*
 * Variáveis
 */
// Sass Source
var scssFiles = './src/scss/style.scss';


var indexFile = './src/scss/index.scss';
// CSS destination
var cssDest = './css';

// Opção para Desenvolvimento
var sassDevOptions = {
    outputStyle: 'expanded'
  }
  
  // Opção para Produção
  var sassProdOptions = {
    outputStyle: 'compressed'
  }


// Task 'sassdev' - Para executar o comando usamos 'gulp sassdev'
gulp.task('sassdev', function() {
    return gulp.src(scssFiles)
      .pipe(sass(sassDevOptions).on('error', sass.logError))
      .pipe(gulp.dest(cssDest));
  });

  gulp.task('indexdev', function() {
    return gulp.src(indexFile)
      .pipe(sass(sassDevOptions).on('error', sass.logError))
      .pipe(gulp.dest(cssDest));
  });

// Task 'sassprod' - Para executar o comando usamos 'gulp sassprod'
gulp.task('sassprod', function() {
    return gulp.src(scssFiles)
      .pipe(sass(sassProdOptions).on('error', sass.logError))
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest(cssDest));
  });

  gulp.task('indexprod', function() {
    return gulp.src(indexFile)
      .pipe(sass(sassProdOptions).on('error', sass.logError))
      .pipe(rename('index.min.css'))
      .pipe(gulp.dest(cssDest));
  });




// Task 'watch' - Para executar o comando usamos 'gulp watch'
gulp.task('watch', function() {
    gulp.watch(scssFiles, ['sassdev', 'sassprod']);
    gulp.watch(indexFile, ['indexdev', 'indexprod']);
});


// Default task - Para executar o comando usamos 'gulp'
gulp.task('default', ['sassdev', 'sassprod', 'indexdev', 'indexprod', 'watch']);

