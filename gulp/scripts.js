var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')();
var mainBowerFiles = require('main-bower-files');
var pathsConfig = require('./paths-config').paths;
var argv = require('minimist')(process.argv.slice(2));
var gulpif = require('gulp-if');
var templatesJSFileName = 'templates.js';

gulp.task('prepare-templates', function () {
  'use strict';
  return $.file(templatesJSFileName, '', {src: true})
    .pipe(gulp.dest(pathsConfig.tmp.root));
});

/* Note:
 * Generate and validate 'scripts.js', 'vendor.js' files
 * 'helper.js' is minified and uglified correctly
 */
gulp.task('templates', ['prepare-templates'], function () {
  'use strict';
  return gulp.src(pathsConfig.src.templates)
    .pipe($.ngTemplates({
      filename: '../' + pathsConfig.tmp.root + templatesJSFileName,
      module: 'xpressApp',
      standalone: false
    }))
    .pipe(gulp.dest(pathsConfig.tmp.root));
});

gulp.task('dist:scripts', ['templates'], function () {
  var files = [
    '!src/xpress-common/*.js',
    '!' + pathsConfig.src.root + '/*.js',
    '!' + pathsConfig.bowerFolder + '/**/*.js',
    pathsConfig.src.js,
    '.tmp/templates.js'
  ];

  if (argv.s) {
    files.unshift('!src/modules/xpress/app/app.run.js');
  }

  return gulp.src(files)
    .pipe($.angularFilesort())
    .pipe($.concat('scripts.js'))
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(gulp.dest(pathsConfig.dist.js));
});

gulp.task('dist:vendor', function () {
  var bowerFiles = gulp.src(mainBowerFiles('**/*.js'));
  var jsFiles = gulp.src(['src/xpress-common/*.js', '!src/xpress-common/js-helper.js']);

  return $.merge(bowerFiles, jsFiles)
    .pipe($.concat('vendor.js'))
    .pipe($.uglify())
    .pipe(gulp.dest(pathsConfig.dist.js));
});

gulp.task('dist:helper', function () {
  return gulp.src('src/xpress-common/js-helper.js')
    .pipe($.uglify())
    .pipe($.rename('helper.js'))
    .pipe(gulp.dest(pathsConfig.dist.js));
});

var rev = require("gulp-rev");
var revReplace = require("gulp-rev-replace");


gulp.task("revision", ['inject:dist'], function () {
  return gulp.src([
    pathsConfig.dist.root + '**/*.css',
    pathsConfig.dist.root + '**/*.js',
    '!' + pathsConfig.dist.root + 'pdfjs-build/**/* '
  ])
    .pipe(gulpif(argv.d, rev()))
    .pipe(gulp.dest(pathsConfig.dist.root))
    .pipe(rev.manifest())
    .pipe(gulp.dest(pathsConfig.dist.root));
});

gulp.task("revreplace", ["revision"], function () {
  var manifest = gulp.src("./" + pathsConfig.dist.root + "rev-manifest.json");

  return gulp.src([
    pathsConfig.dist.root + "index.html",
    pathsConfig.dist.root + "unsupported.html"
  ])
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(pathsConfig.dist.root))
    .pipe($.callback(function () {
      manifest = gulp.src("./" + pathsConfig.dist.root + "rev-manifest.json");
      return manifest.pipe($.jsonTransform(function (data) {
        var filesToDelete =  Object.keys(data);
        filesToDelete = filesToDelete.map(function (item) {
          return pathsConfig.dist.root + item;
        });
        return del.sync(filesToDelete);
      }));
    }))
    .pipe($.callback(function () {
      var files = [
        pathsConfig.dist.styles + '*.css'
      ];

      if (argv.d) {
        files.push('!**/app.css');
      }

      gulp.src(files)
        .pipe(gulp.dest(pathsConfig.dist.styles));
    }));

});