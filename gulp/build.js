var gulp = require('gulp');

/* Development build */
gulp.task('build:dev', [
  'inject:less',
  'pdfjs',
  'fonts',
  'config',
  'inject'
], function () {
  gulp.start('watch');
});

gulp.task('serve', ['lint', 'karma'], function () {
  gulp.start('build:dev');
});

/* Distribution build */
gulp.task('build:dist', [
  'config',
  'pdfjs',
  'images',
  'fonts',
  'revreplace'
]);

gulp.task('dist', ['clean:dist', 'lint', 'karma'], function () {
  gulp.start('build:dist');
});