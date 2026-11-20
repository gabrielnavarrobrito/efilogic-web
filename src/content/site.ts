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

export const HOME_SOLUTIONS = [
  { title: "Mobiliario contract", anchor: "suministro-ffe" },
  { title: "Logística internacional", anchor: "consolidacion-y-custodia" },
  { title: "FF&E y equipamiento integral", anchor: "suministro-ffe" },
  { title: "Equipamiento hotelero", anchor: "instalacion-mobiliario-hotelero" },
] as const;

export const NAV = [
  { to: "/servicios-ffe", label: "Servicios FF&E" },
  { to: "/como-trabajamos", label: "Cómo trabajamos" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/para-disenadores", label: "Diseñadores" },
  { to: "/para-compras-y-pm", label: "Compras y PM" },
  { to: "/sobre-efilogic", label: "Sobre Efilogic" },
  { to: "/recursos", label: "Recursos" },
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
  { key: "linkedin", label: "LinkedIn", href: "#" },
  { key: "instagram", label: "Instagram", href: "#" },
  { key: "facebook", label: "Facebook", href: "#" },
  { key: "youtube", label: "YouTube", href: "#" },
] as const;

export const PILLARS = [
  {
    title: "Custodia del diseño",
    text: "Cada pieza se fabrica, revisa y protege según la especificación original. Lo que diseñas es lo que llega a la habitación.",
  },
  {
    title: "Control total",
    text: "Un único responsable integra compra, fabricación, consolidación, aduana, entrega e instalación. Sin intermediarios.",
  },
  {
    title: "Cronograma blindado",
    text: "Planificamos hacia atrás desde la fecha de apertura. Cada hito tiene dueño, fecha y trazabilidad.",
  },
  {
    title: "Trayectoria",
    text: "Más de 25 años orquestando proyectos contract para hoteles en distintos mercados y con fabricantes de varios continentes.",
  },
];

export const SERVICES = [
  {
    slug: "suministro-ffe",
    title: "Suministro FF&E",
    short:
      "Compra y fabricación bespoke de mobiliario, iluminación, textiles y accesorios contract, fiel a tu especificación.",
    long: "FF&E (Furniture, Fixtures & Equipment) es todo el equipamiento móvil que convierte una obra terminada en un hotel listo para abrir. Gestionamos la compra y la fabricación de cada pieza —estándar o singular— con fabricantes seleccionados, controles de calidad en origen y aprobación de prototipos.",
    points: [
      "Licitación y selección de fabricantes",
      "Prototipos y habitación modelo",
      "Control de calidad en fábrica",
      "Gestión de muestras y acabados",
    ],
  },
  {
    slug: "consolidacion-y-custodia",
    title: "Consolidación y custodia",
    short:
      "Reunimos las piezas de cada origen, las protegemos con embalaje a medida y las custodiamos hasta su instalación.",
    long: "La consolidación agrupa el equipamiento de múltiples fabricantes en una sola operación controlada. Custodiamos cada pieza con embalaje a medida, inventario por habitación y trazabilidad completa, incluida la gestión aduanera, hasta que llega a su destino final.",
    points: [
      "Embalaje a medida por pieza",
      "Inventario por planta y habitación",
      "Gestión aduanera integrada",
      "Trazabilidad de extremo a extremo",
    ],
  },
  {
    slug: "instalacion-mobiliario-hotelero",
    title: "Instalación de mobiliario hotelero",
    short:
      "Entrega en guante blanco e instalación habitación por habitación, coordinada con la obra y la fecha de apertura.",
    long: "La instalación de mobiliario hotelero cierra el ciclo: desembalaje, montaje, colocación según planos, retirada de residuos y revisión final con tu equipo. Coordinamos con la constructora para entregar cada planta lista para la apertura.",
    points: [
      "Entrega en guante blanco",
      "Montaje y colocación según planos",
      "Retirada de embalajes",
      "Revisión final y lista de remates",
    ],
  },
];

export const PROCESS = [
  { title: "Briefing", text: "Entendemos tu visión, la especificación y la fecha de apertura." },
  { title: "Compra", text: "Seleccionamos fabricantes y cerramos condiciones y calidades." },
  { title: "Fabricación", text: "Prototipos, aprobaciones y control de calidad en origen." },
  { title: "Consolidación", text: "Reunimos, protegemos y custodiamos cada pieza." },
  { title: "Entrega", text: "Llegada planificada por planta, coordinada con la obra." },
  { title: "Instalación", text: "Montaje en guante blanco. Tu visión, instalada." },
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

export const PERFILES = [
  { value: "arquitectura", label: "Arquitectura / Interiorismo" },
  { value: "compras", label: "Compras" },
  { value: "pm", label: "Project management / Expansión" },
  { value: "propiedad", label: "Propiedad / Cadena hotelera" },
  { value: "otro", label: "Otro" },
] as const;
