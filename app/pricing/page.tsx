import type { Metadata } from 'next'
import { Check } from 'lucide-react'

import Footer from '@/components/sections/Footer'
import PageHeader from '@/components/sections/PageHeader'
import SiteNavbar from '@/components/sections/SiteNavbar'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Pricing | Dropshipping Services',
  description:
    'Professional dropshipping store setup and e-commerce consulting pricing.',
}

const plans = [
  {
    name: 'Standard Store Setup',
    price: 'Custom quote',
    bullets: [
      'Premium high-converting theme setup',
      'Winning product integration (5-10 products)',
      'Essential trust badges & apps setup',
    ],
    highlight: false,
  },
  {
    name: 'Multan Dropshipping Masterclass',
    price: `${SITE.offers.multanDropshippingCode.toLocaleString('en-US')} ${SITE.currency}`,
    bullets: [
      '1-on-1 strategic sourcing guidance',
      'Winning product research blueprint',
      'Facebook & TikTok ads strategy',
    ],
    highlight: true,
  },
  {
    name: 'Elite Growth & Scale',
    price: 'Custom quote',
    bullets: [
      'Full store management & automation',
      'Advanced conversion rate optimization',
      'Scaling strategies for global markets',
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
          subtitle={`Invest in your business. All pricing in ${SITE.currency}. Contact for custom packages.`}
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
