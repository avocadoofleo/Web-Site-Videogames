Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'

$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$brandDir = Join-Path $root 'assets\images\brand'
$productDir = Join-Path $root 'assets\images\products'
New-Item -ItemType Directory -Force -Path $brandDir, $productDir | Out-Null

function Color-Hex($hex) { [System.Drawing.ColorTranslator]::FromHtml($hex) }
function Brush-Hex($hex) { [System.Drawing.SolidBrush]::new((Color-Hex $hex)) }
function Pen-Hex($hex, $width) { [System.Drawing.Pen]::new((Color-Hex $hex), [single]$width) }
function Font-Px($family, $size, $styleName) {
    [System.Drawing.Font]::new($family, [single]$size, [System.Drawing.FontStyle]::$styleName, [System.Drawing.GraphicsUnit]::Pixel)
}
function Gradient($rect, $hex1, $hex2, $angle) {
    [System.Drawing.Drawing2D.LinearGradientBrush]::new($rect, (Color-Hex $hex1), (Color-Hex $hex2), [single]$angle)
}
function Save-Png($bmp, $path) {
    if (Test-Path $path) { Remove-Item -LiteralPath $path -Force }
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
}
function Fit-Text($g, $text, $family, $style, $maxSize, $minSize, $rect, $brush, $format) {
    for ($size = $maxSize; $size -ge $minSize; $size -= 2) {
        $font = Font-Px $family $size $style
        $measured = $g.MeasureString($text, $font, [int]$rect.Width, $format)
        if ($measured.Width -le $rect.Width + 5 -and $measured.Height -le $rect.Height) {
            $g.DrawString($text, $font, $brush, $rect, $format)
            $font.Dispose()
            return
        }
        $font.Dispose()
    }
    $font = Font-Px $family $minSize $style
    $g.DrawString($text, $font, $brush, $rect, $format)
    $font.Dispose()
}
function Circuit($g, $width, $height, $accentHex) {
    $accent = Color-Hex $accentHex
    $pen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(105, $accent), [single]3)
    $dot = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(120, $accent))
    for ($i = 0; $i -lt 12; $i++) {
        $y = 90 + ($i * 72) % ($height - 150)
        $x1 = 20 + ($i * 83) % ($width - 220)
        $x2 = [Math]::Min($width - 60, $x1 + 120 + (($i * 17) % 170))
        $g.DrawLine($pen, $x1, $y, $x2, $y)
        $g.DrawLine($pen, $x2, $y, $x2, $y + 38)
        $g.FillEllipse($dot, $x2 - 6, $y + 32, 12, 12)
    }
    $pen.Dispose()
    $dot.Dispose()
}
function Controller($g, $x, $y, $scale, $accentHex) {
    $accent = Color-Hex $accentHex
    $dark = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(210, 9, 13, 28))
    $bright = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(230, $accent))
    $pen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(230, $accent), [single](5 * $scale))
    $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
    $path.AddBezier($x + 20*$scale, $y + 70*$scale, $x + 35*$scale, $y + 20*$scale, $x + 100*$scale, $y + 25*$scale, $x + 120*$scale, $y + 55*$scale)
    $path.AddBezier($x + 120*$scale, $y + 55*$scale, $x + 145*$scale, $y + 20*$scale, $x + 210*$scale, $y + 25*$scale, $x + 225*$scale, $y + 70*$scale)
    $path.AddBezier($x + 225*$scale, $y + 70*$scale, $x + 245*$scale, $y + 140*$scale, $x + 190*$scale, $y + 155*$scale, $x + 158*$scale, $y + 110*$scale)
    $path.AddLine($x + 88*$scale, $y + 110*$scale, $x + 88*$scale, $y + 110*$scale)
    $path.AddBezier($x + 88*$scale, $y + 110*$scale, $x + 55*$scale, $y + 155*$scale, $x, $y + 140*$scale, $x + 20*$scale, $y + 70*$scale)
    $path.CloseFigure()
    $g.FillPath($dark, $path)
    $g.DrawPath($pen, $path)
    $g.FillRectangle($bright, $x + 54*$scale, $y + 76*$scale, 44*$scale, 12*$scale)
    $g.FillRectangle($bright, $x + 70*$scale, $y + 60*$scale, 12*$scale, 44*$scale)
    $g.FillEllipse($bright, $x + 164*$scale, $y + 60*$scale, 17*$scale, 17*$scale)
    $g.FillEllipse($bright, $x + 190*$scale, $y + 83*$scale, 17*$scale, 17*$scale)
    $g.FillEllipse($bright, $x + 144*$scale, $y + 83*$scale, 17*$scale, 17*$scale)
    $path.Dispose()
    $dark.Dispose()
    $bright.Dispose()
    $pen.Dispose()
}
function New-Canvas($width, $height) {
    $bmp = [System.Drawing.Bitmap]::new($width, $height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    return @($bmp, $g)
}

# Logo inspirado en el cofre, fantasma y aguacate del brief visual.
$canvas = New-Canvas 1100 420
$logo = $canvas[0]
$g = $canvas[1]
$g.Clear([System.Drawing.Color]::Transparent)
$hex = [System.Drawing.Drawing2D.GraphicsPath]::new()
$hex.AddPolygon(@(
    [System.Drawing.PointF]::new(170, 22), [System.Drawing.PointF]::new(320, 108),
    [System.Drawing.PointF]::new(320, 282), [System.Drawing.PointF]::new(170, 368),
    [System.Drawing.PointF]::new(20, 282), [System.Drawing.PointF]::new(20, 108)
))
$g.DrawPath((Pen-Hex '#bb4cff' 7), $hex)
$g.DrawPath((Pen-Hex '#5b16ad' 3), $hex)

$chest = [System.Drawing.Drawing2D.GraphicsPath]::new()
$chest.AddRectangle([System.Drawing.RectangleF]::new(64, 162, 224, 118))
$chest.AddRectangle([System.Drawing.RectangleF]::new(78, 112, 196, 70))
$g.FillPath((Brush-Hex '#18072b'), $chest)
$g.DrawPath((Pen-Hex '#bb4cff' 5), $chest)
$g.FillRectangle((Brush-Hex '#7c2cff'), [System.Drawing.Rectangle]::new(152, 176, 48, 44))
$g.DrawRectangle((Pen-Hex '#f6e9ff' 3), [System.Drawing.Rectangle]::new(152, 176, 48, 44))

$ghost = [System.Drawing.Drawing2D.GraphicsPath]::new()
$ghost.AddBezier(92, 206, 94, 132, 196, 126, 204, 208)
$ghost.AddLine(204, 258, 186, 242)
$ghost.AddLine(168, 262, 148, 242)
$ghost.AddLine(126, 262, 110, 242)
$ghost.AddLine(92, 258, 92, 206)
$ghost.CloseFigure()
$g.FillPath((Brush-Hex '#f7edff'), $ghost)
$g.DrawPath((Pen-Hex '#9b5cff' 4), $ghost)
$g.FillEllipse((Brush-Hex '#111021'), 128, 188, 14, 18)
$g.FillEllipse((Brush-Hex '#111021'), 166, 188, 14, 18)
$g.DrawArc((Pen-Hex '#111021' 4), 139, 205, 30, 24, 20, 140)

$avocado = [System.Drawing.Drawing2D.GraphicsPath]::new()
$avocado.AddBezier(210, 208, 216, 142, 280, 144, 290, 216)
$avocado.AddBezier(290, 216, 292, 278, 214, 286, 210, 208)
$avocado.CloseFigure()
$g.FillPath((Brush-Hex '#a9f25c'), $avocado)
$g.DrawPath((Pen-Hex '#6cdb37' 4), $avocado)
$g.FillEllipse((Brush-Hex '#5b3319'), 244, 218, 30, 36)
$g.FillEllipse((Brush-Hex '#ffffff'), 232, 190, 8, 9)
$g.FillEllipse((Brush-Hex '#ffffff'), 262, 190, 8, 9)
$g.FillEllipse((Brush-Hex '#111021'), 234, 192, 4, 5)
$g.FillEllipse((Brush-Hex '#111021'), 264, 192, 4, 5)

$fontPixel = Font-Px 'Segoe UI Black' 88 Bold
$fontVault = Font-Px 'Segoe UI Black' 95 Bold
$fontGaming = Font-Px 'Segoe UI Semibold' 42 Bold
$fontTag = Font-Px 'Segoe UI Semibold' 20 Regular
$g.DrawString('PIXEL', $fontPixel, (Brush-Hex '#ffffff'), [System.Drawing.PointF]::new(380, 72))
$g.DrawString('VAULT', $fontVault, (Brush-Hex '#b832ff'), [System.Drawing.PointF]::new(380, 154))
$g.DrawString('G A M I N G', $fontGaming, (Brush-Hex '#ffffff'), [System.Drawing.PointF]::new(392, 266))
$g.DrawString('DESBLOQUEA TU PROXIMA AVENTURA', $fontTag, (Brush-Hex '#dbc7ff'), [System.Drawing.PointF]::new(392, 326))
Save-Png $logo (Join-Path $brandDir 'pixelvault-logo.png')
$fontPixel.Dispose()
$fontVault.Dispose()
$fontGaming.Dispose()
$fontTag.Dispose()
$hex.Dispose()
$chest.Dispose()
$ghost.Dispose()
$avocado.Dispose()
$g.Dispose()
$logo.Dispose()

# Hero banner con mood morado, zona arcade y ciudad neon.
$canvas = New-Canvas 1800 820
$hero = $canvas[0]
$g = $canvas[1]
$rect = [System.Drawing.Rectangle]::new(0, 0, 1800, 820)
$bg = Gradient $rect '#170027' '#05030c' 20
$g.FillRectangle($bg, $rect)
Circuit $g 1800 820 '#bb4cff'

$floorPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(90, (Color-Hex '#bb4cff')), [single]2)
for ($i = 0; $i -lt 16; $i++) {
    $y = 560 + ($i * 22)
    $g.DrawLine($floorPen, 0, $y, 1800, $y + 110)
}
for ($i = 0; $i -lt 18; $i++) {
    $x = 120 + ($i * 92)
    $g.DrawLine($floorPen, $x, 820, 910, 500)
}
$floorPen.Dispose()

