"use client"

import type React from "react"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { LinkedinIcon } from "lucide-react"

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Empresa",
    links: [
      { title: "Servicios", href: "#features" },
      { title: "Casos", href: "#testimonials" },
      { title: "Diagnóstico", href: "#contact" },
    ],
  },
  {
    label: "Redes",
    links: [
      { title: "LinkedIn", href: "#", icon: LinkedinIcon },
    ],
  },
  {
    label: "Legal",
    links: [
      { title: "Santiago, Chile", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-3xl border-t border-[#1A1A1A] bg-[#0A0A0A] px-6 py-12 lg:py-16">
      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <span
            className="text-2xl font-black uppercase tracking-wider text-[#FF6B00]"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            THE BURN
          </span>
          <p className="text-[#888888] text-sm leading-relaxed max-w-xs">
            Menos bla, más marketing.
          </p>
          <p className="text-[#444444] text-xs mt-4 hidden md:block">
            © {new Date().getFullYear()} The Burn SpA · Santiago, Chile
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div>
                <h3 className="text-xs uppercase tracking-wider text-[#888888] font-semibold mb-4">
                  {section.label}
                </h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="text-[#555555] hover:text-white inline-flex items-center gap-1.5 transition-colors duration-200"
                      >
                        {link.icon && <link.icon className="w-3.5 h-3.5" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <div className="md:hidden mt-8 text-center">
        <p className="text-[#444444] text-xs">
          © {new Date().getFullYear()} The Burn SpA · Santiago, Chile
        </p>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()
  if (shouldReduceMotion) return children
  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
