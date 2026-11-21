<?php
/**
 * Endpoint del formulario de contacto de efilogic.com.
 *
 * Valida la solicitud, aplica medidas anti-abuso y la envía por email con Resend.
 * La configuración (clave de Resend y direcciones) NO vive en este archivo:
 * se lee de variables de entorno o de un archivo fuera de la carpeta pública.
 * Ver docs/DEPLOY.md.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

const MAX_BODY_BYTES = 16384;
const MIN_ELAPSED_MS = 2500;        // un humano tarda más que esto en rellenar el formulario
const RATE_LIMIT_MAX = 5;           // envíos permitidos...
const RATE_LIMIT_WINDOW = 3600;     // ...por IP y hora
const PERFILES = ['arquitectura', 'compras', 'pm', 'propiedad', 'otro'];

function respond(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function config(string $key, ?string $default = null): ?string
{
    static $file = null;
    $env = getenv($key);
    if ($env !== false && $env !== '') {
        return $env;
    }
    if ($file === null) {
        $file = [];
        // Archivo privado un nivel por encima de la raíz web (no accesible por URL).
        $candidates = [
            dirname($_SERVER['DOCUMENT_ROOT'] ?? __DIR__) . '/efilogic-config.php',
            dirname(__DIR__, 2) . '/efilogic-config.php',
        ];
        foreach ($candidates as $path) {
            if (is_readable($path)) {
                $loaded = require $path;
                if (is_array($loaded)) {
                    $file = $loaded;
                }
                break;
            }
        }
    }
    $value = $file[$key] ?? $default;
    return is_string($value) && $value !== '' ? $value : $default;
}

function clean_line(string $value, int $max): string
{
    // Una sola línea: sin saltos ni caracteres de control (evita inyección de cabeceras).
    $value = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $value) ?? '';
    return mb_substr(trim($value), 0, $max);
}

function clean_text(string $value, int $max): string
{
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]+/u', '', $value) ?? '';
    return mb_substr(trim($value), 0, $max);
}

function client_ip(): string
{
    // REMOTE_ADDR es la única fuente fiable; las cabeceras X-Forwarded-For las controla el cliente.
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

function rate_limited(string $ip): bool
{
    $dir = config('RATE_LIMIT_DIR') ?? (sys_get_temp_dir() . '/efilogic-contact');
    if (!is_dir($dir) && !@mkdir($dir, 0700, true)) {
        return false; // si no se puede escribir, no bloqueamos el formulario
    }
    $file = $dir . '/' . hash('sha256', $ip . '|' . (config('RATE_LIMIT_SALT') ?? 'efilogic')) . '.json';
    $now = time();
    $fh = @fopen($file, 'c+');
    if ($fh === false) {
        return false;
    }
    flock($fh, LOCK_EX);
    $hits = json_decode(stream_get_contents($fh) ?: '[]', true);
    $hits = array_values(array_filter(is_array($hits) ? $hits : [], fn ($t) => is_int($t) && $t > $now - RATE_LIMIT_WINDOW));
    $limited = count($hits) >= RATE_LIMIT_MAX;
    if (!$limited) {
        $hits[] = $now;
    }
    ftruncate($fh, 0);
    rewind($fh);
    fwrite($fh, json_encode($hits));
    flock($fh, LOCK_UN);
    fclose($fh);
    return $limited;
}

// --- 1. Método y origen -----------------------------------------------------

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

$allowedOrigins = array_filter(array_map('trim', explode(',', config('ALLOWED_ORIGINS', 'https://efilogic.com,https://www.efilogic.com') ?? '')));
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin === '' || !in_array($origin, $allowedOrigins, true)) {
    respond(403, ['ok' => false, 'error' => 'forbidden_origin']);
}

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (stripos($contentType, 'application/json') !== 0) {
    respond(415, ['ok' => false, 'error' => 'unsupported_media_type']);
}

$raw = file_get_contents('php://input', false, null, 0, MAX_BODY_BYTES + 1);
if ($raw === false || strlen($raw) > MAX_BODY_BYTES) {
    respond(413, ['ok' => false, 'error' => 'payload_too_large']);
}

$input = json_decode($raw, true);
if (!is_array($input)) {
    respond(400, ['ok' => false, 'error' => 'invalid_json']);
}

// --- 2. Anti-spam -----------------------------------------------------------

$honeypot = is_string($input['website'] ?? null) ? $input['website'] : '';
$elapsed = is_numeric($input['elapsed'] ?? null) ? (int) $input['elapsed'] : 0;
if ($honeypot !== '' || $elapsed < MIN_ELAPSED_MS) {
    // Respuesta de éxito silenciosa: el bot no aprende que ha sido detectado.
    respond(200, ['ok' => true]);
}

if (rate_limited(client_ip())) {
    header('Retry-After: ' . RATE_LIMIT_WINDOW);
    respond(429, ['ok' => false, 'error' => 'too_many_requests']);
}

// --- 3. Validación ----------------------------------------------------------

$str = fn (string $k) => is_string($input[$k] ?? null) ? $input[$k] : '';
$data = [
    'nombre' => clean_line($str('nombre'), 120),
    'email' => clean_line($str('email'), 255),
    'empresa' => clean_line($str('empresa'), 160),
    'perfil' => clean_line($str('perfil'), 20),
    'descripcion' => clean_text($str('descripcion'), 3000),
];

$errors = [];
if ($data['nombre'] === '') $errors[] = 'nombre';
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) $errors[] = 'email';
if ($data['empresa'] === '') $errors[] = 'empresa';
if (!in_array($data['perfil'], PERFILES, true)) $errors[] = 'perfil';
if (mb_strlen($data['descripcion']) < 10) $errors[] = 'descripcion';
if ($errors) {
    respond(422, ['ok' => false, 'error' => 'validation', 'fields' => $errors]);
}

// --- 4. Envío con Resend ----------------------------------------------------

$apiKey = config('RESEND_API_KEY');
$to = config('CONTACT_TO');
$from = config('CONTACT_FROM', 'Web Efilogic <web@efilogic.com>');
if (!$apiKey || !$to) {
    error_log('[contact] Falta RESEND_API_KEY o CONTACT_TO en la configuración.');
    respond(500, ['ok' => false, 'error' => 'not_configured']);
}

$e = fn (string $v) => htmlspecialchars($v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$html = '<h2>Nueva solicitud desde efilogic.com</h2><table cellpadding="6">'
    . '<tr><th align="left">Nombre</th><td>' . $e($data['nombre']) . '</td></tr>'
    . '<tr><th align="left">Email</th><td>' . $e($data['email']) . '</td></tr>'
    . '<tr><th align="left">Empresa</th><td>' . $e($data['empresa']) . '</td></tr>'
    . '<tr><th align="left">Perfil</th><td>' . $e($data['perfil']) . '</td></tr>'
    . '</table><h3>Proyecto</h3><p>' . nl2br($e($data['descripcion'])) . '</p>';
$text = "Nueva solicitud desde efilogic.com\n\n"
    . "Nombre: {$data['nombre']}\nEmail: {$data['email']}\nEmpresa: {$data['empresa']}\nPerfil: {$data['perfil']}\n\n"
    . "Proyecto:\n{$data['descripcion']}\n";

$payload = json_encode([
    'from' => $from,
    'to' => array_map('trim', explode(',', $to)),
    'reply_to' => $data['email'],
    'subject' => 'Solicitud web: ' . $data['empresa'],
    'html' => $html,
    'text' => $text,
], JSON_UNESCAPED_UNICODE);

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS => $payload,
]);
$response = curl_exec($ch);
$status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($response === false || $status < 200 || $status >= 300) {
    error_log('[contact] Resend respondió ' . $status . ' ' . $curlError);
    respond(502, ['ok' => false, 'error' => 'send_failed']);
}

respond(200, ['ok' => true]);
