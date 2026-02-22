'use client'

import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    let scrollTriggers: any[] = []

    const initScrollEffects = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      
      gsap.registerPlugin(ScrollTrigger)

      // Parallax effect for background
      const parallax = gsap.to('.animated-gradient', {
        backgroundPosition: '100% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: 'main',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })

      scrollTriggers.push(parallax.scrollTrigger)

      // Fade in sections on scroll
      const sections = document.querySelectorAll('section')
      sections.forEach((section) => {
        const animation = gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
            },
          }
        )
        if (animation.scrollTrigger) {
          scrollTriggers.push(animation.scrollTrigger)
        }
      })
    }

    initScrollEffects()

    return () => {
      scrollTriggers.forEach((trigger) => {
        if (trigger && trigger.kill) trigger.kill()
      })
      scrollTriggers = []
    }
  }, [])

  return null
}
