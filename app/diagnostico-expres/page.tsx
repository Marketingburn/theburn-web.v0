Reemplazar el contenido completo de app/diagnostico-expres/page.tsx con este código:
tsx'use client'

import { useState } from 'react'
import { GlassmorphismNav } from '@/components/glassmorphism-nav'
import { Footer } from '@/components/footer'
import Link from 'next/link'

const questions = [
  {
    id: 1,
    question: "¿Tu equipo de ventas tiene un proceso documentado paso a paso?",
    options: [
      { id: "A", text: "Sí, todos lo siguen y está actualizado", score: 3 },
      { id: "B", text: "Existe algo pero cada vendedor hace lo suyo", score: 2 },
      { id: "C", text: "No existe, cada uno vende a su manera", score: 1 },
      { id: "D", text: "Solo tengo una o dos personas vendiendo", score: 0 }
    ],
    lesson: "Un proceso comercial documentado no es burocracia — es la diferencia entre una empresa que escala y una que depende de sus mejores vendedores. Las empresas B2B con proceso documentado cierran en promedio un 28% más de oportunidades con el mismo equipo. El primer paso es mapear las etapas actuales: prospección, calificación, propuesta, negociación y cierre. Si no puedes dibujarlo en un papel en 5 minutos, no existe como sistema."
  },
  {
    id: 2,
    question: "¿Sabes exactamente cuántas oportunidades de venta tienes activas hoy y en qué etapa está cada una?",
    options: [
      { id: "A", text: "Sí, tenemos CRM actualizado en tiempo real", score: 3 },
      { id: "B", text: "Más o menos, usamos Excel o WhatsApp", score: 2 },
      { id: "C", text: "No, dependemos de lo que dice el vendedor", score: 1 },
      { id: "D", text: "No tenemos forma de saberlo", score: 0 }
    ],
    lesson: "El pipeline visible es el activo comercial más importante de una empresa B2B. Sin él, el gerente general vuela a ciegas. Un pipeline bien gestionado permite predecir la facturación del próximo mes, detectar cuellos de botella antes de que se conviertan en problemas y tomar decisiones de contratación o inversión con datos reales. Si hoy no puedes saber en 2 minutos cuánto dinero tienes en negociación, ese es el primer problema que resolver."
  },
  {
    id: 3,
    question: "¿Sabes qué porcentaje de tus prospectos se convierte en clientes?",
    options: [
      { id: "A", text: "Sí, lo medimos mensualmente por etapa", score: 3 },
      { id: "B", text: "Tenemos una idea aproximada del total", score: 2 },
      { id: "C", text: "No lo medimos formalmente", score: 1 },
      { id: "D", text: "Nunca lo hemos calculado", score: 0 }
    ],
    lesson: "La tasa de conversión por etapa es la métrica que más información da sobre dónde está el problema real. Si pierdes prospectos en la etapa de propuesta, el problema es el precio o el valor percibido. Si los pierdes en calificación, el problema es que estás llegando al cliente equivocado. Si los pierdes en negociación, el problema es el proceso de cierre. Sin este dato, cualquier inversión en marketing es especulación."
  },
  {
    id: 4,
    question: "¿Sabes qué producto o servicio tiene mejor margen real — no el que más vende, sino el más rentable?",
    options: [
      { id: "A", text: "Sí, tenemos análisis de rentabilidad por producto actualizado", score: 3 },
      { id: "B", text: "Sabemos cuál vende más pero no el margen neto real", score: 2 },
      { id: "C", text: "Tenemos una idea pero sin datos exactos", score: 1 },
      { id: "D", text: "No lo sabemos con certeza", score: 0 }
    ],
    lesson: "El producto que más se vende rara vez es el más rentable. En empresas B2B chilenas, es común descubrir que entre el 20% y el 30% de las líneas de producto operan con margen negativo cuando se incluyen todos los costos reales: tiempo del equipo, devoluciones, soporte post-venta y costo de adquisición del cliente. Calcularlo es simple: ingreso por producto menos todos los costos directos e indirectos asociados. El resultado suele sorprender."
  },
  {
    id: 5,
    question: "¿Sabes cuánto te cuesta conseguir un cliente nuevo, incluyendo tiempo del equipo y marketing?",
    options: [
      { id: "A", text: "Sí, calculamos el CAC mensualmente", score: 3 },
      { id: "B", text: "Sabemos el gasto en marketing pero no el costo total", score: 2 },
      { id: "C", text: "No lo calculamos formalmente", score: 1 },
      { id: "D", text: "Nunca lo hemos medido", score: 0 }
    ],
    lesson: "El CAC (Costo de Adquisición de Cliente) es la métrica que conecta el marketing con el negocio. Para calcularlo: suma todo lo invertido en conseguir clientes en un período (pauta, honorarios de agencia, tiempo del equipo comercial, herramientas) y divídelo entre los clientes nuevos conseguidos en ese mismo período. Si tu CAC es mayor al 30% del valor que ese cliente te genera en un año, el modelo de adquisición no es sostenible a largo plazo."
  },
  {
    id: 6,
    question: "Si tu mejor vendedor renunciara mañana, ¿qué pasaría con las ventas del próximo trimestre?",
    options: [
      { id: "A", text: "El proceso seguiría igual, todo está documentado", score: 3 },
      { id: "B", text: "Habría impacto pero nos recuperaríamos en 30 días", score: 2 },
      { id: "C", text: "Sería un problema serio que tomaría meses resolver", score: 1 },
      { id: "D", text: "Sería crítico — las ventas dependen de esa persona", score: 0 }
    ],
    lesson: "La dependencia de personas es el riesgo más subestimado en empresas B2B de 10 a 80 personas. No es un problema de talento — es un problema de sistema. Cuando las relaciones comerciales, el conocimiento del cliente y el proceso de venta viven en la cabeza de una persona, la empresa no tiene un equipo comercial: tiene una persona con empleados. La solución no es reemplazar a esa persona sino documentar y sistematizar lo que hace para que pueda ser replicado."
  },
  {
    id: 7,
    question: "¿Con qué frecuencia toman decisiones comerciales importantes basadas en datos reales y no en intuición?",
    options: [
      { id: "A", text: "Siempre, tenemos dashboard con datos actualizados", score: 3 },
      { id: "B", text: "A veces, cuando alguien arma el reporte", score: 2 },
      { id: "C", text: "Pocas veces, principalmente por experiencia e intuición", score: 1 },
      { id: "D", text: "Casi nunca, no tenemos los datos ordenados", score: 0 }
    ],
    lesson: "La intuición es un activo valioso — pero solo cuando está calibrada con datos. Los gerentes generales B2B que toman decisiones con dashboards actualizados detectan problemas 3 a 4 semanas antes que los que dependen de reportes manuales. La diferencia no es tecnología — es estructura. Un dashboard básico de ventas puede construirse en Excel en un día si los datos están ordenados. El problema casi siempre es que los datos están dispersos en tres sistemas distintos que no se hablan entre sí."
  },
  {
    id: 8,
    question: "¿Sabes qué canal digital te trae más clientes y cuánto te cuesta cada uno?",
    options: [
      { id: "A", text: "Sí, medimos CPL y CAC por canal mensualmente", score: 3 },
      { id: "B", text: "Sabemos qué canales usamos pero no el costo real por cliente", score: 2 },
      { id: "C", text: "Invertimos en marketing pero no medimos bien los resultados", score: 1 },
      { id: "D", text: "No tenemos canales digitales activos o estructurados", score: 0 }
    ],
    lesson: "En marketing digital B2B, el canal que más impresiones genera raramente es el que más clientes trae. Sin medir el CPL (Costo por Lead) y el CAC por canal, es imposible saber dónde concentrar el presupuesto. El primer paso es instalar tracking de conversiones correcto en Google Analytics 4 y configurar UTMs en todos los canales. Con eso, en 30 días tienes datos reales para decidir dónde invertir más y dónde cortar."
  }
]

