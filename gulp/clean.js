'use strict';

module.exports = (gulp, $, paths, env) => {
  // clean styleguide directory
  gulp.task('clean:styleguide', () => {
    return $.del([paths.styleguide.build]);
  });
};
