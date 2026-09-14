# SEO Content Map — The Burn

Mapa de contenido del clúster "Consultoría Comercial B2B". Página padre del clúster:
`/servicios/consultoria-comercial` (hub).

| URL | Keyword principal | Intención | Página padre | CTA principal | Artículos/páginas relacionadas |
|---|---|---|---|---|---|
| `/servicios/consultoria-comercial` | consultoría comercial | Hub / Transaccional | Home | Agendar diagnóstico | Los 7 servicios/landings del clúster + 6 artículos |
| `/consultora-comercial-santiago` | consultora comercial Santiago | Transaccional | Hub | Conversemos sobre tu negocio | `/blog/consultora-comercial-santiago`, `/diagnostico`, `/servicios/consultoria-comercial` |
| `/consultoria-comercial-b2b` | consultoría comercial B2B | Transaccional | Hub | Conversemos sobre tu negocio | `/servicios/funnel-digital-performance`, `/servicios/business-intelligence-power-bi`, `/blog` |
| `/estrategia-comercial` | estrategia comercial | Transaccional | Hub | Conversemos sobre tu negocio | `/servicios/consultoria-comercial`, `/servicios/consultoria-operacional`, `/diagnostico` |
| `/implementacion-procesos-comerciales` | implementación de procesos comerciales | Transaccional | Hub | Conversemos sobre tu negocio | `/servicios/consultoria-operacional`, `/servicios/automatizacion-marketing`, `/diagnostico` |
| `/agencia-marketing-ventas-b2b` | agencia de marketing y ventas B2B | Transaccional | Hub | Conversemos sobre tu negocio | `/servicios/funnel-digital-performance`, `/servicios/automatizacion-marketing`, `/consultoria-comercial-b2b` |
| `/automatizacion-comercial` | automatización comercial | Transaccional | Hub | Conversemos sobre tu negocio | `/servicios/automatizacion-marketing`, `/implementacion-procesos-comerciales`, `/power-bi-ventas` |
| `/power-bi-ventas` | Power BI ventas | Transaccional | Hub | Conversemos sobre tu negocio | `/servicios/business-intelligence-power-bi`, `/servicios/consultoria-comercial`, `/servicios/consultoria-operacional` |
| `/blog/que-es-un-diagnostico-comercial` | diagnóstico comercial | Informacional (TOFU) | Blog | Comenzar diagnóstico | `/blog/consultora-comercial-santiago`, `/blog/como-aumentar-ventas-b2b-chile-2026`, `/servicios/consultoria-comercial` |
| `/blog/cuanto-cuesta-power-bi-empresa-chile` | costo Power BI Chile | Informacional (MOFU) | Blog | Conocer Power BI para ventas | `/power-bi-ventas`, `/servicios/business-intelligence-power-bi`, `/blog/como-aumentar-ventas-b2b-chile-2026` |
| `/blog/como-crear-funnel-ventas-b2b-chile` | funnel de ventas B2B | Informacional (TOFU) | Blog | Ver cómo conectamos marketing y ventas | `/servicios/funnel-digital-performance`, `/agencia-marketing-ventas-b2b`, `/blog/implementacion-procesos-comerciales` |
| `/blog/que-es-costo-por-lead-como-calcularlo` | costo por lead (CPL) | Informacional (TOFU) | Blog | Conocer el Funnel Digital de Performance | `/servicios/funnel-digital-performance`, `/blog/como-aumentar-ventas-b2b-chile-2026` |
| `/blog/consultoria-comercial-vs-agencia-marketing` | consultoría comercial vs agencia | Informacional (MOFU) | Blog | Conocer la Consultoría Comercial B2B | `/servicios/consultoria-comercial`, `/consultoria-comercial-b2b`, `/blog/mejores-consultoras-comerciales-chile-2026` |
| `/blog/mejores-consultoras-comerciales-chile-2026` | mejores consultoras comerciales Chile | Informacional/Comparativa (MOFU) | Blog | Conocer la Consultoría Comercial B2B | `/blog/consultora-comercial-santiago`, `/servicios/consultoria-comercial`, `/diagnostico` |
| `/blog/consultora-comercial-santiago` | consultora comercial Santiago | Informacional (MOFU) | Blog | Conocer la Consultoría Comercial B2B | `/consultora-comercial-santiago`, `/servicios/consultoria-comercial` |
| `/blog/implementacion-procesos-comerciales` | implementación de procesos comerciales | Informacional (MOFU) | Blog | Ver implementación de procesos comerciales | `/implementacion-procesos-comerciales`, `/automatizacion-comercial` |
| `/blog/agencia-marketing-comercial-b2b-chile` | agencia marketing y ventas B2B Chile | Informacional (MOFU) | Blog | Ver la agencia de marketing y ventas B2B | `/agencia-marketing-ventas-b2b`, `/servicios/funnel-digital-performance` |
| `/blog/como-aumentar-ventas-b2b-chile-2026` | cómo aumentar ventas B2B Chile | Informacional (BOFU) | Blog | Ver implementación de procesos comerciales | `/estrategia-comercial`, `/consultoria-comercial-b2b`, `/diagnostico` |
| `/autor/javier-troncoso` | — | Autoridad (E-E-A-T) | Blog | — | Todos los artículos del autor |
| `/casos` | — | Estructura técnica (sin publicar) | Hub | Solicitar diagnóstico | `/blog`, `/diagnostico` |

Notas:
- Todos los artículos comparten un CTA final BOFU hacia `/diagnostico`
  (`diagnostico_click`) además del CTA contextual de la tabla.
- El "servicio relacionado" de cada artículo varía según su categoría (mapa en
  `app/blog/[slug]/page.tsx`, objeto `categoryToService`).
- Las 7 landings comparten estructura pero cada una tiene su propio problema, síntomas,
  método, resultados, métricas y FAQ (ver `lib/transactional-landings.ts`).
