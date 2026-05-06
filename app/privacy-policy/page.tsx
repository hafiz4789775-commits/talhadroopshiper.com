import type { Metadata } from 'next'

import Footer from '@/components/sections/Footer'
import PageHeader from '@/components/sections/PageHeader'
import SiteNavbar from '@/components/sections/SiteNavbar'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for this website and contact form.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen">
        <PageHeader
          title="Privacy Policy"
          subtitle="Simple and transparent privacy details."
        />

        <section className="px-4 py-16 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-gray-300 md:p-10">
            <p>
              This website is operated by <span className="font-semibold text-white">{SITE.name}</span>.
            </p>
            <div>
              <h2 className="text-base font-black text-white">Contact form</h2>
              <p className="mt-2">
                If you submit the contact form, we may receive your name, email,
                phone number, and message. This data is used only to respond to
                your inquiry.
              </p>
            </div>
            <div>
              <h2 className="text-base font-black text-white">No passwords</h2>
              <p className="mt-2">
                Do not send passwords or private credentials. We do not store
                passwords in the website code.
              </p>
            </div>
            <div>
              <h2 className="text-base font-black text-white">Analytics</h2>
              <p className="mt-2">
                This template does not include third-party analytics by default.
                If analytics are added later, this policy should be updated.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

