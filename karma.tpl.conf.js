// Karma configuration
// Generated on Fri Feb 21 2014 07:10:24 GMT-0600 (Central Standard Time)

module.exports = function (config) {
  'use strict';
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'src/bower-components/socket.io-client/socket.io.js',
      /* injector:bower */
      /* endinjector */
      'src/bower-components/angular-mocks/angular-mocks.js',
      'src/modules/shoppingCart/app/app.module.js',
      'src/app.test.config.js',

      'src/common/**/*.js',
      'src/common/**/*.html',
      'src/modules/**/*.module.js',
      'src/modules/**/*.js',
      'src/modules/**/*.html',
      'test/**/*.spec.js',
      'test/**/karma-mocks.js'
    ],


    // list of files to exclude
    exclude: [],

    preprocessors: {
      'src/common/**/*.js': 'coverage',
      'src/modules/**/*.js': 'coverage',
      'src/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      // strip app from the file path
      stripPrefix: 'src/'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
