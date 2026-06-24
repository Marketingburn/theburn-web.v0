"use client"
import React from "react"
import { motion } from "framer-motion"

interface Testimonial {
  text: string
  name: string
  role: string
}

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) => {
  return (
    <div className={`relative overflow-hidden h-[700px] ${props.className}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div
                  className="p-8 rounded-2xl border border-[#2A2725] bg-[#1B1917] max-w-xs w-full"
                  style={{
                    boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                  }}
                  key={i}
                >
                  <div className="text-[#938B82] text-sm leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>{text}</div>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FF4500]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#FF4500] text-xs font-bold" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>{name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white" style={{ fontFamily: "var(--font-barlow)" }}>{name}</div>
                      <div className="text-xs text-[#938B82]/60" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}
