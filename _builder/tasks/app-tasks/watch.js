// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

var gulp = require('gulp');

gulp.task('watch', [], function() {
    gulp.watch('src/**/*.ts', function(event) {
        gulp.start('tsc');
    });

    gulp.watch('src/**/*.scss', function(event) {
        gulp.start('sass');
    });
});