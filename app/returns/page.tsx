'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

export default function ReturnsPage() {
  return (
    <main className="relative min-h-screen animated-gradient overflow-hidden bg-matte-black pt-20">
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 md:py-32">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Return Policy
          </h1>
          <p className="text-lg md:text-xl text-soft-white/70">
            At SmiLife Bio Therapy, product safety and customer satisfaction are our priorities. Due to the nature of supplement products, specific return guidelines apply.
          </p>
        </motion.div>

        {/* Return Eligibility */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">1. Return Eligibility</h2>
          <p className="text-lg md:text-xl text-soft-white/80 mb-6">
            You are eligible for a return or replacement if:
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">The product arrived damaged</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">You received the incorrect product</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Items are missing from your order</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">The product seal is broken upon delivery</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">The package shows signs of tampering</span>
            </li>
          </ul>
          <div className="glass rounded-xl p-6 border border-white/10">
            <p className="text-soft-white/70">
              <span className="font-semibold text-white">Returns must be requested within 7 days of delivery.</span>
            </p>
          </div>
        </motion.section>

        {/* Non-Returnable Situations */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">2. Non-Returnable Situations</h2>
          <p className="text-lg md:text-xl text-soft-white/80 mb-6">
            For safety and hygiene reasons, we cannot accept returns if:
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">The product has been opened or used</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">The product was stored improperly after delivery</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">The request is based solely on personal taste preference</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Results expectations were not met</span>
            </li>
          </ul>
          <div className="glass rounded-xl p-6 border border-white/10">
            <p className="text-soft-white/70">
              Individual results vary depending on training, diet, sleep, and physiology.
            </p>
          </div>
        </motion.section>

        {/* How to Request a Return */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">3. How to Request a Return</h2>
          <p className="text-lg md:text-xl text-soft-white/80 mb-6">
            To request a return, email:
          </p>
          <div className="glass rounded-xl p-6 border border-white/10 mb-6">
            <p className="text-xl font-semibold text-white mb-4">support@smilifebiotherapy.com</p>
          </div>
          <p className="text-lg md:text-xl text-soft-white/80 mb-4">
            Include:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Order number</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Full name</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Email used at checkout</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Clear photos/videos of:</span>
            </li>
            <li className="flex items-start ml-6">
              <span className="text-white mr-3">-</span>
              <span className="text-soft-white/70">Product</span>
            </li>
            <li className="flex items-start ml-6">
              <span className="text-white mr-3">-</span>
              <span className="text-soft-white/70">Outer packaging</span>
            </li>
            <li className="flex items-start ml-6">
              <span className="text-white mr-3">-</span>
              <span className="text-soft-white/70">Damage or issue</span>
            </li>
            <li className="flex items-start ml-6">
              <span className="text-white mr-3">-</span>
              <span className="text-soft-white/70">Batch number & expiry date</span>
            </li>
          </ul>
        </motion.section>

        {/* Refund Processing */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">4. Refund Processing</h2>
          <p className="text-lg md:text-xl text-soft-white/80 mb-6">
            If approved:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Refunds are issued to the original payment method</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Processing time: 5–10 business days</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Shipping fees may be non-refundable unless the error was ours</span>
            </li>
          </ul>
        </motion.section>

        {/* Order Cancellations */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">5. Order Cancellations</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Orders can only be cancelled if they have not yet been processed or shipped.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Once shipped, cancellations are not possible.</span>
            </li>
          </ul>
        </motion.section>

        {/* Contact */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">6. Contact</h2>
          <div className="glass rounded-xl p-6 border border-white/10">
            <p className="text-lg md:text-xl text-soft-white/80 mb-4">
              For return requests, use subject line:
            </p>
            <p className="text-xl font-semibold text-white mb-6">
              "Return Request – Order #XXXXX"
            </p>
            <p className="text-lg md:text-xl text-soft-white/80">
              Email: <a href="mailto:support@smilifebiotherapy.com" className="text-white hover:text-light-gray transition-colors">support@smilifebiotherapy.com</a>
            </p>
          </div>
        </motion.section>
      </div>
      <Footer />
    </main>
  )
}
