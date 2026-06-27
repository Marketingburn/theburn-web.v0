export interface BlogPost {
  slug: string
  title: string
  metaDescription: string
  category: string
  date: string
  author: string
  authorRole: string
  excerpt: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "que-es-un-diagnostico-comercial",
    title: "¿Qué es un diagnóstico comercial y cuándo lo necesita una empresa?",
    metaDescription: "Un diagnóstico comercial analiza el proceso de ventas y los márgenes para identificar qué frena el crecimiento.",
    category: "Estrategia",
    date: "10 de junio de 2026",
    author: "Javier Troncoso",
    authorRole: "Co-founder, The Burn SpA",
    excerpt: "Un diagnóstico comercial analiza el proceso de ventas y los márgenes para identificar qué frena el crecimiento.",
    content: `<h2>¿Qué es un diagnóstico comercial?</h2>
<p>Un diagnóstico comercial es un análisis estructurado del sistema de ventas y marketing de una empresa. Su objetivo es identificar con datos reales qué está frenando el crecimiento: cuellos de botella en el proceso comercial, falta de métricas, mensajes desalineados con el mercado o canales de captación que no convierten.</p>
<p>A diferencia de una auditoría contable o financiera, el diagnóstico comercial se enfoca en tres áreas específicas:</p>
<ul>
<li>El proceso de ventas (cómo prospecta, califica y cierra el equipo)</li>
<li>La rentabilidad por producto, canal y cliente</li>
<li>La presencia digital y los canales de captación actuales</li>
</ul>

<h2>¿Qué incluye un diagnóstico comercial?</h2>
<p>Un diagnóstico comercial bien ejecutado tiene tres etapas:</p>
<h3>Semana 1 — Análisis comercial</h3>
<p>Reunión con gerencia y equipo de ventas. Se revisa el pipeline actual, los criterios de calificación de leads, el ciclo de venta promedio y cómo se toman las decisiones comerciales hoy.</p>
<h3>Semana 2 — Análisis de negocio y marketing</h3>
<p>Se revisan datos financieros básicos (márgenes por producto o servicio, costos variables), la presencia digital de la empresa y los canales de captación activos.</p>
<h3>Semana 3 — Roadmap y presentación</h3>
<p>Se presenta el análisis completo con prioridades claras: qué ordenar primero, qué implementar después y cómo medirlo. El entregable es un roadmap de 90 días con KPIs y quick wins.</p>

<h2>¿Cuándo necesita una empresa un diagnóstico comercial?</h2>
<p>Una empresa necesita un diagnóstico comercial cuando:</p>
<ul>
<li>Las ventas dependen de una o dos personas clave y no de un proceso documentado</li>
<li>No existe visibilidad del pipeline: no se sabe en qué etapa se pierden los prospectos</li>
<li>Se invierte en marketing (pauta, redes, contenido) sin poder medir el retorno</li>
<li>El equipo comercial trabaja sin métricas claras de conversión</li>
<li>La empresa quiere crecer pero no sabe exactamente qué priorizar primero</li>
</ul>

<h2>¿Cuánto cuesta un diagnóstico comercial en Chile?</h2>
<p>El precio de un diagnóstico comercial en Chile varía según el alcance y el proveedor. En The Burn, el diagnóstico tiene un valor de $500.000 CLP + IVA, incluye tres semanas de análisis, reuniones presenciales o remotas, y entrega de documentos más presentación ejecutiva.</p>
<p>Si la empresa decide continuar trabajando con The Burn después del diagnóstico, ese valor se descuenta del primer mes de implementación.</p>

<h2>¿Qué diferencia a un diagnóstico comercial de una consultoría tradicional?</h2>
<p>La diferencia principal es el punto de partida. Una consultoría tradicional suele proponer soluciones antes de entender el problema real. Un diagnóstico comercial primero entiende cómo funciona el negocio hoy — con sus datos, su equipo y su mercado — y solo después define qué implementar.</p>
<p>En más de diez años trabajando con empresas B2B en Chile, rara vez el problema declarado por la gerencia es el problema real. El diagnóstico lo confirma o lo corrige con datos.</p>

<h2>Preguntas frecuentes sobre el diagnóstico comercial</h2>
<h3>¿Necesito tener los datos organizados antes de empezar?</h3>
<p>No. Trabajamos con lo que tiene la empresa: un Excel, el sistema de facturación, o simplemente conversaciones con el equipo. Parte del diagnóstico es entender el estado real, no el ideal.</p>
<h3>¿Las reuniones son presenciales?</h3>
<p>Pueden ser presenciales en Santiago o remotas. Se adapta al equipo del cliente.</p>
<h3>¿Cuánto tiempo requiere de mi parte?</h3>
<p>Tres reuniones de 90 minutos, una por semana. El resto lo hace el equipo de The Burn.</p>
<h3>¿Qué pasa si ya tenemos claro cuál es el problema?</h3>
<p>El diagnóstico lo confirma con datos o descubre que el problema real es otro. En la mayoría de los casos, el problema declarado y el problema real son distintos.</p>`,
  },
  {
    slug: "cuanto-cuesta-power-bi-empresa-chile",
    title: "¿Cuánto cuesta implementar Power BI en una empresa en Chile?",
    metaDescription: "El costo real de Power BI no está en la licencia sino en la implementación. Guía con precios referenciales 2026.",
    category: "Business Intelligence",
    date: "12 de junio de 2026",
    author: "Javier Troncoso",
    authorRole: "Co-founder, The Burn SpA",
    excerpt: "El costo real de Power BI no está en la licencia sino en la implementación. Guía con precios referenciales 2026.",
    content: `<h2>¿Cuánto cuesta implementar Power BI en una empresa en Chile?</h2>
<p>Power BI es la herramienta de business intelligence más usada por empresas medianas en Chile. Pero su costo real no está en la licencia — está en la implementación. Este artículo explica qué factores determinan el precio y qué debería incluir un proyecto de Power BI bien ejecutado.</p>

<h2>¿Qué es Power BI y para qué sirve en una empresa?</h2>
<p>Power BI es una plataforma de Microsoft que conecta fuentes de datos (Excel, ERP, CRM, Google Ads, Meta Ads, bases de datos) y los convierte en dashboards visuales actualizados automáticamente. Permite que gerencia, ventas, marketing y operaciones tomen decisiones con datos reales en lugar de intuición o reportes manuales.</p>
<p>En empresas B2B chilenas, los usos más frecuentes son:</p>
<ul>
<li>Dashboard comercial con pipeline, conversión y ticket promedio por vendedor</li>
<li>Control de rentabilidad por producto, línea o canal</li>
<li>Seguimiento de stock con alertas de quiebre automáticas</li>
<li>Reportería de campañas digitales (CPL, CAC, ROAS) integrada con pauta</li>
</ul>

<h2>Factores que determinan el costo de Power BI en Chile</h2>
<p>El precio de implementar Power BI varía según cinco variables:</p>
<h3>1. Número de dashboards</h3>
<p>Un proyecto puede requerir desde un dashboard ejecutivo hasta cinco o seis vistas diferenciadas por área (ventas, finanzas, operaciones, marketing, RRHH).</p>
<h3>2. Fuentes de datos</h3>
<p>Conectar un Excel es simple. Conectar un ERP como SAP, Defontana o Bsale, más Google Ads, más un CRM, requiere trabajo de integración que eleva el costo.</p>
<h3>3. Limpieza de datos</h3>
<p>Si los datos de la empresa están dispersos o mal estructurados, se requiere una etapa previa de normalización antes de construir cualquier visualización.</p>
<h3>4. Automatización de actualizaciones</h3>
<p>Un dashboard que se actualiza manualmente cuesta menos que uno que se actualiza solo cada hora con datos en tiempo real.</p>
<h3>5. Capacitación del equipo</h3>
<p>Un dashboard que nadie sabe usar no sirve. La capacitación al equipo es parte del proyecto, no un opcional.</p>

<h2>Precios referenciales de Power BI en Chile (2026)</h2>
<p>Los precios del mercado chileno para implementación de Power BI se mueven en estos rangos:</p>
<ul>
<li><strong>Proyecto básico</strong> (1–2 dashboards, fuentes simples): $800.000 – $1.500.000 CLP</li>
<li><strong>Proyecto intermedio</strong> (3–4 dashboards, integración con ERP o CRM): $1.500.000 – $4.000.000 CLP</li>
<li><strong>Proyecto avanzado</strong> (5+ dashboards, múltiples fuentes, automatización): $4.000.000 – $10.000.000 CLP</li>
<li><strong>Mantención mensual</strong>: $200.000 – $600.000 CLP según complejidad</li>
</ul>
<p>La licencia de Power BI Pro tiene un costo de aproximadamente USD 10 por usuario al mes cobrado por Microsoft directamente.</p>

<h2>¿Qué debería incluir un proyecto de Power BI bien ejecutado?</h2>
<p>Un proyecto de Power BI que realmente funcione debe incluir:</p>
<h3>Auditoría de datos</h3>
<p>Revisar qué datos existen, dónde están y en qué estado. Sin esta etapa, el dashboard mostrará datos incorrectos.</p>
<h3>Diseño por rol</h3>
<p>Lo que necesita ver el gerente general es distinto a lo que necesita ver el jefe de ventas o el encargado de bodega. Cada vista debe diseñarse para quien la usa.</p>
<h3>Construcción y conexión</h3>
<p>Conectar las fuentes, construir las visualizaciones y automatizar la actualización de datos.</p>
<h3>Capacitación y entrega</h3>
<p>El equipo debe aprender a leer e interpretar el dashboard. Un dashboard que nadie entiende no cambia decisiones.</p>
<h3>Seguimiento post-entrega</h3>
<p>El primer mes después de la entrega suelen aparecer ajustes necesarios. Un buen proveedor los incluye en el proyecto.</p>

<h2>¿Cuándo tiene sentido invertir en Power BI?</h2>
<p>Power BI tiene sentido cuando la empresa ya genera datos pero no los está leyendo. Si las decisiones se toman con el Excel de alguien, si no se conoce el margen real por producto, o si el reporte de ventas se arma manualmente cada lunes, la inversión en Power BI se recupera rápido.</p>
<p>No tiene sentido implementarlo si la empresa no tiene datos suficientes o si no existe voluntad del equipo de usarlos. En ese caso, el diagnóstico comercial previo es el primer paso correcto.</p>

<h2>Preguntas frecuentes sobre Power BI en Chile</h2>
<h3>¿Puedo usar Power BI con Excel?</h3>
<p>Sí. Power BI conecta directamente con Excel, Google Sheets y otras fuentes simples. No se requiere un ERP para empezar.</p>
<h3>¿Cuánto tiempo toma implementar Power BI?</h3>
<p>Un proyecto básico puede estar operativo en 3 a 4 semanas. Un proyecto complejo con múltiples integraciones puede tomar 2 a 3 meses.</p>
<h3>¿Necesito un equipo técnico interno?</h3>
<p>No necesariamente. El mantenimiento básico puede hacerlo alguien del equipo con capacitación. Para cambios de estructura o nuevas integraciones, se recomienda contar con soporte externo.</p>
<h3>¿Power BI es mejor que Google Looker Studio?</h3>
<p>Power BI es más potente para empresas con datos complejos y múltiples fuentes. Google Looker Studio es gratuito y funciona bien para empresas que operan principalmente con Google Ads y Google Analytics.</p>`,
  },
  {
    slug: "como-crear-funnel-ventas-b2b-chile",
    title: "¿Cómo crear un funnel de ventas B2B en Chile paso a paso?",
    metaDescription: "Un funnel B2B lleva al prospecto desde que descubre tu empresa hasta que firma. Guía práctica paso a paso.",
    category: "Funnel Digital",
    date: "14 de junio de 2026",
    author: "Javier Troncoso",
    authorRole: "Co-founder, The Burn SpA",
    excerpt: "Un funnel B2B lleva al prospecto desde que descubre tu empresa hasta que firma. Guía práctica paso a paso.",
    content: `<h2>¿Cómo crear un funnel de ventas B2B en Chile paso a paso?</h2>
<p>Un funnel de ventas B2B es el sistema que lleva a un prospecto desde que descubre tu empresa hasta que firma un contrato. En Chile, la mayoría de las empresas B2B no tiene este sistema: depende de referidos, llamadas en frío o presencia en ferias. Esta guía explica cómo construirlo paso a paso.</p>

<h2>¿Qué es un funnel de ventas B2B?</h2>
<p>Un funnel de ventas B2B es una secuencia de etapas diseñadas para atraer al prospecto correcto, calificarlo y entregarlo al equipo comercial listo para cerrar. Se llama funnel (embudo) porque el número de prospectos disminuye en cada etapa: muchos entran, pocos cierran.</p>
<p>Las etapas típicas de un funnel B2B son:</p>
<ul>
<li><strong>Captación:</strong> El prospecto descubre la empresa (Google Ads, LinkedIn, SEO, referidos)</li>
<li><strong>Conversión:</strong> El prospecto deja sus datos en una landing page o formulario</li>
<li><strong>Calificación:</strong> Se determina si el prospecto tiene el perfil, la necesidad y el presupuesto</li>
<li><strong>Nurturing:</strong> Se educa al prospecto hasta que esté listo para comprar</li>
<li><strong>Cierre:</strong> El equipo comercial negocia y firma</li>
</ul>

<h2>Paso 1 — Definir el cliente ideal (ICP)</h2>
<p>Antes de activar cualquier canal, hay que definir con precisión a quién va dirigido el funnel. En B2B, el cliente ideal se define por:</p>
<ul>
<li>Tamaño de empresa (número de empleados o facturación anual)</li>
<li>Industria o sector</li>
<li>Cargo del decisor (gerente general, gerente comercial, director de operaciones)</li>
<li>Problema específico que resuelve tu producto o servicio</li>
<li>Ticket promedio y ciclo de venta estimado</li>
</ul>
<p>Sin este perfil claro, los anuncios llegarán a personas que no pueden comprar y el costo por lead calificado será insostenible.</p>

<h2>Paso 2 — Elegir los canales de captación</h2>
<p>En Chile, los canales con mayor efectividad para B2B son:</p>
<h3>Google Ads Search</h3>
<p>Captura prospectos con intención de búsqueda activa. Funciona bien cuando hay volumen de búsqueda para el servicio. Ejemplo: "consultoría comercial Santiago" o "implementación Power BI Chile".</p>
<h3>LinkedIn Ads</h3>
<p>Permite segmentar por cargo, industria y tamaño de empresa. Es el canal más preciso para llegar a decisores B2B, aunque el costo por clic es más alto que Google.</p>
<h3>SEO orgánico</h3>
<p>Posicionamiento en Google para keywords de intención comercial. Tarda más en generar resultados (3 a 6 meses) pero el costo por lead baja significativamente con el tiempo.</p>
<h3>Email outreach</h3>
<p>Contacto directo a prospectos calificados usando herramientas como Apollo.io. Funciona bien combinado con LinkedIn.</p>

<h2>Paso 3 — Construir la landing page</h2>
<p>La landing page es la página donde llega el prospecto después de hacer clic en un anuncio. Su único objetivo es convertir visitas en leads. Los errores más comunes son:</p>
<ul>
<li>Llevar el tráfico a la página de inicio en lugar de una landing específica</li>
<li>Incluir demasiada información y múltiples CTAs</li>
<li>No tener un formulario visible sin necesidad de hacer scroll</li>
</ul>
<p>Una landing page B2B efectiva tiene: titular claro con la propuesta de valor, tres o cuatro beneficios concretos, prueba social (casos o testimonios), y un formulario simple con máximo cinco campos.</p>

<h2>Paso 4 — Automatizar la calificación de leads</h2>
<p>No todos los leads que llegan tienen el perfil correcto. Automatizar la calificación permite que el equipo comercial solo hable con prospectos que valen la pena. Las herramientas más usadas en Chile son:</p>
<ul>
<li><strong>HubSpot:</strong> CRM con flujos de automatización, scoring de leads y seguimiento de pipeline</li>
<li><strong>Make (antes Integromat):</strong> Automatizaciones entre formularios, CRM y WhatsApp</li>
<li><strong>WhatsApp Business API:</strong> Respuesta automática inmediata al lead con calificación por preguntas</li>
</ul>
<p>Un flujo básico es: el lead llena el formulario → recibe un WhatsApp automático con dos o tres preguntas de calificación → según sus respuestas, se asigna a un vendedor o entra a una secuencia de nurturing.</p>

<h2>Paso 5 — Medir y optimizar</h2>
<p>Un funnel que no se mide no mejora. Las métricas clave de un funnel B2B son:</p>
<ul>
<li><strong>CPL (Costo por Lead):</strong> Cuánto cuesta cada lead captado</li>
<li><strong>Tasa de calificación:</strong> Qué porcentaje de leads tiene el perfil correcto</li>
<li><strong>CAC (Costo de Adquisición de Cliente):</strong> Cuánto cuesta conseguir un cliente que paga</li>
<li><strong>Tiempo de cierre:</strong> Cuántos días pasan entre el primer contacto y la firma</li>
<li><strong>ROAS:</strong> Retorno sobre la inversión publicitaria</li>
</ul>
<p>La optimización del funnel es continua: se prueban distintos mensajes, audiencias y landing pages, y se escala lo que funciona.</p>

<h2>¿Cuánto tiempo tarda en funcionar un funnel B2B en Chile?</h2>
<p>Los primeros leads calificados suelen aparecer entre 2 y 6 semanas de activar las campañas, dependiendo del canal y el presupuesto. El funnel alcanza su eficiencia óptima entre 3 y 6 meses de operación continua, cuando hay suficientes datos para optimizar.</p>

<h2>Preguntas frecuentes sobre funnels B2B en Chile</h2>
<h3>¿Cuánto presupuesto necesito para activar un funnel B2B?</h3>
<p>Para Google Ads o LinkedIn, se recomienda un mínimo de $500.000 CLP mensuales en pauta para tener datos suficientes para optimizar. Con menos presupuesto, los ciclos de aprendizaje son muy lentos.</p>
<h3>¿Puedo hacer el funnel sin pauta pagada?</h3>
<p>Sí, usando SEO y outreach directo, pero los tiempos son más largos. El SEO tarda entre 3 y 6 meses en generar tráfico significativo.</p>
<h3>¿Qué CRM recomiendas para B2B en Chile?</h3>
<p>HubSpot tiene una versión gratuita funcional para empresas que están empezando. Para equipos más grandes, Salesforce o Pipedrive son alternativas válidas.</p>`,
  },
  {
    slug: "que-es-costo-por-lead-como-calcularlo",
    title: "¿Qué es el costo por lead (CPL) y cómo calcularlo?",
    metaDescription: "El CPL mide cuánto cuesta cada lead calificado. Fórmula, benchmarks Chile 2026 y cómo reducirlo.",
    category: "Performance",
    date: "17 de junio de 2026",
    author: "Javier Troncoso",
    authorRole: "Co-founder, The Burn SpA",
    excerpt: "El CPL mide cuánto cuesta cada lead calificado. Fórmula, benchmarks Chile 2026 y cómo reducirlo.",
    content: `<h2>¿Qué es el costo por lead (CPL) y cómo calcularlo?</h2>
<p>El costo por lead (CPL) es una de las métricas más importantes del marketing digital B2B. Indica cuánto dinero invierte una empresa en conseguir cada contacto que podría convertirse en cliente. Sin este dato, es imposible saber si una campaña es rentable o no.</p>

<h2>Definición de costo por lead (CPL)</h2>
<p>El costo por lead es el resultado de dividir la inversión total en un canal de captación entre el número de leads generados en ese período.</p>
<h3>Fórmula del CPL:</h3>
<p><strong>CPL = Inversión Total ÷ Número de Leads</strong></p>
<h3>Ejemplo práctico:</h3>
<p>Una empresa invierte $1.000.000 CLP en Google Ads durante un mes y genera 40 leads. Su CPL es de $25.000 CLP por lead.</p>

<h2>¿Qué se incluye en la inversión total para calcular el CPL?</h2>
<p>El error más común al calcular el CPL es incluir solo el gasto en pauta y olvidar los costos operacionales. La inversión total debería incluir:</p>
<ul>
<li>Presupuesto en pauta (Google Ads, LinkedIn Ads, Meta Ads)</li>
<li>Honorarios de la agencia o consultora que gestiona las campañas</li>
<li>Costo de las herramientas (CRM, plataformas de automatización)</li>
<li>Tiempo interno del equipo dedicado a la gestión</li>
</ul>
<p>Cuando se incluyen todos estos costos, el CPL real suele ser entre 30% y 60% más alto que el CPL de pauta pura.</p>

<h2>Benchmarks de CPL para B2B en Chile (2026)</h2>
<p>Los costos por lead varían significativamente según el canal y la industria. Como referencia para el mercado chileno:</p>
<ul>
<li><strong>Google Ads Search B2B:</strong> $15.000 – $80.000 CLP por lead</li>
<li><strong>LinkedIn Ads:</strong> $40.000 – $150.000 CLP por lead</li>
<li><strong>Meta Ads para B2B:</strong> $8.000 – $35.000 CLP por lead (menor calificación)</li>
<li><strong>SEO orgánico (costo amortizado):</strong> $5.000 – $20.000 CLP por lead a largo plazo</li>
<li><strong>Email outreach:</strong> $3.000 – $15.000 CLP por lead (dependiendo del tiempo invertido)</li>
</ul>
<p>Estos rangos son referenciales. El CPL aceptable para cada empresa depende del ticket promedio y del margen del negocio.</p>

<h2>¿Cómo saber si mi CPL es bueno o malo?</h2>
<p>El CPL no se evalúa en términos absolutos sino en relación al valor del cliente. La métrica clave para esta evaluación es el LTV (Lifetime Value) o valor de vida del cliente.</p>
<h3>Regla general:</h3>
<p>El CPL debería ser inferior al 10% del LTV del cliente.</p>
<h3>Ejemplo:</h3>
<ul>
<li>Ticket promedio: $500.000 CLP/mes</li>
<li>Contrato promedio: 6 meses</li>
<li>LTV: $3.000.000 CLP</li>
<li>CPL máximo recomendado: $300.000 CLP</li>
</ul>
<p>Si el CPL está por encima de ese umbral, la campaña no es sostenible a largo plazo.</p>

<h2>Diferencia entre CPL y CAC</h2>
<p>El CPL mide el costo de conseguir un lead (contacto interesado). El CAC (Costo de Adquisición de Cliente) mide el costo de conseguir un cliente que efectivamente paga.</p>
<p>La diferencia entre ambos es la tasa de conversión del equipo comercial. Si el CPL es $30.000 y el equipo cierra 1 de cada 10 leads, el CAC es $300.000.</p>
<p>Ambas métricas son necesarias: el CPL mide la eficiencia del marketing, el CAC mide la eficiencia del sistema comercial completo.</p>

<h2>Cómo reducir el CPL sin bajar la calidad de los leads</h2>
<p>Las estrategias más efectivas para reducir el CPL en campañas B2B son:</p>
<h3>Mejorar la segmentación</h3>
<p>Llegar a menos personas pero más calificadas reduce el gasto en clics que no convierten.</p>
<h3>Optimizar la landing page</h3>
<p>Una mejora del 20% en la tasa de conversión de la landing page reduce el CPL en el mismo porcentaje sin tocar el presupuesto.</p>
<h3>Negativizar palabras clave</h3>
<p>En Google Ads, excluir búsquedas irrelevantes evita gastar en clics de personas sin intención de compra.</p>
<h3>Diversificar canales</h3>
<p>El SEO orgánico, aunque más lento, genera leads a un costo decreciente con el tiempo.</p>
<h3>Mejorar la calificación</h3>
<p>Un formulario con preguntas de calificación reduce el número de leads no calificados que llegan al equipo comercial.</p>

<h2>Preguntas frecuentes sobre el CPL</h2>
<h3>¿Con qué frecuencia debo calcular el CPL?</h3>
<p>Mensualmente como mínimo. En campañas activas, semanalmente para detectar cambios rápido.</p>
<h3>¿El CPL varía por temporada?</h3>
<p>Sí. En períodos de alta competencia (fin de año, campañas masivas) el costo por clic sube y el CPL aumenta. En períodos de baja actividad puede bajar.</p>
<h3>¿Puedo comparar el CPL entre Google Ads y LinkedIn Ads?</h3>
<p>Se pueden comparar los números, pero hay que considerar que el lead de LinkedIn suele estar más calificado que el de Google. Un CPL más alto en LinkedIn puede ser más rentable si la tasa de cierre es mayor.</p>`,
  },
  {
    slug: "consultoria-comercial-vs-agencia-marketing",
    title: "Consultoría comercial vs agencia de marketing: ¿cuál necesita tu empresa?",
    metaDescription: "La diferencia entre diseñar el proceso de ventas y ejecutar campañas. Cuándo usar cada una.",
    category: "Consultoría",
    date: "20 de junio de 2026",
    author: "Javier Troncoso",
    authorRole: "Co-founder, The Burn SpA",
    excerpt: "La diferencia entre diseñar el proceso de ventas y ejecutar campañas. Cuándo usar cada una.",
    content: `<h2>Consultoría comercial vs agencia de marketing: ¿cuál necesita tu empresa?</h2>
<p>Muchas empresas B2B en Chile contratan una agencia de marketing esperando que resuelva un problema que en realidad es comercial. O contratan una consultoría esperando que les traiga clientes sin tener el proceso de ventas ordenado. Esta confusión cuesta dinero y tiempo. Este artículo explica la diferencia y cuándo usar cada una.</p>

<h2>¿Qué hace una consultoría comercial?</h2>
<p>Una consultoría comercial analiza y diseña el sistema de ventas de una empresa. Su trabajo es entender cómo vende el negocio hoy, identificar dónde se pierden oportunidades y construir el proceso que permite escalar sin depender de personas específicas.</p>
<p>Las áreas de trabajo de una consultoría comercial incluyen:</p>
<ul>
<li>Diseño del proceso de ventas (etapas, criterios de calificación, responsables)</li>
<li>Definición de métricas de pipeline y conversión</li>
<li>Construcción de mensajes por segmento de cliente</li>
<li>Implementación o configuración del CRM</li>
<li>Capacitación del equipo comercial</li>
<li>Seguimiento mensual de métricas</li>
</ul>
<p>El entregable de una consultoría comercial es un sistema: un proceso documentado, métricas definidas y un equipo que sabe qué hacer en cada etapa.</p>

<h2>¿Qué hace una agencia de marketing?</h2>
<p>Una agencia de marketing ejecuta campañas de captación y comunicación. Su trabajo es generar visibilidad, tráfico y leads usando canales digitales o tradicionales.</p>
<p>Los servicios típicos de una agencia de marketing incluyen:</p>
<ul>
<li>Gestión de campañas en Google Ads, Meta Ads o LinkedIn</li>
<li>Creación de contenido para redes sociales</li>
<li>SEO y posicionamiento en buscadores</li>
<li>Diseño de piezas gráficas y creatividades</li>
<li>Email marketing y automatización de comunicaciones</li>
<li>Reportería de campañas</li>
</ul>
<p>El entregable de una agencia de marketing son resultados de campaña: impresiones, clics, leads generados, costo por lead.</p>

<h2>Diferencias clave entre consultoría comercial y agencia de marketing</h2>
<table>
<tr>
<th>Aspecto</th>
<th>Consultoría Comercial</th>
<th>Agencia de Marketing</th>
</tr>
<tr>
<td><strong>Foco</strong></td>
<td>Proceso de ventas interno</td>
<td>Captación y comunicación externa</td>
</tr>
<tr>
<td><strong>Entregable</strong></td>
<td>Sistema y metodología</td>
<td>Campañas y resultados de medios</td>
</tr>
<tr>
<td><strong>Horizonte</strong></td>
<td>Medio y largo plazo</td>
<td>Corto y mediano plazo</td>
</tr>
<tr>
<td><strong>Equipo involucrado</strong></td>
<td>Gerencia y equipo de ventas</td>
<td>Equipo de marketing</td>
</tr>
<tr>
<td><strong>Medición</strong></td>
<td>Tasa de conversión, ciclo de venta</td>
<td>CPL, ROAS, tráfico</td>
</tr>
</table>

<h2>¿Cuándo necesita tu empresa una consultoría comercial?</h2>
<p>Una empresa necesita una consultoría comercial cuando el problema está en el proceso de ventas interno:</p>
<ul>
<li>El equipo de ventas no tiene un proceso claro ni métricas definidas</li>
<li>Las ventas dependen de una o dos personas y no escalan</li>
<li>Se generan leads pero el equipo no los convierte</li>
<li>No existe visibilidad del pipeline: no se sabe dónde se pierden los clientes</li>
<li>La empresa quiere crecer pero no sabe qué ordenar primero</li>
</ul>

<h2>¿Cuándo necesita tu empresa una agencia de marketing?</h2>
<p>Una empresa necesita una agencia de marketing cuando el problema está en la captación:</p>
<ul>
<li>El proceso de ventas está ordenado pero no llegan suficientes prospectos</li>
<li>Se quiere activar o escalar un canal digital (Google Ads, LinkedIn, SEO)</li>
<li>Se necesita generar contenido de forma consistente</li>
<li>El equipo interno no tiene capacidad para gestionar campañas</li>
</ul>

<h2>¿Se pueden usar las dos al mismo tiempo?</h2>
<p>Sí, y en muchos casos es la combinación correcta. La consultoría comercial ordena el proceso interno (para que los leads que lleguen efectivamente se cierren) y la agencia de marketing activa los canales de captación (para que lleguen suficientes leads calificados).</p>
<p>El error frecuente es contratar la agencia antes de tener el proceso ordenado. Si el equipo comercial no sabe qué hacer con un lead, invertir en traer más leads solo magnifica el problema.</p>

<h2>El modelo de The Burn: consultoría que también ejecuta</h2>
<p>The Burn no es una agencia de marketing tradicional ni una consultoría que entrega un PDF y se va. Integramos ambas disciplinas: primero entendemos el negocio con un diagnóstico comercial, y luego implementamos el sistema completo — proceso de ventas, dashboards de datos, funnel digital y automatizaciones — trabajando junto al equipo del cliente.</p>
<p>Este modelo es especialmente efectivo para empresas B2B en Chile con entre 10 y 80 personas que quieren crecer sin contratar un equipo de marketing interno.</p>

<h2>Preguntas frecuentes</h2>
<h3>¿Una consultora comercial trae clientes?</h3>
<p>No directamente. Una consultoría comercial ordena el proceso para que el equipo cierre más de los leads que ya llegan. Para traer más leads, se necesita activar canales de captación (paid media, SEO, outreach).</p>
<h3>¿Una agencia de marketing puede reemplazar al equipo de ventas?</h3>
<p>No. La agencia genera leads, pero el cierre es responsabilidad del equipo comercial interno. Sin un proceso de ventas ordenado, los leads generados por la agencia no se convierten.</p>
<h3>¿Cuánto cuesta una consultoría comercial en Chile?</h3>
<p>Los precios varían según el alcance. En The Burn, el punto de entrada es el diagnóstico comercial a $500.000 CLP, que incluye tres semanas de análisis y un roadmap de 90 días.</p>`,
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}
