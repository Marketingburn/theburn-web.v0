"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  index?: number;
  as?: "div" | "li" | "article";
};

/** Revela su contenido una sola vez al entrar en pantalla (opacity + transform). */
export function Reveal({ children, className, index = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  return (
    <Tag
      ref={ref as never}
      data-visible={inView}
      className={cn("reveal", className)}
      style={{ ["--i" as string]: index }}
    >
      {children}
    </Tag>
  );
}
