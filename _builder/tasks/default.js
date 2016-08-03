// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0.
// More license information in https://github.com/e5r/licenses/blob/master/notices/empty-project.rst.

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    run = require('run-sequence'),

    log = gutil.log,
    tasks = [
        'clean',
        'build',
        'dist'
    ];

gulp.task('default', [], function () {
    log('~*~*~*~*~*~*~*~*~*~*~*~*~*~*~* E5R BUILDER STARTED *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~');
    run.apply(run, tasks);
    log('~*~*~*~*~*~*~*~*~*~*~*~*~*~*~* E5R BUILDER FINISHED *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~');
});
