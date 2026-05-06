'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { cn } from '@/lib/utils'

type NavItem = { href: string; label: string }

export default function SiteNavbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const items = useMemo<NavItem[]>(
    () => [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/services', label: 'Services' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/blog', label: 'Blog' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact' },
    ],
    []
  )

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname?.startsWith(href))

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent backdrop-blur-[10px]" />
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold tracking-wide text-white/90 backdrop-blur"
          onClick={() => setOpen(false)}
        >
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_rgba(0,245,255,0.55)]" />
          <span className="bg-gradient-to-r from-primary via-cyan-200 to-secondary bg-clip-text text-transparent">
            Talha Dropshipping
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:text-white',
                isActive(item.href) && 'bg-white/10 text-white'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/privacy-policy"
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium text-white/60 transition hover:text-white',
              isActive('/privacy-policy') && 'bg-white/10 text-white'
            )}
          >
            Privacy
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/90 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="md:hidden"
          >
            <div className="mx-4 mb-4 rounded-3xl border border-white/10 bg-[#070708]/90 p-3 backdrop-blur">
              <div className="grid grid-cols-2 gap-2">
                {items.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-2xl px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white',
                      isActive(item.href) && 'bg-white/10 text-white'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/privacy-policy"
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white',
                    isActive('/privacy-policy') && 'bg-white/10 text-white'
                  )}
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white',
                    isActive('/terms') && 'bg-white/10 text-white'
                  )}
                >
                  Terms
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

