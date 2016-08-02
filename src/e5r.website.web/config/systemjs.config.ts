// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

var System:any

let _map: Object = {
    'app': 'app'
}

let _pkg: Object = {
    'app': { main: 'main.js', defaultExtension: 'js' }
}

System.config({
    map: _map,
    packages: _pkg
})
