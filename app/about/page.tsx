import type { Metadata } from 'next'
import Image from 'next/image'
import Button from '@/components/Button'
import CTA from '@/components/CTA'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Devon Shae — brand and web designer for people who savor the details.',
}

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/ds_w_laptop_by_chair.jpg"
            alt="Devon Shae"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroText}>
          <p className="eyebrow" style={{ color: 'var(--clr-surface)' }}>The Person Behind the Pixels</p>
          <h1>About Devon</h1>
        </div>
      </section>

      {/* STORY */}
      <section className={styles.story}>
        <div className={styles.storyContent}>
          <h2>Design that feels like your favorite Sunday morning</h2>
          <p>
            This is a design studio for the people who pay attention. The ones who notice when the
            light hits just right, who curate their coffee order like it&apos;s an art form, and who
            believe that good design isn&apos;t a luxury—it&apos;s essential.
          </p>
          <p>
            I create clean, vibrant brands for businesses built around the good stuff—beautiful spaces,
            thoughtful products, and experiences worth sharing. If you&apos;re all about intentional living
            and those perfect little moments, we&apos;re going to get along great.
          </p>
          <p>
            Based in [Location], working with clients everywhere. When I&apos;m not designing, you can find
            me hunting for vintage treasures, making an overly elaborate iced coffee, or taking photos
            of things with good light.
          </p>
          <Button href="/contact" variant="orange">let&apos;s work together</Button>
        </div>
        <div className={styles.storyImage}>
          <Image
            src="/images/ds_laptop_and_chair.jpg"
            alt="Devon's workspace"
            width={480}
            height={600}
            style={{ objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
          />
          <Image
            src="/images/sun.svg"
            alt=""
            aria-hidden
            width={68}
            height={72}
            className={styles.deco}
          />
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.values}>
        <div className={styles.valuesInner}>
          <p className="eyebrow" style={{ textAlign: 'center' }}>What I Believe</p>
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>The Studio&apos;s Values</h2>
          <div className={styles.valuesGrid}>
            {[
              {
                icon: '/images/starfish.svg',
                title: 'Details Matter',
                body: 'The difference between good and great is always in the details. I obsess over the small things so your brand feels polished everywhere.',
              },
              {
                icon: '/images/sun.svg',
                title: 'Clarity Over Complexity',
                body: 'The best designs are the ones that look effortless. I strip away the noise and let your brand breathe.',
              },
              {
                icon: '/images/wave.svg',
                title: 'Real Partnership',
                body: 'This isn\'t a transactional relationship. I genuinely care about your success, and that shows in every project.',
              },
            ].map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <Image src={v.icon} alt="" width={48} height={52} className={styles.valueIcon} />
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        headline="Ready to create something you love?"
        ctaLabel="start the conversation"
      />
    </>
  )
}
