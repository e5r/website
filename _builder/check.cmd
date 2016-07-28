:: Copyright (c) E5R Development Team. All rights reserved.
:: Licensed under the Apache License, Version 2.0.
:: More license information in https://github.com/e5r/licenses/blob/master/notices/empty-project.rst.

@echo off

set CHECK_NODEMODULES=%~dp0..\node_modules
set CHECK_ROOTPACKAGE=%~dp0..\package.json
set CHECK_ROOTGULPFILE=%~dp0..\gulpfile.js

if not exist %CHECK_ROOTPACKAGE%; goto :nopackage
if not exist %CHECK_ROOTGULPFILE%; goto :nogulpfile
if not exist %CHECK_NODEMODULES%\gulp; goto :nogulp
if not exist %CHECK_NODEMODULES%\gulp-util; goto :nogulputil
if not exist %CHECK_NODEMODULES%\run-sequence; goto :norunsequence
if not exist %CHECK_NODEMODULES%\.bin; goto :error

goto :finish

:nopackage
echo #WARNING: Root file "package.json" not found.
goto :error

:nogulpfile
echo #WARNING: Root file "gulpfile.js" not found.
goto :error

:nogulp
echo #WARNING: No "gulp" detected.
goto :error

:nogulputil
echo #WARNING: No "gulp-util" detected.
goto :error

:norunsequence
echo #WARNING: No "run-sequence" detected.
goto :error

:error
endlocal
call :exitSetErrorLevel

:exitSetErrorLevel
exit /b 1

:finish
endlocal
