// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    shell = require('gulp-shell'),
    run = require('run-sequence'),
    path = require('path'),

    root = './src/e5r.website.web',
    port = 5000,
    exposeLocalNetwork = false;

gulp.task('dev-server', [], function () {
    if (exposeLocalNetwork) {
        run('dev-server:localnetwork');
    } else {
        run('dev-server:localhost');
    }
});

gulp.task('dev-server:localhost', shell.task([
    path.resolve('./node_modules/.bin/static') + ' ' + root + ' -p ' + port
]));

gulp.task('dev-server:localnetwork', shell.task([
    path.resolve('./node_modules/.bin/static') + ' ' + root + ' -a 0.0.0.0 -p ' + port
]));
