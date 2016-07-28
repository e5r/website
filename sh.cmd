:: Copyright (c) E5R Development Team. All rights reserved.
:: Licensed under the Apache License, Version 2.0.
:: More license information in https://github.com/e5r/licenses/blob/master/notices/empty-project.rst.

@echo off

set SH_PROGRAM=%~n0
set SH_BUILDERPATH=%~dp0_builder
set SH_CHECK=%SH_BUILDERPATH%\check.cmd
set SH_BOOT=%SH_BUILDERPATH%\boot.cmd
set SH_BUILD=%~dp0node_modules\.bin\gulp.cmd

if "%1" neq "builder" (
    echo Usage: %SH_PROGRAM% builder [tasks]
    goto :error
)

call %SH_CHECK%
if "%ERRORLEVEL%" == "0"; goto :build 

call %SH_BOOT%
if "%ERRORLEVEL%" neq "0"; goto :errorboot

:build
shift
call %SH_BUILD% %1 %2 %3 %4 %5 %6 %7 %8 %9
if "%ERRORLEVEL%" neq "0"; goto :errorbuild

goto :finish

:errorboot
echo.
echo Boot failed. Check prerequisites.
goto :error

:errorbuild
echo.
echo Build failed.
goto :error

:error
endlocal
call :exitSetErrorLevel
call :exitFromFunction 2>nul

:exitSetErrorLevel
exit /b 1

:exitFromFunction
()

:finish
endlocal
  