/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Hay errores de tipos heredados en componentes antiguos (PixelBlast, RotatingText, etc.).
    // Quitar esta opción cuando el rediseño los reemplace.
    ignoreBuildErrors: true,
  },
  // Se activó la optimización de imágenes de Next (antes unoptimized: true) para servir
  // WebP/AVIF del tamaño justo. Todas las imágenes son locales; no hace falta remotePatterns.
}

export default nextConfig
