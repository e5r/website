// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    ts = require('gulp-typescript'),
    sm = require('gulp-sourcemaps'),
    del = require('del'),
    fs = require('fs');

var tsconfigData = JSON.parse(fs.readFileSync('tsconfig.json')),
    tsconfig = ts.createProject('tsconfig.json'),
    project = ts(tsconfig),
    destPath = (((tsconfigData || {}).compilerOptions || {}).rootDir) || 'src',
    sourceMap = !!((((tsconfigData || {}).compilerOptions || {}).sourceMap) || false)

gulp.task('tsc', [], function () {
    var tsResult = tsconfig.src();

    if (sourceMap) {
        tsResult = tsResult.pipe(sm.init());
    }

    tsResult = tsResult.pipe(project).js;

    if (sourceMap) {
        tsResult = tsResult.pipe(sm.write('./'));
    }

    return tsResult.pipe(gulp.dest(destPath));
});

gulp.task('tsc:clean', [], function () {
    return del([
        destPath + '/**/*.js',
        destPath + '/**/*.js.map',
    ]);
});
