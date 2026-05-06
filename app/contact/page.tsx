import type { Metadata } from 'next'

import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'
import PageHeader from '@/components/sections/PageHeader'
import SiteNavbar from '@/components/sections/SiteNavbar'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${SITE.name} for dropshipping storefronts, sourcing, and optimization.`,
}

export default function ContactPage() {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen">
        <PageHeader
          title="Contact"
          subtitle="Send your project details and get a clear next step."
        />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}

