'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const SECTIONS = [
  {
    n: '01',
    title: 'Return Eligibility',
    body: 'You are eligible for a return or replacement if the product arrived damaged, you received the wrong product, items are missing from your order, the product seal is broken upon delivery, or the package shows signs of tampering. Returns must be requested within 7 days of delivery.',
  },
  {
    n: '02',
    title: 'Non-Returnable Situations',
    body: 'For safety and hygiene reasons, we cannot accept returns if the product has been opened or used, if it was stored improperly after delivery, if the request is based solely on personal taste preference, or if results did not meet personal expectations. Individual results vary depending on training, diet, sleep, and physiology.',
  },
  {
    n: '03',
    title: 'How to Request a Return',
    body: 'Email support@vivienbiotherapy.com with subject line "Return Request — Order #XXXXX". Include your order number, full name, email used at checkout, and clear photos or video of the product, outer packaging, the damage or issue, and the batch number / expiry date.',
  },
  {
    n: '04',
    title: 'Refund Processing',
    body: 'Approved refunds are issued to the original payment method. Processing typically takes 5–10 business days. Shipping fees may be non-refundable unless the error was ours.',
  },
  {
    n: '05',
    title: 'Order Cancellations',
    body: 'Orders can only be cancelled if they have not yet been processed or shipped. Once shipped, cancellation is not possible — please use the returns process above.',
  },
  {
    n: '06',
    title: 'Contact',
    body: 'For any return or refund question, write to support@vivienbiotherapy.com. We respond within 24–48 hours, Monday through Saturday.',
  },
]

export default function ReturnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="cinematic-cream pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-5 md:px-10 pt-12 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <div className="eyebrow text-plum-soft mb-6">Policies · Returns &amp; refunds</div>
            <h1 className="editorial-h text-plum-deep text-6xl md:text-8xl mb-8">
              Return <em className="font-display italic">Policy.</em>
            </h1>
            <p className="text-ink/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Product safety and customer trust are non-negotiable. Because supplements are consumable, specific
              return guidelines apply — they&apos;re explained in full below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-ivory pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <div className="divide-y divide-plum/15">
            {SECTIONS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-12 gap-4 md:gap-10 py-10 md:py-14"
              >
                <div className="col-span-2 md:col-span-2 font-display text-plum text-3xl md:text-5xl">
                  {s.n}
                </div>
                <div className="col-span-10 md:col-span-10">
                  <h2 className="font-display text-2xl md:text-4xl text-plum-deep mb-4">{s.title}</h2>
                  <p className="text-ink/75 text-base md:text-lg leading-relaxed font-light">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 glass-cream rounded-3xl p-8 md:p-12"
          >
            <div className="eyebrow text-plum-soft mb-3">Need to start a return?</div>
            <a
              href="mailto:support@vivienbiotherapy.com?subject=Return Request — Order #"
              className="font-display text-2xl md:text-4xl text-plum-deep link-underline block mb-6"
            >
              support@vivienbiotherapy.com
            </a>
            <Link href="/contact" className="btn-ghost">Contact us instead</Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
