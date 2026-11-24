// Todo el copy editable del sitio vive aquí.

// Dominio público del sitio (sitemap, canonical, Open Graph). Se puede
// sobrescribir en el build con VITE_SITE_URL.
export const SITE_URL = (import.meta.env["VITE_SITE_URL"] ?? "https://www.efilogic.com").replace(
  /\/+$/,
  "",
);

export const ENTITY =
  "Efilogic es partner estratégico de FF&E y equipamiento contract para proyectos hoteleros, con sede en Las Palmas de Gran Canaria y más de 25 años de experiencia internacional.";

export const CTA_LABEL = "Hablemos de tu proyecto";

export const HOME_INTRO = {
  title: "Líderes en FF&E contract.",
  paragraphs: [
    "Durante más de 25 años, Efilogic ha acompañado a profesionales de la hostelería y el diseño para dar forma a espacios únicos.",
    "Hoy unimos criterio, creatividad y una mirada multidisciplinar. Del mobiliario a la instalación, cada especialidad responde a un mismo estándar.",
  ],
};

// to: página de destino. anchor: ancla opcional dentro de esa página.
export const HOME_SOLUTIONS = [
  { title: "Mobiliario contract", to: "/servicios-ffe", anchor: "fabricacion" },
  { title: "Logística internacional", to: "/como-trabajamos", anchor: "logistica" },
  { title: "FF&E y equipamiento integral", to: "/servicios-ffe", anchor: undefined },
  { title: "Equipamiento hotelero", to: "/proyectos", anchor: undefined },
] as const;

