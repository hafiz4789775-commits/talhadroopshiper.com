import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import Footer from '@/components/sections/Footer'
import PageHeader from '@/components/sections/PageHeader'
import SiteNavbar from '@/components/sections/SiteNavbar'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Short guides on dropshipping, CRO, and storefront performance.',
}

const posts = [
  {
    slug: 'mobile-first-storefront',
    title: 'Mobile-first storefront: what actually converts',
    excerpt:
      'Spacing, trust cues, speed, and clear CTAs. The practical checklist for buyers on phones.',
  },
  {
    slug: 'core-web-vitals',
    title: 'Core Web Vitals for e-commerce (simple wins)',
    excerpt:
      'How to improve speed and stability without sacrificing premium visuals and animation.',
  },
  {
    slug: 'product-sourcing-basics',
    title: 'Product sourcing basics: reduce risk',
    excerpt:
      'A straightforward approach to vetting suppliers and choosing products with real demand.',
  },
] as const

export default function BlogIndexPage() {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen">
        <PageHeader
          title="Blog"
          subtitle="Guides and notes to help you build, launch, and scale."
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

