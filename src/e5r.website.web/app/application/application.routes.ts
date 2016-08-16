// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

/// <reference path="../../../../typings/index.d.ts" />

import {Routes, RouterModule} from '@angular/router';

import {HomePageComponent, NotFoundPageComponent, TestPageComponent} from '../pages/bundle';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'test', component: TestPageComponent },
    { path: '**', component: NotFoundPageComponent }
];

export const applicationRouterProvider: any[] = [
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
