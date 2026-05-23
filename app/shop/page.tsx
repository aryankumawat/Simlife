'use client'

import { motion } from 'framer-motion'
import ProductCard from '@/components/ProductCard'
import { PRODUCTS } from '@/lib/products'
import Link from 'next/link'

const CATEGORIES = ['All', 'Cellular', 'Cognitive', 'Recovery', 'Foundations'] as const

export default function ShopPage() {
  return (
    <div className="cinematic-cream pb-32">
      {/* Hero strip */}
      <section className="relative border-b border-plum/10">
        <div className="max-w-7xl mx-auto px-5 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="eyebrow text-plum-soft mb-6">The Collection · Founding line</div>
            <h1 className="editorial-h text-plum-deep text-6xl md:text-8xl mb-8">
              The <em className="font-display italic text-plum">Vivien</em> protocols.
            </h1>
            <p className="text-ink/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Four formulations. One philosophy. Each protocol is engineered for a specific biological system —
              and designed to compound, when stacked together, into a complete model of daily performance.
            </p>
          </motion.div>

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap items-center gap-3"
          >
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                className={`px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[0.3em] font-medium border transition-all duration-300 ${
                  i === 0
                    ? 'bg-plum-deep text-cream border-plum-deep'
                    : 'bg-transparent text-ink/70 border-plum/20 hover:border-plum hover:text-plum-deep'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 pt-16 md:pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Stack callout */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 mt-24 md:mt-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative cinematic-plum rounded-3xl px-8 py-16 md:px-16 md:py-24 overflow-hidden"
        >
          <div className="orb orb-champagne" style={{ width: 360, height: 360, top: -120, right: -120 }} />
          <div className="orb orb-plum" style={{ width: 320, height: 320, bottom: -100, left: -100 }} />

          <div className="relative z-10 max-w-3xl">
            <div className="eyebrow text-champagne mb-6">The Foundational Stack</div>
            <h2 className="editorial-h text-cream text-4xl md:text-6xl mb-6">
              Four protocols. <em className="font-display italic text-champagne">One daily rhythm.</em>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed font-light mb-10">
              The Vivien stack is sequenced for your circadian biology — foundational nutrients with breakfast,
              cellular signalling and cognition through the day, recovery before sleep. Subscribe to all four and
              save 20% on every cycle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/science" className="btn-cream">Read the protocol</Link>
              <Link href="/about" className="text-cream/80 hover:text-cream link-underline text-[12px] uppercase tracking-[0.3em] font-medium self-center">
                The story behind Vivien
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
