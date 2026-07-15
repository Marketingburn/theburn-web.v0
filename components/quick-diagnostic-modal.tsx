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

  // Auto-open modal after 15 seconds on mobile (once per session)
  useEffect(() => {
    if (!isMobile) return
    const hasShown = sessionStorage.getItem('diagnostic_modal_shown')
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem('diagnostic_modal_shown', 'true')
      }, 15000)
      return () => clearTimeout(timer)
    }
  }, [isMobile])

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

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
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
    </>
  )
}
