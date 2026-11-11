export type TransactionalLanding = {
  slug: string
  title: string
  description: string
  h1: string
  eyebrow: string
  intro: string
  audience: string
  problem: string
  symptoms: string[]
  method: string[]
  outcomes: string[]
  metrics: string[]
  related: { label: string; href: string }[]
  faq: { question: string; answer: string }[]
  need: string
  deliverables?: string[]
  scope?: string
  resource?: { label: string; href: string }
}

export const transactionalLandings: TransactionalLanding[] = [
  {
    slug: "consultora-comercial-santiago",
    title: "Consultora Comercial en Santiago | The Burn",
    description: "Consultora comercial en Santiago para ordenar ventas B2B, pipeline y prioridades de crecimiento con datos y ejecución.",
    h1: "Consultora comercial en Santiago para ordenar y hacer crecer tus ventas",
    eyebrow: "Consultoría comercial · Santiago",
    intro: "Si tu empresa vende, pero el crecimiento depende demasiado de la intuición del dueño, necesitas un sistema comercial que el equipo pueda operar.",
    audience: "Dueños y gerentes de empresas B2B de Santiago que necesitan visibilidad sobre sus oportunidades, márgenes y próximos movimientos.",
    problem: "La consultoría comercial no sirve si termina en una presentación que nadie implementa. Trabajamos sobre el proceso real, los datos disponibles y las decisiones que tu equipo debe tomar.",
    symptoms: ["El pipeline no refleja lo que realmente puede cerrar el equipo", "Las oportunidades avanzan sin próximos pasos claros", "Marketing y ventas trabajan con prioridades distintas", "El dueño sigue siendo el principal motor de cada negocio"],
    method: ["Levantamos el proceso comercial y sus puntos de fuga", "Ordenamos etapas, responsabilidades, métricas y rituales", "Construimos prioridades accionables para el equipo", "Acompañamos la implementación y ajustamos con evidencia"],
    outcomes: ["Más claridad sobre dónde se gana y se pierde una oportunidad", "Un proceso comercial visible para el equipo", "Decisiones de crecimiento conectadas con margen y capacidad"],
    metrics: ["Conversión por etapa", "Duración del ciclo de venta", "Cobertura y calidad del pipeline", "Margen por cliente o línea"],
    related: [{ label: "Consultoría Comercial", href: "/servicios/consultoria-comercial" }, { label: "Diagnóstico comercial", href: "/diagnostico" }, { label: "Contacto", href: "/contacto" }],
    faq: [{ question: "¿Trabajan solo con empresas de Santiago?", answer: "La operación puede ser remota o presencial según el proyecto, pero conocemos especialmente el contexto comercial de empresas B2B en Santiago y Chile." }, { question: "¿La consultoría incluye implementación?", answer: "Sí. El foco está en convertir el análisis en decisiones, herramientas y rutinas que el equipo pueda usar." }, { question: "¿Qué necesitan para comenzar?", answer: "Una conversación sobre el negocio, sus objetivos, el proceso actual y los datos comerciales disponibles." }],
    need: "Consultora comercial en Santiago",
  },
  {
    slug: "consultoria-comercial-b2b",
    title: "Consultoría Comercial B2B en Chile | The Burn",
    description: "Consultoría comercial B2B para ordenar ciclos de venta complejos, pipeline, forecast y coordinación entre marketing y ventas.",
    h1: "Consultoría comercial B2B para vender con un proceso, no con suerte",
    eyebrow: "Ventas B2B · Proceso y pipeline",
    intro: "En ventas B2B, cada oportunidad cuesta tiempo y coordinación. Diseñamos un sistema para saber qué priorizar, por qué y con qué evidencia.",
    audience: "Empresas B2B con ciclos de venta consultivos, varios decisores o equipos comerciales que necesitan una forma común de trabajar.",
    problem: "Cuando cada vendedor califica una oportunidad de manera distinta, el forecast se vuelve una opinión. Ordenamos el proceso para que la gestión comercial tenga señales comparables.",
    symptoms: ["Forecasts que cambian cada semana sin explicación", "Poca definición sobre cliente ideal y oportunidad real", "Cotizaciones sin estrategia de avance", "Reuniones comerciales enfocadas en reportar y no en decidir"],
    method: ["Definimos criterios de calificación y etapas", "Conectamos actividad comercial con resultados", "Diseñamos un forecast útil para decidir", "Instalamos reuniones y tableros con foco ejecutivo"],
    outcomes: ["Criterios compartidos para priorizar oportunidades", "Mejor lectura del pipeline y del forecast", "Coordinación más clara entre marketing, ventas y dirección"],
    metrics: ["Win rate", "Pipeline coverage", "Tiempo por etapa", "Ticket y margen por segmento"],
    related: [{ label: "Funnel Digital de Performance", href: "/servicios/funnel-digital-performance" }, { label: "Power BI", href: "/servicios/business-intelligence-power-bi" }, { label: "Artículos de consultoría comercial", href: "/blog" }],
    faq: [{ question: "¿Sirve para equipos comerciales pequeños?", answer: "Sí. El sistema se adapta al nivel de madurez y a la cantidad de oportunidades que realmente gestiona el equipo." }, { question: "¿Trabajan sobre nuestro CRM?", answer: "Partimos con las herramientas y datos existentes, evaluando qué debe ordenarse antes de recomendar cambios." }, { question: "¿Pueden ayudar con la definición de segmentos?", answer: "Sí. La segmentación y el cliente ideal son parte de las decisiones que sostienen un proceso B2B." }],
    deliverables: ["Criterios de cliente ideal y calificación compartidos por marketing y ventas", "Pipeline con etapas, responsables y criterios de avance", "Indicadores de conversión, ciclo de venta y calidad de oportunidades", "Rutina de revisión comercial y prioridades de implementación"],
    scope: "Empezamos con un diagnóstico de 3 semanas por $500.000 CLP + IVA. La implementación se cotiza según el proceso, las herramientas y las integraciones que necesite tu empresa. Trabajamos de forma remota en Chile o presencial en Santiago según el proyecto.",
    resource: { label: "Cómo aumentar las ventas B2B: guía de diagnóstico", href: "/blog/como-aumentar-ventas-b2b-chile-2026" },
    need: "Consultoría comercial B2B",
  },
  {
    slug: "implementacion-procesos-comerciales",
    title: "Implementación de Procesos Comerciales B2B en Chile | The Burn",
    description: "Implementación de procesos comerciales para ordenar etapas, roles, métricas y rutinas de ventas en empresas B2B.",
    h1: "Implementación de procesos comerciales que el equipo sí puede usar",
    eyebrow: "Procesos comerciales · Implementación",
    intro: "Un proceso comercial se vuelve útil cuando reduce dudas en el trabajo diario. Diseñamos e implementamos la forma concreta de vender y gestionar oportunidades.",
    audience: "Empresas que ya venden, pero necesitan dejar de depender de personas clave y convertir buenas prácticas en un sistema repetible.",
    problem: "Documentar un proceso no es implementarlo. Traducimos la estrategia a etapas, responsables, criterios, plantillas y rutinas de gestión.",
    symptoms: ["Cada ejecutivo vende de una manera diferente", "No existe una definición clara de oportunidad calificada", "Los datos se registran tarde o no se usan", "La dirección interviene para destrabar cada negocio"],
    method: ["Observamos cómo se vende hoy", "Diseñamos el proceso objetivo y sus reglas", "Creamos herramientas y rutinas de adopción", "Medimos uso, calidad y resultados para iterar"],
    outcomes: ["Roles y próximos pasos más claros", "Menos dependencia de la memoria individual", "Una base operativa para entrenar y escalar"],
    metrics: ["Adopción del proceso", "Cumplimiento de próximos pasos", "Conversión por etapa", "Tiempo de respuesta comercial"],
    related: [{ label: "Consultoría Operacional", href: "/servicios/consultoria-operacional" }, { label: "Automatización de Marketing", href: "/servicios/automatizacion-marketing" }, { label: "Diagnóstico", href: "/diagnostico" }],
    faq: [{ question: "¿Implementan procesos desde cero?", answer: "Sí, y también podemos ordenar procesos existentes que crecieron sin una estructura común." }, { question: "¿Incluye capacitación al equipo?", answer: "La adopción forma parte de la implementación: las herramientas deben poder ser entendidas y usadas por quienes venden." }, { question: "¿Cuánto se puede estandarizar?", answer: "Estandarizamos lo repetible sin eliminar el criterio necesario para ventas complejas." }],
    deliverables: ["Mapa del proceso actual y del proceso objetivo", "Playbook con etapas, criterios de entrada y salida, roles y tiempos de seguimiento", "Requisitos de configuración del CRM, campos y tareas prioritarias", "Plan de adopción del equipo con indicadores y revisiones de uso"],
    scope: "El diagnóstico inicial dura 3 semanas y cuesta $500.000 CLP + IVA. A partir de sus hallazgos acordamos alcance, herramientas y calendario de implementación. El plazo depende de las integraciones, los datos y la disponibilidad del equipo; no requiere cambiar de CRM por defecto.",
    resource: { label: "Guía paso a paso para implementar un proceso comercial B2B", href: "/blog/implementacion-procesos-comerciales" },
    need: "Implementación de procesos comerciales",
  },
  {
    slug: "agencia-marketing-ventas-b2b",
    title: "Agencia de Marketing B2B en Chile | Marketing y Ventas — The Burn",
    description: "Agencia de marketing B2B en Chile: conectamos captación, CRM y seguimiento comercial. Diagnóstico de 3 semanas y plan para convertir leads en oportunidades.",
    h1: "Agencia de marketing B2B en Chile que conecta marketing con ventas",
    eyebrow: "Marketing B2B · Chile",
    intro: "Tu equipo necesita saber qué pasa después del formulario. Diseñamos la captación y el seguimiento comercial para ver qué leads se contactan, cuáles llegan a reunión y qué oportunidades terminan en ventas.",
    audience: "Dueños, gerentes y equipos de empresas B2B en Chile con una oferta definida y capacidad para atender oportunidades. Especialmente negocios con venta consultiva, cotizaciones o varios decisores.",
    problem: "Marketing puede reportar formularios baratos mientras ventas descarta los contactos. Si no comparten una definición de oportunidad, un responsable y un próximo paso, es difícil saber dónde invertir o qué corregir.",
    symptoms: ["Marketing mide leads y ventas mide cierres, sin conectar ambos datos", "Los formularios llegan sin responsable ni plazo de contacto", "Se envían cotizaciones sin acordar el siguiente paso", "El CRM no permite identificar qué campañas generan oportunidades"],
    method: ["Definimos cliente ideal, oferta y criterios de lead calificado junto al equipo comercial", "Diseñamos campañas, contenidos y landing pages según la intención de compra", "Conectamos formularios y CRM con asignación, tareas de seguimiento y motivos de descarte", "Revisamos conversión por etapa, costo por oportunidad y ventas atribuidas para ajustar la inversión"],
    outcomes: ["Criterios comunes entre marketing y ventas para evaluar leads", "Responsables y próximos pasos visibles en el CRM", "Información comercial para decidir qué campañas mantener o corregir"],
    metrics: ["Lead → contacto → reunión → propuesta → cierre", "Costo por oportunidad calificada", "Tiempo hasta el primer contacto", "Pipeline y ventas por canal"],
    related: [{ label: "Captación y funnel digital B2B", href: "/servicios/funnel-digital-performance" }, { label: "Implementación de procesos comerciales", href: "/implementacion-procesos-comerciales" }, { label: "Automatización comercial", href: "/automatizacion-comercial" }, { label: "Power BI para ventas", href: "/power-bi-ventas" }],
    deliverables: ["Definición de cliente ideal, mensajes y criterios de calificación", "Plan de captación con canales y landing pages priorizados", "Mapa del traspaso de marketing a ventas: responsable, datos y siguiente acción", "Requisitos de CRM y automatizaciones de seguimiento", "Tablero de indicadores desde lead hasta oportunidad y cierre", "Plan de revisión con feedback comercial sobre la calidad de los contactos"],
    scope: "Comenzamos con un diagnóstico comercial y marketing de 3 semanas por $500.000 CLP + IVA. Acordamos después qué implementar, con qué herramientas y en qué plazos. La implementación tiene una cotización propia; el presupuesto publicitario y las licencias se detallan por separado. Podemos trabajar con tu equipo interno y con atención remota en Chile o presencial en Santiago según el proyecto.",
    resource: { label: "Cómo funciona un modelo integrado de marketing y ventas B2B", href: "/blog/agencia-marketing-comercial-b2b-chile" },
    faq: [
      { question: "¿Qué hace una agencia de marketing B2B?", answer: "Ayuda a que una empresa atraiga y convierta oportunidades de otras empresas. En The Burn conectamos la estrategia, la captación digital, el CRM y el seguimiento comercial para evaluar el proceso completo." },
      { question: "¿En qué se diferencia del marketing B2C?", answer: "En B2B suele haber más actores, validaciones y tiempo entre la primera consulta y el contrato. Por eso medimos reuniones, propuestas y oportunidades, además de formularios." },
      { question: "¿Trabajan Google Ads, SEO y automatización?", answer: "Son herramientas que podemos integrar según el diagnóstico. Elegimos los canales por intención de compra, recursos y capacidad comercial; no todos los negocios necesitan activar todo a la vez." },
      { question: "¿Cuánto cuesta el servicio de marketing B2B?", answer: "El diagnóstico inicial cuesta $500.000 CLP + IVA y dura 3 semanas. La implementación se cotiza según el alcance. La propuesta distingue honorarios, inversión publicitaria y licencias, cuando correspondan." },
      { question: "¿Necesitamos cambiar nuestro CRM o contratar vendedores?", answer: "No necesariamente. Primero revisamos el proceso y las herramientas actuales. Podemos trabajar con el equipo interno y ordenar la asignación, el seguimiento y los datos antes de proponer cambios." },
      { question: "¿Cómo sabemos si los leads son de calidad?", answer: "Acordamos criterios de calificación con ventas y registramos contacto, reunión, propuesta, cierre y motivo de descarte. Así podemos comparar calidad por campaña y canal." },
      { question: "¿En cuánto tiempo se ven resultados?", answer: "El diagnóstico entrega prioridades en 3 semanas. Los resultados de implementación dependen del canal, los datos disponibles y el ciclo comercial; en ventas largas revisamos primero avances como contacto, reuniones y propuestas." },
    ],
    need: "Agencia de marketing y ventas B2B",
  },
  {
    slug: "estrategia-comercial",
    title: "Estrategia Comercial para Empresas B2B | The Burn",
    description: "Estrategia comercial para definir foco, segmentos, propuesta de valor, canales y prioridades de crecimiento B2B.",
    h1: "Estrategia comercial para decidir dónde crecer y cómo hacerlo",
    eyebrow: "Estrategia comercial · Foco",
    intro: "Crecer no es perseguir todas las oportunidades. Construimos una estrategia comercial que conecta mercado, propuesta, capacidad y ejecución.",
    audience: "Gerencias y dueños que necesitan tomar decisiones comerciales con más foco y menos reacción al corto plazo.",
    problem: "Sin una estrategia explícita, el equipo termina atendiendo lo urgente y el negocio pierde claridad sobre dónde existe una oportunidad sostenible.",
    symptoms: ["Muchas iniciativas compitiendo por recursos", "Segmentos y ofertas que cambian constantemente", "Descuentos usados para compensar una propuesta poco clara", "Dificultad para explicar por qué elegir a la empresa"],
    method: ["Analizamos clientes, oferta, capacidad y competencia", "Definimos foco, segmentos y propuesta de valor", "Traducimos la estrategia a prioridades comerciales", "Creamos indicadores para revisar y aprender"],
    outcomes: ["Un criterio para priorizar mercados y oportunidades", "Una propuesta comercial más consistente", "Decisiones conectadas con capacidad y rentabilidad"],
    metrics: ["Margen por segmento", "Mix de clientes y productos", "Tasa de retención", "Conversión de oportunidades prioritarias"],
    related: [{ label: "Consultoría Comercial", href: "/servicios/consultoria-comercial" }, { label: "Consultoría Operacional", href: "/servicios/consultoria-operacional" }, { label: "Diagnóstico", href: "/diagnostico" }],
    faq: [{ question: "¿La estrategia comercial reemplaza el plan de marketing?", answer: "No. Define el foco comercial que debe orientar marketing, ventas y decisiones de oferta." }, { question: "¿Pueden trabajar con información incompleta?", answer: "Sí. Partimos declarando supuestos y priorizamos la información que más valor aporta para decidir." }, { question: "¿La estrategia incluye un plan de ejecución?", answer: "La estrategia termina en prioridades y próximos pasos concretos, no solo en un documento." }],
    deliverables: ["Priorización de segmentos y propuesta de valor", "Objetivos comerciales e indicadores de seguimiento", "Roadmap con acciones, responsables y prioridades"],
    scope: "Partimos con el diagnóstico comercial de 3 semanas. El alcance de la estrategia y su implementación se acuerda según la situación de tu empresa.",
    resource: { label: "Consultoría comercial y agencia de marketing: cuándo necesitas cada una", href: "/blog/consultoria-comercial-vs-agencia-marketing" },
    need: "Estrategia comercial",
  },
  {
    slug: "automatizacion-comercial",
    title: "Automatización Comercial y Marketing | The Burn",
    description: "Automatización comercial para ordenar seguimiento, marketing, datos y tareas repetitivas sin perder control del proceso.",
    h1: "Automatización comercial para que ninguna oportunidad dependa de la memoria",
    eyebrow: "Automatización · Operación comercial",
    intro: "Automatizar no es sumar herramientas. Es diseñar qué debe ocurrir, cuándo, con qué dato y quién toma la decisión.",
    audience: "Equipos que pierden oportunidades por seguimiento manual, información dispersa o tareas repetitivas que consumen tiempo comercial.",
    problem: "Cuando el proceso no está definido, la automatización solo acelera el desorden. Primero ordenamos el flujo y luego elegimos dónde automatizar.",
    symptoms: ["Seguimientos olvidados o desiguales", "Datos repetidos en varias herramientas", "Tareas manuales que no aportan criterio", "El equipo no confía en las alertas ni reportes"],
    method: ["Mapeamos el flujo y sus decisiones", "Priorizamos automatizaciones por impacto y riesgo", "Conectamos datos, tareas y responsables", "Medimos adopción y calidad antes de escalar"],
    outcomes: ["Seguimientos más consistentes", "Menos trabajo manual de bajo valor", "Datos más útiles para gestionar oportunidades"],
    metrics: ["Tiempo de respuesta", "Tareas automatizadas", "Oportunidades sin próximo paso", "Calidad y completitud de datos"],
    related: [{ label: "Automatización de Marketing", href: "/servicios/automatizacion-marketing" }, { label: "Procesos Comerciales", href: "/implementacion-procesos-comerciales" }, { label: "Power BI", href: "/power-bi-ventas" }],
    faq: [{ question: "¿Qué herramientas automatizan?", answer: "Evaluamos las herramientas que ya usas y el flujo real antes de recomendar integraciones o cambios." }, { question: "¿La automatización reemplaza al equipo comercial?", answer: "No. Libera tiempo operativo para que el equipo se concentre en conversaciones y decisiones de mayor valor." }, { question: "¿Pueden comenzar con un proceso puntual?", answer: "Sí. Priorizamos un caso acotado que permita validar impacto y adopción." }],
    need: "Automatización comercial",
  },
  {
    slug: "power-bi-ventas",
    title: "Power BI para Ventas y Gestión Comercial | The Burn",
    description: "Power BI para ventas: dashboards comerciales conectados a pipeline, conversión, margen, stock y decisiones de negocio.",
    h1: "Power BI para ventas: convierte tus datos comerciales en decisiones",
    eyebrow: "Business Intelligence · Ventas",
    intro: "Un dashboard comercial no es una colección de gráficos. Es una forma común de ver qué está pasando y decidir qué hacer después.",
    audience: "Gerencias comerciales y dueños que tienen datos, pero no una lectura confiable y oportuna del desempeño de ventas.",
    problem: "Cuando los reportes se preparan manualmente, la conversación llega tarde. Diseñamos tableros conectados con las preguntas reales del negocio.",
    symptoms: ["Reportes armados a mano y difíciles de comparar", "Datos de ventas, margen y stock separados", "Reuniones que discuten números en lugar de decisiones", "Poca visibilidad sobre el rendimiento por vendedor o segmento"],
    method: ["Definimos las decisiones que el dashboard debe soportar", "Revisamos fuentes, calidad y modelo de datos", "Diseñamos indicadores y vistas ejecutivas", "Acompañamos la adopción y lectura del tablero"],
    outcomes: ["Una lectura común del desempeño comercial", "Menos tiempo preparando reportes", "Mayor claridad para priorizar acciones y recursos"],
    metrics: ["Ventas y margen", "Conversión por etapa", "Forecast y cobertura", "Rendimiento por segmento o vendedor"],
    related: [{ label: "Business Intelligence & Power BI", href: "/servicios/business-intelligence-power-bi" }, { label: "Consultoría Comercial", href: "/servicios/consultoria-comercial" }, { label: "Consultoría Operacional", href: "/servicios/consultoria-operacional" }],
    faq: [{ question: "¿Necesitamos tener Power BI instalado?", answer: "No necesariamente. Revisamos tu contexto actual y definimos el camino más adecuado para conectar y visualizar los datos." }, { question: "¿Pueden integrar varias fuentes?", answer: "Sí. El modelamiento y la calidad de las fuentes son parte central de un dashboard útil." }, { question: "¿El tablero se adapta a nuestro negocio?", answer: "Sí. Partimos de las decisiones comerciales y no de una plantilla genérica de indicadores." }],
    need: "Power BI para ventas",
  },
]

export const transactionalLandingBySlug = Object.fromEntries(transactionalLandings.map((landing) => [landing.slug, landing])) as Record<string, TransactionalLanding>

export function buildLandingMetadata(slug: string) {
  const landing = transactionalLandingBySlug[slug]
  const url = `https://theburn.cl/${landing.slug}`
  return {
    title: landing.title,
    description: landing.description,
    robots: "index, follow",
    alternates: { canonical: `/${landing.slug}` },
    openGraph: {
      title: landing.title,
      description: landing.description,
      url,
      type: "website" as const,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: landing.title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: landing.title,
      description: landing.description,
      images: ["/og-image.png"],
    },
  }
}
