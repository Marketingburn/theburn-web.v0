# SEO Implementation — The Burn

Documentación técnica de la implementación SEO realizada sobre theburn.cl para posicionar
a The Burn como **Consultora Comercial B2B en Chile**, conectando estrategia, marketing,
ventas, procesos, automatización y datos.

Última actualización: 2026-09-14.

---

## 1. Arquitectura del Topic Cluster

```
THE BURN
└── CONSULTORÍA COMERCIAL B2B (hub: /servicios/consultoria-comercial)
    ├── Consultora Comercial Santiago     (/consultora-comercial-santiago)
    ├── Consultoría Comercial B2B         (/consultoria-comercial-b2b)
    ├── Estrategia Comercial              (/estrategia-comercial)
    ├── Procesos Comerciales              (/implementacion-procesos-comerciales)
    ├── Marketing + Ventas                (/agencia-marketing-ventas-b2b)
    ├── Automatización                    (/automatizacion-comercial)
    ├── Power BI / Business Intelligence  (/power-bi-ventas)
    ├── Casos de éxito                    (/casos, /casos/[slug])
    ├── Autor                             (/autor/javier-troncoso)
    └── Blog (10 artículos, /blog/[slug])
```

El hub (`/servicios/consultoria-comercial`) contiene una sección "El sistema completo"
que conecta explícitamente consultoría comercial con marketing, CRM, automatización y BI,
y enlaza a todos los servicios y contenidos del clúster.

## 2. Páginas nuevas creadas

| Ruta | Keyword principal | Intención |
|---|---|---|
| `/consultora-comercial-santiago` | consultora comercial Santiago | Transaccional |
| `/consultoria-comercial-b2b` | consultoría comercial B2B | Transaccional |
| `/implementacion-procesos-comerciales` | implementación de procesos comerciales | Transaccional |
| `/agencia-marketing-ventas-b2b` | agencia de marketing y ventas B2B | Transaccional |
| `/estrategia-comercial` | estrategia comercial | Transaccional |
| `/automatizacion-comercial` | automatización comercial | Transaccional |
| `/power-bi-ventas` | Power BI ventas | Transaccional |
| `/blog/mejores-consultoras-comerciales-chile-2026` | mejores consultoras comerciales Chile | Informacional/Comparativa |
| `/blog/consultora-comercial-santiago` | consultora comercial Santiago | Informacional |
| `/blog/implementacion-procesos-comerciales` | implementación de procesos comerciales | Informacional |
| `/blog/agencia-marketing-comercial-b2b-chile` | agencia marketing y ventas B2B Chile | Informacional |
| `/blog/como-aumentar-ventas-b2b-chile-2026` | cómo aumentar ventas B2B Chile | Informacional |
| `/autor/javier-troncoso` | — | Autoridad editorial (E-E-A-T) |
| `/casos` y `/casos/[slug]` | — | Estructura técnica, sin contenido inventado |
| `/feed.xml` | — | RSS del blog |

Cada landing transaccional usa el componente compartido `components/transactional-landing.tsx`
y su contenido vive en `lib/transactional-landings.ts`.

## 3. Metadata

- Metadata API de Next.js (`export const metadata`) en cada página/layout indexable.
- `title`, `description`, `canonical`, Open Graph y Twitter card en: home, blog index,
  cada artículo (`generateMetadata`), cada landing (`buildLandingMetadata` en
  `lib/transactional-landings.ts`), autor, casos.
- Imagen OG reutilizable: `/public/og-image.png` (antes referenciada como `.jpg` sin existir:
  bug corregido).
- `viewport` separado de `metadata` según convención de Next.js 16 (antes estaba mezclado
  con un campo `charset` inválido, también corregido).

## 4. Structured Data (JSON-LD)

- **Home**: `ProfessionalService` (Organization/LocalBusiness) en `app/layout.tsx`.
- **Landings**: `Service` + `BreadcrumbList` en `components/transactional-landing.tsx`.
- **Blog**: `BlogPosting` (con `image`) + `BreadcrumbList` en `app/blog/[slug]/page.tsx`.
- **Autor**: `Person` en `app/autor/javier-troncoso/page.tsx`.
- **Casos**: `Article` + `BreadcrumbList`, listo para cuando existan casos reales.