$windowPen = Pen-Hex '#24e8ff' 3
$pinkPen = Pen-Hex '#ff4fd8' 4
$white = Brush-Hex '#ffffff'
$signFont = Font-Px 'Segoe UI Black' 44 Bold
$smallSign = Font-Px 'Segoe UI Black' 28 Bold

# Zona dulce a la izquierda
$g.FillRectangle([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(120, 80, 12, 112)), [System.Drawing.Rectangle]::new(0, 80, 485, 520))
$g.DrawRectangle($pinkPen, [System.Drawing.Rectangle]::new(58, 150, 320, 210))
$g.FillRectangle((Brush-Hex '#210736'), [System.Drawing.Rectangle]::new(58, 150, 320, 210))
$g.DrawString('Sweet', $signFont, (Brush-Hex '#ffd7ff'), [System.Drawing.PointF]::new(88, 178))
$g.DrawString('Games', $signFont, (Brush-Hex '#ff4fd8'), [System.Drawing.PointF]::new(138, 232))
$g.FillEllipse((Brush-Hex '#d18bff'), 88, 410, 92, 70)
$g.FillEllipse((Brush-Hex '#f7edff'), 114, 424, 16, 16)
$g.FillEllipse((Brush-Hex '#f7edff'), 148, 424, 16, 16)

