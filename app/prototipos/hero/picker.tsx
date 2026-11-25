"use client"

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import "./picker.css"
import "./proto.css"
import { SiteHeader } from "@/components/site/header"
import { HeroNiebla } from "./niebla"
import { HeroIgnicion } from "./ignicion"
import { HeroCarta } from "./carta"
import { Aftermath } from "./shared"

const variants = [
  { name: "Niebla", Component: HeroNiebla },
  { name: "Ignición", Component: HeroIgnicion },
  { name: "Carta", Component: HeroCarta },
]

export function HeroPicker() {
  const [current, setCurrent] = useState(0)
  const [mountKey, setMountKey] = useState(0)
  const navRef = useRef<HTMLElement>(null)
  const highlightRef = useRef<HTMLSpanElement>(null)
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Selección inicial desde ?v=
  useLayoutEffect(() => {
    const v = parseInt(new URLSearchParams(location.search).get("v") ?? "1", 10)
    if (v >= 1 && v <= variants.length) setCurrent(v - 1)
    requestAnimationFrame(() => requestAnimationFrame(() => navRef.current?.setAttribute("data-ready", "")))
  }, [])

  const moveHighlight = useCallback(() => {
    const el = itemRefs.current[current]
    const hl = highlightRef.current
    if (!el || !hl) return
    hl.style.width = `${el.offsetWidth}px`
    hl.style.transform = `translateX(${el.offsetLeft}px)`
  }, [current])

  useLayoutEffect(() => {
    moveHighlight()
    window.addEventListener("resize", moveHighlight)
    return () => window.removeEventListener("resize", moveHighlight)
  }, [moveHighlight])

  const setActive = useCallback((i: number) => {
    if (i < 0 || i >= variants.length) return
    setCurrent(i)
    setMountKey((k) => k + 1)
    const url = new URL(location.href)
    url.searchParams.set("v", String(i + 1))
    history.replaceState(null, "", url)
    window.scrollTo(0, 0)
  }, [])

  const replay = useCallback(() => {
    window.scrollTo(0, 0)
    setMountKey((k) => k + 1)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable) return
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const num = parseInt(e.key, 10)
      if (num >= 1 && num <= variants.length) setActive(num - 1)
      else if (e.key === "ArrowRight") setActive((current + 1) % variants.length)
      else if (e.key === "ArrowLeft") setActive((current - 1 + variants.length) % variants.length)
      else if (e.key === "r" || e.key === "R") replay()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [current, setActive, replay])

  const { Component } = variants[current]

  return (
    <div data-tb className="bg-cream">
      <SiteHeader transparentAtTop ctaHref="#contacto" />
      <main key={mountKey}>
        <Component />
        <Aftermath />
      </main>

      <nav ref={navRef} className="proto-picker" aria-label="Versiones del hero">
        <span ref={highlightRef} className="proto-picker-highlight" aria-hidden="true" />
        {variants.map((v, i) => (
          <button
            key={v.name}
            ref={(el) => {
              itemRefs.current[i] = el
            }}
            className="proto-picker-item"
            data-active={i === current ? "" : undefined}
            aria-current={i === current ? "true" : undefined}
            onClick={() => setActive(i)}
          >
            {v.name}
          </button>
        ))}
        <span className="proto-picker-divider" aria-hidden="true" />
        <button className="proto-picker-item proto-picker-replay" aria-label="Repetir animación (R)" onClick={replay}>
          ↻
        </button>
      </nav>
    </div>
  )
}
