'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const NAV = [
  { href: '/shop', label: 'Shop' },
  { href: '/science', label: 'Science' },
  { href: '/journal', label: 'Journal' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      {/* Top announcement bar */}
      <div className="hidden md:block bg-plum-deep text-cream/85 text-[11px] tracking-[0.3em] uppercase font-medium py-2 text-center relative z-50">
        <span className="opacity-80">Now in clinical formulation</span>
        <span className="mx-3 opacity-40">·</span>
        <span>Founding access opens soon</span>
        <span className="mx-3 opacity-40">·</span>
        <span className="opacity-80">Join the waitlist</span>
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/85 backdrop-blur-xl border-b border-plum/10 py-3'
            : 'bg-transparent py-5'
        } ${pathname !== '/' && !scrolled ? 'bg-ivory/70 backdrop-blur-xl' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
          {/* Left */}
          <div className="flex-1 flex items-center">
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="md:hidden text-plum-deep p-2 -ml-2"
            >
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
                <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="0" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="0" y1="13" x2="14" y2="13" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>

            <nav className="hidden md:flex items-center gap-9">
              {NAV.slice(0, 3).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[12px] uppercase tracking-[0.25em] font-medium link-underline transition-colors ${
                    pathname === item.href ? 'text-plum-deep' : 'text-ink/75 hover:text-plum-deep'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center logo */}
          <div className="flex-shrink-0">
            <Logo color="plum" size="sm" withTagline={false} />
          </div>

          {/* Right */}
          <div className="flex-1 flex items-center justify-end gap-9">
            <nav className="hidden md:flex items-center gap-9">
              {NAV.slice(3).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[12px] uppercase tracking-[0.25em] font-medium link-underline transition-colors ${
                    pathname === item.href ? 'text-plum-deep' : 'text-ink/75 hover:text-plum-deep'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className="hidden md:block text-plum-deep/70 hover:text-plum-deep transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.5" y1="16.5" x2="21" y2="21" />
                </svg>
              </button>
              <Link
                href="/account"
                aria-label="Account"
                className="hidden md:block text-plum-deep/70 hover:text-plum-deep transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 22c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
              </Link>
              <button
                aria-label="Cart"
                className="text-plum-deep relative flex items-center gap-1.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 7h12l-1.5 12.5a2 2 0 0 1-2 1.75H9.5a2 2 0 0 1-2-1.75L6 7z" />
                  <path d="M9 7V5a3 3 0 0 1 6 0v2" />
                </svg>
                <span className="text-[11px] uppercase tracking-[0.25em] font-medium hidden lg:inline">Cart (0)</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[72px] md:h-[100px]" aria-hidden="true" />

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] md:hidden cinematic-plum"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <Logo color="cream" size="sm" withTagline={false} href={null} />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-cream p-2"
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <line x1="2" y1="2" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="20" y1="2" x2="2" y2="20" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
              }}
              className="px-8 mt-10 flex flex-col gap-5"
            >
              {NAV.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  <Link
                    href={item.href}
                    className="block font-display text-5xl text-cream"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className="hairline text-cream mt-6" />

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="flex flex-col gap-3 mt-2 text-cream/70 text-[12px] uppercase tracking-[0.3em]"
              >
                <Link href="/account" onClick={() => setOpen(false)}>Account</Link>
                <Link href="/returns" onClick={() => setOpen(false)}>Returns</Link>
                <span className="text-champagne/80 mt-4 normal-case tracking-normal">hello@vivienbiotherapy.com</span>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
