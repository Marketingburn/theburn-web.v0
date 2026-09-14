export interface CaseStudy {
  slug: string
  cliente: string
  industria: string
  problema: string
  contexto: string
  diagnostico: string
  estrategia: string
  implementacion: string
  tecnologia: string[]
  resultado: string
  kpis: string[]
  aprendizajes: string
  serviciosUtilizados: { label: string; href: string }[]
  dateISO: string
  dateModifiedISO?: string
}

/**
 * No hay casos de éxito verificados publicados todavía. Este archivo define
 * la estructura de datos que debe completarse con información real (cliente,
 * resultados, KPIs) antes de publicar cualquier caso en /casos/[slug].
 *
 * NO agregar casos con datos inventados, aproximados o de ejemplo.
 */
export const caseStudies: CaseStudy[] = []

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
