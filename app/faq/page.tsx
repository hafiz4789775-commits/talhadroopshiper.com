import type { Metadata } from 'next'
import { ChevronDown } from 'lucide-react'

import Footer from '@/components/sections/Footer'
import PageHeader from '@/components/sections/PageHeader'
import SiteNavbar from '@/components/sections/SiteNavbar'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Common questions about storefront builds, sourcing, and delivery.',
}

const faqs = [
  {
    q: 'Is this a real multi-page website?',
    a: 'Yes. Each page is a separate route (About, Services, Pricing, etc.) instead of one long page.',
  },
  {
    q: 'Will it be mobile-friendly?',
    a: 'Yes. Layout, spacing, font sizing, and motion are designed for mobile-first usability.',
  },
  {
    q: 'Do you add animations?',
    a: 'Yes. Framer Motion + GSAP are used for smooth reveals and interactions, with reduced-motion support.',
  },
  {
    q: 'Do you support 3D?',
    a: 'Yes. Three.js (via React Three Fiber) is used for interactive 3D sections, and Spline can be embedded if you provide a scene URL.',
  },
  {
    q: 'Is it SEO friendly?',
    a: 'Yes. Each route includes metadata, semantic structure, and clean internal linking.',
  },
] as const

export default function FaqPage() {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen">
        <PageHeader
          title="FAQ"
          subtitle="Quick answers to common questions."
        />

        <section className="px-4 py-16 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map(item => (
              <details
                key={item.q}
                className="group glass rounded-3xl border border-white/10 p-6 open:neon-glow"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-white">
                  <span>{item.q}</span>
                  <ChevronDown className="h-5 w-5 text-white/60 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-gray-300">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

