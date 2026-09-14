# Auditoría SEO — Fase 1 (theburn.cl)

Fecha: 2026-09-14 · Stack: Next.js 14.2.25 (App Router), `images.unoptimized: true`

## 🔴 Crítico

1. **Enlace roto en el menú principal (404 real).**
   `components/glassmorphism-nav.tsx` enlaza a `/servicios/automatizacion-marketing`, pero esa ruta **no existe** en `app/servicios/`. Aparece en el dropdown de escritorio y en el menú móvil — visible en todas las páginas del sitio. Esto es un 404 indexable por Google desde la navegación global.

2. **Metadata duplicada en 9 de 15 rutas.** Las siguientes páginas NO exportan `metadata` propio, por lo que heredan el título/descripción genérico del `layout.tsx` raíz ("The Burn | Consultoría Comercial y Marketing Digital Chile") en vez de uno único y optimizado por keyword:
   - `/` (home)
   - `/servicios/consultoria-comercial`
   - `/servicios/business-intelligence-power-bi`
   - `/servicios/funnel-digital-performance`
   - `/servicios/consultoria-operacional`
   - `/diagnostico`
   - `/diagnostico-expres`
   - `/webinar`
   - `/meta-ads-campana`
   - `/car-dealerships`

   Google verá títulos y meta descriptions duplicados entre estas 10 páginas — canibalización directa y mala CTR en SERP.

3. **Sin `Organization`/`LocalBusiness` JSON-LD.** Solo los artículos del blog tienen schema (`Article`). No hay schema de negocio en el home ni en las landings de servicio — se pierde elegibilidad para Knowledge Panel, sitelinks de negocio local y rich results de servicio.

4. **Sitemap incompleto.** `app/sitemap.ts` está *hardcodeado* (no lee `lib/blog-posts.ts` dinámicamente) y le faltan:
   - `/servicios/consultoria-operacional` (página existe, no está en sitemap)
   - `/contacto`
   - `/webinar`
   - `/car-dealerships`
   - `/meta-ads-campana`
   
   Además, como está hardcodeado, cualquier artículo nuevo del blog requiere editar manualmente este archivo — alto riesgo de que se vuelva a desincronizar (ya pasó: el post más nuevo de la Fase 5 sí quedó, pero el patrón es frágil).

## 🟠 Alto impacto

5. **Sin canonical tags explícitos.** Ninguna página define `alternates.canonical` en su metadata (ni siquiera las que sí tienen `metadata`). Con parámetros UTM de campañas (`meta-ads-campana`, `webinar`) esto es riesgo de contenido duplicado.

6. **`images.unoptimized: true` en next.config.mjs.** Desactiva la optimización automática de imágenes de Next (AVIF/WebP, resize responsivo). Impacta LCP en páginas con imágenes pesadas como `/car-dealerships` (dealership-showroom.jpg, 108KB sin optimizar en runtime).

7. **No hay `BreadcrumbList` schema** en páginas de servicio ni en el blog (más allá del listado plano de artículos). Los breadcrumbs mejoran CTR y ayudan a Google a entender la jerarquía `/servicios/*` y `/blog/*`.

8. **`/car-dealerships` y `/meta-ads-campana` son indexables pero no están en el sitemap ni tienen metadata propia.** Si son landings de campaña pagada, deberían llevar `robots: noindex, follow` (como `/gracias`) para evitar que compitan en orgánico contra las páginas de servicio equivalentes. Si son públicas, necesitan metadata y entrada en sitemap.

## 🟡 Medio

9. **Un solo `<Image>` sin problema de `alt`** — se revisó todo el proyecto y solo existen 5 archivos con `next/image`; todos los `<Image>` tienen `alt` descriptivo. ✅ Sin hallazgos aquí, se menciona porque fue parte de la revisión.

10. **JetBrains Mono + Barlow + Barlow Condensed = 3 familias tipográficas cargadas** (aunque Barlow y Barlow Condensed son de la misma familia base, técnicamente son 2 recursos `next/font` distintos + 1 mono). No es grave pero vale monitorear peso de fuentes en Core Web Vitals.

11. **GTM y Clarity cargan con `dangerouslySetInnerHTML` en `<head>` con `strategy="beforeInteractive"` para GTM** (correcto) pero Clarity no tiene `strategy` definida vía `next/script` — está en un `<script>` inline plano dentro del `<head>`, lo cual es render-blocking y no aprovecha las estrategias de carga diferida de Next.

## ✅ Lo que ya está bien

- `robots.ts` permite todo correctamente y apunta al sitemap.
- `/gracias` tiene `noindex, nofollow` correctamente aplicado (páginas de agradecimiento no deben indexarse).
- Los 5 artículos de blog (Fase 5) tienen: metadata única, Article JSON-LD, enlaces internos cruzados, y están en el sitemap.
- No se encontró ningún `<img>` nativo — todo pasa por `next/image` o no lleva imagen.
- `metadataBase` está bien configurado en el layout raíz (evita URLs relativas rotas en Open Graph).

## Recomendación de orden de fixes (no bloquea otras fases)

1. Arreglar el link roto de `automatizacion-marketing` en la nav (crítico, un click de arreglo).
2. Metadata única + canonical por página en las 10 rutas huérfanas.
3. Schema `Organization`/`LocalBusiness` en el home + `BreadcrumbList` en servicios y blog.
4. Sitemap dinámico (leer `blogPosts` en vez de array hardcodeado) + agregar rutas faltantes.
5. Decidir índice/noindex para `/car-dealerships` y `/meta-ads-campana`.
