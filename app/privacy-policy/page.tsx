import type { Metadata } from 'next'

import Footer from '@/components/sections/Footer'
import PageHeader from '@/components/sections/PageHeader'
import SiteNavbar from '@/components/sections/SiteNavbar'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | Professional Consulting',
  description: 'How we handle your data and protect your privacy at HM Digital SEO Agency.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen">
        <PageHeader
          title="Privacy Policy"
          subtitle="Your trust is our priority. We handle your data with professional care."
        />

        <section className="px-4 py-16 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-gray-300 md:p-10">
            <p className="text-base">
              This consultancy website is operated by <span className="font-semibold text-white">{SITE.name}</span>. We are committed to protecting your privacy and ensuring a secure experience.
            </p>
            
            <hr className="border-white/10" />

            <div>
              <h2 className="text-lg font-black text-white">Information Collection</h2>
              <p className="mt-3 leading-relaxed">
                When you use our contact form, we collect your name, email address, and phone number. This information is strictly used for professional communication and providing you with our dropshipping consultancy services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-black text-white">Consultancy & Third Parties</h2>
              <p className="mt-3 leading-relaxed">
                As a dropshipping and e-commerce expert, we never share your personal business details, store credentials, or private strategies with third-party vendors without your explicit consent. Your business privacy is paramount.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-black text-white">Data Security</h2>
              <p className="mt-3 leading-relaxed">
                We do not store passwords or sensitive financial credentials in our website code. We advise all clients never to share login details through the contact form. All communications are handled through secure professional channels.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-black text-white">Updates</h2>
              <p className="mt-3 leading-relaxed">
                This policy is subject to change as our services grow. We recommend checking this page periodically to stay informed about how we are protecting your information.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 text-xs text-gray-500 italic">
              Last updated: May 2026. For any privacy-related questions, please reach out via our contact page.
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
