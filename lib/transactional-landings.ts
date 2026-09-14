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
    need: "Consultoría comercial B2B",
  },
  {
    slug: "implementacion-procesos-comerciales",
    title: "Implementación de Procesos Comerciales | The Burn",
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
    need: "Implementación de procesos comerciales",
  },
  {
    slug: "agencia-marketing-ventas-b2b",
    title: "Agencia de Marketing y Ventas B2B | The Burn",
    description: "Agencia de marketing y ventas B2B que conecta estrategia, generación de demanda, funnel y conversión comercial.",
    h1: "Agencia de marketing y ventas B2B conectada al negocio",
    eyebrow: "Marketing y ventas B2B",
    intro: "Más leads no resuelven un sistema comercial desconectado. Alineamos demanda, mensaje, funnel y seguimiento para que marketing y ventas trabajen sobre el mismo objetivo.",
    audience: "Empresas B2B que invierten en marketing, pero no logran conectar campañas, oportunidades y ventas reales.",
    problem: "La actividad de marketing puede crecer mientras el negocio sigue sin saber qué canal, mensaje o segmento está generando valor.",
    symptoms: ["Leads sin definición de calidad", "Campañas que no conversan con el equipo comercial", "Landing pages desconectadas del proceso de seguimiento", "Reportes de actividad sin lectura de negocio"],
    method: ["Alineamos oferta, cliente ideal y mensaje", "Diseñamos el funnel y sus puntos de conversión", "Conectamos captación con seguimiento comercial", "Medimos calidad y aprendizaje, no solo volumen"],
    outcomes: ["Mejor conexión entre marketing y ventas", "Prioridades claras para campañas y contenidos", "Visibilidad sobre el aporte del funnel al negocio"],
    metrics: ["Costo por oportunidad", "Conversión a reunión", "Velocidad de seguimiento", "Ingresos por canal"],
    related: [{ label: "Funnel Digital", href: "/servicios/funnel-digital-performance" }, { label: "Automatización", href: "/servicios/automatizacion-marketing" }, { label: "Consultoría Comercial B2B", href: "/consultoria-comercial-b2b" }],
    faq: [{ question: "¿Son una agencia de publicidad tradicional?", answer: "Nuestro foco es conectar marketing con resultados comerciales, no ejecutar campañas aisladas sin contexto de negocio." }, { question: "¿Trabajan con equipos internos?", answer: "Sí. Podemos complementar un equipo existente o ayudar a ordenar responsabilidades y prioridades." }, { question: "¿Solo trabajan con B2B?", answer: "Esta landing está enfocada en B2B, donde la coordinación entre demanda y ventas suele ser crítica." }],
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
