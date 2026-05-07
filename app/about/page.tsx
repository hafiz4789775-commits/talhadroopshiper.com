import type { Metadata } from 'next'
import { ShieldCheck, Sparkles, Target } from 'lucide-react'

import Footer from '@/components/sections/Footer'
import PageHeader from '@/components/sections/PageHeader'
import SiteNavbar from '@/components/sections/SiteNavbar'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About | Expert Dropshipping Partner',
  description:
    'Meet Muhammad Talha — professional dropshipping specialist focused on high-margin product sourcing and automated e-commerce stores.',
}

const highlights = [
  {
    icon: Target,
    title: 'High-Margin Sourcing',
    body: 'Identifying trending, winning products with high profit potential and low competition.',
  },
  {
    icon: ShieldCheck,
    title: 'Vetted Suppliers',
    body: 'Partnering with reliable global suppliers to ensure quality control and fast fulfillment.',
  },
  {
    icon: Sparkles,
    title: 'Premium Branding',
    body: 'Building high-converting stores with premium UI and 3D visuals to build instant buyer trust.',
  },
] as const

export default function AboutPage() {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen">
        <PageHeader
          title="About Talha"
          subtitle="Dropshipping is simple on paper. Scaling and sourcing is where experts win."
        />

        <section className="px-4 py-16 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
            {highlights.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
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
        </section>

        <section className="px-4 pb-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-10 md:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary/90">
                  Based in {SITE.city}
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Your dedicated partner for scaling e-commerce brands
                </h2>
                <p className="mt-4 text-gray-300">
                  I specialize in building and managing professional dropshipping storefronts. By focusing on automated supply chains and high-converting store designs, I help you turn marketing spend into consistent revenue.
                </p>
              </div>

              <div className="glass rounded-3xl p-8">
                <div className="grid gap-4 text-sm text-gray-300">
                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                    <span className="text-white/80">Expertise</span>
                    <span className="font-semibold text-white">Dropshipping Specialist</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                    <span className="text-white/80">Email</span>
                    <span className="font-semibold text-white">{SITE.email}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                    <span className="text-white/80">Phone</span>
                    <span className="font-semibold text-white">{SITE.phone}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                    <span className="text-white/80">Location</span>
                    <span className="font-semibold text-white">
                      {SITE.city}, {SITE.region}
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-xs text-gray-500">
                  Note: Available for strategic store management and global supplier sourcing consultations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
