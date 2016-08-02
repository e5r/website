// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    del = require('del'),

    src = {
        systemjs: 
            "node_modules/systemjs/dist/system.{js,src.js,js.map}"
        
    },
    dest = 'src/e5r.website.web/lib';

gulp.task('jslib', [], function () {
    gulp.src(src.systemjs)
        .pipe(gulp.dest(dest));
});

gulp.task('jslib:clean', [], function () {
    return del(dest);
});
