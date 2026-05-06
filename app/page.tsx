import HeroSection from '@/components/sections/HeroSection'
import InfiniteMarquee from '@/components/sections/InfiniteMarquee'
import ProjectTimeline from '@/components/sections/ProjectTimeline'
import SplineShowcase from '@/components/sections/SplineShowcase'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'
import SiteNavbar from '@/components/sections/SiteNavbar'
import { DEFAULT_SITE_URL } from '@/lib/site'

const siteUrl = DEFAULT_SITE_URL

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Expert Dropshipping Partner',
  description:
    'Dropshipping storefront development, product sourcing, and conversion optimization for e-commerce brands.',
  url: siteUrl,
  areaServed: 'Worldwide',
  serviceType: [
    'Dropshipping store development',
    'Product sourcing',
    'E-commerce conversion optimization',
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        <SiteNavbar />
        <HeroSection />
        <InfiniteMarquee />
        <ProjectTimeline />
        <SplineShowcase />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
