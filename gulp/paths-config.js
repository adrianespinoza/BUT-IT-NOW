var commonFolder = 'xpress-common';
var modulesFolder = 'modules/xpress';
var bowerFolder = 'src/bower-components';
var indexLessFile = 'index.less';
var indexTemplateLessFile = 'index.tpl.less';

var paths = {
  bowerFolder: bowerFolder,
  bowerrc: './.bowerrc',
  gulpFile: './gulpfile.js',
  gulpTasksFolder: './gulp/**/*.js',
  indexLessFile: indexLessFile,
  indexTemplateLessFile: indexTemplateLessFile,
  src: {
    root: 'src/',
    pdfjs: [
      '!src' + bowerFolder + '/pdfjs-build/*.*',
      bowerFolder + '/pdfjs-build/**/*.*'
    ],
    fonts: 'src/fonts/*.{eot,ttf,svg,woff}',
    images: 'src/images/**/*.*',
    devConfigFile: 'src/app.dev.config.js',
    prodConfigFile: 'src/app.prod.config.js',
    cssFiles: [
      '.tmp/styles/app.css',
      bowerFolder + '/jquery-ui/themes/base/minified/jquery-ui.min.css',
      bowerFolder + '/select2/select2.css',
      bowerFolder + '/ng-tags-input/ng-tags-input.css',
      bowerFolder + '/angular-ui-select/dist/select.css'
    ],
    html: 'src/*.html',
    lessFiles: [
      'src/{' + commonFolder + ',' + modulesFolder + '}/**/*.less',
      'src/' + indexTemplateLessFile,
      'src/' + indexLessFile
    ],
    indexLess: 'src/index.less',
    templates: 'src/{' + commonFolder + ',' + modulesFolder + '}/**/*.html',
    jsLintExcludedFiles: [
      '!src/pdfjs-build/**/*.js',
      '!' + bowerFolder + '/**/*.js',
      '!src/' + commonFolder + '/blob-stream-v0.1.2.js',
      '!src/' + commonFolder + '/pdfkit.js',
      '!src/' + commonFolder + '/jspdf.debug.js',
      '!src/' + commonFolder + '/directives/drag-and-drop/sortable/multisortable.directive.js'
    ],
    js: 'src/**/*.js'
  },
  dist: {
    root: 'dist/',
    js: 'dist/js/',
    images: 'dist/images/',
    pdfjs: 'dist/pdfjs-build/',
    styles: 'dist/styles/',
    fonts: 'dist/styles/fonts/'
  },
  tmp: {
    root: '.tmp/',
    pdfjs: '.tmp/pdfjs-build/',
    styles: '.tmp/styles/',
    fonts: '.tmp/styles/fonts/'
  },
  test: {
    spec: 'test/spec/**/*.js'
  }
};

exports.paths = paths;
exports.commonFolder = commonFolder;
exports.modulesFolder = modulesFolder;