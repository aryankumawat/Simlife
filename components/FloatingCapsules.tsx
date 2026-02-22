'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function FloatingCapsules() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <motion.div
        className="absolute top-20 left-10 w-16 h-32 rounded-full bg-gradient-to-b from-white/10 to-white/5 border border-white/10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-12 h-24 rounded-full bg-gradient-to-b from-white/10 to-white/5 border border-white/10"
        animate={{
          y: [0, 25, 0],
          rotate: [0, -4, 4, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-14 h-28 rounded-full bg-gradient-to-b from-white/8 to-white/4 border border-white/8"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 4, -4, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </div>
  )
}
