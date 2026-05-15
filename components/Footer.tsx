import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Home', href: '/' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Large italic logotype */}
        <div className={styles.logotype}>
          <Image
            src="/images/logo-v1-offwhite.svg"
            alt="DevonShae Creative Studio"
            width={320}
            height={64}
            className={styles.wordmark}
          />
        </div>

        {/* Right-side vertical nav */}
        <nav className={styles.nav} aria-label="Footer navigation">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <p className={styles.copy}>
        DevonShae Creative Studio LLC &nbsp;|&nbsp; {year}
      </p>
    </footer>
  )
}
