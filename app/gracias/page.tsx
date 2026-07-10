import Link from "next/link"
import { SuccessCaseStudy } from "@/components/success-case-study"

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
      <SuccessCaseStudy />
    </div>
  )
}
