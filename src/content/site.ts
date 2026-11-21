// Todo el copy editable del sitio vive aquí.

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
  year: string;
  type: string;
  summary: string;
  reto: string;
  solucion: string;
  resultado: string;
  figures: { value: string; label: string }[];
};

export const PROJECTS: CaseStudy[] = [
  {
    slug: "hd-sensarena",
    name: "HD Sensarena",
    location: "Gran Canaria",
    year: "2025",
    type: "Resort 5*",
    summary: "Renovación integral de 214 habitaciones y zonas comunes con piezas bespoke de cuatro países.",
    reto: "Renovar 214 habitaciones en una ventana de cierre de 11 semanas, con piezas de autor de cuatro fabricantes en tres continentes.",
    solucion: "Plan inverso desde la fecha de reapertura, habitación modelo aprobada en la semana 3 y consolidación única por planta con inventario habitación a habitación.",
    resultado: "Reapertura en la fecha prevista, sin sustituciones de diseño y con la lista de remates cerrada antes de la llegada del primer huésped.",
    figures: [
      { value: "214", label: "habitaciones" },
      { value: "11", label: "semanas" },
      { value: "0", label: "sustituciones de diseño" },
    ],
  },
  {
    slug: "sercotel-canteras",
    name: "Sercotel Canteras",
    location: "Madrid",
    year: "2024",
    type: "Boutique hotel",
    summary: "Apertura de un edificio protegido con 48 suites y mobiliario singular diseñado por el estudio de interiorismo.",
    reto: "Instalar piezas singulares de gran formato en un edificio protegido, con accesos limitados y un estudio de interiorismo exigente con cada acabado.",
    solucion: "Prototipos validados en fábrica con el estudio, embalaje a medida para cada pieza singular y entrega nocturna planificada por planta.",
    resultado: "Cada suite se entregó idéntica al render aprobado. El estudio repitió con nosotros en su siguiente proyecto.",
    figures: [
      { value: "48", label: "suites" },
      { value: "126", label: "piezas singulares" },
      { value: "1", label: "único responsable" },
    ],
  },
  {
    slug: "valetin-somni",
    name: "Valetin Somni",
    location: "República Dominicana",
    year: "2023",
    type: "Resort todo incluido",
    summary: "Equipamiento completo para 380 habitaciones, restauración y spa con fabricación en Europa y Asia.",
    reto: "Coordinar fabricación en Europa y Asia para 380 habitaciones, restauración y spa, con requisitos aduaneros exigentes en destino.",
    solucion: "Consolidación en dos orígenes, documentación aduanera preparada desde la compra y equipo de instalación propio en obra durante seis semanas.",
    resultado: "Apertura con todas las zonas equipadas y trazabilidad completa entregada a la propiedad para su mantenimiento.",
    figures: [
      { value: "380", label: "habitaciones" },
      { value: "2", label: "orígenes consolidados" },
      { value: "6", label: "semanas en obra" },
    ],
  },
  {
    slug: "melia-trinidad-peninsula",
    name: "Meliá Trinidad Península",
    location: "Tenerife",
    year: "2026",
    type: "Resort 4*",
    summary: "Renovación de 180 habitaciones y restaurante principal sin cerrar el hotel, trabajando planta a planta en plena temporada.",
    reto: "Renovar 180 habitaciones y el restaurante principal manteniendo el hotel abierto, con huéspedes alojados en las plantas contiguas a la obra.",
    solucion: "Plan de ejecución nocturna por plantas, zonas de acopio aisladas del área de huéspedes y protocolos de silencio y limpieza diaria antes del check-in.",
    resultado: "Cero quejas de huéspedes por la obra y ocupación media por encima del 90% durante toda la renovación.",
    figures: [
      { value: "180", label: "habitaciones" },
      { value: "90%", label: "ocupación media durante la obra" },
      { value: "0", label: "cierres de planta" },
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
    excerpt: "Cuándo empezar cada fase para llegar a tu apertura con todas las habitaciones listas.",
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
    excerpt: "Cómo protegemos acabados delicados y piezas de autor desde la fábrica hasta la habitación.",
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
