var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var argv = require('minimist')(process.argv.slice(2));
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var pathsConfig = require('./paths-config').paths;

gulp.task('styles', ['inject:less'], function () {
  'use strict';
  var destPath = (argv.d || argv.s) ? pathsConfig.dist.styles : pathsConfig.tmp.styles;
  var additionalCss = pathsConfig.src.cssFiles.slice(1);
  additionalCss.unshift(destPath + 'app.css');
  return gulp.src('src/' + pathsConfig.indexLessFile)
    .pipe($.less({
      paths: [
        pathsConfig.src.root + '/bower-components/ionicons/less',
        pathsConfig.src.root
      ]
    }))
    .pipe($.rename('app.css'))
    .pipe(gulp.dest(destPath))
    .pipe($.callback(function () {
      if (destPath === pathsConfig.dist.styles) {
        var concatenatedCss = gulp.src(additionalCss);
        concatenatedCss.pipe($.concat('app.css'))
          .pipe(gulp.dest(destPath));
      }
    }));
});
