'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts"

const growthData = [
  { mes: "Mes -5", ventas: 100 },
  { mes: "Mes -4", ventas: 97 },
  { mes: "Mes -3", ventas: 95 },
  { mes: "Mes -2", ventas: 93 },
  { mes: "Mes -1", ventas: 91 },
  { mes: "Inicio", ventas: 90 },
  { mes: "Mes 1", ventas: 91 },
  { mes: "Mes 2", ventas: 97 },
  { mes: "Mes 3", ventas: 105 },
  { mes: "Mes 4", ventas: 113 },
  { mes: "Mes 5", ventas: 121 },
  { mes: "Mes 6", ventas: 130 },
]

const comparisonData = [
  { metric: "Mermas", antes: 100, despues: 68 },
  { metric: "Stock no vendido", antes: 100, despues: 61 },
  { metric: "Captura de ventas", antes: 100, despues: 142 },
  { metric: "Eficiencia de procesos", antes: 100, despues: 130 },
]

const roadmapPhases = [
  {
    mes: "MES 1",
    title: "Diagnóstico Comercial y Marketing",
    desc: "Mapeo completo del proceso comercial, operativo y de márgenes. Se identifican los 3 cuellos de botella principales que frenaban el crecimiento.",
  },
  {
    mes: "MES 2",
    title: "Business Intelligence — Power BI",
    desc: "Dashboard conectado a ventas, stock y márgenes reales. El equipo empieza a decidir con datos concretos, no con intuición.",
  },
  {
    mes: "MES 3–4",
    title: "Funnel de Adquisición",
    desc: "Se implementa un canal de captación estructurado. Empiezan a llegar clientes nuevos sin depender solo de referidos.",
  },
  {
    mes: "MES 4–6",
    title: "Lean Six Sigma en todo el equipo",
    desc: "El equipo completo se capacita en la metodología DMAIC. Se rediseñan procesos internos, se reduce el retrabajo y las mermas.",
  },
  {
    mes: "MES 6+",
    title: "Retainer y mejora continua",
    desc: "Seguimiento mensual del dashboard, ajustes de estrategia comercial y optimización constante del proceso.",
  },
]

const objectives = [
  "Revertir 5 años de estancamiento y volver a crecer de forma sostenida",
  "Dejar de perder clientes sin entender la causa raíz",
  "Tener visibilidad real de márgenes y stock, en vez de intuición",
  "Profesionalizar el proceso de ventas de todo el equipo",
  "Reducir mermas y stock inmovilizado",
]

const statCards = [
  { value: "30%", label: "MEJORA EN PROCESOS" },
  { value: "-32%", label: "MERMAS REDUCIDAS" },
  { value: "-39%", label: "STOCK NO VENDIDO" },
  { value: "+42%", label: "CAPTURA DE VENTAS" },
]

