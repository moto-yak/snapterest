var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var buildTask = function () {
  return browserify('./source/app.jsx')
  .transform('babelify', {presets: ['react', 'es2015']})
  .bundle()
  .on('error', function (err) { console.log('Error : ' + err.message); })
  .pipe(source('snapterest.js'))
  .pipe(gulp.dest('./build/'));
};
gulp.task('build', function() {
  buildTask();
});
gulp.task('watch', function() {
  buildTask();
  gulp.watch('source/*/*.js', ['build']);
});
gulp.task('default', ['build']);
