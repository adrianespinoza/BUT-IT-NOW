var gulp = require('gulp');
var pathsConfig = require('./paths-config').paths;
var del = require('del');

gulp.task('clean:dist', function () {
  del.sync([pathsConfig.dist.root]);
});