type Step = 'quiz' | 'leadform' | 'result'

const planCards = {
  critical: [
    { num: '01', title: 'Mapea tu proceso comercial en papel', time: '2 horas', desc: 'Siéntate con tu equipo de ventas y dibuja las etapas actuales: desde que llega un prospecto hasta que firma. Identifica en cuál etapa se pierden más oportunidades. Ese es tu cuello de botella número uno.' },
    { num: '02', title: 'Crea un pipeline básico en Excel', time: '1 hora', desc: 'Columnas: Nombre del prospecto · Empresa · Valor estimado · Etapa actual · Fecha último contacto · Próximo paso. Pide al equipo que lo actualice cada viernes. En 30 días tendrás visibilidad real de tu embudo.' },
    { num: '03', title: 'Calcula tu CAC esta semana', time: '30 minutos', desc: 'Suma todo lo gastado en conseguir clientes en los últimos 3 meses y divídelo entre los clientes nuevos en ese período. Si no sabes el número, ese es el primer problema que resolver.' },
  ],
  intermediate: [
    { num: '01', title: 'Documenta lo que ya funciona', time: '3 horas', desc: 'Identifica a tu vendedor con mejor tasa de cierre y entrevístalo: ¿qué hace en la primera reunión? ¿Cómo califica si un prospecto vale la pena? ¿Qué dice en la propuesta? Escríbelo y compártelo con el resto del equipo.' },
    { num: '02', title: 'Define 3 métricas que revisarás cada semana', time: '1 hora', desc: 'Elige tres números que resuman el estado comercial: oportunidades activas en pipeline · tasa de cierre del último mes · facturación proyectada próximos 30 días. Revísalos cada lunes con el equipo.' },
    { num: '03', title: 'Identifica tu cliente más rentable', time: '1 hora', desc: 'De tus últimos 10 clientes, ¿cuál generó más margen con menos esfuerzo? Define sus características y enfoca el 80% del esfuerzo comercial en conseguir más como él.' },
  ],
  ready: [
    { num: '01', title: 'Conecta tus fuentes de datos en un solo lugar', time: 'Esta semana', desc: 'Si tienes CRM, facturación y campañas digitales funcionando por separado, el siguiente paso es conectarlos en un dashboard ejecutivo que se actualiza solo.' },
    { num: '02', title: 'Automatiza la calificación de leads', time: 'Este mes', desc: 'Implementa un flujo automático de calificación por WhatsApp o email que filtre prospectos antes de llegar al equipo comercial. Esto libera tiempo del equipo para enfocarse en oportunidades reales.' },
    { num: '03', title: 'Mide el LTV por segmento de cliente', time: 'Este mes', desc: 'Segmenta tus clientes actuales por industria, tamaño y antigüedad y calcula el LTV de cada grupo. Eso define dónde concentrar la inversión en captación para maximizar el retorno.' },
  ],
}

