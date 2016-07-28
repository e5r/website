#!/bin/sh

# Copyright (c) E5R Development Team. All rights reserved.
# Licensed under the Apache License, Version 2.0.
# More license information in https://github.com/e5r/licenses/blob/master/notices/empty-project.rst.

BOOT_SCRIPTFILE=`readlink -f ${0}`
BOOT_SCRIPTDIR=`dirname $BOOT_SCRIPTFILE`
BOOT_PARENTDIR=`dirname $BOOT_SCRIPTDIR`
BOOT_CHECK="$BOOT_SCRIPTDIR/check.sh"
BOOT_NODEMINVERSION=5
BOOT_NPMMINVERSION=3

echo Initializing prerequisites...

# Requires NodeJS
if ! which node > /dev/null 2>&1; then
    echo Requires NodeJS \>= ${BOOT_NODEMINVERSION}.0 - \#TODO: Auto install with E5R Dev Tool.
    exit 1
fi

if ! node -e "process.exit(process.versions.node.split('.')[0] >= ${BOOT_NODEMINVERSION} ? 0 : 1)" > /dev/null 2>&1; then
    echo Requires NodeJS \>= ${BOOT_NODEMINVERSION}.0 - \#TODO: Auto install with E5R Dev Tool.
    exit 1
fi

# Requires NPM
if ! which npm > /dev/null 2>&1; then
    echo Requires NPM \>= ${BOOT_NPMMINVERSION}.0 - \#TODO: Auto install with E5R Dev Tool.
    exit 1
fi

if ! node -e "process.exit(require('child_process').execSync('npm --version').toString().split('.')[0] >= ${BOOT_NPMMINVERSION} ? 0 : 1)" > /dev/null 2>&1; then
    echo Requires NPM \>= ${BOOT_NPMMINVERSION}.0 - \#TODO: Auto install with E5R Dev Tool.
    exit 1
fi

echo - Installing NPM packages...

if ! npm install; then
    echo Error on install NPM packages.
    exit 1
fi

# Second check
sh $BOOT_CHECK > /dev/null 2>&1

exit $?
