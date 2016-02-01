var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
  return browserify('./source/app.jsx')
  .transform('babelify', {presets: ['react', 'es2015']})
  .bundle()
  .on('error', function (err) { console.log('Error : ' + err.message); })
  .pipe(source('snapterest.js'))
  .pipe(gulp.dest('./build/'));
});
