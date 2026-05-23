'use client'

import Link from 'next/link'

type LogoProps = {
  color?: 'plum' | 'cream' | 'champagne'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  href?: string | null
  /** Use the inline wordmark (compact, no tagline) instead of the full logo */
  compact?: boolean
}

const sizeMap = {
  sm: { h: 30, mdH: 36 },     // Header
  md: { h: 44, mdH: 56 },
  lg: { h: 80, mdH: 110 },
  xl: { h: 130, mdH: 180 },
}

const colorMap = {
  plum: 'text-plum-deep',
  cream: 'text-cream',
  champagne: 'text-champagne',
}

/**
 * Vivien BioTherapy wordmark.
 *
 * Renders /public/vivien-logo.svg via an <img> with `currentColor` so it
 * inherits the surrounding text colour — works on cream and plum backgrounds
 * without needing two assets. Replace /public/vivien-logo.svg with the
 * official brand file to swap the artwork everywhere on the site.
 *
 * `compact` (used in the sticky header) renders a smaller inline wordmark
 * without the BIOTHERAPY tagline so the nav row stays compact.
 */
export default function Logo({
  color = 'plum',
  size = 'md',
  href = '/',
  compact = false,
}: LogoProps) {
  const cls = colorMap[color]
  const sz = sizeMap[size]

  const inner = compact ? (
    <div className={`inline-flex items-baseline ${cls}`} style={{ height: sz.h }}>
      <span
        className="font-display tracking-wider"
        style={{ fontSize: sz.h * 0.85, lineHeight: 1, fontWeight: 300 }}
      >
        VI<span style={{ fontWeight: 600 }}>V</span>IEN
      </span>
    </div>
  ) : (
    <div className={`inline-flex flex-col items-center leading-none ${cls}`}>
      {/* Inline SVG so we can colour it via currentColor */}
      <svg
        viewBox="0 0 600 220"
        className="block"
        style={{ height: sz.h, width: 'auto' }}
        aria-hidden="true"
      >
        <text
          x="300"
          y="138"
          textAnchor="middle"
          fill="currentColor"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, 'Times New Roman', serif",
            fontSize: 158,
            fontWeight: 300,
            letterSpacing: '0.06em',
          }}
        >
          VI
          <tspan style={{ fontWeight: 600 }}>V</tspan>
          IEN
        </text>
        <text
          x="300"
          y="190"
          textAnchor="middle"
          fill="currentColor"
          style={{
            fontFamily: "var(--font-poppins), Helvetica, Arial, sans-serif",
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: '0.6em',
          }}
        >
          BIOTHERAPY
        </text>
      </svg>
    </div>
  )

  if (!href) return inner
  return (
    <Link href={href} aria-label="Vivien BioTherapy — Home" className="inline-block">
      {inner}
    </Link>
  )
}
