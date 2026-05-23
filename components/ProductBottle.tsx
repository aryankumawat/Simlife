'use client'

import { motion } from 'framer-motion'

type ProductBottleProps = {
  name: string
  tagline: string
  bgFrom: string
  bgTo: string
  accent: string
  size?: 'sm' | 'md' | 'lg'
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
  size = 'md',
}: ProductBottleProps) {
  const dims = {
    sm: { w: 240, h: 320 },
    md: { w: 360, h: 480 },
    lg: { w: 520, h: 680 },
  }[size]

  return (
    <div
      className="relative rounded-[28px] overflow-hidden flex items-center justify-center"
      style={{
        width: '100%',
        height: '100%',
        minHeight: dims.h * 0.6,
        background: `radial-gradient(ellipse 60% 50% at 30% 25%, ${accent}25 0%, transparent 60%), linear-gradient(160deg, ${bgFrom} 0%, ${bgTo} 100%)`,
      }}
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden">
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

      {/* Bottle silhouette — abstracted */}
      <motion.svg
        viewBox="0 0 240 320"
        width={dims.w}
        height={dims.h}
        className="relative z-10 max-w-[70%] max-h-[80%] drop-shadow-2xl"
        initial={{ y: 12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <defs>
          <linearGradient id={`bg-${name}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
            <stop offset="50%" stopColor={accent} stopOpacity="0.18" />
            <stop offset="100%" stopColor={bgFrom} stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id={`cap-${name}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FBF7EE" stopOpacity="0.95" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id={`gloss-${name}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Cap */}
        <rect x="92" y="20" width="56" height="36" rx="4" fill={`url(#cap-${name})`} />
        <rect x="88" y="50" width="64" height="14" rx="3" fill="#FBF7EE" opacity="0.95" />
        {/* Bottle body */}
        <path
          d="M 80 70 Q 80 64 86 64 L 154 64 Q 160 64 160 70 L 160 290 Q 160 304 146 304 L 94 304 Q 80 304 80 290 Z"
          fill={`url(#bg-${name})`}
          stroke="#FBF7EE"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
        {/* Label */}
        <rect x="92" y="125" width="56" height="100" rx="2" fill="#FBF7EE" fillOpacity="0.06" stroke="#FBF7EE" strokeOpacity="0.18" strokeWidth="0.5" />
        {/* Label wordmark */}
        <text
          x="120"
          y="155"
          textAnchor="middle"
          fill="#FBF7EE"
          fontFamily="Georgia, serif"
          fontSize="13"
          fontStyle="italic"
          opacity="0.95"
        >
          vi<tspan fontWeight="700" fontStyle="normal">V</tspan>ien
        </text>
        <text
          x="120"
          y="170"
          textAnchor="middle"
          fill={accent}
          fontFamily="sans-serif"
          fontSize="5"
          letterSpacing="2"
          opacity="0.9"
        >
          BIOTHERAPY
        </text>
        {/* hairline */}
        <line x1="100" y1="180" x2="140" y2="180" stroke="#FBF7EE" strokeOpacity="0.25" strokeWidth="0.5" />
        {/* product name */}
        <text
          x="120"
          y="200"
          textAnchor="middle"
          fill="#FBF7EE"
          fontFamily="sans-serif"
          fontSize="7"
          letterSpacing="1.5"
          opacity="0.85"
        >
          {name.toUpperCase()}
        </text>
        {/* Gloss */}
        <path
          d="M 88 75 Q 88 70 93 70 L 105 70 L 105 220 Q 105 220 100 220 L 95 220 L 88 215 Z"
          fill={`url(#gloss-${name})`}
        />
      </motion.svg>

      {/* Subtle product name floating beneath */}
      <div className="absolute bottom-5 left-5 right-5 text-cream/70 text-[10px] tracking-[0.3em] uppercase font-medium z-10 text-center">
        {tagline}
      </div>
    </div>
  )
}
