'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from 'react'
import Logo from '@/components/Logo'
import ProductCard from '@/components/ProductCard'
import ProductBottle from '@/components/ProductBottle'
import { PRODUCTS } from '@/lib/products'

const PILLARS = [
  {
    no: '01',
    title: 'Cellular Optimization',
    body: 'We engineer at the level of the mitochondrion. NAD⁺ precursors, sirtuin co-activators, methylation balance — the energy currency of every cell, restored.',
  },
  {
    no: '02',
    title: 'Cognitive Clarity',
    body: 'Stimulant-modulated nootropic matrices for sustained focus and long-arc neuroplasticity. No jitter. No mid-day collapse. Real, durable cognition.',
  },
  {
    no: '03',
    title: 'Recovery Architecture',
    body: 'Sleep is where adaptation happens. We build the conditions for deep, restorative recovery — without sedating you, without melatonin dependence.',
  },
  {
    no: '04',
    title: 'Metabolic Foundations',
    body: 'A proper nutritional floor — methylated B-complex, D3/K2, omega-3 in triglyceride form, chelated minerals. The infrastructure modern diets quietly miss.',
  },
]

const PRESS_LOGOS = [
  'Forbes Health', 'Wired', 'GQ', 'Vogue', 'Outside', 'Bloomberg', 'Architectural Digest', 'The Times',
]

