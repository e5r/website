// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

var System: any

let _map: Object = {
    'app': 'app',
    '@angular': 'lib/angular',
    'rxjs': 'lib/rxjs'
}

let _pkg: Object = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { /*main:'Rx.umd.js',*/ defaultExtension: 'js' }
}

// Angular packages

let _ngPkg: Array<string> = [
    'common',
    'compiler',
    'core',
    'platform-browser',
    'platform-browser-dynamic'
];

_ngPkg.map((pkg) => {
    _pkg['@angular/' + pkg] = {
        main: pkg + '.umd.js', defaultExtension: 'js'
    }
});

System.config({
    map: _map,
    packages: _pkg
})
