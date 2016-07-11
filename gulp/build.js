'use strict';

module.exports = (gulp, $, paths, env) => {
  // build styleguide
  gulp.task('build:styleguide', ['clean:styleguide'], (cb) => {
    $.runSequence(['styleguide-css'], 'hologram', cb);
  });

  // default hologram task
  gulp.task('hologram', () => {
    return gulp.src(`${paths.styleguide.root}/hologram_config.yml`)
      .pipe($.hologram());
  });
};
