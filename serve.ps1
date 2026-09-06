# Servidor estático mínimo para pré-visualizar o portfólio.
# Uso:  powershell -ExecutionPolicy Bypass -File serve.ps1 [-Port 5173]

param([int]$Port = 5173)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$prefix = "http://localhost:$Port/"

$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "text/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".svg"  = "image/svg+xml"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".webp" = "image/webp"
  ".gif"  = "image/gif"
  ".ico"  = "image/x-icon"
  ".woff2" = "font/woff2"
  ".pdf"  = "application/pdf"
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
try { $listener.Start() } catch {
  Write-Host "Nao foi possivel abrir a porta $Port. Tente outra: -Port 5174"
  exit 1
}
Write-Host "Servindo $root em $prefix  (Ctrl+C para parar)"

while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
  } catch { break }

  $req = $ctx.Request
  $res = $ctx.Response

  $rel = [System.Uri]::UnescapeDataString($req.Url.AbsolutePath).TrimStart('/')
  if ([string]::IsNullOrWhiteSpace($rel)) { $rel = "index.html" }

  $path = Join-Path $root $rel
  $full = $null
  try { $full = [System.IO.Path]::GetFullPath($path) } catch {}

  # Impede sair da raiz do projeto.
  if (-not $full -or -not $full.StartsWith([System.IO.Path]::GetFullPath($root), [StringComparison]::OrdinalIgnoreCase)) {
    $res.StatusCode = 403; $res.Close(); continue
  }

  if (Test-Path -LiteralPath $full -PathType Container) {
    $full = Join-Path $full "index.html"
  }

  if (Test-Path -LiteralPath $full -PathType Leaf) {
    $ext = [System.IO.Path]::GetExtension($full).ToLowerInvariant()
    $res.ContentType = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { "application/octet-stream" }
    # Durante o desenvolvimento nada deve ficar em cache: sem isso o
    # navegador continua servindo o CSS/JS antigo depois de uma edicao.
    $res.Headers.Add("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
    $res.Headers.Add("Pragma", "no-cache")
    $res.Headers.Add("Expires", "0")
    $bytes = [System.IO.File]::ReadAllBytes($full)
    $res.ContentLength64 = $bytes.Length
    $res.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $res.StatusCode = 404
    $bytes = [System.Text.Encoding]::UTF8.GetBytes("404 - nao encontrado: $rel")
    $res.ContentType = "text/plain; charset=utf-8"
    $res.OutputStream.Write($bytes, 0, $bytes.Length)
  }
  $res.Close()
}
