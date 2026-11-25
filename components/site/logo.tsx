import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)} aria-label="The Burn, inicio">
      <Image src="/images/llama.png" alt="" width={24} height={24} priority className="size-6" />
      <span className="font-heading text-xl font-extrabold tracking-wide uppercase">The Burn</span>
    </Link>
  )
}