# Logo central en cofre.
$g.DrawString('PIXEL', (Font-Px 'Segoe UI Black' 74 Bold), $white, [System.Drawing.PointF]::new(685, 162))
$g.DrawString('VAULT', (Font-Px 'Segoe UI Black' 78 Bold), (Brush-Hex '#bb4cff'), [System.Drawing.PointF]::new(678, 238))
$g.DrawString('G A M I N G', $smallSign, (Brush-Hex '#ffffff'), [System.Drawing.PointF]::new(704, 326))
$g.DrawRectangle($windowPen, [System.Drawing.Rectangle]::new(650, 118, 405, 285))
$g.DrawLine($pinkPen, 648, 404, 1060, 404)

# Ciudad y zona oscura a la derecha.
for ($i = 0; $i -lt 7; $i++) {
    $x = 1120 + ($i * 92)
    $h = 260 + (($i * 53) % 210)
    $g.FillRectangle([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(150, 20, 7, 36)), [System.Drawing.Rectangle]::new($x, 540 - $h, 72, $h))
    for ($j = 0; $j -lt 7; $j++) {
        $g.FillRectangle((Brush-Hex '#bb4cff'), [System.Drawing.Rectangle]::new($x + 12, 300 - $j*32 + (($i % 2) * 8), 14, 8))
        $g.FillRectangle((Brush-Hex '#24e8ff'), [System.Drawing.Rectangle]::new($x + 42, 300 - $j*32, 14, 8))
    }
}
$g.DrawRectangle($pinkPen, [System.Drawing.Rectangle]::new(1295, 122, 320, 210))
$g.DrawString('DARK', $signFont, (Brush-Hex '#ff4fd8'), [System.Drawing.PointF]::new(1360, 154))
$g.DrawString('ZONE', $signFont, (Brush-Hex '#bb4cff'), [System.Drawing.PointF]::new(1360, 214))
$g.DrawString('CREDITOS', $smallSign, (Brush-Hex '#24e8ff'), [System.Drawing.PointF]::new(1332, 394))
$g.DrawString('MEMBRESIAS', $smallSign, (Brush-Hex '#74f99b'), [System.Drawing.PointF]::new(1324, 434))

