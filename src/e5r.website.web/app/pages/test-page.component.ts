// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

/// <reference path="../../../../typings/index.d.ts" />

import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'test-page',
    template: `
    <h1>Test!</h1>
    <nav>
        <button (click)="goHome()">Go to Home!</button>
    </nav>
    `
})
export class TestPageComponent {
    constructor(private router: Router) { }

    goHome() {
        console.log('goHome()');
        this.router.navigate(['/']);
    }
}
