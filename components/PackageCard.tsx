'use client'

import { useState } from 'react'
import Button from './Button'
import styles from '../app/services/services.module.css'

interface PackageCardProps {
  tag: string
  title: string
  description: string
  items: string[]
  note?: string
  ctaVariant?: 'orange' | 'ghost' | 'primary'
  featured?: boolean
  wide?: boolean
}

export default function PackageCard({
  tag,
  title,
  description,
  items,
  note,
  ctaVariant = 'orange',
  featured = false,
  wide = false,
}: PackageCardProps) {
  const [locked, setLocked] = useState(false)

  const classNames = [
    styles.package,
    featured ? styles.featured : '',
    wide ? styles.packageWide : '',
    locked ? styles.packageLocked : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={classNames} onClick={() => setLocked((v) => !v)}>
      <p className={styles.packageTag}>{tag}</p>
      <h3>{title}</h3>
      <p className={styles.packageDesc}>{description}</p>

      <div className={styles.packageExpand}>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {note && <p className={styles.packageNote}>{note}</p>}
      </div>

      <Button href="/contact" variant={ctaVariant}>inquire</Button>
    </div>
  )
}
