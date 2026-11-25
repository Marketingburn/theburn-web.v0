"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, LoaderCircle } from "lucide-react"
import { pushEvent } from "@/lib/analytics"
import { EMAIL } from "@/lib/site-nav"

const field =
  "mt-2 w-full rounded-md border border-[#cfc6b7] bg-paper px-4 py-3 text-base text-ink placeholder:text-smoke/80 transition-[border-color,box-shadow] duration-150 focus:border-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-burn/40"

const label = "font-mono text-xs tracking-widest text-ink uppercase"

/**
 * Formulario mínimo del home. Usa la misma API que el resto del sitio (/api/contact),
 * registra el evento en GTM y lleva a /gracias, igual que el formulario anterior.
 */
export function ContactFormHome() {
  const router = useRouter()
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: String(data.get("nombre") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          comentarios: String(data.get("comentarios") ?? "").trim(),
          necesidad: "Diagnóstico (formulario del home)",
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      pushEvent("contact_form_submit", { form_type: "contact", necesidad: "home" })
      router.push("/gracias")
    } catch {
      setStatus("error")
    }
  }

  const sending = status === "sending"

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={label}>
            Nombre
          </label>
          <input id="nombre" name="nombre" type="text" autoComplete="name" required className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Correo
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="comentarios" className={label}>
          Cuéntanos tu caso
        </label>
        <textarea
          id="comentarios"
          name="comentarios"
          rows={5}
          required
          placeholder="Qué vende tu empresa, cómo llegan hoy los clientes y qué te gustaría ordenar primero."
          className={`${field} resize-y`}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          disabled={sending}
          className="btn-press group inline-flex h-13 items-center gap-2 rounded-full bg-ink px-7 font-heading text-lg font-bold tracking-wide text-cream uppercase hover:bg-burn hover:text-ink disabled:cursor-wait disabled:opacity-70"
        >
          {sending ? "Enviando" : "Enviar mensaje"}
          {sending ? (
            <LoaderCircle aria-hidden className="size-5 animate-spin" />
          ) : (
            <ArrowRight aria-hidden className="tb-nudge-x size-5 transition-transform duration-200" />
          )}
        </button>
        <p className="text-sm text-smoke" aria-live="polite">
          {status === "error" ? (
            <span className="text-burn-text">
              No pudimos enviar el mensaje. Escríbenos a{" "}
              <a className="underline underline-offset-4" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              .
            </span>
          ) : (
            <>
              O escríbenos directo a{" "}
              <a className="text-ink underline underline-offset-4" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </>
          )}
        </p>
      </div>
    </form>
  )
}
