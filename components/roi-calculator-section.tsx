"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CalculatorInputs {
  businessType: string
  monthlySalesCLP: number
  currentConversionRate: number
  averageTicketCLP: number
}

const businessImprovements: Record<string, { conversion: number; timeToResults: string }> = {
  "b2b": { conversion: 35, timeToResults: "30–45 días" },
  "ecommerce": { conversion: 28, timeToResults: "30–60 días" },
  "servicios": { conversion: 40, timeToResults: "45–60 días" },
  "distribuidora": { conversion: 32, timeToResults: "30–45 días" },
  "retail": { conversion: 25, timeToResults: "45–60 días" },
}

function formatCLP(value: number): string {
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(1)}B CLP`
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M CLP`
  if (value >= 1_000) return `$${Math.round(value / 1_000)}k CLP`
  return `$${value} CLP`
}

export function ROICalculatorSection() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    businessType: "distribuidora",
    monthlySalesCLP: 20_000_000,
    currentConversionRate: 5,
    averageTicketCLP: 500_000,
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

  const config = businessImprovements[inputs.businessType] || businessImprovements["b2b"]

  const additionalSalesPct = config.conversion / 100
  const additionalMonthlySales = Math.round(inputs.monthlySalesCLP * additionalSalesPct)
  const additionalAnnualSales = additionalMonthlySales * 12
  const improvedConversion = parseFloat((inputs.currentConversionRate * (1 + config.conversion / 100)).toFixed(1))

  return (
    <section id="roi-calculator" className="py-16 md:py-24 px-4 relative bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B1917] border border-[#2A2725] mb-6" style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em" }}>
            <svg className="w-4 h-4 text-[#FF4500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-sm font-medium text-[#938B82]">CALCULADORA DE CRECIMIENTO</span>
          </div>

          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-4 text-balance"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
          >
            Cuánto vale tener{" "}
            <span className="text-[#FF4500]">CLARIDAD</span> en tu negocio.
          </h2>

          <p className="text-lg text-[#938B82] max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
            Calcula el impacto potencial de ordenar tu proceso comercial y activar un funnel digital.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Inputs */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="bg-[#1B1917] border border-[#2A2725] rounded-2xl p-6 md:p-8 h-full flex flex-col">
              <h3
                className="text-xl md:text-2xl font-black uppercase text-white mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Tu negocio
              </h3>

              <div className="space-y-7 flex-1">
                {/* Business Type */}
                <div>
                  <label className="block text-xs font-medium text-[#938B82] mb-3 uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>Tipo de empresa</label>
                  <Select
                    value={inputs.businessType}
                    onValueChange={(value) => setInputs((prev) => ({ ...prev, businessType: value }))}
                  >
                    <SelectTrigger className="bg-[#0A0A0A] border-[#2A2725] text-white" style={{ fontFamily: "var(--font-barlow)" }}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1B1917] border-[#2A2725]">
                      <SelectItem value="b2b">Empresa B2B</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="servicios">Servicios Profesionales</SelectItem>
                      <SelectItem value="distribuidora">Distribuidora</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Monthly Sales */}
                <div>
                  <label className="block text-xs font-medium text-[#938B82] mb-3 uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    Ventas mensuales actuales:{" "}
                    <span className="text-white">{formatCLP(inputs.monthlySalesCLP)}</span>
                  </label>
                  <Slider
                    value={[inputs.monthlySalesCLP]}
                    onValueChange={([value]) => setInputs((prev) => ({ ...prev, monthlySalesCLP: value }))}
                    max={100_000_000}
                    min={1_000_000}
                    step={1_000_000}
                    className="w-full [&_[role=slider]]:bg-[#FF4500] [&_[role=slider]]:border-[#FF4500]"
                  />
                  <div className="flex justify-between text-xs text-[#938B82]/50 mt-1" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    <span>$1M</span>
                    <span>$100M</span>
                  </div>
                </div>

                {/* Conversion Rate */}
                <div>
                  <label className="block text-xs font-medium text-[#938B82] mb-3 uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    Tasa de conversión actual:{" "}
                    <span className="text-white">{inputs.currentConversionRate}%</span>
                  </label>
                  <Slider
                    value={[inputs.currentConversionRate]}
                    onValueChange={([value]) => setInputs((prev) => ({ ...prev, currentConversionRate: value }))}
                    max={20}
                    min={1}
                    step={0.5}
                    className="w-full [&_[role=slider]]:bg-[#FF4500] [&_[role=slider]]:border-[#FF4500]"
                  />
                  <div className="flex justify-between text-xs text-[#938B82]/50 mt-1" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    <span>1%</span>
                    <span>20%</span>
                  </div>
                </div>

                {/* Ticket Promedio */}
                <div>
                  <label className="block text-xs font-medium text-[#938B82] mb-3 uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    Ticket promedio:{" "}
                    <span className="text-white">{formatCLP(inputs.averageTicketCLP)}</span>
                  </label>
                  <Slider
                    value={[inputs.averageTicketCLP]}
                    onValueChange={([value]) => setInputs((prev) => ({ ...prev, averageTicketCLP: value }))}
                    max={5_000_000}
                    min={50_000}
                    step={50_000}
                    className="w-full [&_[role=slider]]:bg-[#FF4500] [&_[role=slider]]:border-[#FF4500]"
                  />
                  <div className="flex justify-between text-xs text-[#938B82]/50 mt-1" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    <span>$50k</span>
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
            <div className="bg-[#1B1917] border border-[#2A2725] rounded-2xl p-6 md:p-8 h-full flex flex-col">
              <h3
                className="text-xl md:text-2xl font-black uppercase text-white mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Tu potencial con The Burn
              </h3>

              <div className="space-y-4 flex-1">
                {[
                  {
                    label: "Ventas adicionales proyectadas (mes)",
                    value: formatCLP(additionalMonthlySales),
                  },
                  {
                    label: "Mejora en conversión estimada",
                    value: `${improvedConversion}%`,
                  },
                  {
                    label: "Tiempo para ver primeros resultados",
                    value: config.timeToResults,
                  },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between p-3 md:p-4 rounded-xl bg-[#0A0A0A] border border-[#2A2725]"
                  >
                    <span className="text-sm text-[#938B82]" style={{ fontFamily: "var(--font-barlow)" }}>{metric.label}</span>
                    <span className="text-base md:text-lg font-black text-white ml-4 text-right" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>{metric.value}</span>
                  </div>
                ))}

                {/* Annual projection highlight */}
                <div className="mt-2 p-5 md:p-6 rounded-xl bg-[#FF4500]/10 border border-[#FF4500]/30">
                  <div>
                    <div className="text-xs text-[#938B82] mb-2 uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>Proyección anual de crecimiento</div>
                    <div
                      className="text-3xl md:text-4xl font-black text-[#FF4500] mb-1"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      {formatCLP(additionalAnnualSales)}
                    </div>
                    <div className="text-xs text-[#938B82]" style={{ fontFamily: "var(--font-barlow)" }}>en ventas adicionales proyectadas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xs text-[#2A2725]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
            * Proyecciones basadas en benchmarks de la industria en Chile. Los resultados reales pueden variar.
          </p>
        </div>
      </div>
    </section>
  )
}