const resultConfig = {
  critical: {
    badge: 'PUNTOS CIEGOS CRÍTICOS',
    title: 'Tu empresa está creciendo a pesar del sistema, no gracias a él.',
    desc: 'Hay al menos 4 áreas donde la falta de proceso y datos está limitando el crecimiento. La buena noticia: ninguno requiere contratar más personas para resolverse.',
    plan: 'INMEDIATO',
  },
  intermediate: {
    badge: 'BASES SÓLIDAS, SISTEMA INCOMPLETO',
    title: 'Tu empresa tiene intuición comercial pero le falta el sistema que la haga escalable.',
    desc: 'Sabes más o menos qué funciona, pero no puedes medirlo ni replicarlo. Con el proceso correcto podrías crecer un 30–40% sin cambiar el equipo.',
    plan: 'PRIORITARIO',
  },
  ready: {
    badge: 'LISTO PARA ESCALAR',
    title: 'Tienes bases sólidas. El siguiente paso es integrar todo en un sistema unificado.',
    desc: 'El riesgo ahora no es el caos interno — es la velocidad. El siguiente nivel requiere conectar proceso comercial, datos e inteligencia de marketing.',
    plan: 'ESTRATÉGICO',
  },
}

export default function DiagnosticoExpres() {
  const [step, setStep] = useState<Step>('quiz')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showLesson, setShowLesson] = useState(false)
  const [expandedLesson, setExpandedLesson] = useState(false)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const totalScore = answers.reduce((sum, answer, index) => {
    const option = questions[index]?.options.find(o => o.id === answer)
    return sum + (option?.score || 0)
  }, 0)

  const result = totalScore <= 8 ? 'critical' : totalScore <= 16 ? 'intermediate' : 'ready'

  const handleSelectOption = (optionId: string) => {
    if (showLesson) return
    setSelectedOption(optionId)
    setAnswers(prev => [...prev, optionId])
    setShowLesson(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedOption(null)
      setShowLesson(false)
      setExpandedLesson(false)
    } else {
      setStep('leadform')
    }
  }

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre,
          email,
          empresa,
          quizResult: result,
          quizScore: totalScore,
        }),
      })
      if (res.ok) {
        setStep('result')
      } else {
        setError('Error al enviar. Intenta de nuevo.')
      }
    } catch {
      setError('Error al enviar. Intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#F5F1EA] min-h-screen">
      <GlassmorphismNav />

      {/* STEP: QUIZ */}
      {step === 'quiz' && (
        <>
          <section className="bg-[#0A0A0A] py-16 px-4">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h1 className="sr-only">Diagnóstico Exprés gratuito para empresas B2B en Chile</h1>
              <p className="text-xs uppercase tracking-widest text-[#FF4500]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
                ■ HERRAMIENTA GRATUITA · THE BURN
              </p>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white" style={{ fontFamily: 'var(--font-barlow-condensed)', lineHeight: '0.92' }}>
                El Diagnóstico Exprés <span className="text-[#FF4500]">para tu empresa B2B</span>
              </h2>
              <p className="text-sm text-[#938B82]" style={{ fontFamily: 'var(--font-barlow)' }}>
                8 preguntas · 3 minutos · Valor accionable inmediato
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Sin registro previo', '100% gratuito', 'Resultado inmediato'].map(pill => (
                  <span key={pill} className="px-3 py-1.5 rounded-full border border-[#2A2725] bg-[#1B1917] text-[#938B82] text-xs" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
                    ■ {pill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="py-8 px-4">
            <div className="max-w-lg mx-auto">
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-[#938B82]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>Pregunta {currentQuestion + 1} de {questions.length}</span>
                  <span className="text-xs text-[#FF4500]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>{Math.round((currentQuestion + 1) / questions.length * 100)}%</span>
                </div>
                <div className="w-full h-3 bg-[#E8E3DA] rounded-full overflow-hidden">
                  <div className="h-full bg-[#FF4500] rounded-full transition-all duration-500" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
                </div>
              </div>

              {/* Question card */}
              <div className="bg-white rounded-2xl p-5 md:p-8 space-y-5">
                <p className="text-[#FF4500] text-xs font-bold" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
                  PREGUNTA {currentQuestion + 1}
                </p>
                <h3 className="text-xl md:text-2xl font-black uppercase text-[#0A0A0A]" style={{ fontFamily: 'var(--font-barlow-condensed)', lineHeight: '1' }}>
                  {questions[currentQuestion].question}
                </h3>

                {/* Options */}
                <div className="space-y-3">
                  {questions[currentQuestion].options.map(option => (
                    <button
                      key={option.id}
                      onPointerDown={(e) => {
                        e.preventDefault()
                        handleSelectOption(option.id)
                      }}
                      className={`w-full text-left rounded-2xl border-2 transition-colors duration-150 select-none touch-manipulation ${
                        selectedOption === option.id
                          ? 'bg-[#FF4500] border-[#FF4500] text-[#0A0A0A]'
                          : showLesson
                          ? 'bg-white border-[#E8E3DA] text-[#938B82] opacity-50 pointer-events-none'
                          : 'bg-white border-[#E8E3DA] text-[#0A0A0A] active:bg-[#FFF5F0] active:border-[#FF4500]'
                      }`}
                      style={{
                        fontFamily: 'var(--font-barlow)',
                        WebkitTapHighlightColor: 'transparent',
                        padding: '16px 20px',
                        minHeight: '56px',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '15px',
                        lineHeight: '1.4',
                      }}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>

                {/* Lesson */}
                {showLesson && (
                  <div className="bg-[#0A0A0A] border-l-4 border-[#FF4500] p-5 rounded-xl space-y-3">
                    <p className="text-[#FF4500] text-xs font-bold" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>■ ¿SABÍAS QUE?</p>
                    <p className={`text-[#938B82] text-sm leading-relaxed ${!expandedLesson ? 'line-clamp-3' : ''}`} style={{ fontFamily: 'var(--font-barlow)' }}>
                      {questions[currentQuestion].lesson}
                    </p>
                    {!expandedLesson && (
                      <button
                        onPointerDown={(e) => { e.preventDefault(); setExpandedLesson(true) }}
                        className="text-[#FF4500] text-xs touch-manipulation select-none"
                        style={{ fontFamily: 'var(--font-jetbrains-mono)', WebkitTapHighlightColor: 'transparent' }}
                      >
                        Leer más →
                      </button>
                    )}
                    <button
                      onPointerDown={(e) => { e.preventDefault(); handleNextQuestion() }}
                      className="w-full bg-[#FF4500] text-[#0A0A0A] font-black uppercase rounded-xl touch-manipulation select-none"
                      style={{
                        fontFamily: 'var(--font-barlow-condensed)',
                        WebkitTapHighlightColor: 'transparent',
                        padding: '16px 24px',
                        fontSize: '15px',
                        marginTop: '8px',
                      }}
                    >
                      {currentQuestion < questions.length - 1 ? 'Siguiente pregunta →' : 'Ver mi diagnóstico →'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        </>
      )}

      {/* STEP: LEAD FORM */}
      {step === 'leadform' && (
        <section className="bg-[#0A0A0A] min-h-screen flex items-center px-4 py-20">
          <div className="max-w-md mx-auto w-full space-y-8">
            <div className="text-center space-y-4">
              <p className="text-4xl text-[#FF4500]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>■</p>
              <h2 className="text-3xl font-black uppercase text-white" style={{ fontFamily: 'var(--font-barlow-condensed)', lineHeight: '0.95' }}>
                Tu diagnóstico<br />está listo.
              </h2>
              <p className="text-[#938B82] text-sm" style={{ fontFamily: 'var(--font-barlow)' }}>
                Déjanos tu email para enviarte el plan completo. El resultado lo ves ahora mismo.
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Nombre completo *"
                required
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                className="w-full bg-transparent border-b-2 border-[#2A2725] text-white placeholder-white/30 pb-3 focus:border-[#FF4500] outline-none transition-colors"
                style={{ fontFamily: 'var(--font-barlow)', fontSize: '16px' }}
              />
              <input
                type="email"
                placeholder="Email *"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-transparent border-b-2 border-[#2A2725] text-white placeholder-white/30 pb-3 focus:border-[#FF4500] outline-none transition-colors"
                style={{ fontFamily: 'var(--font-barlow)', fontSize: '16px' }}
              />
              <input
                type="text"
                placeholder="Empresa *"
                required
                value={empresa}
                onChange={e => setEmpresa(e.target.value)}
                className="w-full bg-transparent border-b-2 border-[#2A2725] text-white placeholder-white/30 pb-3 focus:border-[#FF4500] outline-none transition-colors"
                style={{ fontFamily: 'var(--font-barlow)', fontSize: '16px' }}
              />
              {error && <p className="text-red-400 text-xs">{error}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF4500] text-[#0A0A0A] font-black uppercase rounded-full disabled:opacity-50 touch-manipulation"
                style={{
                  fontFamily: 'var(--font-barlow-condensed)',
                  padding: '18px 24px',
                  fontSize: '16px',
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                {isSubmitting ? 'Enviando...' : 'Ver mi diagnóstico →'}
              </button>
              <p className="text-center text-xs text-[#938B82]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
                Sin spam. Resultado inmediato.
              </p>
            </form>
          </div>
        </section>
      )}

      {/* STEP: RESULT */}
      {step === 'result' && (
        <>
          <section className="bg-[#0A0A0A] py-16 px-4">
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-xs font-bold text-[#FF4500] uppercase tracking-widest" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
                ■ DIAGNÓSTICO: {resultConfig[result].badge}
              </p>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-white" style={{ fontFamily: 'var(--font-barlow-condensed)', lineHeight: '0.95' }}>
                {resultConfig[result].title}
              </h2>
              <p className="text-[#938B82]" style={{ fontFamily: 'var(--font-barlow)' }}>
                {resultConfig[result].desc}
              </p>

              <div className="space-y-3 pt-4">
                <p className="text-white font-bold uppercase text-sm" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                  PLAN DE ACCIÓN {resultConfig[result].plan}
                </p>
                {planCards[result].map((card, idx) => (
                  <div
                    key={card.num}
                    onPointerDown={(e) => {
                      e.preventDefault()
                      setExpandedCard(expandedCard === idx ? null : idx)
                    }}
                    className="bg-[#1B1917] border border-[#2A2725] rounded-xl p-5 touch-manipulation select-none cursor-pointer active:border-[#FF4500]/40 transition-colors"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-[#FF4500]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>{card.num}</span>
                        <span className="text-xs text-[#938B82]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>· {card.time}</span>
                      </div>
                      <span className="text-[#FF4500] text-xs" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
                        {expandedCard === idx ? '▲' : '▼'}
                      </span>
                    </div>
                    <p className="font-bold text-white text-sm" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                      {card.title}
                    </p>
                    {expandedCard === idx && (
                      <p className="text-sm text-[#938B82] leading-relaxed mt-3" style={{ fontFamily: 'var(--font-barlow)' }}>
                        {card.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#F5F1EA] py-12 px-4">
            <div className="max-w-lg mx-auto">
              <div className="bg-[#1B1917] border border-[#FF4500]/20 rounded-2xl p-6 space-y-4">
                <p className="text-[#FF4500] text-xs font-bold uppercase" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>■ SIGUIENTE PASO</p>
                <h3 className="text-2xl font-black uppercase text-white" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                  ¿Quieres que lo hagamos juntos?
                </h3>
                <p className="text-[#938B82] text-sm" style={{ fontFamily: 'var(--font-barlow)' }}>
                  El Diagnóstico Exprés te da claridad. El diagnóstico comercial completo de 3 semanas te da el roadmap exacto con datos reales de tu empresa.
                </p>
                <div className="flex flex-wrap gap-4 py-2">
                  <span className="text-2xl font-black text-[#FF4500]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>$500.000 CLP</span>
                  <span className="text-lg font-black text-white" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>3 semanas</span>
                  <span className="text-xs text-[#938B82] self-center" style={{ fontFamily: 'var(--font-barlow)' }}>Sin compromiso posterior</span>
                </div>
                <Link
                  href="/diagnostico"
                  className="block w-full text-center bg-[#FF4500] text-[#0A0A0A] font-black uppercase rounded-full touch-manipulation"
                  style={{
                    fontFamily: 'var(--font-barlow-condensed)',
                    padding: '18px 24px',
                    fontSize: '16px',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  Agendar diagnóstico comercial →
                </Link>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}