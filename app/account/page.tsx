'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

type Mode = 'signin' | 'register'

export default function AccountPage() {
  const [mode, setMode] = useState<Mode>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <>
      {/* Hero */}
      <section className="cinematic-cream pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-5 md:px-10 pt-12 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="eyebrow text-plum-soft mb-6">Account · Members area</div>
            <h1 className="editorial-h text-plum-deep text-6xl md:text-8xl mb-8">
              Your <em className="font-display italic">Vivien</em>.
            </h1>
            <p className="text-ink/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Sign in to track orders, manage your subscription, and access founding-member dispatches. Not a
              member yet? Create an account — it takes less than a minute.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sign-in / register card */}
      <section className="bg-ivory pb-28 md:pb-36">
        <div className="max-w-2xl mx-auto px-5 md:px-10 -mt-16 md:-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="glass-cream rounded-3xl p-8 md:p-12 border border-plum/10 shadow-premium"
          >
            {/* Mode toggle */}
            <div className="flex bg-plum/5 rounded-full p-1.5 mb-10 max-w-xs mx-auto">
              {(['signin', 'register'] as Mode[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`flex-1 px-4 py-2.5 rounded-full text-[11px] uppercase tracking-[0.25em] font-medium transition-all ${
                    mode === m
                      ? 'bg-plum-deep text-cream shadow-soft'
                      : 'text-plum-deep/70 hover:text-plum-deep'
                  }`}
                >
                  {m === 'signin' ? 'Sign in' : 'Register'}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.form
                key={mode}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {mode === 'register' && (
                  <Field label="Full Name">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Your full name"
                      className="account-input"
                    />
                  </Field>
                )}

                <Field label="Email">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@email.com"
                    className="account-input"
                  />
                </Field>

                <Field label="Password">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    minLength={8}
                    className="account-input"
                  />
                </Field>

                {mode === 'signin' && (
                  <div className="text-right">
                    <button
                      type="button"
                      className="text-plum text-[11px] uppercase tracking-[0.3em] font-medium link-underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                <button type="submit" className="btn-primary w-full">
                  {mode === 'signin' ? 'Sign in →' : 'Create account →'}
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-plum-deep text-sm bg-plum/8 border border-plum/15 rounded-xl py-3 px-4"
                  >
                    {mode === 'signin'
                      ? 'Member system launches with the first product cycle. You\'ll receive your credentials by email.'
                      : 'Thanks — you\'re on the founders list. We\'ll send full account access at launch.'}
                  </motion.div>
                )}

                <p className="text-ink/50 text-xs text-center leading-relaxed pt-2">
                  The Vivien account system unlocks fully with the first product release. Until then, founders-list
                  members get every dispatch by email.
                </p>
              </motion.form>
            </AnimatePresence>
          </motion.div>

          {/* Below the card */}
          <div className="mt-12 text-center">
            <div className="eyebrow text-plum-soft mb-3">Already ordered?</div>
            <p className="text-ink/70 font-light text-sm leading-relaxed max-w-md mx-auto">
              Track an order, request a refund, or update shipping — write to{' '}
              <a
                href="mailto:support@vivienbiotherapy.com"
                className="text-plum-deep link-underline font-medium"
              >
                support@vivienbiotherapy.com
              </a>{' '}
              and we&apos;ll respond within 24–48 hours.
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.3em]">
              <Link href="/returns" className="text-plum-deep/75 hover:text-plum-deep link-underline">
                Returns
              </Link>
              <span className="text-plum/30">·</span>
              <Link href="/contact" className="text-plum-deep/75 hover:text-plum-deep link-underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .account-input {
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
        .account-input::placeholder {
          color: rgba(26, 10, 28, 0.4);
        }
        .account-input:focus {
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
