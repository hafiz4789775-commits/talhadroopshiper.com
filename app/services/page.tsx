import type { Metadata } from 'next'
import { BarChart3, Box, Layers3, Rocket, SearchCheck } from 'lucide-react'

import Footer from '@/components/sections/Footer'
import PageHeader from '@/components/sections/PageHeader'
import SiteNavbar from '@/components/sections/SiteNavbar'
import GsapReveal from '@/components/ui/GsapReveal'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Dropshipping services: storefront development, product sourcing, CRO, performance, and scaling support — built for mobile.',
}

const services = [
  {
    icon: Layers3,
    title: 'Next.js storefront build',
    body: 'Modern, fast, SEO-ready pages with clean structure and strong UX.',
  },
  {
    icon: SearchCheck,
    title: 'Product sourcing',
    body: 'Find products with demand signals and clear supplier requirements.',
  },
  {
    icon: BarChart3,
    title: 'CRO (conversion optimization)',
    body: 'Improve add-to-cart, trust, and checkout intent with tests & fixes.',
  },
  {
    icon: Box,
    title: 'Landing pages & funnels',
    body: 'Mobile-first, high-impact pages for ads and influencer traffic.',
  },
  {
    icon: Rocket,
    title: 'Performance tuning',
    body: 'Core Web Vitals focused: layout stability, speed, and smooth motion.',
  },
] as const

export default function ServicesPage() {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen">
        <PageHeader
          title="Services"
          subtitle="Professional builds that feel premium, load fast, and convert on mobile."
        />

        <section className="px-4 py-16 md:px-8 lg:px-12">
          <GsapReveal>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  data-reveal
                  className="glass neon-glow rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </GsapReveal>
        </section>

        <section className="px-4 pb-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-10 md:p-12">
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              Mobile-first checklist
            </h2>
            <ul className="mt-6 grid gap-3 text-sm text-gray-300 md:grid-cols-2">
              {[
                'Thumb-friendly spacing & tap targets',
                'Smooth animations with reduced-motion support',
                'SEO-ready metadata and semantic headings',
                'Fast images and layout stability',
                'Clean internal page structure (not one long page)',
                'Accessible color grading for readability',
              ].map(item => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

