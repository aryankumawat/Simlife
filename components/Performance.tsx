'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  {
    title: 'Strength Output',
    icon: '💪',
    description: 'Maximize your power potential',
  },
  {
    title: 'Recovery Acceleration',
    icon: '⚡',
    description: 'Faster recovery, more training',
  },
  {
    title: 'Mental Focus',
    icon: '🧠',
    description: 'Sharp mind, clear vision',
  },
  {
    title: 'Endurance',
    icon: '🔥',
    description: 'Push beyond your limits',
  },
]

export default function Performance() {
  return (
    <section className="relative py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Engineered for Performance
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((highlight, index) => (
            <HighlightCard key={index} highlight={highlight} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HighlightCard({ highlight, index }: { highlight: typeof highlights[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className="glass rounded-xl p-6 md:p-8 border border-deep-lavender/30 text-center group hover:border-electric-lavender/50 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <motion.div
        className="text-4xl md:text-5xl mb-4"
        animate={isInView ? { scale: [1, 1.2, 1] } : { scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      >
        {highlight.icon}
      </motion.div>
      
      <h3 className="text-xl md:text-2xl font-bold mb-2 gradient-text">
        {highlight.title}
      </h3>
      
      <p className="text-soft-white/60 text-sm md:text-base">
        {highlight.description}
      </p>
    </motion.div>
  )
}
