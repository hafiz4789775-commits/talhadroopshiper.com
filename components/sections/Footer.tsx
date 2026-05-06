import { MapPin, DollarSign } from 'lucide-react'
import { SITE } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="py-16 px-4 md:px-8 lg:px-16 border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="glass inline-flex items-center px-6 py-3 rounded-full neon-glow">
          <MapPin className="w-5 h-5 mr-2 text-primary" />
          <span className="font-medium">
            {SITE.city}, {SITE.region} ({SITE.postalCode})
          </span>
        </div>

        <div className="glass inline-flex items-center px-6 py-3 rounded-full neon-glow">
          <DollarSign className="w-5 h-5 mr-2 text-emerald-400" />
          <span className="font-medium">All prices in {SITE.currency}</span>
        </div>

        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {SITE.name}. Built with Next.js + Three.js.
        </div>
      </div>
    </footer>
  )
}
