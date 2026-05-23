'use client'

import Link from 'next/link'

type LogoProps = {
  color?: 'plum' | 'cream' | 'champagne'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  withTagline?: boolean
  href?: string | null
}

const sizeMap = {
  sm: { name: 'text-xl md:text-2xl', tagline: 'text-[8px] tracking-[0.45em]' },
  md: { name: 'text-2xl md:text-3xl', tagline: 'text-[9px] tracking-[0.45em]' },
  lg: { name: 'text-4xl md:text-5xl', tagline: 'text-[11px] tracking-[0.5em]' },
  xl: { name: 'text-6xl md:text-8xl', tagline: 'text-sm tracking-[0.55em]' },
}

const colorMap = {
  plum: 'text-plum-deep',
  cream: 'text-cream',
  champagne: 'text-champagne',
}

/**
 * Vivien Biotherapy wordmark.
 * Two slanted serif "V"s sandwich the lowercase "i" and bookend the word.
 * Rendered with the Cormorant Garamond display font for the look in the brand book.
 */
export default function Logo({
  color = 'plum',
  size = 'md',
  withTagline = true,
  href = '/',
}: LogoProps) {
  const cls = colorMap[color]
  const sz = sizeMap[size]

  const inner = (
    <div className="inline-flex flex-col items-center leading-none">
      <div className={`font-display italic ${sz.name} ${cls} flex items-baseline`}>
        <span className="font-normal">vi</span>
        <span className="relative inline-block mx-[-0.05em]">
          {/* Stylised V — bold, slightly rotated to echo the brand swan-V */}
          <span className="font-semibold not-italic" style={{ display: 'inline-block', transform: 'translateY(-0.05em)' }}>
            V
          </span>
        </span>
        <span className="font-normal">ien</span>
      </div>
      {withTagline && (
        <div className={`${sz.tagline} ${cls} font-sans font-medium uppercase mt-1`}>
          Biotherapy
        </div>
      )}
    </div>
  )

  if (!href) return inner
  return (
    <Link href={href} aria-label="Vivien Biotherapy — Home" className="inline-block">
      {inner}
    </Link>
  )
}
