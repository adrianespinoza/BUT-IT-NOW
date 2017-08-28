var gulp = require('gulp');
var eslint = require('gulp-eslint');
var pathsConfig = require('./paths-config').paths;

var specFiles = [pathsConfig.test.spec];
var files = pathsConfig.src.jsLintExcludedFiles;
files.push(
  pathsConfig.src.js
);

gulp.task('lint', function () {
  'use strict';

  var files = pathsConfig.src.jsLintExcludedFiles;
  files.push(
    pathsConfig.src.js
  );

  return gulp.src(files).pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint:test', function () {
  'use strict';

  return gulp.src(specFiles).pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
