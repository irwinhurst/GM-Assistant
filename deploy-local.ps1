<#
.SYNOPSIS
    Deploys the DM Assistant module to a target directory.

.DESCRIPTION
    This script copies the agents and workflows from the local repository to a specified target project.
    It simulates a "local install" by populating the target's _bmad folder.

.PARAMETER TargetPath
    The absolute or relative path to the target project directory.

.EXAMPLE
    .\deploy-local.ps1 -TargetPath "C:\Users\irwin\DND-Campaigns\Curse-of-Strahd"
#>

param (
    [Parameter(Mandatory=$true)]
    [string]$TargetPath
)

$SourcePath = "$PSScriptRoot\src\modules\dm-assistant"
$TargetAbsPath = Resolve-Path $TargetPath -ErrorAction Stop

Write-Host "Deployed DM Assistant to: $TargetAbsPath" -ForegroundColor Cyan
Write-Host "Source: $SourcePath" -ForegroundColor Gray

# Define Deployment mappings
# Source Subfolder -> Target Subfolder
$Mappings = @{
    "agents" = "_bmad\agents"
    "workflows" = "_bmad\workflows"
}

foreach ($Map in $Mappings.GetEnumerator()) {
    $SrcDir = Join-Path $SourcePath $Map.Key
    $DestDir = Join-Path $TargetAbsPath $Map.Value

    if (-not (Test-Path $SrcDir)) {
        Write-Warning "Source directory not found: $SrcDir"
        continue
    }

    if (-not (Test-Path $DestDir)) {
        New-Item -ItemType Directory -Path $DestDir -Force | Out-Null
        Write-Host "Created directory: $DestDir" -ForegroundColor DarkGray
    }

    Write-Host "Copying $($Map.Key)..." -ForegroundColor Yellow
    Copy-Item -Path "$SrcDir\*" -Destination $DestDir -Recurse -Force
}

# Copy Config if it doesn't exist
$ConfigSrc = Join-Path $SourcePath "config.yaml"
$ConfigDest = Join-Path $TargetAbsPath "_bmad\dnd-config.yaml"
if (Test-Path $ConfigSrc) {
    if (-not (Test-Path $ConfigDest)) {
        Copy-Item -Path $ConfigSrc -Destination $ConfigDest
        Write-Host "Copied default config to $ConfigDest" -ForegroundColor Green
    } else {
        Write-Host "Config already exists at $ConfigDest (Skipping)" -ForegroundColor DarkGray
    }
}

Write-Host "Deployment Complete!" -ForegroundColor Green
Write-Host "Run 'bmad status' in the target folder to verify." -ForegroundColor Cyan
