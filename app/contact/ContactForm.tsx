'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import styles from './contact.module.css'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    // Wire up your form handler here (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div className={styles.success}>
        <h2>Message received!</h2>
        <p>I&apos;ll be in touch within 1–2 business days. Talk soon!</p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Name</span>
          <input name="name" type="text" required placeholder="Your name" />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Email</span>
          <input name="email" type="email" required placeholder="you@example.com" />
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>What are you looking for?</span>
        <select name="service" required defaultValue="">
          <option value="" disabled>Select a service</option>
          <option value="brand">Brand Design</option>
          <option value="web">Website Design</option>
          <option value="collateral">Design Collateral</option>
          <option value="bundle">Brand + Website Bundle</option>
          <option value="other">Something Else</option>
        </select>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Tell me about your project</span>
        <textarea name="message" rows={6} required placeholder="What are you building? What's your timeline? Any budget in mind?" />
      </label>

      <Button type="submit" variant="orange" className={styles.submit}>
        {status === 'sending' ? 'Sending…' : 'send my message'}
      </Button>
    </form>
  )
}
