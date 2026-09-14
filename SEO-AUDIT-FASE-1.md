# Auditoría SEO — Fase 1 (theburn.cl)

Fecha: 2026-09-14 · Stack: Next.js 14.2.25 (App Router), `images.unoptimized: true`

Actualizado: todos los hallazgos de esta auditoría fueron corregidos en la rama `v0/seo-blog-cluster-consultoria-comercial`. Se deja el detalle de cada hallazgo y su fix como registro histórico.

## 🔴 Crítico — todos corregidos

1. **✅ CORREGIDO — Enlace roto en el menú principal (404 real).**
   `components/glassmorphism-nav.tsx` y `components/features-section.tsx` enlazaban a `/servicios/automatizacion-marketing`, una ruta que no existía. En vez de eliminar el enlace (es uno de los 5 servicios reales del negocio), se construyó la página completa siguiendo el mismo patrón de diseño que los otros 4 servicios: hero, problema, qué hacemos, diferenciador y CTA con formulario de contacto, más su `layout.tsx` con metadata y canonical dedicados.

2. **✅ CORREGIDO (hallazgo revisado) — Metadata "duplicada".** La primera pasada de la auditoría solo buscó `export const metadata` dentro de `page.tsx` y no consideró los `layout.tsx` co-ubicados. Al revisar también los layouts, 7 de las 10 rutas señaladas **ya tenían metadata única** (`/diagnostico`, `/webinar`, `/meta-ads-campana` y las 4 landings de `/servicios/*`). Las 3 rutas que sí carecían de metadata propia fueron corregidas:
   - `/` (home) → metadata agregada directo en `app/page.tsx` (es Server Component).
   - `/diagnostico-expres` → se creó `app/diagnostico-expres/layout.tsx` (la page es `"use client"`, no puede exportar metadata).
   - `/car-dealerships` → se creó `app/car-dealerships/layout.tsx` (mismo motivo).
   - `/servicios/automatizacion-marketing` → metadata nueva junto con la página nueva.

3. **✅ CORREGIDO — Sin `Organization`/`LocalBusiness` JSON-LD.** Se agregó JSON-LD `ProfessionalService` sitewide en `app/layout.tsx` (nombre, dirección, área de servicio, contacto), visible en todas las páginas sin duplicar código por ruta.

4. **✅ CORREGIDO — Sitemap incompleto y hardcodeado.** `app/sitemap.ts` ahora lee `blogPosts` de `lib/blog-posts.ts` dinámicamente (usa `dateModifiedISO`/`dateISO` como `lastmod`) y se agregaron las rutas faltantes: `/contacto`, `/webinar`, `/car-dealerships`, `/servicios/consultoria-operacional`, `/servicios/automatizacion-marketing`. `/meta-ads-campana` se excluye intencionalmente (ver punto 8).

## 🟠 Alto impacto — todos corregidos

5. **✅ CORREGIDO — Sin canonical tags.** Se agregó `alternates.canonical` en las 10 rutas relevantes: home, las 5 landings de `/servicios/*`, `/diagnostico`, `/diagnostico-expres`, `/webinar`, `/contacto`, `/car-dealerships` y `/meta-ads-campana`.

6. **Pendiente (fuera de alcance de este fix) — `images.unoptimized: true`.** Requiere decidir un proveedor de optimización de imágenes o quitar la config; se deja para una fase de performance dedicada para no mezclar cambios de infraestructura con SEO on-page.

7. **✅ CORREGIDO — Sin `BreadcrumbList` schema en servicios.** Se creó el componente reutilizable `components/breadcrumb-schema.tsx` y se aplicó en las 5 landings de `/servicios/*` (Inicio → Servicios → [Servicio]). El blog ya lo tenía.

8. **✅ RESUELTO — `/car-dealerships` y `/meta-ads-campana` sin decisión de indexación.**
   - `/car-dealerships`: es una landing vertical real (concesionarios de autos) pensada para tráfico orgánico y pagado → se le dio metadata propia, canonical, y se agregó al sitemap como indexable.
   - `/meta-ads-campana`: es una landing exclusiva para tráfico pagado de Meta Ads, con contenido que solapa con `/diagnostico-expres` → se cambió a `robots: noindex, follow` y se excluyó del sitemap para evitar canibalización.

## 🟡 Medio

9. **✅ Sin hallazgos** — todas las imágenes (`next/image`) ya tenían `alt` descriptivo.

10. **Pendiente (monitoreo, no bloqueante)** — 2 recursos de fuente (`Barlow`/`Barlow Condensed`) + `JetBrains Mono`. No se tocó; vigilar peso en Core Web Vitals si se agregan más pesos/variantes.

11. **✅ CORREGIDO — Script de Clarity sin estrategia de carga.** Se migró de `<script>` inline plano a `next/script` con `strategy="afterInteractive"`, consistente con las mejores prácticas de Next.js para scripts de analítica de terceros.

## ✅ Lo que ya estaba bien (sin cambios)

- `robots.ts` permite todo correctamente y apunta al sitemap.
- `/gracias` tiene `noindex, nofollow` correctamente aplicado.
- Los 5 artículos de blog (Fase 5) tienen metadata única, `Article`/`BreadcrumbList` JSON-LD, enlaces internos cruzados y están en el sitemap.
- No se encontró ningún `<img>` nativo — todo pasa por `next/image` o no lleva imagen.
- `metadataBase` está bien configurado en el layout raíz.

## Verificación

- `npx tsc --noEmit`: sin errores nuevos introducidos por estos cambios (los errores preexistentes en `Aurora.tsx`, `GradualBlur.tsx` y el `charset` de `app/layout.tsx` no están relacionados con este trabajo).
- Verificado en navegador: la página nueva `/servicios/automatizacion-marketing` renderiza correctamente con el diseño de marca; el dropdown "Servicios" del nav ahora navega sin 404; `/sitemap.xml` sirve las 12 rutas estáticas + los 10 posts del blog dinámicamente; `/meta-ads-campana` responde con `<meta name="robots" content="noindex, follow">`; el home ahora sirve `<title>` único + `rel="canonical"` + JSON-LD de Organization.
