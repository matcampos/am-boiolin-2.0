var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

/*
 * Variáveis
 */
// Sass Source
var scssFiles = './src/scss/style.scss';
var scssHome = './src/scss/home.scss';


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

// Task 'sassprod' - Para executar o comando usamos 'gulp sassprod'
gulp.task('sassprod', function() {
    return gulp.src(scssFiles)
      .pipe(sass(sassProdOptions).on('error', sass.logError))
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest(cssDest));
  });

// Task 'sassdev' - Para executar o comando usamos 'gulp sassdev'
gulp.task('homedev', function() {
    return gulp.src(scssHome)
      .pipe(sass(sassDevOptions).on('error', sass.logError))
      .pipe(gulp.dest(cssDest));
  });

// Task 'homeprod' - Para executar o comando usamos 'gulp sassprod'
gulp.task('homeprod', function() {
    return gulp.src(scssHome)
      .pipe(sass(sassProdOptions).on('error', sass.logError))
      .pipe(rename('home.min.css'))
      .pipe(gulp.dest(cssDest));
  });


// Task 'watch' - Para executar o comando usamos 'gulp watch'
gulp.task('watch', function() {
    gulp.watch(scssHome, ['sassdev', 'sassprod']);
});

// Task 'watch' - Para executar o comando usamos 'gulp watch'
gulp.task('watch', function() {
    gulp.watch(scssHome, ['homedev', 'homeprod']);
});



// Default task - Para executar o comando usamos 'gulp'
gulp.task('default', ['sassdev', 'sassprod', 'watch']);

// Default task - Para executar o comando usamos 'gulp'
gulp.task('default', ['homedev', 'homeprod', 'watch']);
