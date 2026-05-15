import type { Metadata } from 'next'
import Image from 'next/image'
import Button from '@/components/Button'
import CTA from '@/components/CTA'
import ServicesIntro from '@/components/ServicesIntro'
import PackageCard from '@/components/PackageCard'
import styles from './services.module.css'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Brand design, website design, and design collateral packages for small businesses.',
}

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/images/services_hero.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
        </div>
        <div className={styles.heroText}>
          <p>
            Good design isn&apos;t just{' '}
            <em className={styles.heroPretty}>pretty</em>
            —it&apos;s the thing that makes someone stop scrolling, feel something, and reach out.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <ServicesIntro />

      {/* BRAND DESIGN */}
      <section className={`${styles.detail} ${styles.blue}`} id="brand">
        <div className={styles.visualPhoto}>
          <Image src="/images/services_brand.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
        </div>
        <div className={styles.detailContent}>
          <p className="eyebrow">01</p>
          <h2>Brand Design</h2>
          <p className={styles.desc}>
            Your brand is your vibe, translated into visuals. I offer two packages to fit where
            you&apos;re at—whether you need something quick and polished or a complete brand experience.
          </p>

          <div className={styles.packages}>
            <PackageCard
              wide
              tag="Basic Brand  ·  2 Weeks  ·  $1,200"
              title="Fresh Start"
              description="You're just getting started and you need a brand that looks legit—fast. This gets you a logo, color palette, fonts, and a simple brand guide. All the essentials to launch with confidence."
              items={[
                'Primary logo + one alternative variation',
                'Color palette (3–5 colors)',
                'Typography pairing (header and body fonts)',
                'Simple brand style guide',
                'All files for web and print',
              ]}
              ctaVariant="orange"
            />
          </div>
        </div>
      </section>

      {/* WEBSITE DESIGN */}
      <section className={`${styles.detail} ${styles.reverse} ${styles.peach}`} id="web">
        <div className={styles.detailContent}>
          <p className="eyebrow">02</p>
          <h2>Brand &amp; Web Design</h2>
          <p className={styles.desc}>
            Beautiful, functional websites that look as good on a phone as they do on desktop.
            Every site I build is intentional—designed to convert visitors into clients.
          </p>

          <div className={styles.packages}>
            <PackageCard
              tag="Brand & Web Design  ·  3 Weeks  ·  $2,500"
              title="Saturday Essentials"
              description="You need a complete online presence—brand and website, done right. This package gets you a polished brand identity plus a clean, functional 5-page site. Everything you need to show up professionally."
              items={[
                'Everything in Fresh Start (logo, colors, fonts, brand guide)',
                '5-page custom website (Home, About, Services, Contact, Sales Page)',
                'Mobile-responsive design',
                'Basic SEO setup',
                'Contact form integration',
                'Easy-to-update CMS with training',
              ]}
              ctaVariant="orange"
            />
            <PackageCard
              featured
              tag="Brand & Web Design  ·  4+ Weeks  ·  Starting at $4,000"
              title="Peak Season"
              description="This is the full experience. We start with brand strategy, build out your complete visual identity, and create a custom website that's designed around how your business actually works. This takes time because we're not rushing—we're getting it right."
              items={[
                'In-depth brand strategy session',
                'Custom logo design (primary, secondary, submark variations)',
                'Extended color palette with variations',
                'Complete typography system',
                'Supporting graphics, patterns, and icons',
                'Comprehensive brand style guide',
                'Custom 5+ page website built for your needs',
                'Fully mobile-responsive design',
                'Comprehensive SEO optimization',
                'Advanced integrations (booking, email, e-commerce)',
                'Custom animations and interactive elements',
                'Full CMS training and ongoing support',
              ]}
              note="Just want the full brand without a website? That's available too. Reach out and we'll customize a package for you."
              ctaVariant="orange"
            />
          </div>
        </div>
        <div className={styles.visualPhoto}>
          <Image src="/images/services_web.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </div>
      </section>

      {/* COLLATERAL */}
      <section className={`${styles.detail} ${styles.blue}`} id="collateral">
        <div className={styles.visualPhoto}>
          <Image src="/images/services_collateral.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center 20%' }} />
        </div>
        <div className={styles.detailContent}>
          <p className="eyebrow">03</p>
          <h2>Design Collateral</h2>
          <p className={styles.desc}>
            Show up consistently everywhere your brand lives. From print to pixels,
            cohesive collateral is the secret sauce.
          </p>
          <div className={styles.collateralGrid}>
            {[
              { title: 'Social Media Templates', body: 'Canva templates built to match your brand, ready to use every week.' },
              { title: 'Business Cards', body: 'Print-ready designs that make a real impression.' },
              { title: 'Branded Merch', body: 'Custom designs for products your people will actually want.' },
              { title: 'Email Templates', body: 'On-brand HTML email templates for Mailchimp, Klaviyo, or Flodesk.' },
            ].map((item) => (
              <div key={item.title} className={styles.collateralItem}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
          <Button href="/contact" variant="primary">get a custom quote</Button>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <p className="eyebrow" style={{ color: 'var(--clr-surface)', textAlign: 'center' }}>How It Works</p>
          <h2 style={{ color: 'white', textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            The Process
          </h2>
          <div className={styles.steps}>
            {[
              { n: '01', title: 'Discovery', body: 'We kick things off with a deep-dive call to understand your brand, goals, and vision.' },
              { n: '02', title: 'Strategy', body: 'I research your industry and audience, then build a strategic creative direction.' },
              { n: '03', title: 'Design', body: 'I create your designs with focused revision rounds to get everything just right.' },
              { n: '04', title: 'Launch', body: 'You get your final files, guides, and everything you need to hit the ground running.' },
            ].map((step) => (
              <div key={step.n} className={styles.step}>
                <span className={styles.stepNum}>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        headline="Ready to build something beautiful?"
        ctaLabel="let's talk"
        ctaHref="/contact"
      />
    </>
  )
}
