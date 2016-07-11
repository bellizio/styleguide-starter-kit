'use strict';

module.exports = (gulp, $, paths, env) => {

  const autoprefixer = require('autoprefixer')({browsers: ['last 2 versions']});

  const sassOptions = {
    style: 'nested',
    precision: 10,
    includePaths: [
      '.',
      'bower_components'
    ]
  };

  const error = {
    title: 'SCSS Error',
    message: (error) => {
      return error.message;
    }
  };

  // build styleguide css
  gulp.task('styleguide-css', () => {
    return gulp.src(`${paths.src.root}/assets/css/styleguide.scss`)
      .pipe($.sourcemaps.init())
        .pipe($.sass(sassOptions))
        .on('error', $.notify.onError(error))
        .pipe($.postcss([autoprefixer]))
      .pipe($.sourcemaps.write())
      .pipe($.size({title: 'STYLEGUIDE CSS', showFiles: true}))
      .pipe(gulp.dest(paths.styleguide.css));
  });
};
