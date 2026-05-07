import type { Metadata } from 'next'
import { BarChart3, Box, Layers3, Rocket, SearchCheck } from 'lucide-react'

import Footer from '@/components/sections/Footer'
import PageHeader from '@/components/sections/PageHeader'
import SiteNavbar from '@/components/sections/SiteNavbar'
import GsapReveal from '@/components/ui/GsapReveal'

export const metadata: Metadata = {
  title: 'Services | Dropshipping & E-commerce Solutions',
  description:
    'Professional dropshipping services: A-Z store creation, viral product sourcing, conversion optimization, and brand scaling strategies.',
}

const services = [
  {
    icon: Layers3,
    title: 'A-Z Store Automation',
    body: 'Complete setup of high-converting, automated Shopify stores designed for maximum sales.',
  },
  {
    icon: SearchCheck,
    title: 'Viral Product Research',
    body: 'Data-driven sourcing of winning products with high demand and solid profit margins.',
  },
  {
    icon: BarChart3,
    title: 'Conversion Optimization',
    body: 'Improving your checkout flow and trust signals to turn more visitors into loyal buyers.',
  },
  {
    icon: Box,
    title: 'Sales Funnels & Landing Pages',
    body: 'High-impact, mobile-first pages built specifically for TikTok, FB, and Instagram ad traffic.',
  },
  {
    icon: Rocket,
    title: 'Scaling & Ad Strategy',
    body: 'Strategic guidance on Facebook/TikTok ads to scale your store from $0 to consistent revenue.',
  },
] as const

export default function ServicesPage() {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen">
        <PageHeader
          title="Services"
          subtitle="Everything you need to launch, manage, and scale a profitable dropshipping business."
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
              Success Checklist
            </h2>
            <ul className="mt-6 grid gap-3 text-sm text-gray-300 md:grid-cols-2">
              {[
                'Vetted & Reliable Global Suppliers',
                'High-converting Premium Store Design',
                'Fast Fulfillment & Order Automation',
                'Winning Product Selection Strategy',
                'Optimized Mobile User Experience',
                'Professional Branding & Trust Building',
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
