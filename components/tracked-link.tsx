"use client"

import Link from "next/link"
import type { ComponentProps } from "react"
import { pushEvent } from "@/lib/analytics"

type TrackedLinkProps = ComponentProps<typeof Link> & {
  event: string
  eventParams?: Record<string, unknown>
}

/**
 * Wraps next/link and pushes a GTM dataLayer event on click before
 * navigating. Use for CTAs that need conversion tracking:
 * diagnostico_click, service_click, blog_to_service_click, cta_click.
 */
export function TrackedLink({ event, eventParams, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        pushEvent(event, {
          click_source: typeof window !== "undefined" ? window.location.pathname : "",
          ...eventParams,
        })
        onClick?.(e)
      }}
    />
  )
}
