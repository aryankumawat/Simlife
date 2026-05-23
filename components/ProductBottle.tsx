'use client'

import { motion } from 'framer-motion'

type ProductBottleProps = {
  name: string
  tagline: string
  bgFrom: string
  bgTo: string
  accent: string
  size?: 'sm' | 'md' | 'lg'
  /** Show the small tagline strip at the bottom of the visual. Default true. */
  showTagline?: boolean
}

/**
 * Placeholder product visual — a stylised SVG "bottle" stand-in.
 * Used while real product photography is being produced.
 * Deliberately abstract so it doesn't feel like cheap mocked artwork.
 */
export default function ProductBottle({
  name,
  tagline,
  bgFrom,
  bgTo,
  accent,
  showTagline = true,
}: ProductBottleProps) {
  // Unique id slug for SVG defs so multiple bottles on the page don't collide
  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  // Truncate the product name to 2 lines if it has multiple words; otherwise keep it
  const words = name.toUpperCase().split(' ')
  const line1 = words[0] ?? ''
  const line2 = words.slice(1).join(' ')

  return (
    <div
      className="relative rounded-[28px] overflow-hidden flex items-center justify-center w-full h-full"
      style={{
        background: `radial-gradient(ellipse 60% 50% at 30% 25%, ${accent}25 0%, transparent 60%), linear-gradient(160deg, ${bgFrom} 0%, ${bgTo} 100%)`,
      }}
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            top: '-10%',
            right: '-15%',
            width: '55%',
            height: '55%',
            background: accent,
            opacity: 0.18,
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: '-15%',
            left: '-10%',
            width: '50%',
            height: '50%',
            background: bgTo,
            opacity: 0.5,
            filter: 'blur(70px)',
          }}
        />
      </div>

      {/* Bottle — scales to fit the container while preserving aspect ratio.
          viewBox is wider so long product names fit comfortably. */}
      <motion.svg
        viewBox="0 0 320 420"
        preserveAspectRatio="xMidYMid meet"
        className="relative z-10 w-[65%] h-[85%] drop-shadow-2xl"
        initial={{ y: 12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <defs>
          <linearGradient id={`bg-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
            <stop offset="50%" stopColor={accent} stopOpacity="0.18" />
            <stop offset="100%" stopColor={bgFrom} stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id={`cap-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FBF7EE" stopOpacity="0.95" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id={`gloss-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Cap (top) */}
        <rect x="130" y="20" width="60" height="38" rx="4" fill={`url(#cap-${id})`} />
        <rect x="124" y="52" width="72" height="14" rx="3" fill="#FBF7EE" opacity="0.95" />

        {/* Bottle body */}
        <path
          d="M 88 76 Q 88 68 96 68 L 224 68 Q 232 68 232 76 L 232 388 Q 232 402 218 402 L 102 402 Q 88 402 88 388 Z"
          fill={`url(#bg-${id})`}
          stroke="#FBF7EE"
          strokeOpacity="0.28"
          strokeWidth="1"
        />

        {/* Subtle gloss — narrow strip on the left edge, BEHIND the label */}
        <path
          d="M 92 84 Q 92 78 98 78 L 104 78 L 104 380 Q 104 386 98 386 L 92 386 Z"
          fill={`url(#gloss-${id})`}
        />

        {/* Label — large rounded rect occupying middle of bottle */}
        <rect
          x="112"
          y="150"
          width="96"
          height="180"
          rx="3"
          fill="#FBF7EE"
          fillOpacity="0.05"
          stroke="#FBF7EE"
          strokeOpacity="0.22"
          strokeWidth="0.6"
        />

        {/* Wordmark "VIVIEN" — display caps with heavier centre V, matching the new brand logo */}
        <text
          x="160"
          y="204"
          textAnchor="middle"
          fill="#FBF7EE"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="22"
          letterSpacing="2.2"
          fontWeight="300"
          opacity="0.98"
        >
          VI<tspan fontWeight="700">V</tspan>IEN
        </text>

        {/* BIOTHERAPY mini-tagline */}
        <text
          x="160"
          y="222"
          textAnchor="middle"
          fill={accent}
          fontFamily="-apple-system, system-ui, sans-serif"
          fontSize="5.5"
          letterSpacing="2.4"
          opacity="0.95"
        >
          BIOTHERAPY
        </text>

        {/* Hairline */}
        <line
          x1="135"
          y1="240"
          x2="185"
          y2="240"
          stroke="#FBF7EE"
          strokeOpacity="0.3"
          strokeWidth="0.5"
        />

        {/* Product name — wrapped to 1 or 2 lines and sized to fit */}
        <text
          x="160"
          y={line2 ? '266' : '274'}
          textAnchor="middle"
          fill="#FBF7EE"
          fontFamily="-apple-system, system-ui, sans-serif"
          fontSize="8"
          letterSpacing="1.6"
          opacity="0.92"
        >
          {line1}
        </text>
        {line2 && (
          <text
            x="160"
            y="280"
            textAnchor="middle"
            fill="#FBF7EE"
            fontFamily="-apple-system, system-ui, sans-serif"
            fontSize="8"
            letterSpacing="1.6"
            opacity="0.92"
          >
            {line2}
          </text>
        )}

        {/* Small decorative dot */}
        <circle cx="160" cy="310" r="1.4" fill={accent} opacity="0.9" />
      </motion.svg>

      {/* Tagline below the bottle (suppressed on cards where the meta sits underneath) */}
      {showTagline && (
        <div className="absolute bottom-5 left-5 right-5 text-cream/70 text-[10px] tracking-[0.3em] uppercase font-medium z-10 text-center">
          {tagline}
        </div>
      )}
    </div>
  )
}
