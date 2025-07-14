@echo off
echo === Product Image Copy Utility ===
echo.
echo This script helps you copy images from your existing folders to the new structure.
echo.
echo Available product categories:
echo 1. laptops-desktops
echo 2. processors
echo 3. memory
echo 4. storage
echo 5. gpu
echo 6. networking
echo 7. phones
echo 8. tablets
echo 9. servers
echo 10. cards
echo 11. drives
echo.
set /p category="Enter the product category (e.g., laptops-desktops): "
set /p source="Enter the source folder path (e.g., C:\MyImages\Laptops): "

if not exist "static\img\products\%category%" (
    echo Creating directory: static\img\products\%category%
    mkdir "static\img\products\%category%"
)

if exist "%source%" (
    echo Copying images from %source% to static\img\products\%category%...
    copy "%source%\*.jpg" "static\img\products\%category%\" >nul 2>&1
    copy "%source%\*.jpeg" "static\img\products\%category%\" >nul 2>&1
    copy "%source%\*.png" "static\img\products\%category%\" >nul 2>&1
    copy "%source%\*.gif" "static\img\products\%category%\" >nul 2>&1
    copy "%source%\*.webp" "static\img\products\%category%\" >nul 2>&1
    echo ✅ Images copied successfully!
    echo.
    echo Now run: node scripts/import-product-images.js
) else (
    echo ❌ Source folder not found: %source%
)

pause 