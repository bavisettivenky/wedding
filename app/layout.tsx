import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant'
})

const greatVibes = Great_Vibes({ 
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-great-vibes'
})

export const metadata: Metadata = {
  title: 'Swamy & Satya | Wedding Invitation',
  description: 'You are cordially invited to celebrate the wedding of Swamy and Satya. Join us for a beautiful celebration of love, tradition, and family.',
  keywords: ['wedding', 'invitation', 'Indian wedding', 'Swamy', 'Satya'],
  openGraph: {
    title: 'Swamy & Satya Wedding Invitation',
    description: 'Join us for a beautiful celebration of love, tradition, and family.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#800020',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${greatVibes.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
