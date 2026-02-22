'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const socialLinks = [
  { name: 'Instagram', icon: '📷', href: '#' },
  { name: 'Twitter', icon: '🐦', href: '#' },
  { name: 'LinkedIn', icon: '💼', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative py-16 md:py-20 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Animated divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white to-transparent mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Launch text */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl md:text-3xl font-bold gradient-text mb-2">
              Launching Worldwide
            </p>
            <p className="text-soft-white/60 text-sm md:text-base">
              The future of performance is coming
            </p>
          </motion.div>

          {/* Social icons */}
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((social, index) => (
              <SocialIcon key={index} social={social} index={index} />
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-soft-white/60 text-sm mb-1">Contact</p>
            <a
              href="mailto:hello@simlife.com"
              className="text-white hover:text-light-gray transition-colors duration-300"
            >
              hello@simlife.com
            </a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 text-center text-soft-white/40 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>© {new Date().getFullYear()} Simlife. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

function SocialIcon({ social, index }: { social: typeof socialLinks[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={social.href}
      className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-xl hover:border-white/30 transition-all duration-300"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.span
        animate={isHovered ? { scale: 1.2, rotate: 360 } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        {social.icon}
      </motion.span>
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-full bg-white/10 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.a>
  )
}
