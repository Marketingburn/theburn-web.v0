"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

const services = [
  {
    icon: "🎯",
    title: "Consultoría Comercial",
    description: "Vende con un proceso claro.",
    href: "/servicios/consultoria-comercial",
  },
  {
    icon: "📊",
    title: "Business Intelligence & Power BI",
    description: "Dashboards con tus datos reales.",
    href: "/servicios/business-intelligence-power-bi",
  },
  {
    icon: "🚀",
    title: "Funnel Digital de Performance",
    description: "Leads que llegan solos.",
    href: "/servicios/funnel-digital-performance",
  },
  {
    icon: "⚡",
    title: "Automatización de Marketing",
    description: "Tu equipo cierra. El sistema prospecta.",
    href: "/servicios/automatizacion-marketing",
  },
]

const navigation = [
  { name: "Servicios", href: null, isDropdown: true },
  { name: "Diagnóstico", href: "/diagnostico" },
  { name: "Casos", href: "/casos" },
  { name: "Blog", href: "/blog" },
]

export function GlassmorphismNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)
  const [isServiciosOpen, setIsServiciosOpen] = useState(false)
  const lastScrollY = useRef(0)
  const router = useRouter()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true)
    }, 100)

    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY
        if (currentScrollY > 50) {
          if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 5) {
            setIsVisible(false)
          } else if (lastScrollY.current - currentScrollY > 5) {
            setIsVisible(true)
          }
        } else {
          setIsVisible(true)
        }
        lastScrollY.current = currentScrollY
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar, { passive: true })
      return () => {
        window.removeEventListener("scroll", controlNavbar)
        clearTimeout(timer)
      }
    }

    return () => clearTimeout(timer)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServiciosOpen(false)
      }
    }

    if (isServiciosOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isServiciosOpen])

  const scrollToSection = (href: string) => {
    if (href === "#") return
    if (href.startsWith("/")) {
      router.push(href)
      setIsOpen(false)
      setIsServiciosOpen(false)
      return
    }
    const element = document.querySelector(href)
    if (element) {
      const rect = element.getBoundingClientRect()
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
      const elementAbsoluteTop = rect.top + currentScrollY
      const navbarHeight = 100
      const targetPosition = Math.max(0, elementAbsoluteTop - navbarHeight)
      window.scrollTo({ top: targetPosition, behavior: "smooth" })
    }
    setIsOpen(false)
    setIsServiciosOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 md:-translate-y-24 opacity-0"
        } ${hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{
          transition: hasLoaded ? "all 0.5s ease-out" : "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <div className="w-[90vw] max-w-xs md:max-w-5xl mx-auto">
          <div className="bg-[#F5F1EA]/90 backdrop-blur-md border border-black/8 rounded-full px-4 py-2.5 md:px-6 md:py-2" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-200 cursor-pointer">
                <Image src="/logo-theburn.png" alt="The Burn flame logo" width={28} height={28} className="w-7 h-7" />
                <span
                  className="text-xl md:text-2xl font-black uppercase tracking-wider text-[#0A0A0A]"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  THE BURN
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navigation.map((item) =>
                  item.isDropdown ? (
                    <div key={item.name} ref={dropdownRef} className="relative">
                      <button
                        onClick={() => setIsServiciosOpen(!isServiciosOpen)}
                        className="text-[#938B82] hover:text-[#0A0A0A] transition-all duration-200 text-sm font-medium cursor-pointer px-4 py-2 rounded-lg hover:bg-white/50 flex items-center gap-1.5"
                        style={{ fontFamily: "var(--font-barlow)" }}
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${isServiciosOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Dropdown menu */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 transition-all duration-300 ease-out ${
                          isServiciosOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-4 pointer-events-none"
                        }`}
                      >
                        <div
                          className="w-[480px] bg-white rounded-2xl p-6 shadow-xl"
                          style={{
                            border: "1px solid rgba(0,0,0,0.08)",
                            boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
                          }}
                        >
                          <div className="grid grid-cols-2 gap-6">
                            {/* Left column - Services */}
                            <div>
                              <p
                                className="text-[#938B82] text-xs uppercase tracking-widest mb-4 font-semibold"
                                style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.1em" }}
                              >
                                SERVICIOS
                              </p>
                              <div className="space-y-3">
                                {services.map((service) => (
                                  <button
                                    key={service.title}
                                    onClick={() => {
                                      setIsServiciosOpen(false)
                                      setTimeout(() => {
                                        router.push(service.href)
                                      }, 150)
                                    }}
                                    className="w-full text-left p-3 rounded-lg hover:bg-[#F5F1EA] transition-all duration-150 group"
                                  >
                                    <div className="text-lg mb-1 group-hover:scale-110 transition-transform duration-150">{service.icon}</div>
                                    <div className="text-sm font-semibold text-[#0A0A0A]" style={{ fontFamily: "var(--font-barlow)" }}>
                                      {service.title}
                                    </div>
                                    <div className="text-xs text-[#938B82] mt-0.5" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                                      {service.description}
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Right column - Featured card */}
                            <div
                              className="bg-[#0A0A0A] rounded-xl p-5 flex flex-col justify-between"
                              style={{ minHeight: "100%" }}
                            >
                              <div>
                                <p
                                  className="text-[#FF4500] text-xs uppercase tracking-widest font-semibold mb-3"
                                  style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.1em" }}
                                >
                                  ■ PRIMER PASO
                                </p>
                                <h3
                                  className="text-white font-bold text-base mb-2"
                                  style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.02em" }}
                                >
                                  ¿Por dónde empezar?
                                </h3>
                                <p className="text-[#938B82] text-xs leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
                                  El diagnóstico comercial muestra exactamente qué está frenando tu crecimiento.
                                </p>
                              </div>
                              <button
                                onClick={() => router.push("/diagnostico")}
                                className="mt-4 bg-[#FF4500] hover:bg-[#FF6B20] text-[#0A0A0A] font-bold px-4 py-2.5 rounded-full text-xs transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2"
                                style={{ fontFamily: "var(--font-barlow-condensed)" }}
                              >
                                Agendar Diagnóstico
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href!)}
                      className="text-[#938B82] hover:text-[#0A0A0A] transition-all duration-200 text-sm font-medium cursor-pointer px-4 py-2 rounded-lg hover:bg-white/50"
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      {item.name}
                    </button>
                  )
                )}
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:block">
                <button
                  className="bg-[#0A0A0A] hover:bg-[#FF4500] text-white hover:text-[#0A0A0A] font-bold px-6 py-2 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer text-sm"
                  style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.02em" }}
                  onClick={() => {
                    console.log("[v0] Nav desktop Agendar clicked, pushing /diagnostico")
                    router.push("/diagnostico")
                  }}
                >
                  Agendar Diagnóstico
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-[#0A0A0A] hover:scale-110 transition-transform duration-200 cursor-pointer"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-75"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative">
          <div
            className={`mt-2 w-[90vw] max-w-xs mx-auto transition-all duration-500 ease-out transform-gpu ${
              isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
            }`}
          >
            <div className="bg-[#F5F1EA]/95 backdrop-blur-md border border-black/8 rounded-2xl p-4 shadow-xl" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <div className="flex flex-col space-y-1">
                {navigation.map((item, index) =>
                  item.isDropdown ? (
                    <div key={item.name}>
                      <button
                        onClick={() => setIsServiciosOpen(!isServiciosOpen)}
                        className={`w-full text-left text-[#938B82] hover:text-[#0A0A0A] hover:bg-black/5 rounded-lg px-3 py-3 transition-all duration-300 font-medium cursor-pointer text-sm flex items-center justify-between ${
                          isOpen ? "animate-mobile-menu-item" : ""
                        }`}
                        style={{ animationDelay: isOpen ? `${index * 80 + 100}ms` : "0ms", fontFamily: "var(--font-barlow)" }}
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${isServiciosOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {/* Mobile Servicios submenu */}
                      {isServiciosOpen && (
                        <div className="pl-4 space-y-2 mt-2">
                          {services.map((service) => (
                            <button
                              key={service.title}
                              onClick={() => {
                                setIsOpen(false)
                                setIsServiciosOpen(false)
                                setTimeout(() => {
                                  router.push(service.href)
                                }, 150)
                              }}
                              className="w-full text-left text-sm p-2 rounded-lg hover:bg-black/5 transition-all duration-150"
                              style={{ fontFamily: "var(--font-barlow)" }}
                            >
                              <div className="flex items-start gap-2">
                                <span className="text-lg mt-0.5">{service.icon}</span>
                                <div>
                                  <div className="font-semibold text-[#0A0A0A]">{service.title}</div>
                                  <div className="text-xs text-[#938B82]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                                    {service.description}
                                  </div>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href!)}
                      className={`text-[#938B82] hover:text-[#0A0A0A] hover:bg-black/5 rounded-lg px-3 py-3 text-left transition-all duration-300 font-medium cursor-pointer text-sm ${
                        isOpen ? "animate-mobile-menu-item" : ""
                      }`}
                      style={{ animationDelay: isOpen ? `${index * 80 + 100}ms` : "0ms", fontFamily: "var(--font-barlow)" }}
                    >
                      {item.name}
                    </button>
                  )
                )}
                <div className="h-px bg-black/10 my-2" />
                <button
                  className={`bg-[#0A0A0A] hover:bg-[#FF4500] text-white hover:text-[#0A0A0A] font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer w-full justify-center ${
                    isOpen ? "animate-mobile-menu-item" : ""
                  }`}
                  style={{ animationDelay: isOpen ? `${navigation.length * 80 + 150}ms` : "0ms", fontFamily: "var(--font-barlow-condensed)" }}
                  onClick={() => {
                    console.log("[v0] Nav mobile Agendar clicked, pushing /diagnostico")
                    router.push("/diagnostico")
                  }}
                >
                  Agendar Diagnóstico
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
