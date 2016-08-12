// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

/// <reference path="../../../../typings/index.d.ts" />

import {provideRouter, RouterConfig} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import {HomePageComponent, NotFoundPageComponent, TestPageComponent} from '../pages/bundle';

const routes: RouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'test', component: TestPageComponent },
    { path: '**', component: NotFoundPageComponent }
];

export const applicationRouterProvider = [
    provideRouter(routes)
];

export const applicationBaseHrefProvider = {
    provide: APP_BASE_HREF, useValue: '/'
};
