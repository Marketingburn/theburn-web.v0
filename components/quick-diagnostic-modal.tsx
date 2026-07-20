'use client'

import { useState, useEffect } from 'react'
import { X, ChevronRight } from 'lucide-react'

interface DiagnosticQuestion {
  id: string
  question: string
  description?: string
  options: { label: string; icon: string }[]
}

const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    id: 'business_type',
    question: '¿Qué tipo de empresa eres?',
    options: [
      { label: 'E-commerce / Tienda online', icon: '🛒' },
      { label: 'Servicios B2B', icon: '💼' },
      { label: 'Manufactura / Industrial', icon: '🏭' },
      { label: 'Otra', icon: '🎯' },
    ],
  },
  {
    id: 'pain_point',
    question: '¿Cuál es tu mayor desafío hoy?',
    options: [
      { label: 'Generar leads / tráfico', icon: '📈' },
      { label: 'Convertir prospectos a clientes', icon: '🎯' },
      { label: 'Retener clientes', icon: '💎' },
      { label: 'Decisiones con datos', icon: '📊' },
    ],
  },
  {
    id: 'team_size',
    question: '¿Tamaño actual del equipo?',
    options: [
      { label: '1-5 personas', icon: '👤' },
      { label: '6-20 personas', icon: '👥' },
      { label: '20-100 personas', icon: '👨‍💼' },
      { label: '100+', icon: '🏢' },
    ],
  },
]

export function QuickDiagnosticModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])



  const currentQuestion = diagnosticQuestions[currentStep]
  const isLastStep = currentStep === diagnosticQuestions.length - 1

  const handleAnswer = (optionLabel: string) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: optionLabel,
    }
    setAnswers(newAnswers)

    if (isLastStep) {
      // Show result and then close
      handleComplete(newAnswers)
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleComplete = (finalAnswers: Record<string, string>) => {
    // Log the diagnostic for analytics
    console.log('[v0] Quick diagnostic completed:', finalAnswers)

    // Scroll to contact form
    setTimeout(() => {
      setIsOpen(false)
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
    }, 500)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 md:hidden z-[9990] w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
          title="Abrir diagnóstico rápido"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>
      )}

      {isOpen && (
        <>
          {/* Modal Overlay */}
          <div
            className="fixed inset-0 z-[9994] bg-black/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <div
        className={`fixed z-[9995] rounded-2xl shadow-2xl bg-white overflow-hidden ${
          isMobile
            ? 'inset-x-4 bottom-20 max-h-[50vh] w-auto'
            : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px]'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0A0A0A] to-[#1B1917] p-4 sm:p-5 flex items-center justify-between">
          <div>
            <h3
              className="text-white font-bold text-base sm:text-lg"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Diagnóstico Rápido
            </h3>
            <p className="text-[#FF4500] text-xs mt-0.5" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
              {currentStep + 1} de {diagnosticQuestions.length}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/10 p-2 rounded transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <p
            className="text-[#0A0A0A] font-bold text-base sm:text-lg mb-4"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            {currentQuestion.question}
          </p>

          {currentQuestion.description && (
            <p className="text-[#938B82] text-sm mb-4" style={{ fontFamily: 'var(--font-barlow)' }}>
              {currentQuestion.description}
            </p>
          )}

          {/* Options */}
          <div className="space-y-2 max-h-[calc(50vh-120px)] overflow-y-auto">
            {currentQuestion.options.map((option) => (
              <button
                key={option.label}
                onClick={() => handleAnswer(option.label)}
                className="w-full flex items-center justify-between p-3 border-2 border-[#E8E3DA] rounded-xl hover:border-[#FF4500] hover:bg-[#F5F1EA] transition-all duration-200 group text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{option.icon}</span>
                  <span
                    className="text-sm font-medium text-[#0A0A0A] group-hover:text-[#FF4500]"
                    style={{ fontFamily: 'var(--font-barlow)' }}
                  >
                    {option.label}
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  className="text-[#E8E3DA] group-hover:text-[#FF4500] transition-colors"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-[#E8E3DA]">
          <div
            className="h-full bg-[#FF4500] transition-all duration-300"
            style={{
              width: `${((currentStep + 1) / diagnosticQuestions.length) * 100}%`,
            }}
          />
          </div>
        </div>
          </div>
        </>
      )}
    </>
  )
}
