'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/Logo'

const PHILOSOPHY = [
  {
    n: '01',
    title: 'Bio-Optimised Performance',
    body: 'We design protocols that work with your physiology, not against it. Every formulation is anchored in a defined biological system — cellular energy, neural signalling, recovery architecture, metabolic foundation.',
  },
  {
    n: '02',
    title: 'Science-Backed Formulas',
    body: 'Each protocol is built around ingredients with peer-reviewed research, dosed to the levels the literature supports, in the forms the body recognises.',
  },
  {
    n: '03',
    title: 'Transparency Without Caveat',
    body: 'No proprietary blends. No fillers. Every dose is on the label, in the dossier, on the website. The certificate of analysis for every batch is public.',
  },
  {
    n: '04',
    title: 'A Modern Performance Lifestyle',
    body: 'Vivien is built for people who treat biology as something you can engineer — athletes, professionals, creators, and high performers who want a serious tool, not a brand.',
  },
]

const COMMITMENT = [
  'Premium ingredient sourcing',
  'NSF & cGMP manufacturing',
  'Independent third-party verification',
  'Methylated and chelated forms',
  'Full transparency on every label',
  'A brand built for decades',
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="cinematic-plum text-cream py-24 md:py-36 relative overflow-hidden">
        <div className="orb orb-champagne" style={{ width: 520, height: 520, top: '-15%', left: '-10%' }} />
        <div className="orb orb-plum" style={{ width: 420, height: 420, bottom: '-15%', right: '-10%' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-champagne/60" />
              <span className="eyebrow text-champagne/85">About · The Vivien story</span>
            </div>
            <h1 className="editorial-h text-cream text-6xl md:text-9xl mb-10">
              Engineered <em className="font-display italic shimmer">vitality.</em>{' '}
              <br />
              Cellular performance.
            </h1>
            <p className="text-cream/75 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
              Vivien BioTherapy is a next-generation BioTherapy company building clinically formulated
              supplements for the systems that actually determine how you feel, perform, and age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO ESSAY */}
      <section className="bg-ivory">
        <div className="max-w-3xl mx-auto px-5 md:px-10 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8 text-ink/80 text-lg md:text-xl leading-relaxed font-light"
          >
            <p className="font-display text-plum-deep text-3xl md:text-5xl italic leading-snug">
              &ldquo;Strength isn&apos;t just about muscle. It&apos;s about cellular energy, recovery efficiency,
              mental clarity, and long-term vitality.&rdquo;
            </p>
            <p>
              Vivien BioTherapy was founded on a thesis that&apos;s become almost obvious if you look at the
              supplement category closely: the products that work in clinical research mostly don&apos;t make it
              into the bottle. Doses are too low. Forms are wrong. Active ingredients are diluted into
              proprietary blends to hide weak chemistry. Most companies are formulating for a category brief, not
              a biological aim.
            </p>
            <p>
              Vivien was built to do the opposite. Every protocol begins with a system — cellular, cognitive,
              recovery, metabolic — and works backwards from the peer-reviewed literature to a formulation that
              honours it. Clinical-dose, transparent, third-party verified, every time.
            </p>
            <p>
              We&apos;re building for the next several decades. The product is the proof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-cream/40 border-y border-plum/10 py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16 max-w-3xl"
          >
            <div className="eyebrow text-plum-soft mb-4">Our Philosophy</div>
            <h2 className="editorial-h text-plum-deep text-5xl md:text-7xl">
              Four ideas, <em className="font-display italic">held seriously.</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-14">
            {PHILOSOPHY.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-plum/15 pt-8"
              >
                <div className="flex items-baseline gap-5 mb-4">
                  <span className="font-display text-plum text-3xl">{p.n}</span>
                  <h3 className="font-display text-3xl md:text-4xl text-plum-deep">{p.title}</h3>
                </div>
                <p className="text-ink/70 leading-relaxed font-light pl-[2.75rem]">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE STARTED */}
      <section className="cinematic-plum text-cream py-24 md:py-36 relative overflow-hidden">
        <div className="orb orb-champagne" style={{ width: 450, height: 450, top: '-15%', right: '-5%' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="eyebrow text-champagne mb-5">Why we started</div>
            <h2 className="editorial-h text-cream text-4xl md:text-6xl">
              The category was full. <em className="font-display italic">Clarity was empty.</em>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <p className="text-cream/75 text-lg md:text-xl leading-relaxed font-light">
              The supplement industry is crowded. Most products fall into one or more of four patterns:
            </p>
            <ul className="space-y-4 text-cream/70 leading-relaxed font-light text-lg">
              {[
                'Under-dose active ingredients.',
                'Over-promise unrealistic results.',
                'Prioritise marketing over formulation.',
                'Lack quality consistency between batches.',
              ].map((line, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-champagne shrink-0 font-display text-xl mt-[-2px]">·</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="text-cream/75 text-lg md:text-xl leading-relaxed font-light pt-4">
              Vivien BioTherapy was created to change that standard — through clinical formulation logic,
              premium manufacturing, customer education, and a sustainable, long-term view of what a real
              BioTherapy company should be.
            </p>
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="bg-ivory py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16 max-w-3xl"
          >
            <div className="eyebrow text-plum-soft mb-4">Our Commitment</div>
            <h2 className="editorial-h text-plum-deep text-4xl md:text-6xl">
              When you choose Vivien, <em className="font-display italic">you choose:</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {COMMITMENT.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="glass-cream rounded-2xl p-6 md:p-8"
              >
                <div className="font-display text-plum text-xl mb-2">{String(i + 1).padStart(2, '0')}</div>
                <p className="text-plum-deep font-light leading-snug">{c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-plum-deep text-cream py-24 md:py-36 relative overflow-hidden">
        <div className="orb orb-champagne" style={{ width: 520, height: 520, top: '-20%', left: '-15%' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-10 text-center">
          <Logo color="cream" size="lg" />
          <h2 className="editorial-h text-cream text-4xl md:text-6xl my-12">
            Performance starts at the <em className="font-display italic shimmer">biological level.</em>
          </h2>
          <p className="text-cream/70 text-lg font-light leading-relaxed mb-10">
            Welcome to Vivien BioTherapy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/shop" className="btn-cream">Explore the Collection</Link>
            <Link href="/science" className="text-cream/80 hover:text-cream link-underline text-[12px] uppercase tracking-[0.3em] font-medium self-center">
              The science →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
