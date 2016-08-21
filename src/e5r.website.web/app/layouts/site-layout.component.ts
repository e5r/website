// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

/// <reference path="../../../../typings/index.d.ts" />

import {Component, Input} from '@angular/core';

import {APP_PREFIX} from '../application/application.utils';

@Component({
    selector: APP_PREFIX + 'site-layout',
    templateUrl: 'templates/layouts/site-layout.html'
})
export class SiteLayoutComponent {
    @Input('show-menu') showContentMenu: boolean = true;
}
