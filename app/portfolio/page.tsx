import type { Metadata } from 'next'
import Portfolio from '@/components/Portfolio'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Selected brand design and web design work by DevonShae Creative Studio.',
}

export default function PortfolioPage() {
  return (
    <>
      <div style={{ paddingTop: 'calc(var(--space-lg) + 60px)' }} />
      <Portfolio />
      <CTA
        headline="Like what you see?"
        body="Let's create something just as intentional for your brand."
        ctaLabel="start your project"
        ctaHref="/contact"
      />
    </>
  )
}
