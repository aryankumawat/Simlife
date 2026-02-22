'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Clinically Backed Ingredients',
    description: 'Every formula is backed by rigorous scientific research and clinical studies.',
  },
  {
    title: 'Transparent Formulas',
    description: 'Know exactly what you are putting in your body. Full ingredient transparency.',
  },
  {
    title: 'No Fillers. No Fluff.',
    description: 'Pure, potent ingredients. Nothing unnecessary. Maximum efficacy.',
  },
]

export default function BrandTeaser() {
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
          Science Meets Strength
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <FeatureBlock key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureBlock({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="glass rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ 
        scale: 1.02,
        rotateY: 2,
        rotateX: 2,
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-light-gray mb-6 flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-6 h-6 rounded-full bg-soft-white" />
      </motion.div>
      
      <h3 className="text-xl md:text-2xl font-bold mb-4 gradient-text group-hover:glow-text transition-all duration-300">
        {feature.title}
      </h3>
      
      <p className="text-soft-white/70 leading-relaxed">
        {feature.description}
      </p>

      <motion.div
        className="mt-6 h-1 bg-gradient-to-r from-white to-light-gray rounded-full"
        initial={{ width: 0 }}
        animate={isInView ? { width: '100%' } : { width: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
      />
    </motion.div>
  )
}
