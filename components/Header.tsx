'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/returns', label: 'Return Policy' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass border-b border-white/10' : 'bg-transparent'
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              className="text-2xl md:text-3xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              SIMLIFE
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 md:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm md:text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-soft-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
