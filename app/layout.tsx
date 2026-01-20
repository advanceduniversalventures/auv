import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Advanced Universal Ventures, LLC | Innovation & Excellence',
  description: 'Advanced Universal Ventures, LLC - Leading provider of SaaS solutions, tennis education consulting, and digital content creation. Based in Maryland, USA.',
  keywords: 'SaaS, software development, tennis education, NCAA consulting, content creation, Maryland LLC',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'Advanced Universal Ventures, LLC | Innovation & Excellence',
    description: 'Advanced Universal Ventures, LLC - Leading provider of SaaS solutions, tennis education consulting, and digital content creation. Based in Maryland, USA.',
    url: 'https://advanceduniversalventures.com',
    siteName: 'Advanced Universal Ventures',
    images: [
      {
        url: 'https://advanceduniversalventures.com/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Advanced Universal Ventures Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advanced Universal Ventures, LLC | Innovation & Excellence',
    description: 'Leading provider of SaaS solutions, tennis education consulting, and digital content creation.',
    images: ['https://advanceduniversalventures.com/og-image.svg'],
  },
  metadataBase: new URL('https://advanceduniversalventures.com'),
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


