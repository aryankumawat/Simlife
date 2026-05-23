'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ProductBottle from './ProductBottle'
import type { Product } from '@/lib/products'

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link href={`/shop/${product.slug}`} className="block card-lift">
        {/* Visual */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <ProductBottle
            name={product.name}
            tagline={product.tagline}
            bgFrom={product.bgFrom}
            bgTo={product.bgTo}
            accent={product.accent}
            showTagline={false}
          />

          {/* Status pill — top-left */}
          {product.status === 'coming-soon' && (
            <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-cream/95 backdrop-blur-sm text-plum-deep text-[10px] uppercase tracking-[0.3em] font-medium shadow-soft">
              Coming Soon
            </div>
          )}

          {/* Hover overlay — full-bleed gradient + centered Notify Me */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style={{
                 background:
                   'linear-gradient(180deg, rgba(42,15,46,0) 0%, rgba(42,15,46,0) 50%, rgba(42,15,46,0.7) 100%)',
               }}
          />
          <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex justify-center">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream text-plum-deep text-[11px] uppercase tracking-[0.3em] font-medium shadow-premium">
              Notify Me
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>

        {/* Meta — below the visual */}
        <div className="mt-6 flex items-start justify-between gap-4 px-1">
          <div className="min-w-0">
            <div className="text-plum-soft text-[10px] uppercase tracking-[0.4em] font-medium mb-2">
              {product.category}
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-plum-deep leading-tight">
              {product.name}
            </h3>
            <p className="text-ink/65 text-sm mt-1.5 leading-relaxed font-light">
              {product.tagline}
            </p>
          </div>

          {/* Price block — "From" on top, price below */}
          <div className="text-right shrink-0 pt-1">
            <div className="text-ink/55 text-[10px] uppercase tracking-[0.3em] font-medium mb-1">
              From
            </div>
            <div className="font-display text-plum-deep text-2xl">
              ₹{product.pricePlanned.toLocaleString('en-IN')}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
