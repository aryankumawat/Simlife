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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-30">
      <motion.div
        className="text-center z-50 px-4 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', zIndex: 50 }}
      >
        {/* Animated Logo */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            className="text-6xl md:text-8xl font-bold gradient-text glow-text mb-4"
            style={{ 
              color: '#7C6BFF',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              filter: [
                'brightness(1) drop-shadow(0 0 10px rgba(124, 107, 255, 0.5))',
                'brightness(1.2) drop-shadow(0 0 20px rgba(124, 107, 255, 0.8))',
                'brightness(1) drop-shadow(0 0 10px rgba(124, 107, 255, 0.5))',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            SIMLIFE
          </motion.div>
        </motion.div>

        {/* Tagline with letter-by-letter reveal */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wider text-soft-white"
        >
          {tagline.split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-soft-white/70 font-light tracking-wide"
        >
          {subtext}
        </motion.p>
      </motion.div>

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
