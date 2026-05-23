import type { Metadata } from 'next'
import { Poppins, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vivien Biotherapy — Engineered Vitality. Cellular Performance.',
  description:
    'Vivien Biotherapy is a next-generation biotherapy company building clinically formulated supplements for cellular optimization, recovery, cognitive clarity, and long-term vitality.',
  keywords: [
    'vivien biotherapy',
    'longevity supplements',
    'cellular optimization',
    'NAD+',
    'recovery',
    'nootropic',
    'biohacking',
    'human performance',
  ],
  openGraph: {
    title: 'Vivien Biotherapy',
    description: 'Engineered vitality. Cellular performance. A new standard in biotherapy.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased bg-ivory text-ink">
        <Header />
        <main className="relative">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
