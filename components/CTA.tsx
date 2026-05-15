import Image from 'next/image'
import Button from './Button'
import styles from './CTA.module.css'

interface CTAProps {
  headline?: string
  body?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function CTA({
  headline = "Ready to see your vision come to life?",
  body = "Whether you're launching something new or refreshing what you've already built, I'd love to help you create a brand that feels authentically you. Let's grab a (virtual) coffee and talk about your vision.",
  ctaLabel = 'Get Started',
  ctaHref = '/contact',
}: CTAProps) {
  return (
    <section className={styles.cta} id="contact">
      <div className={styles.content}>
        <h2>{headline}</h2>
        <p>{body}</p>
        <Button href={ctaHref} variant="orange">{ctaLabel}</Button>
      </div>

      <div className={styles.imageWrap}>
        <Image
          src="/images/devonshae creative portfolio 1.jpg"
          alt="Devon Shae"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
      </div>

    </section>
  )
}
