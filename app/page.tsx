'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import Countdown from '@/components/Countdown'
import EmailCapture from '@/components/EmailCapture'
import BrandTeaser from '@/components/BrandTeaser'
import Performance from '@/components/Performance'
import Footer from '@/components/Footer'
import ScrollEffects from '@/components/ScrollEffects'

export default function Home() {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    if (typeof window !== 'undefined') {
      import('gsap/ScrollTrigger').then((module) => {
        const ScrollTrigger = module.default
        ScrollTrigger.refresh()
      })
    }
  }, [])

  return (
    <main className="relative min-h-screen animated-gradient overflow-hidden bg-matte-black">
      <ScrollEffects />
      <div className="relative z-10">
        <Hero />
        <Countdown />
        <EmailCapture />
        <BrandTeaser />
        <Performance />
        <Footer />
      </div>
    </main>
  )
}
