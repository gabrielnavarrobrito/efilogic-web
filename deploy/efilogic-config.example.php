<?php
// Configuración privada del formulario de contacto.
//
// Copia este archivo como `efilogic-config.php` en tu hosting UN NIVEL POR
// ENCIMA de la carpeta pública (junto a `public_html/`, no dentro).
// Así no se puede descargar desde el navegador. Nunca lo subas a git.

return [
    // Clave de API de Resend (https://resend.com/api-keys). Permiso: "Sending access".
    'RESEND_API_KEY' => 're_xxxxxxxxxxxxxxxxxxxxxxxx',

    // Quién recibe las solicitudes (varias separadas por comas).
    'CONTACT_TO' => 'info@efilogic.com',

    // Remitente. El dominio debe estar verificado en Resend.
    'CONTACT_FROM' => 'Web Efilogic <web@efilogic.com>',

    // Orígenes desde los que se acepta el formulario.
    'ALLOWED_ORIGINS' => 'https://www.efilogic.com,https://efilogic.com',

    // Cadena aleatoria para anonimizar las IPs en el límite de envíos.
    'RATE_LIMIT_SALT' => 'cambia-esto-por-una-cadena-aleatoria-larga',

    // Opcional: carpeta privada para el registro del límite de envíos.
    // 'RATE_LIMIT_DIR' => '/home/USUARIO/efilogic-ratelimit',
];
