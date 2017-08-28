var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var pathsConfig = require('./paths-config').paths;
var commonFolder = require('./paths-config').commonFolder;
var modulesFolder = require('./paths-config').modulesFolder;

gulp.task('watch', ['connect:dev'], function () {

  var watchingModulesAndCommonCallback = function (vinyl) {
    var event = vinyl.event;
    var path = vinyl.path;
    var lastPoint = path.lastIndexOf('.');
    var extension = path.substring(lastPoint);
    if (event === 'add' || event === 'unlink') {
      switch (extension) {
      case '.less':
        gulp.start('inject:less');
        break;
      case '.js':
        gulp.start('onlyInject');
        break;
      case '.html':
        reload();
        break;
      default:
        break;
      }
    } else if (event === 'change') {
      if (extension === '.less') {
        gulp.start('styles');
      } else {
        reload();
      }
    }
  };

  $.watch('src/' + commonFolder + '/**/*', watchingModulesAndCommonCallback);
  $.watch('src/' + modulesFolder + '/**/*', watchingModulesAndCommonCallback);

  $.watch('src/' + pathsConfig.src.indexLessFile, function (vinyl) {
    var event = vinyl.event;
    if (event === 'change') {
      gulp.start('styles');
    }
  });

  $.watch(pathsConfig.tmp.root + '**/*.css', function (vinyl) {
    var event = vinyl.event;
    if (event === 'add' || event === 'unlink') {
      gulp.start('inject');
    }
    if (event === 'change') {
      reload();
    }
  });

  $.watch(pathsConfig.tmp.root + 'index.html', reload);

  $.watch(pathsConfig.src.root + 'index.html', function (vinyl) {
    var event = vinyl.event;
    if (event === 'change') {
      gulp.start('onlyInject');
    }
  });

  $.watch(pathsConfig.src.images, function (vinyl) {
    var event = vinyl.event;
    if (event === 'change') {
      reload();
    }
  });
});