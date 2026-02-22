'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    if (isMobile) return

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', updateCursor)
    
    const interactiveElements = document.querySelectorAll('a, button, input, textarea')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      <div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-white pointer-events-none z-50 transition-all duration-300 ease-out mix-blend-difference"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
          scale: isHovering ? 1.5 : 1,
        }}
      />
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-50 transition-all duration-200 ease-out mix-blend-difference glow-lavender"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
    </>
  )
}
