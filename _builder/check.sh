#!/bin/sh

# Copyright (c) E5R Development Team. All rights reserved.
# Licensed under the Apache License, Version 2.0.
# More license information in https://github.com/e5r/licenses/blob/master/notices/empty-project.rst.

CHECK_NODEMODULES="./node_modules"
CHECK_ROOTPACKAGE="./package.json"
CHECK_ROOTGULPFILE="./gulpfile.js"

if [ ! -f "$CHECK_ROOTPACKAGE" ]; then
    echo \#WARNING: Root file "package.json" not found.
    exit 1
fi

if [ ! -f "$CHECK_ROOTGULPFILE" ]; then
    echo \#WARNING: Root file "gulpfile.js" not found.
    exit 1
fi

if [ ! -d "$CHECK_NODEMODULES/gulp" ]; then
    echo \#WARNING: No "gulp" detected.
    exit 1
fi

if [ ! -d "$CHECK_NODEMODULES/gulp-util" ]; then
    echo \#WARNING: No "gulp-util" detected.
    exit 1
fi

if [ ! -d "$CHECK_NODEMODULES/run-sequence" ]; then
    echo \#WARNING: No "run-sequence" detected.
    exit 1
fi

if [ ! -d "$CHECK_NODEMODULES/.bin" ]; then
   exit 1
fi
