'use client'

import { motion, useReducedMotion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, PackageSearch, TrendingUp, Zap } from 'lucide-react'

import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { STOREFRONT_HERO_IMAGE } from '@/lib/model-asset'

const ShopModelCanvas = dynamic(
  () => import('@/components/3d/ShopModelCanvas'),
  {
    ssr: false,
    loading: () => (
      <div
        className="relative flex h-[min(52vh,420px)] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#070708] sm:h-[min(58vh,480px)] md:h-[min(64vh,560px)]"
        aria-hidden
      >
        <Image
          src={STOREFRONT_HERO_IMAGE}
          alt=""
          fill
          className="object-cover object-center opacity-90"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/20 to-transparent" />
        <div className="relative z-10 h-12 w-12 animate-spin rounded-full border-4 border-primary/25 border-t-primary" />
      </div>
    ),
  }
)

const trustPoints = [
  { icon: PackageSearch, label: 'Product sourcing & supplier vetting' },
  { icon: TrendingUp, label: 'Store scaling & CRO' },
  { icon: Zap, label: 'Fast storefronts built for conversion' },
] as const

export default function HeroSection() {
  const reducedMotion = useReducedMotion() ?? false

  return (
    <section
      className="relative min-h-screen overflow-hidden px-4 pb-16 pt-24 md:px-8 md:pb-20 md:pt-28 lg:px-12 lg:pt-32"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,245,255,0.12),transparent),radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(139,92,246,0.08),transparent)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-16">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary/90 backdrop-blur sm:text-sm">
            Expert dropshipping partner
          </p>

          <motion.h1
            id="hero-heading"
            className="mb-5 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-6xl"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="bg-gradient-to-r from-primary via-cyan-200 to-secondary bg-clip-text text-transparent">
              Source smarter.
            </span>{' '}
            <span className="text-glow text-white">Scale faster.</span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-8 max-w-xl text-base text-gray-300 sm:text-lg lg:mx-0"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            High-end dropshipping storefronts and funnels focused on one thing:
            turning traffic into revenue—with premium UX your buyers feel on every
            device.
          </motion.p>

          <motion.ul
            className="mb-10 flex flex-col gap-3 sm:mx-auto sm:max-w-md lg:mx-0"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={reducedMotion ? undefined : { opacity: 1 }}
            transition={{ delay: 0.12 }}
          >
            {trustPoints.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-start justify-center gap-3 text-left text-sm text-gray-400 sm:items-center lg:justify-start"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary lg:mt-0">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span>{label}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'group neon-glow w-full justify-center gap-2 sm:w-auto sm:min-w-[200px]'
              )}
            >
              Book a strategy call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/portfolio"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'w-full justify-center sm:w-auto sm:min-w-[200px]'
              )}
            >
              See work
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="order-1 lg:order-2"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-gray-500 lg:text-right">
            Your catalog, elevated—interactive preview
          </p>
          <div className="hero-model-aura relative rounded-2xl p-[2px] sm:rounded-3xl sm:p-[3px]">
            <div className="relative overflow-hidden rounded-[14px] bg-[#070708] sm:rounded-[22px]">
              <ShopModelCanvas reducedMotion={reducedMotion} />
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-gray-500 lg:text-right">
            Drag or hover to explore the model
          </p>
        </motion.div>
      </div>

      <motion.div
        animate={
          reducedMotion ? undefined : { y: [0, 8, 0] }
        }
        transition={
          reducedMotion ? undefined : { duration: 2.2, repeat: Infinity }
        }
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-xs font-medium text-primary/80 md:block"
      >
        Scroll to explore →
      </motion.div>
    </section>
  )
}
