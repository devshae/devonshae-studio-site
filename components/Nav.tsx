'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Nav.module.css'

const links = [
  { label: 'Work With Me', href: '/contact' },
  { label: 'Services', href: '/services' },
  { label: 'Apply Now', href: '/contact#apply' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/logo-v1.svg"
          alt="DevonShae Creative Studio"
          width={200}
          height={40}
          priority
        />
      </Link>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className={styles.link} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className={styles.burger}
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={open ? styles.burgerOpen : ''} />
        <span className={open ? styles.burgerOpen : ''} />
      </button>
    </nav>
  )
}