export const NAV = [
  { to: "/servicios-ffe", label: "Servicios FF&E" },
  { to: "/como-trabajamos", label: "Cómo trabajamos" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/para-disenadores", label: "Diseñadores" },
  { to: "/para-compras-y-pm", label: "Compras y PM" },
  { to: "/sobre-efilogic", label: "Nosotros" },
] as const;

type MenuItem = { label: string; to: string; children?: { label: string; to: string }[] };

export const MENU: MenuItem[] = [
  {
    label: "Soluciones",
    to: "/servicios-ffe",
    children: [
      { label: "Servicios FF&E", to: "/servicios-ffe" },
      { label: "Cómo trabajamos", to: "/como-trabajamos" },
      { label: "Para diseñadores", to: "/para-disenadores" },
      { label: "Para compras y PM", to: "/para-compras-y-pm" },
    ],
  },
  { label: "Proyectos", to: "/proyectos" },
  {
    label: "Nosotros",
    to: "/sobre-efilogic",
    children: [
      { label: "Sobre Efilogic", to: "/sobre-efilogic" },
      { label: "Recursos", to: "/recursos" },
    ],
  },
  { label: "Contacto", to: "/contacto" },
];

export const SEARCH_PAGES = [
  ...NAV.map((n) => ({ label: n.label, to: n.to as string })),
  { label: "Contacto", to: "/contacto" },
];

// Datos de contacto de la sede (pie de página).
export const SEDE = {
  phone: "928 26 62 01",
  phoneHref: "tel:+34928266201",
  email: "efilogic@efilogic.com",
};

// Datos legales del titular de la web.
export const LEGAL_ENTITY = {
  name: "Efilogic S.L.",
  nif: "B35719772",
  address: "C. Nicolás Estévanez 53, Local Izquierdo, 35007 Las Palmas de Gran Canaria, España",
};

export const LEGAL_LINKS = [
  { label: "Aviso legal", to: "/aviso-legal" },
  { label: "Política de privacidad", to: "/politica-de-privacidad" },
  { label: "Política de cookies", to: "/politica-de-cookies" },
] as const;

export type LegalSection = { title: string; paragraphs: string[] };

const TITULAR = `${LEGAL_ENTITY.name}, con NIF ${LEGAL_ENTITY.nif} y domicilio en ${LEGAL_ENTITY.address}. Teléfono ${SEDE.phone}, email ${SEDE.email}.`;

export const LEGAL_PAGES: Record<
  "aviso-legal" | "politica-de-privacidad" | "politica-de-cookies",
  { title: string; description: string; updated: string; sections: LegalSection[] }
> = {
  "aviso-legal": {
    title: "Aviso legal",
    description:
      "Información legal sobre el titular y las condiciones de uso de la web de Efilogic.",
    updated: "2026-11-22",
    sections: [
      {
        title: "Titular de la web",
        paragraphs: [
          `En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), el titular de efilogic.com es ${TITULAR}`,
        ],
      },
      {
        title: "Condiciones de uso",
        paragraphs: [
          "El acceso a esta web es libre y gratuito. Quien la utiliza se compromete a hacerlo de forma lícita y a no dañar su funcionamiento ni el de los sistemas que la alojan.",
          "La información publicada describe los servicios de Efilogic con carácter informativo. No constituye una oferta vinculante; cada proyecto se rige por su propuesta y contrato.",
        ],
      },
      {
        title: "Propiedad intelectual e industrial",
        paragraphs: [
          "Los textos, el diseño, el logotipo y el resto de contenidos de esta web pertenecen a Efilogic o se usan con autorización de sus titulares. No se pueden reproducir, distribuir ni transformar sin permiso expreso.",
          "Las marcas hoteleras que aparecen en la web pertenecen a sus respectivos titulares y se citan solo para identificar proyectos en los que Efilogic ha participado.",
        ],
      },
      {
        title: "Responsabilidad",
        paragraphs: [
          "Efilogic cuida que la información sea correcta y esté actualizada, pero no responde de errores puntuales ni de las interrupciones del servicio por causas técnicas ajenas a su control.",
          "Los enlaces a webs de terceros, como las redes sociales, se ofrecen por comodidad. Efilogic no controla ni responde de su contenido.",
        ],
      },
      {
        title: "Legislación aplicable",
        paragraphs: [
          "Esta web se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Las Palmas de Gran Canaria, salvo que la ley disponga otro fuero.",
        ],
      },
    ],
  },
  "politica-de-privacidad": {
    title: "Política de privacidad",
    description: "Cómo trata Efilogic los datos personales que envías a través de su web.",
    updated: "2026-11-22",
    sections: [
      {
        title: "Responsable del tratamiento",
        paragraphs: [TITULAR],
      },
      {
        title: "Qué datos tratamos",
        paragraphs: [
          "Solo los que nos envías en el formulario de contacto: nombre, email profesional, empresa o estudio, perfil profesional y la descripción de tu proyecto.",
          "Para proteger el formulario frente a envíos abusivos guardamos durante una hora una huella cifrada de tu dirección IP, que no permite identificarte.",
        ],
      },
      {
        title: "Para qué los usamos",
        paragraphs: [
          "Para responder a tu solicitud y, si lo pides, preparar una propuesta para tu proyecto. No los usamos para enviarte publicidad ni elaboramos perfiles con ellos.",
        ],
      },
      {
        title: "Base legal",
        paragraphs: [
          "Tu consentimiento al enviar el formulario y la aplicación de medidas precontractuales a petición tuya (art. 6.1.a y 6.1.b del Reglamento General de Protección de Datos).",
        ],
      },
      {
        title: "Cuánto tiempo los conservamos",
        paragraphs: [
          "Mientras dure la conversación sobre tu proyecto y, después, el tiempo necesario para atender posibles responsabilidades legales. Si no llega a haber relación comercial, los eliminamos en un plazo máximo de 12 meses.",
        ],
      },
      {
        title: "Con quién los compartimos",
        paragraphs: [
          "No cedemos tus datos a terceros. Para que la web funcione intervienen dos proveedores que actúan como encargados del tratamiento: Dinahosting (alojamiento de la web, en España) y Resend (envío del email con tu solicitud). Resend puede tratar datos fuera del Espacio Económico Europeo con las garantías previstas en el RGPD, como las cláusulas contractuales tipo de la Comisión Europea.",
        ],
      },
      {
        title: "Tus derechos",
        paragraphs: [
          `Puedes pedir acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de tus datos, y retirar tu consentimiento, escribiendo a ${SEDE.email}.`,
          "Si consideras que no hemos atendido bien tu petición, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).",
        ],
      },
    ],
  },
  "politica-de-cookies": {
    title: "Política de cookies",
    description: "Uso de cookies en la web de Efilogic.",
    updated: "2026-11-22",
    sections: [
      {
        title: "Esta web no usa cookies",
        paragraphs: [
          "La web de Efilogic no instala cookies propias ni de terceros: no usa analítica, publicidad, vídeos incrustados ni botones de redes sociales que rastreen tu visita. Por eso no te mostramos un aviso para aceptarlas.",
          "Las tipografías e imágenes se sirven desde nuestro propio servidor, sin contactar con servicios externos.",
        ],
      },
      {
        title: "Enlaces a otras webs",
        paragraphs: [
          "Si sigues un enlace a Instagram, LinkedIn u otra web, esa web puede instalar sus propias cookies según su política, que te recomendamos consultar.",
        ],
      },
      {
        title: "Cambios",
        paragraphs: [
          "Si en el futuro incorporamos alguna herramienta que use cookies, actualizaremos esta política y te pediremos el consentimiento cuando sea necesario.",
        ],
      },
    ],
  },
};

// Sustituir "#" por las URLs reales de cada red.
export const SOCIALS = [
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/efilogiccontract/" },
  { key: "linkedin", label: "LinkedIn", href: "#" },
] as const;

export const PILLARS = [
  { title: "Custodia del diseño", text: "Lo que apruebas es lo que llega a la habitación." },
  { title: "Control total", text: "Un único responsable, sin intermediarios." },
  { title: "Cronograma blindado", text: "Planificamos desde tu fecha de apertura." },
  { title: "Trayectoria", text: "+25 años en proyectos contract internacionales." },
];

export const SERVICES_INTRO = {
  eyebrow: "Gestión integral FF&E",
  title: "Equipamiento FF&E, llave en mano.",
  lead: "Aprovisionamiento, fabricación a medida y suministro bajo un único interlocutor.",
  cierre: "¿Tienes una apertura en marcha? Hablemos de tu partida FF&E.",
};

export const SERVICES = [
  {
    slug: "equipamiento-integral",
    title: "Todo bajo un mismo techo",
    short:
      "Mobiliario, iluminación, textiles y baños: todo el equipamiento de tu hotel, de un solo proveedor.",
    long: "Desde 2002 conectamos mercados internacionales para abordar reformas y nuevas aperturas hoteleras de forma integral. No actuamos como simples gestores de compras; seleccionamos materiales preparados para el uso intensivo del sector hospitality, validamos prototipos y garantizamos el cumplimiento normativo y técnico en cada partida.",
    points: ["Mobiliario", "Iluminación", "Textiles", "Baños y accesorios"],
  },
  {
    slug: "fabricacion",
    title: "Fabricación a medida",
    short:
      "Fabricación propia y una red de partners industriales seleccionados en varios continentes.",
    long: "Combinamos fabricación propia y aprovisionamiento internacional, con una red consolidada de partners industriales en distintos continentes. Validamos prototipos antes de producir en serie, para equilibrar calidad técnica, durabilidad y rentabilidad presupuestaria en cada proyecto.",
    points: ["Fabricación propia", "Red en varios continentes", "Prototipos validados"],
  },
  {
    slug: "instalacion-mobiliario-hotelero",
    title: "Instalación en destino",
    short:
      "Recepción, montaje y supervisión en obra hasta la entrega definitiva, con la lista de remates cerrada antes de la apertura.",
    long: "Recibimos el equipamiento en destino, coordinamos el montaje y supervisamos cada etapa directamente en el hotel hasta la entrega definitiva. Trabajamos en guante blanco, con secuenciación por plantas y la lista de remates cerrada antes de la llegada del primer huésped.",
    points: ["Guante blanco", "Montaje por plantas", "Lista de remates"],
  },
];

export const PROCESS_INTRO = {
  title: "De la fábrica a tu última habitación.",
  lead: "Producción, logística y montaje bajo un mismo método, sin intermediarios.",
  cierre: "Blindamos los plazos de tu próxima apertura.",
};

export const PROCESS = [
  {
    title: "Estudio y especificación",
    anchor: "estudio-previo",
    text: "Fichas técnicas detalladas para cada pieza, antes de fabricar.",
  },
  {
    title: "Prototipado y fabricación",
    anchor: "prototipado",
    text: "Validamos cada prototipo antes de pasar a producción en serie.",
  },
  {
    title: "Control de calidad",
    anchor: "control-calidad",
    text: "Pruebas y certificación en fábrica, antes del tránsito.",
  },
  {
    title: "Logística y consolidación",
    anchor: "logistica",
    text: "Trazabilidad total con WMS y RFID, al ritmo de la obra.",
  },
  {
    title: "Instalación y montaje",
    anchor: "instalacion",
    text: "Montaje y supervisión en el hotel hasta la entrega final.",
  },
];

export type CaseStudy = {
  slug: string;
  name: string;
  location: string;
  /** Año de apertura o renovación (opcional). */
  year?: string;
  type: string;
  /** Estado del proyecto, p. ej. "Terminado" o "En curso". */
  status?: string;
  summary: string;
  reto: string;
  solucion: string;
  resultado: string;
  figures: { value: string; label: string }[];
  /**
   * Texto alternativo de las fotos de galeria/, por nombre de archivo sin
   * extensión. Si falta, se usa el propio nombre (sin tildes).
   */
  photoAlts?: Record<string, string>;
};

/** "Ubicación · año" del proyecto, omitiendo lo que no se conozca. */
export function projectMeta(c: Pick<CaseStudy, "location" | "year">) {
  return [c.location, c.year].filter(Boolean).join(" · ");
}

export const PROJECTS: CaseStudy[] = [
  {
    slug: "melia-trinidad-peninsula",
    name: "Meliá Trinidad Península",
    location: "Sancti Spíritus, Cuba",
    type: "Hotel 5*",
    status: "Terminado",
    summary:
      "Un 5 estrellas frente al Caribe, con la sierra del Escambray al fondo: habitaciones, restaurantes, bares, espacios para eventos y zonas de bienestar con mobiliario e interiorismo de Efilogic.",
    reto: "Equipar un hotel de 5 estrellas junto al mar para huéspedes muy distintos: familias, viajeros que recorren la isla, bodas, lunas de miel y eventos profesionales. Cada espacio debía sentirse acogedor sin perder elegancia.",
    solucion:
      "Mobiliario seleccionado pieza a pieza para las habitaciones y, junto al equipo del hotel, restaurantes y bares diseñados para ser elegantes y funcionales. Los espacios para celebraciones, las piscinas de borde infinito y las áreas de bienestar siguen el mismo criterio.",
    resultado:
      "Un hotel en el que la misma intención de diseño recorre cada espacio, de la habitación al restaurante abierto al mar.",
    figures: [
      { value: "5*", label: "frente al mar Caribe" },
      {
        value: "5",
        label: "tipos de espacio equipados: habitaciones, restauración, bares, eventos y bienestar",
      },
    ],
  },
  {
    slug: "sercotel-canteras",
    name: "Sercotel Canteras",
    location: "Las Palmas de Gran Canaria",
    year: "2023",
    type: "Hotel 4*",
    status: "Terminado",
    summary:
      "Renovación integral de 125 habitaciones y suites en primera línea de la playa de Las Canteras, a pocos pasos del Auditorio Alfredo Kraus.",
    reto: "Dar a un 4 estrellas en primera línea de Las Canteras un lenguaje contemporáneo a la altura de su ubicación: 125 habitaciones y suites y zonas comunes renovadas sin perder la relación con el mar.",
    solucion:
      "Un interior que juega con las formas, los relieves y los grises y azules de la piedra y el mármol. Cabeceros curvos de madera con luz integrada, celosías con óculos y mobiliario de rejilla natural en el restaurante abierto al paseo.",
    resultado:
      "Un hotel moderno y acogedor, reabierto en 2023, con la mayoría de sus habitaciones mirando directamente al Atlántico.",
    figures: [
      { value: "125", label: "habitaciones y suites" },
      { value: "4*", label: "en primera línea de playa" },
      { value: "2023", label: "año de renovación" },
    ],
  },
  {
    slug: "valetin-somni",
    name: "Valetin Somni",
    location: "República Dominicana",
    year: "2023",
    type: "Resort todo incluido",
    summary:
      "Equipamiento completo para 380 habitaciones, restauración y spa con fabricación en Europa y Asia.",
    reto: "Coordinar fabricación en Europa y Asia para 380 habitaciones, restauración y spa, con requisitos aduaneros exigentes en destino.",
    solucion:
      "Consolidación en dos orígenes, documentación aduanera preparada desde la compra y equipo de instalación propio en obra durante seis semanas.",
    resultado:
      "Apertura con todas las zonas equipadas y trazabilidad completa entregada a la propiedad para su mantenimiento.",
    figures: [
      { value: "380", label: "habitaciones" },
      { value: "2", label: "orígenes consolidados" },
      { value: "6", label: "semanas en obra" },
    ],
  },
  {
    slug: "arguineguin-park",
    name: "Arguineguín Park",
    location: "Mogán, Gran Canaria",
    type: "Complejo turístico",
    status: "Terminado",
    summary:
      "263 viviendas vacacionales en 14 edificios, a diez minutos a pie de la playa de Arguineguín, equipadas por completo: del colchón a la luminaria y del salón a la terraza.",
    reto: "Amueblar de una sola vez 263 viviendas de dos y tres dormitorios, todas exteriores con terraza y cocina, repartidas en 14 edificios alrededor de jardines y piscinas. Un volumen de complejo turístico con el detalle de una casa, en un plazo muy ajustado.",
    solucion:
      "Junto a la propiedad y la decoradora del proyecto, combinamos piezas de catálogo con mobiliario diseñado y fabricado en exclusiva para las viviendas. Un único flujo reunió a más de 10 proveedores de 3 países: mobiliario interior y exterior, luminarias, sofás, alfombras, colchones, somieres, textil y ropa de cama.",
    resultado:
      "Más de 12.000 artículos ubicados e instalados con precisión, vivienda a vivienda, y un complejo listo para recibir a sus primeros huéspedes.",
    figures: [
      { value: "263", label: "viviendas en 14 edificios" },
      { value: "+12.000", label: "artículos suministrados e instalados" },
      { value: "+10", label: "proveedores de 3 países en un único flujo" },
    ],
    photoAlts: {
      "01-salon-con-cocina-abierta": "salón con cocina abierta",
      "02-salon-con-terraza": "salón con salida a la terraza",
      "04-pasillo-con-azulejo-hidraulico": "pasillo con azulejo hidráulico",
    },
  },
  {
    slug: "hd-sensarena",
    name: "HD Sensarena",
    location: "Gran Canaria",
    year: "2025",
    type: "Resort 5*",
    summary:
      "Renovación integral de 214 habitaciones y zonas comunes con piezas bespoke de cuatro países.",
    reto: "Renovar 214 habitaciones en una ventana de cierre de 11 semanas, con piezas de autor de cuatro fabricantes en tres continentes.",
    solucion:
      "Plan inverso desde la fecha de reapertura, habitación modelo aprobada en la semana 3 y consolidación única por planta con inventario habitación a habitación.",
    resultado:
      "Reapertura en la fecha prevista, sin sustituciones de diseño y con la lista de remates cerrada antes de la llegada del primer huésped.",
    figures: [
      { value: "214", label: "habitaciones" },
      { value: "11", label: "semanas" },
      { value: "0", label: "sustituciones de diseño" },
    ],
  },
];

export const AUDIENCES = [
  {
    eyebrow: "Arquitectura e interiorismo",
    title: "Tu diseño, intacto.",
    text: "Protegemos la intención de cada pieza, de la especificación al último remate. Sin sustituciones que no hayas aprobado.",
    to: "/para-disenadores" as const,
    link: "Para diseñadores",
  },
  {
    eyebrow: "Compras",
    title: "Cero desvíos. Un único responsable.",
    text: "Un contrato, un interlocutor y un presupuesto controlado de principio a fin, con trazabilidad documental completa.",
    to: "/para-compras-y-pm" as const,
    link: "Para compras",
  },
  {
    eyebrow: "PM y expansión",
    title: "Apertura garantizada por diseño.",
    text: "Planificamos desde tu fecha de apertura hacia atrás. Cada hito del cronograma tiene dueño y seguimiento.",
    to: "/para-compras-y-pm" as const,
    link: "Para PM y expansión",
  },
];

export type Resource = {
  slug: string;
  kind: string;
  title: string;
  excerpt: string;
  date: string;
  body: string[];
};

export const RESOURCES: Resource[] = [
  {
    slug: "guia-ffe-hotelero",
    kind: "Guía",
    title: "Guía FF&E hotelero: qué incluye y cómo se gestiona",
    excerpt: "Definición, alcance y fases de un proyecto FF&E para hoteles, explicado paso a paso.",
    date: "2026-09-15",
    body: [
      "FF&E (Furniture, Fixtures & Equipment) agrupa todo el equipamiento móvil de un hotel: mobiliario, iluminación decorativa, textiles, accesorios y equipamiento de habitaciones y zonas comunes. Se diferencia del OS&E (Operating Supplies & Equipment), que incluye menaje y suministros operativos.",
      "Un proyecto FF&E se desarrolla en seis fases: briefing, compra, fabricación, consolidación, entrega e instalación. La clave no está en cada fase por separado, sino en que un único responsable las integre sin pérdida de información ni de diseño.",
      "Para la propiedad, el valor de un partner FF&E se mide en tres variables: fidelidad al diseño aprobado, control del presupuesto y cumplimiento de la fecha de apertura.",
    ],
  },
  {
    slug: "calendario-ffe-aperturas",
    kind: "Calendario",
    title: "Calendario FF&E para aperturas hoteleras",
    excerpt:
      "Cuándo empezar cada fase para llegar a tu apertura con todas las habitaciones listas.",
    date: "2026-07-02",
    body: [
      "El calendario FF&E de una apertura se construye hacia atrás. Tu apertura tiene fecha; nuestro plan empieza en ella.",
      "Como referencia, un hotel de 150 a 250 habitaciones con piezas bespoke necesita entre 9 y 12 meses: 2 meses de especificación y compra, 4 a 6 de fabricación con habitación modelo, 1 a 2 de consolidación y aduana, y 4 a 8 semanas de instalación.",
      "La habitación modelo es el hito que más protege el cronograma: aprobarla a tiempo evita correcciones en serie durante la fabricación.",
    ],
  },
  {
    slug: "embalaje-a-medida-piezas-singulares",
    kind: "Artículo técnico",
    title: "Embalaje a medida para piezas singulares",
    excerpt:
      "Cómo protegemos acabados delicados y piezas de autor desde la fábrica hasta la habitación.",
    date: "2026-04-20",
    body: [
      "Una pieza singular —un cabecero tapizado a mano, una lámpara de vidrio soplado, una mesa de piedra natural— exige un embalaje diseñado para ella. El embalaje genérico es la primera causa de daños evitables en proyectos contract.",
      "Medimos cada pieza, definimos puntos de apoyo y materiales de protección según el acabado, y etiquetamos por planta y habitación para que el desembalaje ocurra donde la pieza va a vivir.",
      "La precisión es invisible cuando todo sale bien.",
    ],
  },
];

export const FAQ = [
  {
    q: "¿Qué es FF&E en un proyecto hotelero?",
    a: "FF&E (Furniture, Fixtures & Equipment) es el mobiliario, la iluminación decorativa, los textiles y el equipamiento móvil que convierten una obra terminada en un hotel listo para abrir.",
  },
  {
    q: "¿En qué se diferencia Efilogic de un proveedor de mobiliario?",
    a: "No vendemos un catálogo. Actuamos como director de orquesta FF&E: integramos compra, fabricación, consolidación, aduana, entrega e instalación bajo un único responsable, con la especificación del estudio como referencia.",
  },
  {
    q: "¿Trabajáis con piezas diseñadas por el estudio de interiorismo?",
    a: "Sí. La mayoría de nuestros proyectos combinan piezas bespoke y referencias de catálogo. Validamos prototipos con el estudio antes de fabricar en serie.",
  },
  {
    q: "¿Con cuánta antelación conviene empezar?",
    a: "Para una apertura con piezas bespoke, entre 9 y 12 meses antes de la fecha prevista. Si el plazo es menor, lo analizamos contigo y definimos un plan realista desde el primer briefing.",
  },
];

export const STATS = [
  { value: "+25", label: "años de operativa internacional" },
  { value: "1", label: "único responsable" },
  { value: "0", label: "intermediarios" },
];

// Cadenas y grupos hoteleros con los que Efilogic ha trabajado.
// Para añadir una marca más, sigue las instrucciones de
// src/assets/logos/README.md y añádela aquí con el mismo slug que el archivo.
// Solo se listan marcas con logo real subido: si no hay logo, no aparecen.
export const TRUSTED_BRANDS: { slug: string; name: string; suffix?: string }[] = [
  { slug: "valentin", name: "Valentin", suffix: "Hotels & Resorts" },
  { slug: "radisson", name: "Radisson" },
  { slug: "melia", name: "Meliá", suffix: "Hotels & Resorts" },
  { slug: "dunas", name: "Dunas", suffix: "Hotels & Resorts" },
  { slug: "hd-hotels", name: "HD", suffix: "hotels" },
  { slug: "lopesan", name: "Lopesan", suffix: "Hotels & Resorts" },
];

export const PERFILES = [
  { value: "arquitectura", label: "Arquitectura / Interiorismo" },
  { value: "compras", label: "Compras" },
  { value: "pm", label: "Project management / Expansión" },
  { value: "propiedad", label: "Propiedad / Cadena hotelera" },
  { value: "otro", label: "Otro" },
] as const;
