// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0.
// More license information in https://github.com/e5r/licenses/blob/master/notices/empty-project.rst.

/** @todo: Move to e5r/empty-project */

var gulp = require('gulp'),
    run = require('run-sequence'),

    tasks = [
        'watch',
        'dev-server'
    ];

gulp.task('develop', [], function () {
    if (0 < tasks.length) {
        run.apply(run, tasks);
    }
});
