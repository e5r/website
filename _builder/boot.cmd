:: Copyright (c) E5R Development Team. All rights reserved.
:: Licensed under the Apache License, Version 2.0.
:: More license information in https://github.com/e5r/licenses/blob/master/notices/empty-project.rst.

@echo off

set BOOT_CHECK=%~dp0check.cmd
set BOOT_NODEMINVERSION=5
set BOOT_NPMMINVERSION=3

echo Initializing prerequisites...

:: Requires NodeJS
:: -----------------------------------------------------------------------------------------
where node >nul 2>&1
if "%ERRORLEVEL%" neq "0"; goto :nonode

node -e "process.exit(process.versions.node.split('.')[0] >= %BOOT_NODEMINVERSION% ? 0 : 1)" >nul 2>&1
if "%ERRORLEVEL%" neq "0"; goto :nonode

:: Requires NPM
:: -----------------------------------------------------------------------------------------
where npm >nul 2>&1
if "%ERRORLEVEL%" neq "0"; goto :nonpm

node -e "process.exit(require('child_process').execSync('npm --version').toString().split('.')[0] >= %BOOT_NPMMINVERSION% ? 0 : 1)"  >nul 2>&1
if "%ERRORLEVEL%" neq "0"; goto :nonpm

echo - Installing NPM packages...

npm install
if "%ERRORLEVEL%" neq "0"; goto :noinstallpkg

:: Second check
call %BOOT_CHECK% >nul 2>&1
if "%ERRORLEVEL%" neq "0"; goto :error

goto :finish

:nonode
echo Requires NodeJS ^>= %BOOT_NODEMINVERSION%.0 - #TODO: Auto install with E5R Dev Tool.
goto :error

:nonpm
echo Requires NPM ^>= %BOOT_NPMMINVERSION%.0 - #TODO: Auto install with E5R Dev Tool.
goto :error

:noinstallpkg
echo Error on install NPM packages.
goto :error

:error
endlocal
call :exitSetErrorLevel

:exitSetErrorLevel
exit /b 1

:finish
endlocal
