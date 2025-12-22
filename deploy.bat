@echo off
echo ========================================
echo  Cyber Masters Academy - Deploy Script
echo ========================================
echo.

:: Get commit message from argument or use default
set COMMIT_MSG=%~1
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Deploy updates

echo Commit message: %COMMIT_MSG%
echo.

:: Step 1: Build the project
echo [1/4] Building project...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)
echo ✅ Build successful
echo.

:: Step 2: Add all changes to git
echo [2/4] Staging changes...
git add -A
echo ✅ Changes staged
echo.

:: Step 3: Commit changes
echo [3/4] Committing changes...
git commit -m "%COMMIT_MSG%"
echo ✅ Changes committed
echo.

:: Step 4: Push to GitHub
echo [4/4] Pushing to GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo ❌ Push failed!
    pause
    exit /b 1
)
echo ✅ Pushed to GitHub
echo.

:: Step 5: Deploy to GitHub Pages
echo [5/5] Deploying to GitHub Pages...
call npm run deploy
if %errorlevel% neq 0 (
    echo ❌ Deploy failed!
    pause
    exit /b 1
)
echo ✅ Deployed to GitHub Pages
echo.

echo ========================================
echo  Deployment Complete!
echo ========================================
echo.
echo Your site is live at:
echo https://shannatobf.github.io/cybermastersacademy.org
echo.
echo (May take 1-2 minutes to update)
echo.
pause
