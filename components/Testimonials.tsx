import styles from './Testimonials.module.css'

interface Testimonial {
  id: string
  quote: string
  name: string
  role?: string
  variant: 'orange' | 'olive' | 'blue'
}

interface TestimonialsProps {
  items?: Testimonial[]
}

const defaultItems: Testimonial[] = [
  {
    id: '1',
    quote: 'Working with Devon was the best creative decision I made this year. She took my scattered vision and turned it into a brand that actually feels like me.',
    name: 'Name Here',
    role: 'Small Business Owner',
    variant: 'orange',
  },
  {
    id: '2',
    quote: "The process was so easy and fun — she really listened. My new website has gotten so many compliments and the inquiries have increased noticeably.",
    name: 'Name Here',
    role: 'Photographer',
    variant: 'olive',
  },
  {
    id: '3',
    quote: "Devon just *gets it*. I couldn't explain exactly what I wanted and she still nailed it. The attention to detail is unreal.",
    name: 'Name Here',
    role: 'Creative Director',
    variant: 'blue',
  },
]

export default function Testimonials({ items = defaultItems }: TestimonialsProps) {
  return (
    <section className={styles.testimonials} id="testimonials">
      {/* Luminaire script heading */}
      <h2 className={styles.heading}>
        sweet words from even sweeter people
      </h2>

      <div className={styles.grid}>
        {items.map((t) => (
          <blockquote key={t.id} className={`${styles.card} ${styles[t.variant]}`}>
            <p className={styles.quote}>{t.quote}</p>
            <footer className={styles.footer}>
              <cite className={styles.name}>— {t.name}</cite>
              {t.role && <span className={styles.role}>{t.role}</span>}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