$badge = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(230, (Color-Hex '#24e8ff')))
$badgeFont = Font-Px 'Segoe UI Black' 30 Bold
$g.FillRectangle($badge, [System.Drawing.Rectangle]::new(620, 472, 290, 62))
$g.DrawString('VER CATALOGO', $badgeFont, (Brush-Hex '#12051e'), [System.Drawing.PointF]::new(644, 486))
$g.DrawRectangle($pinkPen, [System.Drawing.Rectangle]::new(930, 472, 280, 62))
$g.DrawString('OFERTAS -35%', $badgeFont, $white, [System.Drawing.PointF]::new(954, 486))

Save-Png $hero (Join-Path $brandDir 'hero-banner.png')
$bg.Dispose()
$windowPen.Dispose()
$pinkPen.Dispose()
$white.Dispose()
$signFont.Dispose()
$smallSign.Dispose()
$badge.Dispose()
$badgeFont.Dispose()
$g.Dispose()
$hero.Dispose()

$products = @(
    @{File='neon-quest.png'; Title='Neon Quest'; Sub='RPG de accion'; Cat='VIDEOJUEGO'; C1='#06b6d4'; C2='#312e81'; C3='#ff3cf7'; Glyph='NQ'},
    @{File='cyber-racers.png'; Title='Cyber Racers'; Sub='Carreras futuristas'; Cat='VIDEOJUEGO'; C1='#f97316'; C2='#111827'; C3='#00f5ff'; Glyph='CR'},
    @{File='kingdom-forge.png'; Title='Kingdom Forge'; Sub='Estrategia medieval'; Cat='VIDEOJUEGO'; C1='#22c55e'; C2='#052e16'; C3='#facc15'; Glyph='KF'},
    @{File='galaxy-tactics.png'; Title='Galaxy Tactics'; Sub='Sci-fi por turnos'; Cat='VIDEOJUEGO'; C1='#818cf8'; C2='#020617'; C3='#38bdf8'; Glyph='GT'},
    @{File='zombie-pulse.png'; Title='Zombie Pulse'; Sub='Supervivencia coop'; Cat='VIDEOJUEGO'; C1='#ef4444'; C2='#1f2937'; C3='#a3e635'; Glyph='ZP'},
    @{File='dragon-arena.png'; Title='Dragon Arena'; Sub='Combate competitivo'; Cat='VIDEOJUEGO'; C1='#f59e0b'; C2='#451a03'; C3='#fb7185'; Glyph='DA'},
    @{File='pixel-gift-25.png'; Title='Gift Card $25'; Sub='Credito digital'; Cat='GIFT CARD'; C1='#14b8a6'; C2='#082f49'; C3='#f0fdfa'; Glyph='$25'},
    @{File='pixel-gift-50.png'; Title='Gift Card $50'; Sub='Credito digital'; Cat='GIFT CARD'; C1='#a855f7'; C2='#2e1065'; C3='#fde68a'; Glyph='$50'},
    @{File='pixel-gift-100.png'; Title='Gift Card $100'; Sub='Credito digital'; Cat='GIFT CARD'; C1='#eab308'; C2='#422006'; C3='#67e8f9'; Glyph='$100'},
    @{File='steam-credit.png'; Title='PC Credit'; Sub='Saldo para PC'; Cat='GIFT CARD'; C1='#2563eb'; C2='#020617'; C3='#e0f2fe'; Glyph='PC'},
    @{File='console-plus.png'; Title='Console Plus'; Sub='Membresia 12 meses'; Cat='MEMBRESIA'; C1='#0ea5e9'; C2='#0f172a'; C3='#bef264'; Glyph='12M'},
    @{File='ultimate-pass.png'; Title='Ultimate Pass'; Sub='Biblioteca premium'; Cat='MEMBRESIA'; C1='#22c55e'; C2='#052e16'; C3='#f0fdf4'; Glyph='UP'},
    @{File='cloud-pro.png'; Title='Cloud Pro'; Sub='Juego en la nube'; Cat='MEMBRESIA'; C1='#38bdf8'; C2='#1e1b4b'; C3='#f472b6'; Glyph='CP'},
    @{File='esports-vip.png'; Title='Esports VIP'; Sub='Torneos y recompensas'; Cat='MEMBRESIA'; C1='#ec4899'; C2='#3b0764'; C3='#fef08a'; Glyph='VIP'},
    @{File='indie-bundle.png'; Title='Indie Bundle'; Sub='Pack de 5 juegos'; Cat='BUNDLE'; C1='#f43f5e'; C2='#111827'; C3='#a7f3d0'; Glyph='5X'}
)

