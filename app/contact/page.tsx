'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', category: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 6000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Hero */}
      <section className="cinematic-cream pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-5 md:px-10 pt-12 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="eyebrow text-plum-soft mb-6">Contact · We&apos;re listening</div>
            <h1 className="editorial-h text-plum-deep text-6xl md:text-8xl mb-8">
              <em className="font-display italic">Talk</em> to Vivien.
            </h1>
            <p className="text-ink/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              We value clear communication. Whether you have a question about a formulation, an order, or want
              to talk partnerships, we read every message.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-ivory pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass-cream rounded-3xl p-8 md:p-12 border border-plum/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full Name *">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Email *">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      className="form-input"
                    />
                  </Field>
                </div>

                <Field label="Phone (optional)">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="form-input"
                  />
                </Field>

                <Field label="Inquiry Category *">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select a category</option>
                    <option value="order">Order Help</option>
                    <option value="returns">Returns</option>
                    <option value="product">Product Question</option>
                    <option value="science">Science / Formulation</option>
                    <option value="collaboration">Collaboration / Press</option>
                    <option value="other">Other</option>
                  </select>
                </Field>

                <Field label="Message *">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us a little about what you need."
                    className="form-input resize-none"
                  />
                </Field>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send message →
                </button>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="rounded-xl bg-plum/10 border border-plum/20 p-4 text-plum-deep text-sm font-medium"
                    >
                      ✓ Message received. We&apos;ll respond within 24–48 hours.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* Info */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <InfoBlock label="Customer Support" main="support@vivienbiotherapy.com">
              <p className="text-ink/60 leading-relaxed font-light text-sm mt-2">
                Monday – Saturday · 10:00 AM – 6:00 PM
                <br />
                Typical response window 24–48 hours.
              </p>
            </InfoBlock>

            <InfoBlock label="Business & Partnerships" main="business@vivienbiotherapy.com">
              <p className="text-ink/60 leading-relaxed font-light text-sm mt-2">
                For wholesale, clinical partnerships, press, or distribution enquiries.
              </p>
            </InfoBlock>

            <InfoBlock label="Press" main="press@vivienbiotherapy.com">
              <p className="text-ink/60 leading-relaxed font-light text-sm mt-2">
                Media kit and founder availability on request.
              </p>
            </InfoBlock>

            <div className="border-t border-plum/15 pt-6">
              <div className="eyebrow text-plum-soft mb-4">Social</div>
              <div className="space-y-2 text-ink/75 font-light">
                <a className="block link-underline" href="#">Instagram · @vivienbiotherapy</a>
                <a className="block link-underline" href="#">TikTok · @vivienbiotherapy</a>
                <a className="block link-underline" href="#">YouTube · Vivien BioTherapy</a>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Inline styles for form */}
      <style jsx global>{`
        .form-input {
          width: 100%;
          padding: 1rem 1.25rem;
          background: rgba(251, 247, 238, 0.7);
          border: 1px solid rgba(74, 31, 68, 0.15);
          border-radius: 14px;
          color: #1A0A1C;
          font-family: var(--font-poppins), sans-serif;
          font-weight: 300;
          font-size: 15px;
          transition: all 0.3s ease;
        }
        .form-input::placeholder {
          color: rgba(26, 10, 28, 0.4);
        }
        .form-input:focus {
          outline: none;
          border-color: #4A1F44;
          background: #FBF7EE;
          box-shadow: 0 0 0 4px rgba(74, 31, 68, 0.08);
        }
      `}</style>
    </>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-plum-deep text-[11px] uppercase tracking-[0.3em] font-medium mb-2.5">
        {label}
      </span>
      {children}
    </label>
  )
}

function InfoBlock({
  label,
  main,
  children,
}: {
  label: string
  main: string
  children?: React.ReactNode
}) {
  return (
    <div>
      <div className="eyebrow text-plum-soft mb-3">{label}</div>
      <a
        href={`mailto:${main}`}
        className="font-display text-2xl md:text-3xl text-plum-deep link-underline"
      >
        {main}
      </a>
      {children}
    </div>
  )
}
