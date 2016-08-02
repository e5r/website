// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

var gulp = require('gulp'),
    shell = require('gulp-shell'),
    path = require('path'),
    del = require('del');

gulp.task('typings', shell.task([
    path.resolve('./node_modules/.bin/typings') + ' install'
]));

gulp.task('typings:clean', [], function () {
    return del('typings');
});
