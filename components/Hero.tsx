import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.band}>
        <h1 className={styles.headline}>
          Brand &amp; Web Design <em className={styles.sub}>for people who savor the details</em>
        </h1>
      </div>
    </section>
  )
}
