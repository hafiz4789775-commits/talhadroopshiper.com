import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import Footer from '@/components/sections/Footer'
import SiteNavbar from '@/components/sections/SiteNavbar'

const POSTS: Record<
  string,
  { title: string; description: string; body: string[] }
> = {
  'high-converting-store-design': {
    title: 'High-converting store design: What actually drives sales',
    description:
      'A practical checklist for turning visitors into buyers using psychology, trust cues, and speed.',
    body: [
      'Design for mobile-first buyers: Clear CTAs, easy navigation, and one-page checkout focus.',
      'Instant trust signals: Use high-quality product images, authentic reviews, and transparent shipping policies.',
      'Strategic product descriptions: Focus on benefits, not just features, to connect with the buyers emotions.',
      'Speed is revenue: Every second of delay reduces conversion; keep your store lightweight and responsive.',
    ],
  },
  'winning-product-research': {
    title: 'Finding winning products: The expert sourcing strategy',
    description:
      'How to identify high-margin products with viral potential and low competition.',
    body: [
      'Analyze demand signals: Use social trends, search volume, and competitor ad performance to spot winners.',
      'Verify supplier quality: Always vet suppliers for shipping speed, communication, and product consistency.',
      'Look for the "Wow" factor: Successful products usually solve a problem or have a strong emotional appeal.',
      'Test small, scale fast: Use data from small ad spends to identify which products deserve a larger budget.',
    ],
  },
  'scaling-with-paid-ads': {
    title: 'Scaling your brand: TikTok and Facebook ad basics',
    description:
      'A simple workflow for sourcing creatives and scaling your fulfillment as orders grow.',
    body: [
      'Creative-first approach: In dropshipping, the best creative wins. Focus on UGC and scroll-stopping hooks.',
      'Audience testing: Run broad and interest-based tests to find your ideal customer segments.',
      'Automation is key: As orders increase, sync your store with reliable fulfillment partners to avoid delays.',
      'Manage your margins: Track your ROAS (Return on Ad Spend) daily to ensure profitable growth.',
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

          <div className="mt-10 space-y-6">
            {post.body.map((p, idx) => (
              <p key={idx} className="text-lg leading-relaxed text-gray-300 border-l-2 border-primary/30 pl-4">
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
