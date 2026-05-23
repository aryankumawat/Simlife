import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Vivien Biotherapy palette — derived from the brand book
        'plum-deep': '#2A0F2E',     // deepest aubergine — almost black
        'plum': '#4A1F44',          // primary brand plum
        'plum-rich': '#5A2A55',     // hover / accent plum
        'plum-soft': '#7A4A6F',     // muted plum for borders / dividers on cream
        'champagne': '#C9A876',     // warm beige / tan from palette
        'champagne-light': '#DCC59A',
        'champagne-deep': '#A88A5C',
        'cream': '#F4EBD9',         // light cream from palette
        'ivory': '#FBF7EE',         // softest off-white
        'pearl': '#FFFCF6',
        'ink': '#1A0A1C',           // text on light backgrounds
        'ink-soft': '#3A2438',
      },
      fontFamily: {
        // Sego is a paid display font — substitute with the closest Google equivalent
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.3em',
        'widest-3': '0.45em',
      },
      animation: {
        'glow-pulse': 'glow-pulse 6s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 24s ease infinite',
        'fade-in': 'fade-in 1.2s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.55', filter: 'blur(60px)' },
          '50%': { opacity: '0.9', filter: 'blur(80px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'premium': '0 30px 80px -20px rgba(42, 15, 46, 0.35), 0 12px 30px -10px rgba(42, 15, 46, 0.18)',
        'soft': '0 12px 40px -16px rgba(42, 15, 46, 0.18)',
        'inner-cream': 'inset 0 1px 0 rgba(244, 235, 217, 0.4)',
      },
    },
  },
  plugins: [],
}
export default config
