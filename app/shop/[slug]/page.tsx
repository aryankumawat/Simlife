'use client'

import { motion } from 'framer-motion'
import { notFound, useParams } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import ProductBottle from '@/components/ProductBottle'
import { getProduct, PRODUCTS } from '@/lib/products'

export default function ProductPage() {
  const params = useParams<{ slug: string }>()
  const product = getProduct(params.slug)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (!product) return notFound()

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3)

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="bg-ivory">
      {/* HERO — split: product visual on plum, copy on cream */}
      <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[88vh]">
        {/* Left: bottle */}
        <div
          className="relative flex items-center justify-center py-20 lg:py-32 px-8"
          style={{
            background: `radial-gradient(ellipse at 30% 20%, ${product.accent}30 0%, transparent 60%), linear-gradient(160deg, ${product.bgFrom} 0%, ${product.bgTo} 100%)`,
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="orb orb-champagne" style={{ width: 400, height: 400, top: '10%', left: '5%' }} />
            <div className="orb orb-plum" style={{ width: 300, height: 300, bottom: '5%', right: '10%' }} />
          </div>
          <div className="relative z-10 w-full max-w-md aspect-[3/4]">
            <ProductBottle
              name={product.name}
              tagline={product.tagline}
              bgFrom={product.bgFrom}
              bgTo={product.bgTo}
              accent={product.accent}
              size="lg"
            />
          </div>
        </div>

        {/* Right: copy */}
        <div className="relative bg-ivory flex items-center px-6 md:px-12 lg:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl w-full"
          >
            <div className="text-plum-soft eyebrow mb-6">{product.hero.eyebrow}</div>
            <h1 className="editorial-h text-plum-deep text-5xl md:text-7xl mb-8">
              {product.hero.headline}
            </h1>
            <p className="text-ink/70 text-lg md:text-xl leading-relaxed font-light mb-10">
              {product.shortDescription}
            </p>

            {/* Pill benefits */}
            <div className="flex flex-wrap gap-2 mb-10">
              {product.pillBenefits.map((b) => (
                <span
                  key={b}
                  className="px-4 py-2 rounded-full border border-plum/20 text-plum-deep/85 text-xs font-medium"
                >
                  {b}
                </span>
              ))}
            </div>

            {/* Coming soon block */}
            <div className="border-t border-plum/15 pt-8 mb-8">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-ink/60 text-[11px] uppercase tracking-[0.3em] font-medium">From</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl text-plum-deep">₹{product.pricePlanned.toLocaleString('en-IN')}</span>
                  <span className="text-ink/50 text-sm">/ {product.servings.split(' · ')[0]}</span>
                </div>
              </div>
              <div className="text-plum text-[12px] uppercase tracking-[0.3em] font-medium">
                Coming Soon · Founders waitlist open
              </div>
            </div>

            {/* Notify form */}
            <form onSubmit={handleNotify} className="space-y-3">
              <label className="block">
                <span className="sr-only">Email address</span>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Your email address"
                    className="flex-1 px-5 py-4 rounded-full bg-cream/60 border border-plum/15 text-ink placeholder:text-ink/40 font-light focus:outline-none focus:border-plum focus:bg-cream transition-all"
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    Notify Me
                  </button>
                </div>
              </label>
              <p className="text-ink/55 text-xs leading-relaxed">
                Founders waitlist members receive first access, 20% off the launch cycle, and the full clinical
                dossier the week before public release.
              </p>
            </form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-plum-deep text-sm"
              >
                ✓ You&apos;re on the founders list for {product.name}.
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* THE SCIENCE STRIP */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
        >
          <div className="lg:col-span-4">
            <div className="eyebrow text-plum-soft mb-5">The Formulation</div>
            <h2 className="editorial-h text-plum-deep text-4xl md:text-5xl">
              Built around a single biological aim.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-ink/75 text-lg md:text-xl leading-relaxed font-light">
              {product.longDescription}
            </p>
          </div>
        </motion.div>
      </section>

      {/* INGREDIENTS TABLE */}
      <section className="bg-cream/40 border-y border-plum/10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="mb-12">
            <div className="eyebrow text-plum-soft mb-4">Inside the formulation</div>
            <h2 className="editorial-h text-plum-deep text-4xl md:text-5xl">Active ingredients.</h2>
          </div>

          <div className="divide-y divide-plum/15">
            {product.keyIngredients.map((ing, i) => (
              <motion.div
                key={ing.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="grid grid-cols-12 gap-4 md:gap-8 py-8"
              >
                <div className="col-span-12 md:col-span-1 text-plum/60 font-display text-2xl">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="col-span-12 md:col-span-5">
                  <div className="font-display text-2xl md:text-3xl text-plum-deep">{ing.name}</div>
                </div>
                <div className="col-span-6 md:col-span-2 text-plum text-base md:text-lg font-medium">
                  {ing.dose}
                </div>
                <div className="col-span-6 md:col-span-4 text-ink/70 leading-relaxed font-light">
                  {ing.purpose}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-8 md:gap-16 text-sm">
            <div>
              <div className="eyebrow text-plum-soft mb-2">Protocol</div>
              <div className="text-ink font-light">{product.protocol}</div>
            </div>
            <div>
              <div className="eyebrow text-plum-soft mb-2">Servings</div>
              <div className="text-ink font-light">{product.servings}</div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH NOTES */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="eyebrow text-plum-soft mb-5">The Research</div>
            <h2 className="editorial-h text-plum-deep text-4xl md:text-5xl mb-6">
              What the literature actually says.
            </h2>
            <p className="text-ink/65 text-base leading-relaxed font-light">
              Each formulation is anchored in peer-reviewed work. The dossier below is a small sample — the full
              reference list ships with every bottle.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {product.research.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="border-l-2 border-plum pl-6 py-2"
              >
                <p className="text-ink/85 text-lg leading-relaxed font-light italic">
                  &ldquo;{r}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-plum-deep text-cream py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <div className="eyebrow text-champagne mb-4">Common questions</div>
            <h2 className="editorial-h text-cream text-4xl md:text-6xl">A few honest answers.</h2>
          </div>
          <div className="divide-y divide-cream/15">
            {product.faq.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="py-8"
              >
                <h3 className="font-display text-2xl md:text-3xl text-cream mb-3">{f.q}</h3>
                <p className="text-cream/70 leading-relaxed font-light text-base md:text-lg">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="eyebrow text-plum-soft mb-3">Complete the stack</div>
            <h2 className="editorial-h text-plum-deep text-3xl md:text-5xl">More protocols.</h2>
          </div>
          <Link href="/shop" className="text-plum-deep link-underline text-[12px] uppercase tracking-[0.3em] font-medium hidden md:block">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {related.map((p, i) => (
            <Link key={p.slug} href={`/shop/${p.slug}`} className="block card-lift">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <ProductBottle name={p.name} tagline={p.tagline} bgFrom={p.bgFrom} bgTo={p.bgTo} accent={p.accent} />
              </div>
              <div className="mt-5">
                <div className="text-plum-soft text-[10px] uppercase tracking-[0.4em] font-medium mb-1.5">{p.category}</div>
                <h3 className="font-display text-2xl text-plum-deep">{p.name}</h3>
                <p className="text-ink/65 text-sm mt-1 font-light">{p.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
