import type { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from './ContactForm'
import styles from './contact.module.css'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start your project with DevonShae Creative Studio. Let\'s grab a virtual coffee.',
}

export default function ContactPage() {
  return (
    <>
      <section className={styles.page}>
        <div className={styles.left}>
          <p className="eyebrow">Let&apos;s Talk</p>
          <h1>Start the Conversation</h1>
          <p className={styles.intro}>
            Whether you&apos;re launching something new or refreshing what you&apos;ve already built,
            I&apos;d love to hear about your vision. Fill out the form and I&apos;ll be in touch within
            1–2 business days.
          </p>

          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span className="eyebrow">Email</span>
              <a href="mailto:hello@devonshaecreative.com">hello@devonshaecreative.com</a>
            </div>
            <div className={styles.detailItem}>
              <span className="eyebrow">Instagram</span>
              <a href="https://instagram.com/devonshaecreative" target="_blank" rel="noopener noreferrer">
                @devonshaecreative
              </a>
            </div>
          </div>

          <div className={styles.decos} aria-hidden>
            <Image src="/images/palm_tree.svg" alt="" width={86} height={102} style={{ opacity: 0.2 }} />
            <Image src="/images/starfish.svg" alt="" width={49} height={51} style={{ opacity: 0.2 }} />
          </div>
        </div>

        <div className={styles.right}>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
