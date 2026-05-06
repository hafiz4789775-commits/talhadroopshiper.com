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
    q: 'How long does shipping take?',
    a: 'Most orders are delivered within 7 to 12 business days depending on your location.',
  },
  {
    q: 'Can I track my package?',
    a: 'Yes! Once your order is shipped, you will receive a tracking number via email to monitor your delivery.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer a 30-day money-back guarantee if the product is damaged or not as described.',
  },
  {
    q: 'Do you support 3D?',
    a: 'Yes. Three.js (via React Three Fiber) is used for interactive 3D sections, and Spline can be embedded if you provide a scene URL.',
  },
  {
    q: 'Are there any hidden charges?',
    a: 'No, the price you see at checkout is final. Taxes and shipping (if applicable) are clearly shown.',
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

