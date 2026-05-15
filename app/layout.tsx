import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'DevonShae Creative Studio',
    template: '%s | DevonShae Creative Studio',
  },
  description:
    'Brand & Web Design for people who savor the details. Clean, vibrant brands for businesses built around the good stuff.',
  openGraph: {
    type: 'website',
    siteName: 'DevonShae Creative Studio',
    images: [{ url: '/images/ds_logo_chocolate.svg' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
