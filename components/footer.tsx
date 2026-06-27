"use client"

import { LinkedinIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const footerLinks = [
  {
    label: "Empresa",
    links: [
      { title: "Servicios", href: "/#features" },
      { title: "Diagnóstico", href: "/diagnostico" },
      { title: "Casos", href: "/#testimonials" },
      { title: "Blog", href: "/blog" },
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
      { title: "theburn.cl", href: "/" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-[#2A2725] px-6 py-12 lg:py-16">
      <div className="max-w-6xl mx-auto grid gap-8 xl:grid-cols-3 xl:gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <Image src="/logo-theburn.png" alt="The Burn logo" width={32} height={32} className="w-8 h-8" />
            <span
              className="text-2xl font-black uppercase tracking-wider text-white"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              THE BURN
            </span>
          </div>
          <p className="text-[#938B82] text-sm" style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.08em" }}>
            MENOS BLA, MÁS MARKETING.
          </p>
          <p className="text-[#2A2725] text-xs hidden md:block" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
            © {new Date().getFullYear()} THE BURN SpA · SANTIAGO, CHILE · THEBURN.CL
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 xl:col-span-2">
          {footerLinks.map((section) => (
            <div key={section.label}>
              <h3 className="text-xs uppercase tracking-widest text-[#938B82] font-semibold mb-4" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                {section.label}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-[#938B82]/60 hover:text-white inline-flex items-center gap-1.5 transition-colors duration-200"
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      {link.icon && <link.icon className="w-3.5 h-3.5" />}
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden max-w-6xl mx-auto mt-8">
        <p className="text-[#2A2725] text-xs" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
          © {new Date().getFullYear()} THE BURN SpA · SANTIAGO, CHILE
        </p>
      </div>
    </footer>
  )
}
