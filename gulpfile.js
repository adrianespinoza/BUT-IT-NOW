var gulp = require('gulp');
var requireDir = require('require-dir');

// Registering tasks
requireDir('./gulp');

gulp.task('default', ['serve']);