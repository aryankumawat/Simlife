'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const PRINCIPLES = [
  {
    n: '01',
    title: 'Clinical-dose, or not at all.',
    body: 'Most supplements work in the lab and fail in the bottle — because the dose inside is a fraction of what the research used. Vivien formulates at the dose the literature actually supports.',
  },
  {
    n: '02',
    title: 'No proprietary blends.',
    body: 'Proprietary blends are a marketing instrument. Vivien lists every ingredient at its exact dose, on the label, on the website, in the dossier. No exceptions.',
  },
  {
    n: '03',
    title: 'Bioavailability decides everything.',
    body: 'A capsule that doesn\'t cross the membrane is theatre. We choose forms that the body recognises — methylated B-vitamins, triglyceride omega-3s, chelated minerals.',
  },
  {
    n: '04',
    title: 'Stacking is sequencing.',
    body: 'The Vivien stack is sequenced to circadian biology — foundational nutrients with breakfast, cellular signalling through the day, recovery before sleep. Time-of-day is dose.',
  },
  {
    n: '05',
    title: 'Third-party verified, every batch.',
    body: 'Every production lot is independently tested for purity, potency, heavy metals, and microbial safety. The certificate of analysis is public.',
  },
  {
    n: '06',
    title: 'Manufacturing standards above the floor.',
    body: 'cGMP compliance is the legal minimum, not the goal. We manufacture in NSF-registered facilities, with traceability from raw material to bottle.',
  },
]

export default function SciencePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative cinematic-plum overflow-hidden">
        <div className="orb orb-champagne" style={{ width: 520, height: 520, top: '-15%', right: '-10%' }} />
        <div className="orb orb-plum" style={{ width: 420, height: 420, bottom: '-15%', left: '-10%' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pt-20 pb-24 md:pt-32 md:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-champagne/60" />
              <span className="eyebrow text-champagne/85">The Science</span>
            </div>
            <h1 className="editorial-h text-cream text-6xl md:text-9xl mb-10">
              Biology is the <em className="font-display italic shimmer">first principle.</em>
            </h1>
            <p className="text-cream/75 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
              Vivien Biotherapy is built around a thesis: the supplement industry is crowded with products that
              don&apos;t work for reasons that are well understood and almost entirely avoidable. Here is the
              formulation logic, and the standards, we hold ourselves to.
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
            <p className="font-display text-plum-deep text-3xl md:text-4xl italic leading-snug">
              &ldquo;Most supplements work in the literature and fail in the bottle.&rdquo;
            </p>
            <p>
              The reasons for that failure are not mysterious. Doses are too low. Forms are poorly chosen. Active
              ingredients are diluted into proprietary blends that exist to obscure the chemistry. Manufacturing
              standards are uneven. And most companies are formulating for a marketing aesthetic, not a biological aim.
            </p>
            <p>
              Vivien Biotherapy was built to do the opposite. Every protocol begins with a defined biological
              question — what is the system we&apos;re trying to support, and what does the peer-reviewed
              literature actually say about how to support it? — and the formulation follows from that question,
              not from a category brief.
            </p>
            <p>
              The six principles below are the formulation rules we hold ourselves to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRINCIPLES — numbered list */}
      <section className="bg-cream/40 border-y border-plum/10 py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="mb-16">
            <div className="eyebrow text-plum-soft mb-4">The Formulation Rules</div>
            <h2 className="editorial-h text-plum-deep text-5xl md:text-7xl max-w-3xl">
              Six principles we don&apos;t bend on.
            </h2>
          </div>

          <div className="space-y-4 md:space-y-0 md:divide-y md:divide-plum/15">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-12 gap-4 md:gap-12 py-10 md:py-14"
              >
                <div className="col-span-12 md:col-span-2 font-display text-5xl md:text-6xl text-plum/40">
                  {p.n}
                </div>
                <div className="col-span-12 md:col-span-5">
                  <h3 className="font-display text-3xl md:text-4xl text-plum-deep">{p.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-5 text-ink/70 leading-relaxed font-light text-lg">
                  {p.body}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING / STANDARDS */}
      <section className="cinematic-plum text-cream py-24 md:py-36 relative overflow-hidden">
        <div className="orb orb-champagne" style={{ width: 500, height: 500, top: '-20%', right: '-10%' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="eyebrow text-champagne mb-5">Manufacturing</div>
            <h2 className="editorial-h text-cream text-4xl md:text-6xl">
              The standard, not the floor.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-8">
            {[
              { label: 'NSF & cGMP-certified', body: 'All Vivien products are produced in facilities certified to the highest US and EU good-manufacturing-practice standards.' },
              { label: 'Independent third-party testing', body: 'Every batch is tested by a contracted lab independent of our facility, for purity, potency, and contamination.' },
              { label: 'Full traceability', body: 'Each bottle carries a batch code that maps to the raw material lot, the manufacturing run, and the analysis certificate.' },
              { label: 'Heavy-metal and microbial screening', body: 'No exceptions. Standards are tighter than the regulatory minimum.' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.07 }}
                className="border-l border-champagne/40 pl-6"
              >
                <div className="font-display text-champagne text-2xl md:text-3xl mb-2">{s.label}</div>
                <p className="text-cream/70 leading-relaxed font-light">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center">
          <div className="eyebrow text-plum-soft mb-5">Read the protocols</div>
          <h2 className="editorial-h text-plum-deep text-4xl md:text-6xl mb-8">
            See the formulations in detail.
          </h2>
          <p className="text-ink/70 text-lg leading-relaxed font-light mb-10">
            Every Vivien protocol is published with its full ingredient list, dose-by-dose, and a research dossier.
          </p>
          <Link href="/shop" className="btn-primary">
            Explore the Collection
          </Link>
        </div>
      </section>
    </>
  )
}
