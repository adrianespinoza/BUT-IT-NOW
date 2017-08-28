var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var argv = require('minimist')(process.argv.slice(2));
var pathsConfig = require('./paths-config').paths;

gulp.task('fonts', function () {
  var destPath = (argv.d || argv.s) ? pathsConfig.dist.fonts : pathsConfig.tmp.fonts;

  return gulp.src(pathsConfig.src.fonts)
    .pipe($.flatten())
    .pipe(gulp.dest(destPath));
});

gulp.task('images', function () {
  return gulp.src(pathsConfig.src.images)
    .pipe(gulp.dest(pathsConfig.dist.images));
});

gulp.task('pdfjs', function () {
  var destPath = (argv.d || argv.s) ? pathsConfig.dist.pdfjs : pathsConfig.tmp.pdfjs;

  return gulp.src(pathsConfig.src.pdfjs)
    .pipe(gulp.dest(destPath));
});

gulp.task('config', function () {
  var srcPath = (argv.d || argv.s) ? pathsConfig.src.prodConfigFile : pathsConfig.src.devConfigFile;
  var destPath = (argv.d || argv.s) ? pathsConfig.dist.js : pathsConfig.tmp.root;

  return gulp.src(srcPath)
    .pipe($.rename('app.config.js'))
    .pipe(gulp.dest(destPath));
});