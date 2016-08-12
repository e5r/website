// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

/// <reference path="../../../typings/index.d.ts" />

import {ROUTER_DIRECTIVES} from '@angular/router';
import {bootstrap} from '@angular/platform-browser-dynamic';

import {ApplicationComponent, applicationRouterProvider, applicationBaseHrefProvider} from './application/bundle';

bootstrap(ApplicationComponent, [
    ROUTER_DIRECTIVES,
    applicationRouterProvider,
    applicationBaseHrefProvider
]).catch(error => console.error('#ApplicationError:', error));
