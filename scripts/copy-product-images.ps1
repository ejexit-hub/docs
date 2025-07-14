# Product Image Copy Utility (PowerShell)
Write-Host "=== Product Image Copy Utility ===" -ForegroundColor Green
Write-Host ""

Write-Host "Available product categories:" -ForegroundColor Yellow
$categories = @(
    "laptops-desktops",
    "processors", 
    "memory",
    "storage",
    "gpu",
    "networking",
    "phones",
    "tablets",
    "servers",
    "cards",
    "drives"
)

for ($i = 0; $i -lt $categories.Count; $i++) {
    Write-Host "$($i + 1). $($categories[$i])" -ForegroundColor Cyan
}

Write-Host ""
$category = Read-Host "Enter the product category (e.g., laptops-desktops)"
$source = Read-Host "Enter the source folder path (e.g., C:\MyImages\Laptops)"

$targetDir = "static\img\products\$category"

# Create target directory if it doesn't exist
if (!(Test-Path $targetDir)) {
    Write-Host "Creating directory: $targetDir" -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
}

# Check if source exists
if (Test-Path $source) {
    Write-Host "Copying images from $source to $targetDir..." -ForegroundColor Yellow
    
    $extensions = @("*.jpg", "*.jpeg", "*.png", "*.gif", "*.webp")
    $copiedCount = 0
    
    foreach ($ext in $extensions) {
        $files = Get-ChildItem -Path $source -Filter $ext -ErrorAction SilentlyContinue
        if ($files) {
            Copy-Item -Path $files.FullName -Destination $targetDir -Force
            $copiedCount += $files.Count
        }
    }
    
    Write-Host "✅ Successfully copied $copiedCount images!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next step: Run 'node scripts/import-product-images.js'" -ForegroundColor Yellow
} else {
    Write-Host "❌ Source folder not found: $source" -ForegroundColor Red
}

Write-Host ""
Read-Host "Press Enter to continue" 