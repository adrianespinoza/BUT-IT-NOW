exports.appStartTag = '<!-- injector:ng-app-files -->';

exports.endtag = '<!-- endinjector -->';

exports.jsBuildConfig = [{
  src: 'dist/js/helper.js',
  starttag: '<!-- build:js js/helper.js -->'
}, {
  src: 'dist/js/vendor.js',
  starttag: '<!-- build:js js/vendor.js -->'
}, {
  src: 'dist/js/scripts.js',
  starttag: '<!-- build:js js/scripts.js -->'
}, {
  src: 'dist/js/app.config.js',
  starttag: '<!-- build:js js/app.config.js -->'
}];

exports.buildEndtag = '<!-- endbuild -->';