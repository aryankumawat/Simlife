'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    // Here you would typically send to your backend/API
    // For now, just show success message
    setIsSubmitted(true)
    setEmail('')
    
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section className="relative py-20 md:py-32 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Be First. Be Stronger.
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-soft-white/70 mb-12 font-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join the founding members. Get exclusive launch access and early drops.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Enter your email"
              className="w-full px-6 py-4 md:py-5 bg-midnight-purple/50 backdrop-blur-xl border border-deep-lavender/30 rounded-xl text-soft-white placeholder-soft-white/40 focus:outline-none focus:border-electric-lavender transition-all duration-300 text-lg"
              required
            />
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              animate={{
                boxShadow: isFocused
                  ? '0 0 20px rgba(124, 107, 255, 0.5), 0 0 40px rgba(124, 107, 255, 0.3)'
                  : '0 0 0px rgba(124, 107, 255, 0)',
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <motion.button
            type="submit"
            className="mt-6 w-full md:w-auto px-12 py-4 md:py-5 bg-gradient-to-r from-deep-lavender to-electric-lavender rounded-xl font-semibold text-lg uppercase tracking-wider text-soft-white relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Unlock Early Access</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-electric-lavender to-deep-lavender opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
        </motion.form>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 p-4 glass rounded-xl border border-electric-lavender/50"
            >
              <p className="text-electric-lavender font-semibold">
                ✓ You're in! Check your email for confirmation.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
