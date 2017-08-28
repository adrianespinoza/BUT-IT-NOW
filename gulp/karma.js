var gulp = require('gulp');
var path = require('path');
var Server = require('karma').Server;

var karmaSettings = {
  configFile: path.resolve(__dirname, '../karma.conf.js'),
  singleRun: true
};

gulp.task('karma', ['inject:karma'], function (done) {
  'use strict';
  return new Server(karmaSettings, done).start();
});
