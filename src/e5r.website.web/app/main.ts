// Copyright (c) E5R Development Team. All rights reserved.
// Licensed under the Apache License, Version 2.0. More license information in LICENSE.txt.

/// <reference path="../../../typings/index.d.ts" />

import {bootstrap} from '@angular/platform-browser-dynamic';

import {ApplicationComponent, applicationRouterProvider} from './application/bundle';

bootstrap(ApplicationComponent, [
    applicationRouterProvider
]).catch(error => console.error('#ApplicationError:', error));
