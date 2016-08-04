// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass');

gulp.task('sass', [], function() {
    gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src'));
});

gulp.task('sass:clean', [], function() {
    return del('src/**/*.css');
});
