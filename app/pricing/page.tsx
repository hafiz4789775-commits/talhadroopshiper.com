import type { Metadata } from 'next'
import { Check } from 'lucide-react'

import Footer from '@/components/sections/Footer'
import PageHeader from '@/components/sections/PageHeader'
import SiteNavbar from '@/components/sections/SiteNavbar'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Clear pricing in PKR for dropshipping storefront builds and services.',
}

const plans = [
  {
    name: 'Starter Storefront',
    price: 'Custom quote',
    bullets: [
      'Mobile-first multi-page structure',
      'SEO-ready layout & metadata',
      'Modern UI + smooth motion',
    ],
    highlight: false,
  },
  {
    name: 'Multan Dropshipping Code',
    price: `${SITE.offers.multanDropshippingCode.toLocaleString('en-US')} ${SITE.currency}`,
    bullets: [
      'Delivery-focused setup guidance',
      'Store presentation + trust layout',
      'Optimized for mobile buyers',
    ],
    highlight: true,
  },
  {
    name: 'Scale & Optimize',
    price: 'Custom quote',
    bullets: [
      'CRO improvements & experiments',
      'Performance tuning (Core Web Vitals)',
      'Landing pages for campaigns',
    ],
    highlight: false,
  },
] as const

export default function PricingPage() {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen">
        <PageHeader
          title="Pricing"
          subtitle={`All pricing is shown in ${SITE.currency}. For exact scope, use the contact form.`}
        />

        <section className="px-4 py-16 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
            {plans.map(plan => (
              <div
                key={plan.name}
                className={[
                  'rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1',
                  plan.highlight
                    ? 'neon-glow border border-primary/30 bg-gradient-to-br from-primary/10 via-white/5 to-transparent'
                    : 'glass border border-white/10',
                ].join(' ')}
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                  {plan.name}
                </p>
                <div className="mt-4 text-3xl font-black text-white">
                  {plan.price}
                </div>
                <ul className="mt-6 space-y-3 text-sm text-gray-300">
                  {plan.bullets.map(b => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-primary">
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={[
                    'mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition',
                    plan.highlight
                      ? 'bg-primary text-black hover:bg-cyan-200'
                      : 'border border-white/15 bg-white/5 text-white/90 hover:bg-white/10',
                  ].join(' ')}
                >
                  Get started
                </a>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

