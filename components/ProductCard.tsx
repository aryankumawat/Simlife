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
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <ProductBottle
            name={product.name}
            tagline={product.tagline}
            bgFrom={product.bgFrom}
            bgTo={product.bgTo}
            accent={product.accent}
          />

          {/* Status pill */}
          {product.status === 'coming-soon' && (
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-cream/95 backdrop-blur-sm text-plum-deep text-[10px] uppercase tracking-[0.3em] font-medium">
              Coming Soon
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
            <div className="w-full">
              <div className="text-cream text-[11px] uppercase tracking-[0.3em] font-medium">
                Notify me →
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-start justify-between gap-4">
          <div>
            <div className="text-plum-soft text-[10px] uppercase tracking-[0.4em] font-medium mb-1.5">
              {product.category}
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-plum-deep leading-tight">
              {product.name}
            </h3>
            <p className="text-ink/65 text-sm mt-1.5 leading-relaxed font-light">
              {product.tagline}
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-plum-deep text-base font-light">
              ₹{product.pricePlanned.toLocaleString('en-IN')}
            </div>
            <div className="text-ink/50 text-[10px] uppercase tracking-[0.25em] mt-1">
              From
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
