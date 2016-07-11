'use strict';

const gulp   = require('gulp'),
    $        = require('gulp-load-plugins')({pattern: ['gulp-*', 'del', 'run-sequence']}),
    taskPath = './gulp/',
    taskList = require('fs').readdirSync(taskPath),
    env      = {};

const paths = {
  src: {
    root:  'src',
    css:   'src/assets/css/**/*.scss'
  },
  styleguide: {
    root:  'styleguide',
    build: 'styleguide/dist',
    css:   'styleguide/dist/assets/css'
  }
};

taskList.forEach((taskFile) => {
  try {
    require(taskPath + taskFile)(gulp, $, paths, env);
  } catch(error) {
    console.error(taskFile + ' could not be loaded: ' + error);
  }
});