export function SuccessCaseStudy() {
  return (
    <div className="max-w-5xl mx-auto px-4 pb-24">
      {/* Intro */}
      <div className="text-center mb-10">
        <div
          className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#E8E3DA] text-[#938B82] text-sm mb-6"
          style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em" }}
        >
          <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2" />
          MIENTRAS TE CONTACTAMOS
        </div>
        <h2
          className="text-3xl sm:text-4xl font-black uppercase text-[#0A0A0A] mb-4 leading-none"
          style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
        >
          Esto pasa cuando se ordena la <span className="text-[#FF4500]">operación.</span>
        </h2>
        <p className="text-[#938B82] max-w-xl mx-auto" style={{ fontFamily: "var(--font-barlow)" }}>
          Caso real de un cliente actual. Por confidencialidad no publicamos
          su nombre; las cifras están ajustadas para proteger sus datos,
          pero reflejan fielmente la tendencia real del proyecto.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-[#E8E3DA] shadow-lg overflow-hidden">
        {/* Tag */}
        <div className="bg-[#0A0A0A] px-6 py-4 flex items-center justify-between flex-wrap gap-2">
          <span
            className="text-[#FF4500] text-xs uppercase tracking-widest"
            style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.1em" }}
          >
            ■ CASO REAL · PROVEEDOR B2B SECTOR INDUSTRIAL
          </span>
          <span className="text-[#938B82] text-xs" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
            PROYECTO DE 6 MESES
          </span>
        </div>

        <div className="p-6 sm:p-10">

          {/* Punto de partida */}
          <div className="mb-10 pb-10 border-b border-[#F5F1EA]">
            <p className="text-[#938B82] text-xs uppercase tracking-widest mb-2 font-semibold" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              EL PUNTO DE PARTIDA
            </p>
            <p className="text-[#0A0A0A] text-base sm:text-lg leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
              5 años de crecimiento estancado — y los últimos, a la baja.
              Perdían clientes sin entender bien por qué, con procesos
              comerciales y operativos que nadie había revisado a fondo.
            </p>
          </div>

          {/* Objetivos */}
          <div className="mb-10 pb-10 border-b border-[#F5F1EA]">
            <p className="text-[#938B82] text-xs uppercase tracking-widest mb-4 font-semibold" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              OBJETIVOS DEL PROYECTO
            </p>
            <div className="space-y-2.5">
              {objectives.map((obj) => (
                <div key={obj} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-sm bg-[#FF4500]/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-[#FF4500] text-[10px]">✓</span>
                  </div>
                  <span className="text-[#0A0A0A] text-sm leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
                    {obj}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div className="mb-10 pb-10 border-b border-[#F5F1EA]">
            <p className="text-[#938B82] text-xs uppercase tracking-widest mb-6 font-semibold" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              ROADMAP DE 6 MESES
            </p>
            <div className="space-y-6">
              {roadmapPhases.map((phase, i) => (
                <div key={phase.title} className="flex gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#FF4500] flex items-center justify-center text-white text-xs font-bold" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                      {i + 1}
                    </div>
                    {i < roadmapPhases.length - 1 && (
                      <div className="w-px flex-1 bg-[#E8E3DA] mt-1" style={{ minHeight: "24px" }} />
                    )}
                  </div>
                  <div className="pb-2">
                    <p className="text-[#FF4500] text-[10px] font-bold uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                      {phase.mes}
                    </p>
                    <h3 className="text-[#0A0A0A] font-black uppercase text-base mb-1" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                      {phase.title}
                    </h3>
                    <p className="text-[#938B82] text-sm leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gráfico de crecimiento */}
          <div className="mb-10 pb-10 border-b border-[#F5F1EA]">
            <p className="text-[#938B82] text-xs uppercase tracking-widest mb-1 font-semibold" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              EVOLUCIÓN DE VENTAS
            </p>
            <p className="text-[#938B82] text-xs mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
              Índice 100 = ventas al inicio del proyecto. Cifras representativas de la tendencia real.
            </p>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E8E3DA" />
                  <XAxis dataKey="mes" tick={{ fontSize: 10, fill: "#938B82" }} axisLine={{ stroke: "#E8E3DA" }} />
                  <YAxis tick={{ fontSize: 10, fill: "#938B82" }} axisLine={{ stroke: "#E8E3DA" }} />
                  <Tooltip
                    contentStyle={{ borderRadius: 8, border: "1px solid #E8E3DA", fontSize: 12 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="ventas"
                    stroke="#FF4500"
                    strokeWidth={3}
                    dot={{ fill: "#FF4500", r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Gráfico antes/después */}
          <div className="mb-10 pb-10 border-b border-[#F5F1EA]">
            <p className="text-[#938B82] text-xs uppercase tracking-widest mb-4 font-semibold" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              ANTES VS. DESPUÉS (ÍNDICE 100 = PUNTO DE PARTIDA)
            </p>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E8E3DA" />
                  <XAxis dataKey="metric" tick={{ fontSize: 9, fill: "#938B82" }} axisLine={{ stroke: "#E8E3DA" }} />
                  <YAxis tick={{ fontSize: 10, fill: "#938B82" }} axisLine={{ stroke: "#E8E3DA" }} />
                  <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E8E3DA", fontSize: 12 }} />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Bar dataKey="antes" name="Antes" fill="#E8E3DA" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="despues" name="Después" fill="#FF4500" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Stat cards */}
          <div className="mb-10 pb-10 border-b border-[#F5F1EA]">
            <p className="text-[#938B82] text-xs uppercase tracking-widest mb-4 font-semibold" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              RESUMEN A 6 MESES
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {statCards.map(({ value, label }) => (
                <div key={label} className="bg-[#F5F1EA] rounded-xl p-4 text-center">
                  <div className="text-2xl font-black text-[#FF4500] mb-1" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                    {value}
                  </div>
                  <div className="text-[9px] text-[#938B82] uppercase tracking-wide leading-tight" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mini dashboard mockup */}
          <div className="mb-10 pb-10 border-b border-[#F5F1EA]">
            <p className="text-[#938B82] text-xs uppercase tracking-widest mb-4 font-semibold" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              EL DASHBOARD QUE HOY USA SU EQUIPO
            </p>
            <div className="bg-[#1B1917] rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.08]">
                <span className="text-white text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                  Panel de Control — Power BI
                </span>
                <span className="text-[#FF4500] text-[10px]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  ■ EN VIVO
                </span>
              </div>
              <div className="p-4 grid grid-cols-4 gap-2">
                {[
                  { v: "$--", l: "MARGEN NETO" },
                  { v: "--%", l: "STOCK ROTADO" },
                  { v: "--%", l: "CAPACIDAD USADA" },
                  { v: "--x", l: "ROI PROYECTO" },
                ].map(({ v, l }) => (
                  <div key={l} className="bg-[#0A0A0A]/60 rounded-md px-2 py-3 text-center border border-white/[0.06]">
                    <div className="text-sm font-bold text-white mb-1" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>{v}</div>
                    <div className="text-[8px] text-[#938B82] uppercase tracking-wide" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Qué implementamos */}
          <div className="mb-10 pb-10 border-b border-[#F5F1EA]">
            <p className="text-[#938B82] text-xs uppercase tracking-widest mb-4 font-semibold" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              QUÉ IMPLEMENTAMOS
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Diagnóstico Comercial y Marketing completo",
                "Business Intelligence con Power BI",
                "Funnel de adquisición de clientes",
                "Lean Six Sigma en todo el equipo de trabajo",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-[#FF4500] mt-1 flex-shrink-0">■</span>
                  <span className="text-[#0A0A0A] text-sm" style={{ fontFamily: "var(--font-barlow)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cita */}
          <div className="bg-[#F5F1EA] rounded-xl p-6">
            <p className="text-[#0A0A0A] text-base sm:text-lg italic leading-relaxed mb-3" style={{ fontFamily: "var(--font-barlow)" }}>
              "Veíamos cómo nos estancábamos, y hasta perdíamos clientes, sin
              tener claro por qué. Hoy tenemos una visión clara de hacia
              dónde va la marca y cómo llegar ahí."
            </p>
            <p className="text-[#938B82] text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              — GERENTE GENERAL, CLIENTE THE BURN
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-[#938B82]/60 text-xs mt-12" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
        THEBURN.CL · SANTIAGO, CHILE
      </p>
    </div>
  )
}
