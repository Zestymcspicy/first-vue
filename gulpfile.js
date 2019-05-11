
'use strict'
var gulp = require('gulp');

var browsersync = require('browser-sync');

const browserSync = browsersync.create();

function serve(done) {
  browserSync.init({
    server: {
      baseDir:"./",
    },
    port: 3000
  });
  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

const watch = () => {
  gulp.watch(["index.html","*.js"], reload);
}

const defaultTask = gulp.parallel(serve, watch);

exports.default = defaultTask;
