import type { Metadata } from 'next'

import Footer from '@/components/sections/Footer'
import PageHeader from '@/components/sections/PageHeader'
import SiteNavbar from '@/components/sections/SiteNavbar'
import PortfolioClient from '@/app/portfolio/PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'A focused selection of storefront builds, landing pages, and optimization outcomes.',
}

export default function PortfolioPage() {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen">
        <PageHeader
          title="Portfolio"
          subtitle="Showcase-style sections you can reuse across products and niches."
        />
        <PortfolioClient />

        <section className="px-4 pb-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-10 md:p-12">
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              Want a portfolio like this?
            </h2>
            <p className="mt-4 max-w-2xl text-gray-300">
              This project is intentionally built as a multi-page site (not a
              single long page) so each service and topic can rank and convert
              separately.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="neon-glow inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-bold text-black transition hover:bg-cyan-200"
              >
                Contact
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-bold text-white/90 transition hover:bg-white/10"
              >
                Pricing
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

