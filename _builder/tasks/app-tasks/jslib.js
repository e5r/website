// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    del = require('del'),

    src = [
        {
            globs: 'node_modules/systemjs/dist/system.{js,src.js,js.map}',
            dest: 'systemjs'
        },
        {
            globs: 'node_modules/rxjs/*.{js,js.map}',
            dest: 'rxjs'
        },
        {
            globs: 'node_modules/reflect-metadata/*.{js,js.map}',
            dest: 'reflect-metadata' 
        },
        {
            globs: 'node_modules/zone.js/dist/zone.{js,min.js}',
            dest: 'zone.js' 
        }
    ],
    destBase = 'src/e5r.website.web/lib/';

// Angular libs
[
    'common',
    'compiler',
    'core',
    'platform-browser',
    'platform-browser-dynamic'
].map(function (m) {
    src.push({
        globs: 'node_modules/@angular/' + m + '/bundles/*.umd.{js,min.js}',
        dest: 'angular/' + m
    });
});

// Rxjs libs
[
    'add',
    'observable',
    'operator',
    'scheduler',
    'symbol',
    'util'
].map(function (m) {
    src.push({
        globs: 'node_modules/rxjs/' + m + '/**/*.{js,js.map}',
        dest: 'rxjs/' + m
    });
});

gulp.task('jslib', [], function () {
    for (var s in src) {
        var globs = src[s].globs,
            dest = destBase + src[s].dest;
        gulp.src(globs).pipe(gulp.dest(dest));
    }
});

gulp.task('jslib:clean', [], function () {
    return del(destBase);
});
