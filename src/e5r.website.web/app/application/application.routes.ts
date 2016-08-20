// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

/// <reference path="../../../../typings/index.d.ts" />

import {Routes, RouterModule} from '@angular/router';

import {HomePageComponent} from '../pages/home-page.component';
import {NotFoundPageComponent} from '../pages/not-found-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: '**', component: NotFoundPageComponent }
];

export const applicationRouterProvider: any[] = [
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
