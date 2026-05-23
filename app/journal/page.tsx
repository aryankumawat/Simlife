'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const ARTICLES = [
  {
    cat: 'Longevity',
    title: 'What we mean when we say "cellular age."',
    excerpt:
      'NAD⁺, sirtuins, and mitochondrial output — a short field guide to what biological-age markers actually measure, and why they matter more than the year on your birth certificate.',
    read: '6 min read',
    date: 'May 2026',
    bg: 'linear-gradient(160deg, #4A1F44 0%, #2A0F2E 100%)',
  },
  {
    cat: 'Performance',
    title: 'The case against melatonin.',
    excerpt:
      'Why we left it out of Recovery Matrix — and what your endocrine system would prefer instead. A look at chronic supplementation, receptor desensitisation, and the alternatives that actually work.',
    read: '8 min read',
    date: 'May 2026',
    bg: 'linear-gradient(160deg, #5A2A55 0%, #3A1840 100%)',
  },
  {
    cat: 'Formulation',
    title: "On methylation, and why your B-vitamin probably isn't working.",
    excerpt:
      '~40% of adults carry an MTHFR variant that limits folic acid conversion. Most multivitamins are formulated for the other 60%. Here\'s what to look for instead.',
    read: '5 min read',
    date: 'April 2026',
    bg: 'linear-gradient(160deg, #7A4A6F 0%, #4A1F44 100%)',
  },
  {
    cat: 'Recovery',
    title: 'Glycine and the architecture of slow-wave sleep.',
    excerpt:
      'A non-sedating amino acid that quietly does more for sleep depth than most pharmaceutical alternatives. The mechanism, the dose, the timing.',
    read: '7 min read',
    date: 'April 2026',
    bg: 'linear-gradient(160deg, #2A0F2E 0%, #1A0A1C 100%)',
  },
  {
    cat: 'Cognition',
    title: 'Lion\'s Mane: the most over-hyped, most under-dosed nootropic.',
    excerpt:
      'Why most Lion\'s Mane supplements deliver about 5% of the active fraction the research is based on — and what an honest dose actually looks like.',
    read: '6 min read',
    date: 'March 2026',
    bg: 'linear-gradient(160deg, #4A1F44 0%, #5A2A55 100%)',
  },
  {
    cat: 'Bioavailability',
    title: 'Why form is everything: NMN vs. NR vs. niacin.',
    excerpt:
      'All three raise NAD⁺ on paper. They are not interchangeable. A short, technical look at why we chose NMN for Cellular Renewal — and how to read the literature behind the choice.',
    read: '9 min read',
    date: 'March 2026',
    bg: 'linear-gradient(160deg, #3A1840 0%, #2A0F2E 100%)',
  },
]

const CATS = ['All', 'Longevity', 'Performance', 'Recovery', 'Cognition', 'Formulation'] as const

export default function JournalPage() {
  return (
    <>
      {/* HERO */}
      <section className="cinematic-cream pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10 pt-12 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="eyebrow text-plum-soft mb-6">The Journal</div>
            <h1 className="editorial-h text-plum-deep text-6xl md:text-9xl mb-8">
              <em className="font-display italic">Field notes</em> from the lab.
            </h1>
            <p className="text-ink/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Long-form essays from the Vivien formulation team — on the science we use, the protocols we&apos;ve
              built, and the reasoning behind every decision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap items-center gap-3"
          >
            {CATS.map((cat, i) => (
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

      {/* FEATURED — first article */}
      <section className="bg-ivory">
        <div className="max-w-7xl mx-auto px-5 md:px-10 pb-16 md:pb-24">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group cursor-pointer"
          >
            <div
              className="lg:col-span-7 aspect-[16/10] rounded-3xl overflow-hidden relative card-lift"
              style={{ background: ARTICLES[0].bg }}
            >
              <div className="orb orb-champagne" style={{ width: 340, height: 340, top: '15%', right: '10%' }} />
              <div className="absolute bottom-8 left-8">
                <span className="eyebrow text-champagne">{ARTICLES[0].cat}</span>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="eyebrow text-plum-soft mb-4">Featured · {ARTICLES[0].date}</div>
              <h2 className="font-display text-4xl md:text-6xl text-plum-deep mb-6 leading-tight group-hover:text-plum transition-colors">
                {ARTICLES[0].title}
              </h2>
              <p className="text-ink/70 text-lg leading-relaxed font-light mb-6">{ARTICLES[0].excerpt}</p>
              <div className="flex items-center gap-4 text-plum text-sm font-medium">
                <span>{ARTICLES[0].read}</span>
                <span className="w-12 h-px bg-plum/30" />
                <span className="link-underline">Read essay →</span>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* GRID — remaining articles */}
      <section className="bg-cream/30 border-t border-plum/10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {ARTICLES.slice(1).map((a, i) => (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <div
                  className="aspect-[5/4] rounded-2xl mb-6 overflow-hidden relative card-lift"
                  style={{ background: a.bg }}
                >
                  <div className="orb orb-champagne" style={{ width: 220, height: 220, top: '20%', right: '10%' }} />
                  <div className="absolute bottom-5 left-5">
                    <span className="eyebrow text-champagne">{a.cat}</span>
                  </div>
                </div>
                <div className="text-plum-soft text-[10px] uppercase tracking-[0.4em] font-medium mb-3">
                  {a.date}
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-plum-deep leading-tight group-hover:text-plum transition-colors">
                  {a.title}
                </h3>
                <p className="mt-3 text-ink/65 leading-relaxed font-light">{a.excerpt}</p>
                <div className="mt-4 text-plum-soft text-xs uppercase tracking-[0.25em] font-medium">{a.read}</div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-plum-deep text-cream py-24 md:py-32 relative overflow-hidden">
        <div className="orb orb-champagne" style={{ width: 450, height: 450, top: '-15%', right: '-10%' }} />
        <div className="relative z-10 max-w-2xl mx-auto px-5 md:px-10 text-center">
          <div className="eyebrow text-champagne mb-5">Subscribe</div>
          <h2 className="editorial-h text-cream text-4xl md:text-6xl mb-6">
            New essays. <em className="font-display italic">When they&apos;re ready.</em>
          </h2>
          <p className="text-cream/70 text-lg font-light leading-relaxed mb-10">
            We email when we publish something substantive. Roughly once a month. Never daily.
          </p>
          <Link href="/" className="btn-cream">Join the founders list</Link>
        </div>
      </section>
    </>
  )
}
