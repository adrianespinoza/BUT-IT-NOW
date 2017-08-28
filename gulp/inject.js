var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var path = require('path');
var mainBowerFiles = require('main-bower-files');
var injectConfig = require('./injectConfig.js');
var pathsConfig = require('./paths-config').paths;

var mainBowerFilesConfig = {
  paths: {
    bowerrc: pathsConfig.bowerrc,
    bowerJson: pathsConfig.bowerJson
  },
  filter: '**/*.js'

};

gulp.task('onlyInject', function () {
  var injectStyles = gulp.src(pathsConfig.src.cssFiles);
  var injectStylesOptions = {
    read: false,
    ignorePath: [pathsConfig.tmp.root, pathsConfig.src.root],
    starttag: '<!-- injector:css -->',
    endtag: '<!-- endinjector -->',
    addRootSlash: false
  };

  var stream =  gulp.src(pathsConfig.src.html);
  stream = stream.pipe($.inject(gulp.src([
    '!' + pathsConfig.bowerFolder + '/**/*.js',
    '!' + pathsConfig.src.root + '/*.js',
    pathsConfig.src.js
  ])
    .pipe($.angularFilesort()),
    {
      ignorePath: pathsConfig.src.root,
      starttag: injectConfig.appStartTag,
      endtag: injectConfig.endtag,
      addRootSlash: false
    }));

  var bowerFilesOptions = {
    read: false,
    ignorePath: pathsConfig.src.root,
    starttag: '<!-- injector:bower -->',
    endtag: '<!-- endinjector -->',
    addRootSlash: false
  };

  var bowerFiles = gulp.src(mainBowerFiles(mainBowerFilesConfig));
  return stream.pipe($.inject(bowerFiles, bowerFilesOptions))
    .pipe($.inject(injectStyles, injectStylesOptions))
    .pipe(gulp.dest(pathsConfig.tmp.root))
    .pipe(reload({stream: true}));
});

gulp.task('inject', ['styles'], function () {
  gulp.start('onlyInject');
});

gulp.task('inject:less', function () {
  var injectStyles = gulp.src(pathsConfig.src.lessFiles);
  var injectStylesOptions = {
    read: false,
    ignorePath: pathsConfig.src.root,
    starttag: '/* injector:less */',
    endtag: '/* endinjector */',
    addRootSlash: false,
    transform: function (filepath) {
      filepath = filepath.replace(/\\/g, '/');
      return '@import "' + filepath + '";';
    }
  };

  return gulp.src('src/' + pathsConfig.indexTemplateLessFile)
    .pipe($.inject(injectStyles, injectStylesOptions))
    .pipe($.rename(pathsConfig.indexLessFile))
    .pipe(gulp.dest(pathsConfig.src.root));
});

gulp.task('inject:karma', function () {
  var bowerFilesOptions = {
    read: false,
    starttag: '/* injector:bower */',
    endtag: '/* endinjector */',
    addRootSlash: false,
    transform: function (filepath) {
      return '\'' + filepath + '\',';
    }
  };

  var bowerFiles = gulp.src(mainBowerFiles(mainBowerFilesConfig));
  return gulp.src('./karma.tpl.conf.js')
    .pipe($.inject(bowerFiles, bowerFilesOptions))
    .pipe($.rename('karma.conf.js'))
    .pipe(gulp.dest('./'));
});

// inject:dist is not a classic 'injection', i.e. dist:scripts
// create the final file and inject:dist only put this into a placeholder
gulp.task('inject:dist', [
  'styles',
  'dist:scripts',
  'dist:vendor',
  'dist:helper',
  'config'
], function () {
  var injectStyles = gulp.src([
    pathsConfig.dist.styles + '*.css'
  ]);
  var jsBuildConfig = injectConfig.jsBuildConfig;
  var stream =  gulp.src(pathsConfig.src.html);

  jsBuildConfig.forEach(function (jsBuildConfig) {
    stream = stream.pipe($.inject(gulp.src(jsBuildConfig.src)
        .pipe($.angularFilesort()),
      {
        ignorePath: pathsConfig.dist.root,
        starttag: jsBuildConfig.starttag,
        endtag: injectConfig.buildEndtag,
        addRootSlash: false
      }));
  });

  return stream.pipe($.inject(injectStyles, {
    read: false,
    ignorePath: pathsConfig.dist.root,
    starttag: '<!-- injector:css -->',
    endtag: '<!-- endinjector -->',
    addRootSlash: false
  }))
    .pipe(gulp.dest(pathsConfig.dist.root));
});
