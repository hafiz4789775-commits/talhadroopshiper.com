'use client'

import { useEffect, useId, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type GsapRevealProps = {
  children: React.ReactNode
}

export default function GsapReveal({ children }: GsapRevealProps) {
  const id = useId()
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('[data-reveal]'),
        { y: 20, opacity: 0, filter: 'blur(6px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [id])

  return <div ref={ref}>{children}</div>
}

