'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function FloatingCapsules() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <motion.div
        className="absolute top-20 left-10 w-16 h-32 rounded-full bg-gradient-to-b from-deep-lavender/20 to-electric-lavender/20 border border-deep-lavender/30"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-12 h-24 rounded-full bg-gradient-to-b from-electric-lavender/20 to-deep-lavender/20 border border-electric-lavender/30"
        animate={{
          y: [0, 40, 0],
          rotate: [0, -8, 8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-14 h-28 rounded-full bg-gradient-to-b from-deep-lavender/15 to-electric-lavender/15 border border-deep-lavender/25"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 6, -6, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </div>
  )
}