const JOURNAL_PREVIEW = [
  {
    cat: 'Longevity',
    title: 'What we mean when we say "cellular age."',
    excerpt: 'NAD⁺ is more than a buzzword. A short field guide to what the biomarker actually measures, and why it matters.',
    read: '6 min read',
  },
  {
    cat: 'Performance',
    title: 'The case against melatonin.',
    excerpt: 'Why we left it out of Recovery Matrix — and what your endocrine system would prefer instead.',
    read: '8 min read',
  },
  {
    cat: 'Formulation',
    title: 'On methylation, and why your B-vitamin probably isn\'t working.',
    excerpt: '~40% of adults carry an MTHFR variant. Most multivitamins are formulated for the other 60%.',
    read: '5 min read',
  },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2])

  const [email, setEmail] = useState('')
  const [signedUp, setSignedUp] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSignedUp(true)
    setEmail('')
    setTimeout(() => setSignedUp(false), 5000)
  }

  return (
    <>
      {/* ============================================================ */}
      {/* HERO                                                          */}
      {/* ============================================================ */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] cinematic-plum overflow-hidden flex items-center"
      >
        {/* Decorative orbs */}
        <div className="orb orb-champagne" style={{ width: 520, height: 520, top: '-10%', right: '-10%' }} />
        <div className="orb orb-plum" style={{ width: 420, height: 420, bottom: '-15%', left: '-5%' }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-5 md:px-10 pt-12 md:pt-20 pb-24 md:pb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-10"
            >
              <span className="w-12 h-px bg-champagne/60" />
              <span className="eyebrow text-champagne/85">Engineered Vitality · Founding chapter</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="editorial-h text-cream text-[clamp(3.5rem,9vw,9rem)] max-w-5xl"
            >
              Performance,{' '}
              <em className="font-display italic shimmer">at the cellular level.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 max-w-2xl text-cream/75 text-lg md:text-xl font-light leading-relaxed"
            >
              Vivien Biotherapy is a next-generation biotherapy company building clinically formulated
              supplements for cellular optimization, recovery, cognitive clarity, and long-term vitality —
              for people who take their biology seriously.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-wrap items-center gap-5"
            >
              <Link href="/shop" className="btn-cream">
                Explore the Collection
              </Link>
              <Link href="/science" className="text-cream/80 hover:text-cream link-underline text-[12px] uppercase tracking-[0.3em] font-medium">
                The science →
              </Link>
            </motion.div>

            {/* hero stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="mt-24 md:mt-32 grid grid-cols-3 gap-6 md:gap-12 max-w-3xl"
            >
              {[
                { v: '4', l: 'Clinical protocols' },
                { v: '24+', l: 'Active ingredients' },
                { v: '100%', l: 'Third-party verified' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-5xl md:text-6xl text-cream">{s.v}</div>
                  <div className="text-champagne/80 eyebrow mt-2">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-cream/50 text-[10px] uppercase tracking-[0.5em]"
        >
          Scroll
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* MANIFESTO STRIP (marquee)                                     */}
      {/* ============================================================ */}
      <section className="bg-cream py-6 md:py-8 border-y border-plum/10 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16 shrink-0">
              {[
                'Cellular Optimization',
                '✦',
                'Recovery Architecture',
                '✦',
                'Cognitive Clarity',
                '✦',
                'Metabolic Efficiency',
                '✦',
                'Long-Term Vitality',
                '✦',
                'Scientific Precision',
                '✦',
              ].map((w, idx) => (
                <span
                  key={idx}
                  className={`shrink-0 ${w === '✦' ? 'text-champagne text-lg' : 'font-display italic text-plum-deep text-3xl md:text-5xl'}`}
                >
                  {w}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* FEATURED PRODUCTS                                             */}
      {/* ============================================================ */}
      <section className="cinematic-cream py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24"
          >
            <div className="lg:col-span-6">
              <div className="eyebrow text-plum-soft mb-5">The Collection · Founding line</div>
              <h2 className="editorial-h text-plum-deep text-5xl md:text-7xl">
                Four protocols.{' '}
                <em className="font-display italic">One system.</em>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 self-end">
              <p className="text-ink/70 text-lg leading-relaxed font-light">
                Each formulation is designed around a specific biological aim — and engineered to compound,
                when stacked, into a complete daily protocol.
              </p>
              <Link href="/shop" className="mt-6 inline-block text-plum-deep link-underline text-[12px] uppercase tracking-[0.3em] font-medium">
                View the full collection →
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FEATURED PRODUCT (large editorial card)                       */}
      {/* ============================================================ */}
      <section className="bg-ivory">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <ProductBottle
                name={PRODUCTS[0].name}
                tagline={PRODUCTS[0].tagline}
                bgFrom={PRODUCTS[0].bgFrom}
                bgTo={PRODUCTS[0].bgTo}
                accent={PRODUCTS[0].accent}
                size="lg"
              />
            </div>
            <div>
              <div className="eyebrow text-plum-soft mb-5">Featured · Cellular Tier I</div>
              <h2 className="editorial-h text-plum-deep text-5xl md:text-7xl mb-8">
                {PRODUCTS[0].hero.headline}
              </h2>
              <p className="text-ink/70 text-lg md:text-xl leading-relaxed font-light mb-8">
                {PRODUCTS[0].longDescription}
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {PRODUCTS[0].pillBenefits.map((b) => (
                  <span key={b} className="px-4 py-2 rounded-full border border-plum/20 text-plum-deep/85 text-xs font-medium">
                    {b}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href={`/shop/${PRODUCTS[0].slug}`} className="btn-primary">
                  Read the Protocol
                </Link>
                <Link href="/shop" className="btn-ghost">
                  See All Products
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PHILOSOPHY / PILLARS                                          */}
      {/* ============================================================ */}
      <section className="bg-plum-deep text-cream py-24 md:py-40 relative overflow-hidden">
        <div className="orb orb-champagne" style={{ width: 500, height: 500, top: '-15%', right: '-10%' }} />
        <div className="orb orb-plum" style={{ width: 400, height: 400, bottom: '-10%', left: '-10%' }} />

        <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-20"
          >
            <div className="eyebrow text-champagne mb-5">The Vivien Philosophy</div>
            <h2 className="editorial-h text-cream text-5xl md:text-7xl">
              Biology is the first principle.
            </h2>
            <p className="mt-8 text-cream/70 text-lg md:text-xl font-light leading-relaxed">
              We don&apos;t formulate for what&apos;s trendy. We formulate for the four biological systems that
              actually determine how you feel, perform, and age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.no}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-cream/20 pt-8"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-champagne text-3xl">{p.no}</span>
                  <h3 className="font-display text-3xl md:text-4xl text-cream">{p.title}</h3>
                </div>
                <p className="mt-4 text-cream/65 leading-relaxed font-light pl-[3.5rem]">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOUNDER / STORY STRIP                                         */}
      {/* ============================================================ */}
      <section className="bg-cream/40">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <div
              className="aspect-[4/5] rounded-3xl relative overflow-hidden"
              style={{
                background:
                  'radial-gradient(ellipse at 30% 20%, #C9A87635 0%, transparent 60%), linear-gradient(160deg, #4A1F44 0%, #2A0F2E 100%)',
              }}
            >
              <div className="orb orb-champagne" style={{ width: 280, height: 280, top: '10%', left: '10%' }} />
              <div className="absolute inset-0 flex items-center justify-center px-10">
                <div className="text-center">
                  <Logo color="cream" size="xl" />
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <div className="eyebrow text-plum-soft mb-5">Why we built this</div>
            <h2 className="editorial-h text-plum-deep text-4xl md:text-6xl mb-8">
              The supplement industry is crowded.{' '}
              <em className="font-display italic">Clarity is rare.</em>
            </h2>
            <div className="space-y-5 text-ink/70 text-lg leading-relaxed font-light">
              <p>
                Most products under-dose, over-promise, and prioritise marketing over the formulation itself.
                Vivien Biotherapy was built to change that standard — clinical formulation logic, premium
                manufacturing, full transparency, and a long-term view.
              </p>
              <p>
                We&apos;re building this for the next several decades. The product is the proof.
              </p>
            </div>
            <Link href="/about" className="mt-10 inline-block btn-ghost">
              Read the Vivien story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRESS / TRUST STRIP                                           */}
      {/* ============================================================ */}
      <section className="bg-ivory border-y border-plum/10 py-12 md:py-16 overflow-hidden">
        <div className="text-center mb-8">
          <span className="eyebrow text-plum-soft">As recognised in</span>
        </div>
        <div className="marquee-track items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20 shrink-0">
              {PRESS_LOGOS.map((logo, idx) => (
                <span
                  key={idx}
                  className="font-display text-2xl md:text-3xl text-plum-deep/40 shrink-0 italic"
                >
                  {logo}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* JOURNAL PREVIEW                                               */}
      {/* ============================================================ */}
      <section className="cinematic-cream py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div className="max-w-2xl">
              <div className="eyebrow text-plum-soft mb-5">The Journal</div>
              <h2 className="editorial-h text-plum-deep text-5xl md:text-7xl">
                Field notes from the lab.
              </h2>
            </div>
            <Link href="/journal" className="text-plum-deep link-underline text-[12px] uppercase tracking-[0.3em] font-medium">
              All essays →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {JOURNAL_PREVIEW.map((j, i) => (
              <motion.article
                key={j.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <Link href="/journal" className="block">
                  <div
                    className="aspect-[5/4] rounded-2xl mb-6 overflow-hidden relative"
                    style={{
                      background:
                        i === 0
                          ? 'linear-gradient(160deg, #4A1F44 0%, #2A0F2E 100%)'
                          : i === 1
                          ? 'linear-gradient(160deg, #5A2A55 0%, #4A1F44 100%)'
                          : 'linear-gradient(160deg, #7A4A6F 0%, #4A1F44 100%)',
                    }}
                  >
                    <div className="orb orb-champagne" style={{ width: 200, height: 200, top: '20%', right: '15%' }} />
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="eyebrow text-champagne">{j.cat}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-plum-deep group-hover:text-plum transition-colors leading-tight">
                    {j.title}
                  </h3>
                  <p className="mt-3 text-ink/65 leading-relaxed font-light">{j.excerpt}</p>
                  <div className="mt-4 text-plum-soft text-xs uppercase tracking-[0.25em] font-medium">{j.read}</div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* NEWSLETTER / FOUNDERS                                         */}
      {/* ============================================================ */}
      <section className="bg-plum-deep py-24 md:py-36 relative overflow-hidden">
        <div className="orb orb-champagne" style={{ width: 500, height: 500, top: '-20%', left: '-10%' }} />
        <div className="orb orb-plum" style={{ width: 400, height: 400, bottom: '-20%', right: '-10%' }} />

        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center relative z-10">
          <div className="eyebrow text-champagne mb-6">Founders waitlist</div>
          <h2 className="editorial-h text-cream text-5xl md:text-7xl mb-8">
            Be the first to <em className="font-display italic shimmer">experience Vivien.</em>
          </h2>
          <p className="text-cream/70 text-lg leading-relaxed font-light mb-12 max-w-xl mx-auto">
            Founding-list members receive first access to every protocol, 20% off the launch cycle, and the full
            clinical dossier the week before public release.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 font-light focus:outline-none focus:border-champagne focus:bg-cream/15 transition-all"
            />
            <button type="submit" className="btn-cream whitespace-nowrap">
              Join the list
            </button>
          </form>
          {signedUp && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 text-champagne text-sm"
            >
              ✓ You&apos;re in. We&apos;ll be in touch.
            </motion.p>
          )}

          <p className="mt-8 text-cream/40 text-xs leading-relaxed">
            We email once, when there&apos;s something real to share. No marketing churn.
          </p>
        </div>
      </section>
    </>
  )
}