Todo el structured data usa únicamente información visible en la página. No se inventaron
datos, cifras ni testimonios.

## 5. Enlazado interno

- Los 10 artículos del blog enlazan a landings y/o servicios relacionados con anchors
  variados (no siempre el mismo texto).
- Bloque "También te puede interesar" (3 artículos relacionados por categoría) +
  "Servicio relacionado" al final de cada artículo, con tracking `blog_to_service_click`.
- El hub `/servicios/consultoria-comercial` enlaza a los 7 servicios/landings del clúster
  y a 6 artículos relacionados.
- Cada landing transaccional incluye una sección "También puede interesarte" con 3 enlaces.

## 6. Breadcrumbs

- Visibles (`components/breadcrumbs.tsx`) en: blog index, artículos, landings, autor, casos.
- Schema `BreadcrumbList` (`components/breadcrumb-schema.tsx`) sincronizado con el
  breadcrumb visible en cada una de esas páginas.

## 7. Sitemap y robots

- `app/sitemap.ts`: incluye home, servicios, landings, blog index, los 10 artículos,
  autor. `/casos` se excluye deliberadamente (sin contenido real todavía, ver sección 10).
- `app/robots.ts` es la fuente única de verdad (se eliminó `public/robots.txt`, que
  quedaba inerte detrás de la ruta dinámica y podía generar confusión). Permite todo
  excepto `/api/`, referencia el sitemap.

## 8. Analytics (GTM ya existente, contenedor `GTM-NQDHB35D`)

Eventos preparados en `lib/analytics.ts` (`pushEvent`) y disparados vía
`components/tracked-link.tsx`:

| Evento | Dónde se dispara |
|---|---|
| `contact_form_submit` | `components/contact-form.tsx` (envío exitoso) |
| `whatsapp_click` | Botón flotante de WhatsApp y CTA de WhatsApp en `/contacto` |
| `email_click` | Enlace `mailto:` en `/contacto` |
| `diagnostico_click` | CTA principal en artículos de blog |
| `cta_click` | CTA principal "Conversemos sobre tu negocio" en landings |
| `service_click` | Enlaces "También puede interesarte" en landings |
| `blog_to_service_click` | Enlace "Servicio relacionado" en artículos de blog |

`phone_click` está preparado en `lib/analytics.ts` pero no está wireado a ningún elemento
porque el proyecto no tiene actualmente un número de teléfono clicable fuera de WhatsApp.

## 9. RSS

`/feed.xml` (`app/feed.xml/route.ts`) genera RSS 2.0 a partir de `lib/blog-posts.ts`,
registrado como `alternate` en la metadata raíz.

## 10. Contenido pendiente / no creado (por falta de datos verificables)

- **Casos de éxito**: `/casos` y `/casos/[slug]` están construidos técnicamente
  (`lib/casos.ts`, con `caseStudies: []`), pero no se publicó ningún caso porque no existe
  información verificada de clientes reales en el proyecto. `/casos` se dejó en
  `noindex, follow` hasta que se publique al menos un caso real.
- **LinkedIn del autor**: el footer tiene un enlace "LinkedIn" con `href="#"` (placeholder
  preexistente). No se inventó una URL real.
- **Foto del autor**: se usó un avatar con iniciales ("JT") en lugar de generar o inventar
  una fotografía de una persona real.
- **Teléfono clicable**: no existe un enlace `tel:` visible en el sitio (solo WhatsApp).

## 11. Acciones externas necesarias (no técnicas)

1. Verificar el dominio en Google Search Console y enviar
   `https://theburn.cl/sitemap.xml` (ver comentario en `app/layout.tsx` sobre dónde
   añadir el token de verificación).
2. Publicar el sitio en Bing Webmaster Tools (mismo sitemap).
3. Completar una URL real de LinkedIn para Javier Troncoso y para The Burn (footer +
   `sameAs` en el schema `ProfessionalService` de `app/layout.tsx`, actualmente `[]`).
4. Cuando exista al menos un caso de éxito verificado con autorización del cliente,
   completar `lib/casos.ts` y quitar el `noindex` de `/casos`.
5. Considerar habilitar un teléfono clicable (`tel:`) si la empresa quiere ese canal
   además de WhatsApp.
