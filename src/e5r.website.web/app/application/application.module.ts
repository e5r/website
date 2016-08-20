// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

/// <reference path="../../../../typings/index.d.ts" />

import {NgModule} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

/** @todo: Create ApplicationCoreModule */
import {ApplicationComponent}  from './application.component';
import {routing, applicationRouterProvider}  from './application.routes';

/** @todo: Create ApplicationLayoutModule */
import {SiteLayoutComponent} from '../layouts/site-layout.component';
import {MainMenuPartialComponent} from '../partials/main-menu-partial.component';
import {FooterPartialComponent} from '../partials/footer-partial.component';
import {ContentMenuPartialComponent} from '../partials/content-menu-partial.component';

/** @todo: Create ApplicationPagesModule */
import {HomePageComponent} from '../pages/home-page.component';
import {NotFoundPageComponent} from '../pages/not-found-page.component';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        // Core application components
        ApplicationComponent,

        // Master layout components
        SiteLayoutComponent,
        MainMenuPartialComponent,
        FooterPartialComponent,
        ContentMenuPartialComponent,

        // Page components
        HomePageComponent,
        NotFoundPageComponent
    ],
    providers: [
        applicationRouterProvider,
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [ApplicationComponent]
})
export class MyApplicationModule { };
