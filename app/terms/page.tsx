import type { Metadata } from 'next'

import Footer from '@/components/sections/Footer'
import PageHeader from '@/components/sections/PageHeader'
import SiteNavbar from '@/components/sections/SiteNavbar'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Basic terms of use for this website.',
}

export default function TermsPage() {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen">
        <PageHeader
          title="Terms"
          subtitle="A short set of basic terms for using this site."
        />

        <section className="px-4 py-16 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-gray-300 md:p-10">
            <p>
              This website is provided for informational purposes. By using this
              site, you agree to these basic terms.
            </p>
            <div>
              <h2 className="text-base font-black text-white">No guarantees</h2>
              <p className="mt-2">
                Outcomes in e-commerce vary. Services are delivered based on the
                agreed scope. Results depend on many factors including traffic,
                offers, pricing, and operations.
              </p>
            </div>
            <div>
              <h2 className="text-base font-black text-white">Contact</h2>
              <p className="mt-2">
                For questions, contact <span className="font-semibold text-white">{SITE.name}</span>{' '}
                at <span className="font-semibold text-white">{SITE.email}</span>.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

