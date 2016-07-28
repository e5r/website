#!/bin/sh

# Copyright (c) E5R Development Team. All rights reserved.
# Licensed under the Apache License, Version 2.0.
# More license information in https://github.com/e5r/licenses/blob/master/notices/empty-project.rst.

SH_PROGRAM=`basename $SHELL`
SH_SCRIPTFILE=`readlink -f ${0}`
SH_SCRIPTDIR=`dirname $SH_SCRIPTFILE`
SH_BUILDERPATH="$SH_SCRIPTDIR/_builder"
SH_CHECK="$SH_BUILDERPATH/check.sh"
SH_BOOT="$SH_BUILDERPATH/boot.sh"
SH_BUILD="$SH_SCRIPTDIR/node_modules/.bin/gulp"

if ! sh $SH_CHECK; then
    if ! sh $SH_BOOT; then
        echo Boot failed. Check prerequisites.
        exit 1
    fi
fi

if ! $SH_BUILD "$@"; then
    echo Build failed.
    exit 1
fi

exit $?

