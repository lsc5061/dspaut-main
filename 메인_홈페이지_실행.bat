@echo off
pushd "%~dp0"
echo Starting DSPAUT Main Website Development Server...
echo.
echo [INFO] This window must remain open while viewing the website.
echo [INFO] The local server will run on: http://localhost:3000
echo [INFO] Press Ctrl+C to stop the server when you are finished.
echo.
cmd /c npm run dev
popd
pause
