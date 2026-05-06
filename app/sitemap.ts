import type { MetadataRoute } from 'next'
import { DEFAULT_SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = DEFAULT_SITE_URL.replace(/\/$/, '')
  const routes = [
    '/',
    '/about',
    '/services',
    '/portfolio',
    '/pricing',
    '/blog',
    '/faq',
    '/contact',
    '/privacy-policy',
    '/terms',
  ]

  return routes.map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }))
}

