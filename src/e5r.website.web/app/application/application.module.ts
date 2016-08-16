// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

/// <reference path="../../../../typings/index.d.ts" />

import {NgModule} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {routing, ApplicationComponent, applicationRouterProvider}  from './bundle';
import {HomePageComponent, NotFoundPageComponent, TestPageComponent} from '../pages/bundle';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        ApplicationComponent,
        HomePageComponent,
        NotFoundPageComponent,
        TestPageComponent
    ],
    providers: [
        applicationRouterProvider,
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [ApplicationComponent]
})
export class MyApplicationModule { };
