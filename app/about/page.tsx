'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="relative min-h-screen animated-gradient overflow-hidden bg-matte-black">
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 md:py-32">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Engineered for Performance. Built on Bio Science.
          </h1>
        </motion.div>

        {/* Introduction */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-soft-white/80 leading-relaxed mb-6">
            Welcome to <span className="font-semibold text-white">SmiLife Bio Therapy</span> — a next-generation supplement company focused on optimizing human performance through advanced nutritional science.
          </p>
          <p className="text-lg md:text-xl text-soft-white/80 leading-relaxed mb-6">
            At SmiLife Bio Therapy, we believe strength is not just about muscle. It's about cellular energy, recovery efficiency, mental clarity, and long-term vitality.
          </p>
          <p className="text-lg md:text-xl text-soft-white/80 leading-relaxed">
            Our mission is to develop premium supplements that enhance how your body functions at a biological level — safely, effectively, and consistently.
          </p>
        </motion.section>

        {/* Our Philosophy */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Our Philosophy</h2>
          
          <div className="space-y-8">
            <div className="glass rounded-xl p-6 border border-white/10">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Bio-Optimized Performance</h3>
              <p className="text-soft-white/70 leading-relaxed">
                We focus on supporting the body's natural biological systems. Every formulation is designed to work with your physiology — not against it.
              </p>
            </div>

            <div className="glass rounded-xl p-6 border border-white/10">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Science-Backed Formulas</h3>
              <p className="text-soft-white/70 leading-relaxed">
                Each product is created using ingredients selected for their research support, correct dosage levels, and performance relevance.
              </p>
            </div>

            <div className="glass rounded-xl p-6 border border-white/10">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Transparency & Integrity</h3>
              <p className="text-soft-white/70 leading-relaxed">
                We believe in full ingredient transparency. No proprietary blends hiding weak doses. No unnecessary fillers.
              </p>
            </div>

            <div className="glass rounded-xl p-6 border border-white/10">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Modern Performance Lifestyle</h3>
              <p className="text-soft-white/70 leading-relaxed">
                SmiLife Bio Therapy is built for individuals who take discipline seriously — athletes, professionals, creators, and high performers who demand more from their bodies.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Why We Started */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Why We Started</h2>
          <p className="text-lg md:text-xl text-soft-white/80 leading-relaxed mb-6">
            The supplement industry is crowded, but clarity is rare.
          </p>
          <p className="text-lg md:text-xl text-soft-white/80 leading-relaxed mb-8">
            Too many products:
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Under-dose active ingredients</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Overpromise unrealistic results</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Prioritize marketing over formulation</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Lack quality consistency</span>
            </li>
          </ul>
          <p className="text-lg md:text-xl text-soft-white/80 leading-relaxed mb-6">
            SmiLife Bio Therapy was created to change that standard.
          </p>
          <p className="text-lg md:text-xl text-soft-white/80 leading-relaxed mb-6">
            We are building a long-term global company focused on:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Clinical formulation logic</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Premium manufacturing standards</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Customer trust and education</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span className="text-soft-white/70">Sustainable brand growth</span>
            </li>
          </ul>
        </motion.section>

        {/* Our Commitment */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Our Commitment</h2>
          <p className="text-lg md:text-xl text-soft-white/80 leading-relaxed mb-8">
            When you choose SmiLife Bio Therapy, you are choosing:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6 border border-white/10">
              <p className="text-soft-white/70">Premium ingredient sourcing</p>
            </div>
            <div className="glass rounded-xl p-6 border border-white/10">
              <p className="text-soft-white/70">Clean manufacturing standards</p>
            </div>
            <div className="glass rounded-xl p-6 border border-white/10">
              <p className="text-soft-white/70">Transparent labeling</p>
            </div>
            <div className="glass rounded-xl p-6 border border-white/10">
              <p className="text-soft-white/70">Performance-driven results</p>
            </div>
            <div className="glass rounded-xl p-6 border border-white/10 md:col-span-2">
              <p className="text-soft-white/70">A brand built for the long run</p>
            </div>
          </div>
        </motion.section>

        {/* Closing Statement */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-2xl md:text-3xl font-bold gradient-text mb-4">
            Performance starts at the biological level.
          </p>
          <p className="text-xl md:text-2xl text-white">
            Welcome to SmiLife Bio Therapy.
          </p>
        </motion.div>
      </div>
      <Footer />
    </main>
  )
}
