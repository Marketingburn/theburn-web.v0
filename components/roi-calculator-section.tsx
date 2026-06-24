"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CalculatorInputs {
  businessType: string
  monthlyLeads: number
  currentConversionRate: number
  averageTicketCLP: number
}

const businessImprovements: Record<string, { conversion: number; responseSpeed: number }> = {
  juridico: { conversion: 40, responseSpeed: 85 },
  distribuidora: { conversion: 35, responseSpeed: 80 },
  farmacia: { conversion: 30, responseSpeed: 75 },
  "otro-b2b": { conversion: 38, responseSpeed: 82 },
}

function formatCLP(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M CLP`
  if (value >= 1_000) return `$${Math.round(value / 1_000)}k CLP`
  return `$${value} CLP`
}

export function ROICalculatorSection() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    businessType: "distribuidora",
    monthlyLeads: 80,
    currentConversionRate: 5,
    averageTicketCLP: 800000,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.1 },
    )
    const section = document.getElementById("roi-calculator")
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const config = businessImprovements[inputs.businessType] || businessImprovements["otro-b2b"]

  const currentLeadsConverted = Math.round((inputs.monthlyLeads * inputs.currentConversionRate) / 100)
  const currentRevenue = currentLeadsConverted * inputs.averageTicketCLP

  const newConversionRate = inputs.currentConversionRate * (1 + config.conversion / 100)
  const additionalLeads = Math.round((inputs.monthlyLeads * newConversionRate) / 100) - currentLeadsConverted
  const additionalMonthlyRevenue = additionalLeads * inputs.averageTicketCLP
  const additionalAnnualRevenue = additionalMonthlyRevenue * 12
  const conversionImprovement = config.conversion
  const responseSpeedImprovement = config.responseSpeed

  return (
    <section id="roi-calculator" className="py-16 md:py-24 px-4 relative bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#333333] mb-6">
            <svg className="w-4 h-4 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-sm font-medium text-[#888888]">Calculadora de ROI</span>
          </div>

          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4 text-balance"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Calcula tu crecimiento
            <br />
            <span className="text-[#FF6B00]">potencial</span>
          </h2>

          <p className="text-lg text-[#888888] max-w-2xl mx-auto">
            Calcula cuántos ingresos adicionales puede generar tu empresa con automatización de marketing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Inputs */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6 md:p-8 h-full flex flex-col">
              <h3
                className="text-xl md:text-2xl font-black uppercase text-white mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Tu negocio
              </h3>

              <div className="space-y-7 flex-1">
                {/* Business Type */}
                <div>
                  <label className="block text-sm font-medium text-[#888888] mb-3">Tipo de empresa</label>
                  <Select
                    value={inputs.businessType}
                    onValueChange={(value) => setInputs((prev) => ({ ...prev, businessType: value }))}
                  >
                    <SelectTrigger className="bg-[#1A1A1A] border-[#333333] text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1A1A] border-[#333333]">
                      <SelectItem value="juridico">Estudio Jurídico</SelectItem>
                      <SelectItem value="distribuidora">Distribuidora</SelectItem>
                      <SelectItem value="farmacia">Farmacia</SelectItem>
                      <SelectItem value="otro-b2b">Otro B2B</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Monthly Leads */}
                <div>
                  <label className="block text-sm font-medium text-[#888888] mb-3">
                    Leads mensuales actuales:{" "}
                    <span className="text-white font-semibold">{inputs.monthlyLeads}</span>
                  </label>
                  <Slider
                    value={[inputs.monthlyLeads]}
                    onValueChange={([value]) => setInputs((prev) => ({ ...prev, monthlyLeads: value }))}
                    max={500}
                    min={10}
                    step={5}
                    className="w-full [&_[role=slider]]:bg-[#FF6B00] [&_[role=slider]]:border-[#FF6B00]"
                  />
                  <div className="flex justify-between text-xs text-[#555555] mt-1">
                    <span>10</span>
                    <span>500</span>
                  </div>
                </div>

                {/* Conversion Rate */}
                <div>
                  <label className="block text-sm font-medium text-[#888888] mb-3">
                    Tasa de conversión actual:{" "}
                    <span className="text-white font-semibold">{inputs.currentConversionRate}%</span>
                  </label>
                  <Slider
                    value={[inputs.currentConversionRate]}
                    onValueChange={([value]) => setInputs((prev) => ({ ...prev, currentConversionRate: value }))}
                    max={20}
                    min={1}
                    step={0.5}
                    className="w-full [&_[role=slider]]:bg-[#FF6B00] [&_[role=slider]]:border-[#FF6B00]"
                  />
                  <div className="flex justify-between text-xs text-[#555555] mt-1">
                    <span>1%</span>
                    <span>20%</span>
                  </div>
                </div>

                {/* Ticket Promedio */}
                <div>
                  <label className="block text-sm font-medium text-[#888888] mb-3">
                    Ticket promedio:{" "}
                    <span className="text-white font-semibold">{formatCLP(inputs.averageTicketCLP)}</span>
                  </label>
                  <Slider
                    value={[inputs.averageTicketCLP]}
                    onValueChange={([value]) => setInputs((prev) => ({ ...prev, averageTicketCLP: value }))}
                    max={5000000}
                    min={100000}
                    step={100000}
                    className="w-full [&_[role=slider]]:bg-[#FF6B00] [&_[role=slider]]:border-[#FF6B00]"
                  />
                  <div className="flex justify-between text-xs text-[#555555] mt-1">
                    <span>$100k</span>
                    <span>$5M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div
            className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6 md:p-8 h-full flex flex-col">
              <h3
                className="text-xl md:text-2xl font-black uppercase text-white mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Tu potencial con The Burn
              </h3>

              <div className="space-y-4 flex-1">
                {[
                  {
                    label: "Leads adicionales",
                    value: `+${additionalLeads}`,
                    icon: (
                      <svg className="w-4 h-4 text-[#888888]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Ingresos adicionales (CLP)",
                    value: formatCLP(additionalMonthlyRevenue),
                    icon: (
                      <svg className="w-4 h-4 text-[#888888]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                  {
                    label: "% Aumento en conversión",
                    value: `+${conversionImprovement}%`,
                    icon: (
                      <svg className="w-4 h-4 text-[#888888]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    ),
                  },
                  {
                    label: "Velocidad de respuesta",
                    value: `${responseSpeedImprovement}% más rápida`,
                    icon: (
                      <svg className="w-4 h-4 text-[#888888]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between p-3 md:p-4 rounded-xl bg-[#0A0A0A] border border-[#1A1A1A]"
                  >
                    <div className="flex items-center gap-3">
                      {metric.icon}
                      <span className="text-sm text-[#888888]">{metric.label}</span>
                    </div>
                    <span className="text-base md:text-lg font-bold text-white">{metric.value}</span>
                  </div>
                ))}

                {/* Annual projection highlight */}
                <div className="mt-2 p-5 md:p-6 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30">
                  <div className="text-center">
                    <div className="text-xs text-[#888888] mb-2 uppercase tracking-wide">Proyección anual en CLP</div>
                    <div
                      className="text-3xl md:text-4xl font-black text-[#FF6B00] mb-1"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {formatCLP(additionalAnnualRevenue)}
                    </div>
                    <div className="text-xs text-[#888888]">en ingresos adicionales proyectados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-[#444444]">
            * Proyecciones basadas en benchmarks de la industria B2B en Chile. Los resultados reales pueden variar.
          </p>
        </div>
      </div>
    </section>
  )
}
