'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import styles from './ServicesIntro.module.css'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function ServicesIntro() {
  const accentRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = accentRef.current
    if (!el) return

    const split = new SplitText(el, { type: 'chars' })

    gsap.from(split.chars, {
      opacity: 0,
      y: 24,
      rotateX: -40,
      stagger: 0.03,
      duration: 0.6,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      split.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section className={styles.intro}>
      <p>
        I build brands and websites that do exactly that, for businesses that are{' '}
        <span ref={accentRef} className={styles.accent}>
          serious about the details.
        </span>
      </p>
    </section>
  )
}
