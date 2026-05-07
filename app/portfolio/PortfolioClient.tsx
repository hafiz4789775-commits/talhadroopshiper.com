'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const work = [
  {
    title: 'Automated Store Infrastructure',
    bullets: [
      'End-to-end supply chain automation',
      'High-converting premium Shopify theme',
      'Seamless order fulfillment sync',
    ],
  },
  {
    title: 'Niche & Product Mastery',
    bullets: [
      'Low-competition, high-margin research',
      'Strategic product positioning & pricing',
      'Competitor analysis & trend forecasting',
    ],
  },
  {
    title: 'Sales & Marketing Scaling',
    bullets: [
      'Viral TikTok & Facebook ad strategies',
      'Conversion Rate Optimization (CRO)',
      'Brand building & buyer trust signals',
    ],
  },
] as const

export default function PortfolioClient() {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
        {work.map(card => (
          <motion.div
            key={card.title}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="glass neon-glow rounded-3xl p-8"
          >
            <h3 className="text-xl font-black text-white">{card.title}</h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              {card.bullets.map(b => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
