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
      <Link href={`/shop/${product.slug}`} className="block">
        {/* Visual */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] transition-all duration-700 ease-out group-hover:shadow-premium group-hover:rounded-[36px]">
          {/* Bottle visual — subtle zoom on hover */}
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            <ProductBottle
              name={product.name}
              tagline={product.tagline}
              bgFrom={product.bgFrom}
              bgTo={product.bgTo}
              accent={product.accent}
              showTagline={false}
            />
          </div>

          {/* Soft champagne glow that fades in on hover */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(220, 197, 154, 0.22) 0%, transparent 70%)',
            }}
          />

          {/* Status pill — top-left */}
          {product.status === 'coming-soon' && (
            <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-cream/95 backdrop-blur-sm text-plum-deep text-[10px] uppercase tracking-[0.3em] font-medium shadow-soft transition-opacity duration-500 group-hover:opacity-0">
              Coming Soon
            </div>
          )}

          {/* Notify Me — floats in from the centre, scales up softly */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out">
              <span className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-cream/95 backdrop-blur-md text-plum-deep text-[11px] uppercase tracking-[0.3em] font-medium shadow-premium border border-cream">
                Notify Me
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Meta — below the visual */}
        <div className="mt-6 flex items-start justify-between gap-4 px-1">
          <div className="min-w-0">
            <div className="text-plum-soft text-[10px] uppercase tracking-[0.4em] font-medium mb-2">
              {product.category}
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-plum-deep leading-tight transition-colors duration-300 group-hover:text-plum">
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
