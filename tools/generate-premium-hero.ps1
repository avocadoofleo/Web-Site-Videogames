Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'

$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$brandDir = Join-Path $root 'assets\images\brand'
New-Item -ItemType Directory -Force -Path $brandDir | Out-Null

function Color-Hex($hex) { [System.Drawing.ColorTranslator]::FromHtml($hex) }
function Brush-Hex($hex) { [System.Drawing.SolidBrush]::new((Color-Hex $hex)) }
function Pen-Hex($hex, $width) { [System.Drawing.Pen]::new((Color-Hex $hex), [single]$width) }
function Gradient($rect, $hex1, $hex2, $angle) {
    [System.Drawing.Drawing2D.LinearGradientBrush]::new($rect, (Color-Hex $hex1), (Color-Hex $hex2), [single]$angle)
}
function Font-Px($family, $size, $styleName) {
    [System.Drawing.Font]::new($family, [single]$size, [System.Drawing.FontStyle]::$styleName, [System.Drawing.GraphicsUnit]::Pixel)
}
function Save-Png($bmp, $path) {
    if (Test-Path $path) { Remove-Item -LiteralPath $path -Force }
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
}
function New-Canvas($width, $height) {
    $bmp = [System.Drawing.Bitmap]::new($width, $height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    return @($bmp, $g)
}

$canvas = New-Canvas 1800 820
$bmp = $canvas[0]
$g = $canvas[1]
$rect = [System.Drawing.Rectangle]::new(0, 0, 1800, 820)
$bg = Gradient $rect '#07030d' '#21083a' 18
$g.FillRectangle($bg, $rect)

$softPurple = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(52, (Color-Hex '#8d38ff')))
$softCyan = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(44, (Color-Hex '#22dff6')))
$softPink = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(42, (Color-Hex '#ff4fd2')))
$g.FillEllipse($softPurple, 960, -120, 620, 620)
$g.FillEllipse($softCyan, 1260, 170, 520, 520)
$g.FillEllipse($softPink, 820, 430, 620, 360)

$gridPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(45, (Color-Hex '#9f65ff')), [single]2)
for ($i = 0; $i -lt 16; $i++) {
    $y = 550 + ($i * 24)
    $g.DrawLine($gridPen, 760, $y, 1800, $y + 120)
}
for ($i = 0; $i -lt 16; $i++) {
    $x = 820 + ($i * 70)
    $g.DrawLine($gridPen, $x, 820, 1260, 500)
}

$panelPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(135, (Color-Hex '#b649ff')), [single]3)
$cyanPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(150, (Color-Hex '#22dff6')), [single]3)
$cardColors = @(
    @('#18102a', '#8d38ff'),
    @('#101827', '#22dff6'),
    @('#210b2c', '#ff4fd2'),
    @('#142217', '#70f5a4')
)

for ($i = 0; $i -lt 4; $i++) {
    $x = 970 + ($i * 145)
    $y = 156 + (($i % 2) * 58)
    $cardRect = [System.Drawing.Rectangle]::new($x, $y, 205, 300)
    $cardGrad = Gradient $cardRect $cardColors[$i][0] '#07030d' 88
    $g.FillRectangle($cardGrad, $cardRect)
    $g.DrawRectangle((Pen-Hex $cardColors[$i][1] 4), $cardRect)
    $g.FillRectangle([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(70, (Color-Hex $cardColors[$i][1]))), $x + 22, $y + 30, 160, 96)
    $g.FillEllipse((Brush-Hex $cardColors[$i][1]), $x + 74, $y + 154, 58, 58)
    $g.DrawLine((Pen-Hex $cardColors[$i][1] 5), $x + 36, $y + 248, $x + 168, $y + 248)
    $cardGrad.Dispose()
}

$device = [System.Drawing.Rectangle]::new(1050, 500, 520, 170)
$deviceBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(210, 10, 5, 20))
$g.FillRectangle($deviceBrush, $device)
$g.DrawRectangle($cyanPen, $device)
$g.FillRectangle([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(145, (Color-Hex '#8d38ff'))), 1090, 530, 250, 24)
$g.FillRectangle([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(145, (Color-Hex '#22dff6'))), 1090, 570, 390, 16)
$g.FillRectangle([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(120, (Color-Hex '#ff4fd2'))), 1090, 606, 300, 16)

$controllerPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
$controllerPath.AddBezier(1260, 650, 1290, 585, 1375, 600, 1400, 634)
$controllerPath.AddBezier(1400, 634, 1428, 596, 1512, 585, 1545, 650)
$controllerPath.AddBezier(1545, 650, 1570, 710, 1510, 744, 1465, 700)
$controllerPath.AddLine(1340, 700, 1340, 700)
$controllerPath.AddBezier(1340, 700, 1295, 744, 1235, 710, 1260, 650)
$controllerPath.CloseFigure()
$g.FillPath([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(228, 11, 4, 23)), $controllerPath)
$g.DrawPath($panelPen, $controllerPath)
$g.FillRectangle((Brush-Hex '#22dff6'), 1318, 657, 56, 12)
$g.FillRectangle((Brush-Hex '#22dff6'), 1340, 635, 12, 56)
$g.FillEllipse((Brush-Hex '#ff4fd2'), 1450, 636, 20, 20)
$g.FillEllipse((Brush-Hex '#70f5a4'), 1484, 670, 20, 20)
$g.FillEllipse((Brush-Hex '#ffe176'), 1416, 670, 20, 20)

$shine = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(65, 255, 255, 255), [single]2)
for ($i = 0; $i -lt 18; $i++) {
    $x = 820 + ($i * 58)
    $g.DrawLine($shine, $x, 110, $x + 80, 40)
}

$fade = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(120, 7, 3, 13))
$g.FillRectangle($fade, 0, 0, 850, 820)

Save-Png $bmp (Join-Path $brandDir 'hero-banner.png')

$bg.Dispose()
$softPurple.Dispose()
$softCyan.Dispose()
$softPink.Dispose()
$gridPen.Dispose()
$panelPen.Dispose()
$cyanPen.Dispose()
$deviceBrush.Dispose()
$controllerPath.Dispose()
$shine.Dispose()
$fade.Dispose()
$g.Dispose()
$bmp.Dispose()

Get-Item (Join-Path $brandDir 'hero-banner.png') | Select-Object FullName, Length
