// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

/// <reference path="../../../../typings/index.d.ts" />

import {provideRouter, RouterConfig} from '@angular/router';

import {HomePageComponent, NotFoundPageComponent} from '../pages/bundle';

const routes: RouterConfig = [
    { path: '**', component: NotFoundPageComponent }
];

export const applicationRouterProvider = [
    provideRouter(routes)
];
