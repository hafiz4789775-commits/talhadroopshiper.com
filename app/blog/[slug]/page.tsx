import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import Footer from '@/components/sections/Footer'
import SiteNavbar from '@/components/sections/SiteNavbar'

const POSTS: Record<
  string,
  { title: string; description: string; body: string[] }
> = {
  'mobile-first-storefront': {
    title: 'Mobile-first storefront: what actually converts',
    description:
      'A practical checklist for converting mobile shoppers using clarity, trust cues, and speed.',
    body: [
      'Design for thumbs: clear CTAs, comfortable spacing, and readable type.',
      'Build trust fast: reviews, shipping clarity, returns policy, and real product details.',
      'Keep it fast: stable layout, optimized images, and minimal blocking scripts.',
      'Use motion with care: micro-interactions improve understanding; avoid heavy effects on low-end phones.',
    ],
  },
  'core-web-vitals': {
    title: 'Core Web Vitals for e-commerce (simple wins)',
    description:
      'Improve LCP/CLS/INP without sacrificing a premium look and feel.',
    body: [
      'Keep your hero lightweight: avoid huge images and render-blocking scripts.',
      'Prevent CLS: reserve space for media, set image sizes, and avoid late-loading banners.',
      'Optimize interaction: keep animations efficient and reduce work on scroll.',
      'Measure in real devices: mobile performance is the baseline for buyers.',
    ],
  },
  'product-sourcing-basics': {
    title: 'Product sourcing basics: reduce risk',
    description:
      'A simple sourcing workflow: demand signals, supplier vetting, and fulfillment clarity.',
    body: [
      'Start with demand signals: search intent, repeatable creatives, and competitor positioning.',
      'Vet suppliers: ask for timelines, real photos, QC process, and communication expectations.',
      'Define fulfillment terms: packaging, tracking, refunds, and replacements before you scale.',
      'Test small, then iterate: update your page and offers based on real buyer behavior.',
    ],
  },
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) return { title: 'Not found' }
  return { title: post.title, description: post.description }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) notFound()

  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen px-4 pt-28 md:px-8 lg:px-12">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-primary via-cyan-200 to-secondary bg-clip-text text-transparent">
              {post.title}
            </span>
          </h1>
          <p className="mt-5 text-lg text-gray-300">{post.description}</p>

          <div className="mt-10 space-y-4">
            {post.body.map((p, idx) => (
              <p key={idx} className="text-sm leading-relaxed text-gray-300">
                {p}
              </p>
            ))}
          </div>
        </article>
        <div className="mt-24">
          <Footer />
        </div>
      </main>
    </>
  )
}

