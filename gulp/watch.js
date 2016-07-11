'use strict';

module.exports = (gulp, $, paths, env) => {

  const server = require('browser-sync').get('styleguide-server');

  // watch for styleguide-related changes
  gulp.task('watch:styleguide', ['build:styleguide'], () => {
    gulp.watch(paths.src.css, () => {
      $.runSequence(['clean:styleguide', 'styleguide-css'], 'hologram', server.reload);
    });
  });
};
