"use client"

import type React from "react"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { LinkedinIcon } from "lucide-react"
import Image from "next/image"

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
      { title: "Diagnóstico", href: "#ai-team" },
      { title: "Casos", href: "#testimonials" },
      { title: "Blog", href: "#" },
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
      { title: "theburn.cl", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-start justify-center rounded-t-3xl border-t border-[#2A2725] bg-[#0A0A0A] px-6 py-12 lg:py-16">
      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <div className="flex items-center gap-2.5">
            <Image src="/logo-theburn.png" alt="The Burn logo" width={32} height={32} className="w-8 h-8" />
            <span
              className="text-2xl font-black uppercase tracking-wider text-white"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              THE BURN
            </span>
          </div>
          <p className="text-[#938B82] text-sm leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.08em" }}>
            MENOS BLA, MÁS MARKETING.
          </p>
          <p className="text-[#2A2725] text-xs mt-4 hidden md:block" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
            © {new Date().getFullYear()} THE BURN SpA · SANTIAGO, CHILE · THEBURN.CL
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#938B82] font-semibold mb-4" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  {section.label}
                </h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="text-[#938B82]/60 hover:text-white inline-flex items-center gap-1.5 transition-colors duration-200"
                        style={{ fontFamily: "var(--font-barlow)" }}
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

      <div className="md:hidden mt-8">
        <p className="text-[#2A2725] text-xs" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
          © {new Date().getFullYear()} THE BURN SpA · SANTIAGO, CHILE
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
