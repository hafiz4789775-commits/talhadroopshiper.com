import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import Footer from '@/components/sections/Footer'
import PageHeader from '@/components/sections/PageHeader'
import SiteNavbar from '@/components/sections/SiteNavbar'

export const metadata: Metadata = {
  title: 'Blog | E-commerce & Dropshipping Insights',
  description: 'Expert guides on dropshipping strategies, store optimization, and scaling ads.',
}

const posts = [
  {
    slug: 'high-converting-store-design',
    title: 'High-converting store design: What actually drives sales',
    excerpt:
      'A practical checklist for turning visitors into buyers using psychology, trust cues, and speed.',
  },
  {
    slug: 'winning-product-research',
    title: 'Finding winning products: The expert sourcing strategy',
    excerpt:
      'How to identify high-margin products with viral potential and low competition.',
  },
  {
    slug: 'scaling-with-paid-ads',
    title: 'Scaling your brand: TikTok and Facebook ad basics',
    excerpt:
      'A simple workflow for sourcing creatives and scaling your fulfillment as orders grow.',
  },
] as const

export default function BlogIndexPage() {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen">
        <PageHeader
          title="Blog"
          subtitle="Expert insights to help you build, launch, and scale your dropshipping brand."
        />

        <section className="px-4 py-16 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(p => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group glass neon-glow rounded-3xl border border-white/10 p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-black text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  {p.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
