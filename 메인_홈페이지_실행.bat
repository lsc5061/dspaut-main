@echo off
pushd "%~dp0"
echo =========================================================
echo       Starting DSPAUT Main Website Development Server     
echo =========================================================
echo.

echo [1/1] Launching Local Server (http://localhost:3000)...
echo [INFO] Press Ctrl+C to stop the server when you are finished.
echo.
cmd /c npm run dev
popd
pause
