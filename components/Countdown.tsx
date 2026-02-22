'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Set launch date (adjust as needed)
const LAUNCH_DATE = new Date('2024-12-31T23:59:59').getTime()

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = LAUNCH_DATE - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => {
    const [displayValue, setDisplayValue] = useState(value)
    const [isFlipping, setIsFlipping] = useState(false)

    useEffect(() => {
      if (value !== displayValue) {
        setIsFlipping(true)
        setTimeout(() => {
          setDisplayValue(value)
          setIsFlipping(false)
        }, 300)
      }
    }, [value, displayValue])

    return (
      <div
        className="flex flex-col items-center"
        style={{ opacity: 1 }}
      >
        <div className="glass rounded-2xl p-6 md:p-8 min-w-[100px] md:min-w-[140px] border border-white/10 glow-lavender">
          <div
            key={displayValue}
            className="text-4xl md:text-6xl font-bold"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF, #CCCCCC)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: '#FFFFFF',
            }}
          >
            {String(displayValue).padStart(2, '0')}
          </div>
        </div>
        <p className="mt-4 text-sm md:text-base uppercase tracking-wider" style={{ color: 'rgba(245, 245, 250, 0.6)' }}>
          {label}
        </p>
      </div>
    )
  }

  return (
    <section className="relative py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className="flex flex-wrap justify-center gap-4 md:gap-8"
          style={{ opacity: 1 }}
        >
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  )
}
