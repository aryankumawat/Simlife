'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const tagline = "Redefining Performance."
const subtext = "The Future of Strength Begins Here."

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.02,
        duration: 0.3,
      },
    }),
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-30">
      <div
        className="text-center z-50 px-4 relative"
        style={{ position: 'relative', zIndex: 50, color: '#F5F5FA' }}
      >
        {/* Animated Logo */}
        <div className="mb-8">
          <div
            className="text-6xl md:text-8xl font-bold mb-4"
            style={{ 
              background: 'linear-gradient(135deg, #7C6BFF, #9F8CFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: '#7C6BFF',
              display: 'inline-block',
            }}
          >
            SIMLIFE
          </div>
        </div>

        {/* Tagline */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wider"
          style={{ color: '#F5F5FA' }}
        >
          {tagline}
        </h1>

        {/* Subtext */}
        <p
          className="text-lg md:text-xl lg:text-2xl font-light tracking-wide"
          style={{ color: 'rgba(245, 245, 250, 0.7)' }}
        >
          {subtext}
        </p>
      </div>

      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-96 h-96 rounded-full bg-deep-lavender/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  )
}
