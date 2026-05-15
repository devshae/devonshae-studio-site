import Image from 'next/image'
import Button from './Button'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.content}>
        <h2>
          Design that feels like your
          <br />
          favorite{' '}
          <span className={styles.script}>Sunday morning</span>
        </h2>
        <p>
          This is a design studio for the people who pay attention.
          The ones who notice when the light hits just right, who curate their coffee order
          like it&apos;s an art form, and who believe that good design isn&apos;t a luxury—it&apos;s essential.
        </p>
        <p>
          I create clean, vibrant brands for businesses built around the good stuff—beautiful spaces,
          thoughtful products, and experiences worth sharing. If you&apos;re all about intentional living
          and those perfect little moments, we&apos;re going to get along great.
        </p>
        <Button href="/contact" variant="orange">Work With Me</Button>
      </div>

      <div className={styles.imageWrap}>
        <Image
          src="/images/ds_w_laptop_by_chair.jpg"
          alt="Devon Shae"
          width={500}
          height={560}
          className={styles.photo}
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
      </div>
    </section>
  )
}
