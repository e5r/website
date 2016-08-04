// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

var gulp = require('gulp'),
    gutil = require('gulp-util'),

    log = gutil.log,
    pairs = [
        { glob: 'src/**/*.ts', tasks: ['tsc'] },
        { glob: 'src/**/*.scss', tasks: ['sass'] }
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
