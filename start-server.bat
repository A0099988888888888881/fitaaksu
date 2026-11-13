@echo off
title Fitaasu Local Web Server
echo ========================================================
echo               FITAASU LOCAL WEB SERVER
echo ========================================================
echo.
echo Launching browser at http://localhost:3000 ...
timeout /t 2 /nobreak >nul
start "" "http://localhost:3000"
echo.
echo Starting Node HTTP Server...
node server.js
pause

