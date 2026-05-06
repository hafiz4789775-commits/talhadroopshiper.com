import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import CursorGlow from '@/components/ui/CursorGlow'
import { DEFAULT_SITE_URL, SITE } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

const siteUrl = DEFAULT_SITE_URL

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'Dropshipping Expert | High-Converting Storefronts & Product Sourcing',
    template: '%s | Expert Dropshipping Partner',
  },
  description:
    'Conversion-focused dropshipping stores: product sourcing, supplier vetting, CRO, and blazing-fast Next.js storefronts optimized for mobile buyers.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Dropshipping Expert — Scale Your Store',
    description:
      'Premium storefronts and funnels built for revenue. Sourcing, scaling, and performance-first UX.',
    url: siteUrl,
    siteName: 'Dropshipping Expert',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/storefront-hero.svg',
        width: 1200,
        height: 800,
        alt: 'Premium dropshipping storefront illustration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dropshipping Expert — Scale Your Store',
    description:
      'Product sourcing, CRO, and fast storefronts for serious e-commerce brands.',
    images: ['/storefront-hero.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: SITE.name }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen font-body antialiased',
          inter.variable,
          inter.className
        )}
      >
        <CursorGlow />
        {children}
      </body>
    </html>
  )
}
