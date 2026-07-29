@echo off
pushd "%~dp0"
echo =========================================================
echo       Starting DSPAUT Main Website Development Server     
echo =========================================================
echo.

echo [1/2] Running Automated Asset Integrity Audit...
python E:\DS_LSC\dsvault\Marketing\03_Resources\verify_website_assets.py
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Asset Verification Failed! Please fix missing assets before launching server.
    echo.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [2/2] Launching Local Server (http://localhost:3000)...
echo [INFO] Press Ctrl+C to stop the server when you are finished.
echo.
cmd /c npm run dev
popd
pause