foreach ($p in $products) {
    $canvas = New-Canvas 900 1120
    $bmp = $canvas[0]
    $g = $canvas[1]
    $bgRect = [System.Drawing.Rectangle]::new(0, 0, 900, 1120)
    $grad = Gradient $bgRect $p.C1 $p.C2 55
    $g.FillRectangle($grad, $bgRect)
    Circuit $g 900 1120 $p.C3
    $g.FillRectangle([System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(120, 2, 6, 23)), $bgRect)
    $accent = Pen-Hex $p.C3 8
    $diag = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(130, 255, 255, 255), [single]2)
    for ($i = 0; $i -lt 7; $i++) {
        $g.DrawLine($diag, -80, 180 + $i*120, 980, -40 + $i*120)
    }
    $tag = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(230, (Color-Hex $p.C3)))
    $g.FillRectangle($tag, [System.Drawing.Rectangle]::new(70,70,270,58))
    $tagFont = Font-Px 'Segoe UI Black' 29 Bold
    $g.DrawString($p.Cat, $tagFont, (Brush-Hex '#06111f'), [System.Drawing.PointF]::new(92,82))
    $center = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(190, 6, 10, 24))
    $g.FillEllipse($center, [System.Drawing.Rectangle]::new(190,232,520,520))
    $g.DrawEllipse($accent, [System.Drawing.Rectangle]::new(190,232,520,520))
    $glyphFont = Font-Px 'Segoe UI Black' 126 Bold
    $fmtCenter = [System.Drawing.StringFormat]::new()
    $fmtCenter.Alignment = [System.Drawing.StringAlignment]::Center
    $fmtCenter.LineAlignment = [System.Drawing.StringAlignment]::Center
    $g.DrawString($p.Glyph, $glyphFont, (Brush-Hex $p.C3), [System.Drawing.RectangleF]::new(210,372,480,190), $fmtCenter)
    Controller $g 305 600 1.18 $p.C3
    $fmtLeft = [System.Drawing.StringFormat]::new()
    $fmtLeft.Alignment = [System.Drawing.StringAlignment]::Near
    $fmtLeft.LineAlignment = [System.Drawing.StringAlignment]::Near
    Fit-Text $g $p.Title 'Segoe UI Black' Bold 74 44 ([System.Drawing.RectangleF]::new(70,820,760,120)) (Brush-Hex '#ffffff') $fmtLeft
    $subFont = Font-Px 'Segoe UI Semibold' 36 Regular
    $g.DrawString($p.Sub, $subFont, (Brush-Hex '#c7d2fe'), [System.Drawing.PointF]::new(76,944))
    $g.DrawLine($accent, 74, 1016, 820, 1016)
    $pv = Font-Px 'Segoe UI Black' 30 Bold
    $g.DrawString('PIXELVAULT DIGITAL', $pv, (Brush-Hex '#ffffff'), [System.Drawing.PointF]::new(72,1034))
    Save-Png $bmp (Join-Path $productDir $p.File)
    $grad.Dispose()
    $accent.Dispose()
    $diag.Dispose()
    $tag.Dispose()
    $tagFont.Dispose()
    $center.Dispose()
    $glyphFont.Dispose()
    $fmtCenter.Dispose()
    $fmtLeft.Dispose()
    $subFont.Dispose()
    $pv.Dispose()
    $g.Dispose()
    $bmp.Dispose()
}

if (Test-Path (Join-Path $brandDir 'test.png')) {
    Remove-Item -LiteralPath (Join-Path $brandDir 'test.png') -Force
}

Get-ChildItem -Recurse (Join-Path $root 'assets\images') -File |
    Sort-Object FullName |
    Select-Object FullName, Length
