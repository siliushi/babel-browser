var gulp = require("gulp"),
    clean = require("gulp-clean"),
    uglify = require("gulp-uglify"),
    header = require("gulp-header"),
    rename = require('gulp-rename'),
    gutil = require("gulp-util"),
    moment = require("moment"),
    banner = '/*! <%= moment().format("YYYY-MM-DD HH:mm:ss") %>\r\n<%= message %>*/\r\n';

var addHeader = function() {
  return header(banner, {
    message: "babel-browser  URL:https://github.com/baixuexiyang/babel-browser",
    moment: moment
  });
};

gulp.task("clean", function(){
  return gulp.src('dist', {read: false}).pipe(clean());
});

gulp.task("default", ["clean"], function() {
  gulp.src('src/babel-browser.js')
    .pipe(uglify({
      mangle: true
    }))
    .on('error', function(err) {
        gutil.log('message: ', err.message);
        gutil.log('fileName: ', err.fileName);
        gutil.log('lineNumber: ', err.lineNumber);
        gutil.log('plugin: ', err.plugin);
        this.end();
    })
    .pipe(rename({
            suffix: '.min'
    }))
    .pipe(addHeader())
    .pipe(gulp.dest('dist'));
});
