'use strict';

module.exports = (gulp, $, paths, env) => {

  const styleguideServer = require('browser-sync').create('styleguide-server');

  const browserSyncInit = (dir) => {
    styleguideServer.init({
      server: {
        baseDir: dir
      }
    });
  };

  // start server pointing to styleguide build
  gulp.task('serve', ['watch:styleguide'], () => {
    browserSyncInit(paths.styleguide.build);
  });
};
