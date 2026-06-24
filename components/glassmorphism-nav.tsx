"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navigation = [
  { name: "Servicios", href: "#features" },
  { name: "Diagnóstico", href: "#ai-team" },
  { name: "Casos", href: "#testimonials" },
  { name: "Blog", href: "#" },
]

export function GlassmorphismNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)
  const lastScrollY = useRef(0)

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

  const scrollToSection = (href: string) => {
    if (href.startsWith("/") || href === "#") return
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
        <div className="w-[90vw] max-w-xs md:max-w-4xl mx-auto">
          <div className="bg-[#0A0A0A]/90 backdrop-blur-md border border-[#2A2725] rounded-full px-4 py-2.5 md:px-6 md:py-2">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-200 cursor-pointer">
                <Image src="/logo-theburn.png" alt="The Burn flame logo" width={28} height={28} className="w-7 h-7" />
                <span
                  className="text-xl md:text-2xl font-black uppercase tracking-wider text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  THE BURN
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-[#938B82] hover:text-white transition-all duration-200 text-sm font-medium cursor-pointer"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:block">
                <button
                  className="bg-white hover:bg-[#F5F1EA] text-[#0A0A0A] font-bold px-5 py-2 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer text-sm"
                  style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.02em" }}
                  onClick={() => scrollToSection("#contact")}
                >
                  Agendar Diagnóstico
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white hover:scale-110 transition-transform duration-200 cursor-pointer"
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
            <div className="bg-[#0A0A0A]/95 backdrop-blur-md border border-[#2A2725] rounded-2xl p-4 shadow-2xl">
              <div className="flex flex-col space-y-1">
                {navigation.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-[#938B82] hover:text-white hover:bg-white/5 rounded-lg px-3 py-3 text-left transition-all duration-300 font-medium cursor-pointer text-sm ${
                      isOpen ? "animate-mobile-menu-item" : ""
                    }`}
                    style={{ animationDelay: isOpen ? `${index * 80 + 100}ms` : "0ms", fontFamily: "var(--font-barlow)" }}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="h-px bg-[#2A2725] my-2" />
                <button
                  className={`bg-white hover:bg-[#F5F1EA] text-[#0A0A0A] font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                    isOpen ? "animate-mobile-menu-item" : ""
                  }`}
                  style={{ animationDelay: isOpen ? `${navigation.length * 80 + 150}ms` : "0ms", fontFamily: "var(--font-barlow-condensed)" }}
                  onClick={() => scrollToSection("#contact")}
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
