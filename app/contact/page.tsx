'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isFocused, setIsFocused] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send to your backend/API
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: '',
      message: '',
    })
    
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-soft-white/70">
            We value communication and transparency. If you need assistance, we're here to help.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass rounded-2xl p-8 md:p-12 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('name')}
                  onBlur={() => setIsFocused(null)}
                  required
                  className="w-full px-6 py-4 bg-white/90 backdrop-blur-xl border border-white/10 rounded-xl text-matte-black placeholder-medium-gray focus:outline-none focus:border-white/30 transition-all duration-300 text-lg"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('email')}
                  onBlur={() => setIsFocused(null)}
                  required
                  className="w-full px-6 py-4 bg-white/90 backdrop-blur-xl border border-white/10 rounded-xl text-matte-black placeholder-medium-gray focus:outline-none focus:border-white/30 transition-all duration-300 text-lg"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-white mb-2 font-medium">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('phone')}
                  onBlur={() => setIsFocused(null)}
                  className="w-full px-6 py-4 bg-white/90 backdrop-blur-xl border border-white/10 rounded-xl text-matte-black placeholder-medium-gray focus:outline-none focus:border-white/30 transition-all duration-300 text-lg"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Inquiry Category */}
              <div>
                <label htmlFor="category" className="block text-white mb-2 font-medium">
                  Inquiry Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('category')}
                  onBlur={() => setIsFocused(null)}
                  required
                  className="w-full px-6 py-4 bg-white/90 backdrop-blur-xl border border-white/10 rounded-xl text-matte-black focus:outline-none focus:border-white/30 transition-all duration-300 text-lg"
                >
                  <option value="">Select a category</option>
                  <option value="order">Order Help</option>
                  <option value="returns">Returns</option>
                  <option value="product">Product Question</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('message')}
                  onBlur={() => setIsFocused(null)}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-white/90 backdrop-blur-xl border border-white/10 rounded-xl text-matte-black placeholder-medium-gray focus:outline-none focus:border-white/30 transition-all duration-300 text-lg resize-none"
                  placeholder="Enter your message"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-12 py-4 md:py-5 bg-gradient-to-r from-white to-light-gray rounded-xl font-semibold text-lg uppercase tracking-wider text-matte-black relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Send Message</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-light-gray to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>
            </form>

            {/* Success Message */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-4 glass rounded-xl border border-white/20"
                >
                  <p className="text-white font-semibold">
                    ✓ Message sent successfully! We'll get back to you within 24-48 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Customer Support */}
          <div className="glass rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Customer Support</h3>
            <p className="text-soft-white/70 mb-2">
              <a href="mailto:support@smilifebiotherapy.com" className="text-white hover:text-light-gray transition-colors">
                support@smilifebiotherapy.com
              </a>
            </p>
            <p className="text-soft-white/70 mb-1">Support Hours: Monday – Saturday, 10:00 AM – 6:00 PM</p>
            <p className="text-soft-white/70">Response Time: Within 24–48 hours</p>
          </div>

          {/* Business & Partnerships */}
          <div className="glass rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Business & Partnerships</h3>
            <p className="text-soft-white/70 mb-4">
              For wholesale, gym partnerships, influencer collaborations, or distribution:
            </p>
            <p className="text-soft-white/70">
              <a href="mailto:business@smilifebiotherapy.com" className="text-white hover:text-light-gray transition-colors">
                business@smilifebiotherapy.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text">Social Media</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="#" className="text-white hover:text-light-gray transition-colors">Instagram: @smilifebiotherapy</a>
            <a href="#" className="text-white hover:text-light-gray transition-colors">TikTok: @smilifebiotherapy</a>
            <a href="#" className="text-white hover:text-light-gray transition-colors">YouTube: SmiLife Bio Therapy</a>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  )
}
