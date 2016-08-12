// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

declare var System: any

let systemjsMap: Object = {
    'app': 'app',
    '@angular': 'lib/angular',
    'rxjs': 'lib/rxjs'
}

let systemjsPkg: Object = {
    'app': {
        main: 'main.js',
        defaultExtension: 'js'
    },
    'rxjs': {
        defaultExtension: 'js'
    }
}

// Angular modules
let systemjsNgModules: Array<string> = [
    'common',
    'compiler',
    'core',
    'platform-browser',
    'platform-browser-dynamic',
    'router'
];

systemjsNgModules.map((ngModule) => {
    systemjsPkg['@angular/' + ngModule] = {
        main: ngModule + '.umd.js',
        defaultExtension: 'js'
    }
});

System.config({
    map: systemjsMap,
    packages: systemjsPkg
})
