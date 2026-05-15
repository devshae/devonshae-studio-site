import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.textWrap}>
        <Image
          src="/images/sun.svg"
          alt=""
          aria-hidden
          width={56}
          height={56}
          className={styles.sunIcon}
        />
        <h1 className={styles.headline}>
          Brand &amp; Web Design
          <br />
          <em className={styles.sub}>for people who savor the details</em>
        </h1>
      </div>
    </section>
  )
}
