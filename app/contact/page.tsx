import type { Metadata } from 'next'
import { MessageCircle, Mail, Phone } from 'lucide-react'

import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'
import PageHeader from '@/components/sections/PageHeader'
import SiteNavbar from '@/components/sections/SiteNavbar'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact | Expert Dropshipping Partner',
  description: `Contact ${SITE.name} for dropshipping storefronts, sourcing, and optimization.`,
}

export default function ContactPage() {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen">
        <PageHeader
          title="Get in Touch"
          subtitle="Ready to scale your dropshipping business? Let's talk numbers."
        />

        {/* WhatsApp & Email Quick Links */}
        <section className="px-4 py-10 md:px-8 lg:px-12">
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4">
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/923245895900" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 text-sm font-bold text-white transition hover:scale-105 active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>

            {/* Direct Email Button */}
            <a 
              href={`mailto:${SITE.email}`} 
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10 hover:scale-105 active:scale-95"
            >
              <Mail className="h-5 w-5" />
              Send Direct Email
            </a>
          </div>
        </section>

        <ContactSection />
        
        <Footer />
      </main>
    </>
  )
}
