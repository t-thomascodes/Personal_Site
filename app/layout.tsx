import type { Metadata } from 'next'
import { Space_Mono, Libre_Baskerville } from 'next/font/google'
import '@/styles/globals.css'
import Nav from '@/components/layout/nav'
import Footer from '@/components/layout/footer'
import BackgroundCanvas from '@/components/layout/background-canvas'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-space-mono',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-libre-baskerville',
})

export const metadata: Metadata = {
  title: 'tony thomas',
  description: 'seven countries. three continents. one obsession: building things that move people.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${libreBaskerville.variable}`}>
      <body>
        <BackgroundCanvas />
        <div className="layer">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
