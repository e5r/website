// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0.
// More license information in https://github.com/e5r/licenses/blob/master/notices/empty-project.rst.

var gulp = require('gulp'),
    gutil = require('gulp-util'),

    log = gutil.log,
    pairs = [
        { glob: 'src/**/*.ts', tasks: ['tsc'] }
    ];

gulp.task('watch', [], function () {
    for (var p in pairs) {
        var pair = pairs[p];
        gulp.watch(pair.glob, function (event) {
            gulp.start(pair.tasks);
        });
        log('Watching "' + pair.glob + '"...');
    }
});
