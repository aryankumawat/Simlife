import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import ParticleBackground from '@/components/ParticleBackground'
import Header from '@/components/Header'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Simlife - Redefined Health Formulations',
  description: 'The Future of Strength Begins Here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <CustomCursor />
        <ParticleBackground />
        <Header />
        {children}
      </body>
    </html>
  )
}
