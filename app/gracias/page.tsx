import Link from "next/link"

export const metadata = {
  title: "Gracias | The Burn",
  description: "Recibimos tus datos. Te contactamos en menos de 24 horas hábiles.",
  robots: "noindex, nofollow",
}

const WHATSAPP_URL =
  "https://wa.me/56936504772?text=Hola%20The%20Burn%2C%20acabo%20de%20dejar%20mis%20datos%20en%20el%20sitio."

export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EA]">
      {/* Hero de agradecimiento */}
      <div className="flex items-center justify-center px-4 pt-24 pb-16">
        <div className="max-w-lg w-full text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-[#FF4500] rounded-full flex items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
          </div>

          <div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#E8E3DA] text-[#938B82] text-sm mb-6"
            style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em" }}
          >
            <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2" />
            MENSAJE RECIBIDO
          </div>

          <h1
            className="text-4xl sm:text-5xl font-black uppercase text-[#0A0A0A] mb-4 leading-none"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
          >
            ¡Gracias! Ya tenemos <span className="text-[#FF4500]">tus datos.</span>
          </h1>

          <p
            className="text-base sm:text-lg text-[#938B82] mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Te contactamos en menos de 24 horas hábiles. Si quieres adelantar la
            conversación, escríbenos directo por WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.02em" }}
            >
              Seguir en WhatsApp →
            </a>
            <Link
              href="/"
              className="border border-[#E8E3DA] text-[#938B82] hover:bg-white hover:border-[#FF4500]/40 hover:text-[#0A0A0A] font-medium px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 inline-flex items-center justify-center"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>

      {/* Caso de éxito — mientras esperas */}
      <div className="max-w-4xl mx-auto px-4 pb-24">
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
            su nombre, pero las cifras y el proceso son reales.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E8E3DA] shadow-lg overflow-hidden">
          {/* Tag de industria */}
          <div className="bg-[#0A0A0A] px-6 py-4 flex items-center justify-between">
            <span
              className="text-[#FF4500] text-xs uppercase tracking-widest"
              style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.1em" }}
            >
              ■ CASO REAL · PROVEEDOR B2B SECTOR INDUSTRIAL
            </span>
            <span className="text-[#938B82] text-xs" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              6 MESES
            </span>
          </div>

          <div className="p-6 sm:p-10">
            {/* Antes */}
            <div className="mb-8 pb-8 border-b border-[#F5F1EA]">
              <p
                className="text-[#938B82] text-xs uppercase tracking-widest mb-2 font-semibold"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                EL PUNTO DE PARTIDA
              </p>
              <p className="text-[#0A0A0A] text-base sm:text-lg leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
                5 años de crecimiento estancado — y los últimos, a la baja.
                Perdían clientes sin entender bien por qué, con procesos
                comerciales y operativos que nadie había revisado a fondo.
              </p>
            </div>

            {/* Qué se implementó */}
            <div className="mb-8 pb-8 border-b border-[#F5F1EA]">
              <p
                className="text-[#938B82] text-xs uppercase tracking-widest mb-4 font-semibold"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
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
                    <span className="text-[#0A0A0A] text-sm" style={{ fontFamily: "var(--font-barlow)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Resultados */}
            <div className="mb-8 pb-8 border-b border-[#F5F1EA]">
              <p
                className="text-[#938B82] text-xs uppercase tracking-widest mb-4 font-semibold"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                RESULTADOS A 6 MESES
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: "30%", label: "MEJORA EN PROCESOS" },
                  { value: "↓", label: "MERMAS REDUCIDAS" },
                  { value: "↓", label: "STOCK NO VENDIDO" },
                  { value: "↑", label: "CAPTURA DE VENTAS" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-[#F5F1EA] rounded-xl p-4 text-center">
                    <div
                      className="text-2xl font-black text-[#FF4500] mb-1"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {value}
                    </div>
                    <div
                      className="text-[9px] text-[#938B82] uppercase tracking-wide leading-tight"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[#938B82] text-sm mt-4" style={{ fontFamily: "var(--font-barlow)" }}>
                Además, mejores estrategias de venta y procesos internos
                más claros para todo el equipo — creciendo de forma
                escalonada, no de golpe.
              </p>
            </div>

            {/* Cita */}
            <div className="bg-[#F5F1EA] rounded-xl p-6">
              <p
                className="text-[#0A0A0A] text-base sm:text-lg italic leading-relaxed mb-3"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                "Veíamos cómo nos estancábamos, y hasta perdíamos clientes,
                sin tener claro por qué. Hoy tenemos una visión clara de
                hacia dónde va la marca y cómo llegar ahí."
              </p>
              <p
                className="text-[#938B82] text-xs uppercase tracking-widest"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                — GERENTE GENERAL, CLIENTE THE BURN
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-[#938B82]/60 text-xs mt-12" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
          THEBURN.CL · SANTIAGO, CHILE
        </p>
      </div>
    </div>
  )
}
