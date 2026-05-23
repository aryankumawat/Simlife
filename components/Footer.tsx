'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'

const FOOTER_NAV = [
  {
    head: 'Shop',
    links: [
      { label: 'Cellular Renewal', href: '/shop/cellular-renewal' },
      { label: 'Cognitive Clarity', href: '/shop/cognitive-clarity' },
      { label: 'Recovery Matrix', href: '/shop/recovery-matrix' },
      { label: 'Vitality Foundations', href: '/shop/vitality-foundations' },
      { label: 'All Protocols', href: '/shop' },
    ],
  },
  {
    head: 'Vivien',
    links: [
      { label: 'The Science', href: '/science' },
      { label: 'About', href: '/about' },
      { label: 'Journal', href: '/journal' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    head: 'Support',
    links: [
      { label: 'Returns Policy', href: '/returns' },
      { label: 'Shipping', href: '/contact' },
      { label: 'Account', href: '/account' },
      { label: 'FAQ', href: '/contact' },
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="bg-plum-deep text-cream pt-20 md:pt-28 pb-10 relative overflow-hidden">
      {/* Ambient orbs */}
      <div className="orb orb-plum" style={{ width: 420, height: 420, top: '-15%', right: '-10%', opacity: 0.4 }} />
      <div className="orb orb-champagne" style={{ width: 360, height: 360, bottom: '-20%', left: '-10%', opacity: 0.25 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        {/* Top — large logo + newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 md:pb-20 border-b border-cream/15">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6"
          >
            <Logo color="cream" size="lg" href={null} />
            <p className="mt-8 text-cream/65 font-light leading-relaxed max-w-md text-lg">
              Engineered vitality. Cellular performance. A next-generation BioTherapy company building
              clinically formulated supplements for serious people.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-6 lg:pl-12"
          >
            <div className="eyebrow text-champagne mb-4">Stay close</div>
            <p className="font-display text-cream text-3xl md:text-4xl leading-snug mb-6">
              Join the founders waitlist.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubscribed(true)
                setEmail('')
                setTimeout(() => setSubscribed(false), 5000)
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 rounded-full bg-cream/8 border border-cream/20 text-cream placeholder:text-cream/40 font-light text-sm focus:outline-none focus:border-champagne transition-all"
              />
              <button type="submit" className="btn-cream whitespace-nowrap">
                Join →
              </button>
            </form>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-champagne text-sm"
              >
                ✓ You&apos;re in. Welcome to Vivien.
              </motion.p>
            )}
            <p className="mt-4 text-cream/40 text-xs leading-relaxed">
              No marketing churn. We email when there&apos;s something real to share.
            </p>
          </motion.div>
        </div>

        {/* Nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 py-16">
          {FOOTER_NAV.map((col) => (
            <div key={col.head}>
              <div className="eyebrow text-champagne mb-5">{col.head}</div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="text-cream/70 hover:text-cream font-light text-sm transition-colors link-underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <div className="eyebrow text-champagne mb-5">Reach us</div>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a href="mailto:hello@vivienbiotherapy.com" className="text-cream/70 hover:text-cream link-underline">
                  hello@vivienbiotherapy.com
                </a>
              </li>
              <li>
                <a href="mailto:support@vivienbiotherapy.com" className="text-cream/70 hover:text-cream link-underline">
                  support@vivienbiotherapy.com
                </a>
              </li>
              <li className="text-cream/50">Mon–Sat · 10:00–18:00</li>
            </ul>

            <div className="mt-7 flex items-center gap-4">
              {[
                { label: 'IG', href: 'https://www.instagram.com/vivienbiotherapy/', name: 'Instagram' },
                { label: 'TT', href: '#', name: 'TikTok' },
                { label: 'YT', href: '#', name: 'YouTube' },
                { label: 'X',  href: '#', name: 'X (Twitter)' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full border border-cream/25 flex items-center justify-center text-[10px] uppercase tracking-[0.2em] text-cream/75 hover:bg-cream hover:text-plum-deep transition-all duration-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Wordmark band — large */}
        <div className="pt-8 pb-8 overflow-hidden border-t border-cream/15">
          <div className="flex items-center justify-between gap-6 flex-wrap text-cream/30">
            <div className="font-display italic text-5xl md:text-9xl leading-none tracking-tight whitespace-nowrap">
              vi<span className="not-italic font-semibold">V</span>ien
            </div>
            <div className="text-cream/40 text-[11px] tracking-[0.4em] uppercase">BioTherapy</div>
          </div>
        </div>

        {/* Bottom fine print */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-cream/40 text-xs">
          <p>© {new Date().getFullYear()} Vivien BioTherapy. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/returns" className="link-underline hover:text-cream/70">Returns</Link>
            <Link href="/contact" className="link-underline hover:text-cream/70">Privacy</Link>
            <Link href="/contact" className="link-underline hover:text-cream/70">Terms</Link>
            <span className="text-cream/30">·</span>
            <span>Statements have not been evaluated by the FDA.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
