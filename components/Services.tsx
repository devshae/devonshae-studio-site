import Image from 'next/image'
import Button from './Button'
import styles from './Services.module.css'

const cards = [
  {
    id: 'brand',
    title: 'Brand Design',
    body: "Your brand is your vibe, translated into visuals. I offer two packages to fit where you're at—whether you need something quick and polished or a complete brand experience.",
    shape: '/images/olive_scalloped.svg',
    shapeW: 450,
    shapeH: 630,
    btnVariant: 'primary' as const,
    href: '/services#brand',
    textColor: 'white',
  },
  {
    id: 'web',
    title: 'Website Design',
    body: "Beautiful, functional websites that look as good on a phone as they do on desktop—because that's where your people are.",
    shape: '/images/orange_rectangle.svg',
    shapeW: 450,
    shapeH: 630,
    btnVariant: 'blue' as const,
    href: '/services#web',
    textColor: 'white',
  },
  {
    id: 'collateral',
    title: 'Design Collateral',
    body: "From Instagram templates to business cards to branded merch, I'll help you show up consistently everywhere. Because cohesive branding? That's the secret sauce.",
    shape: '/images/blue_scalloped.svg',
    shapeW: 450,
    shapeH: 630,
    btnVariant: 'olive' as const,
    href: '/services#collateral',
    textColor: 'var(--clr-brown)',
  },
]

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <h2 className={styles.heading}>How We Can Work Together</h2>

      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            {/* SVG shape is the card background */}
            <Image
              src={card.shape}
              alt=""
              aria-hidden
              width={card.shapeW}
              height={card.shapeH}
              className={styles.shape}
            />
            {/* Text sits on top */}
            <div className={styles.content} style={{ color: card.textColor }}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardBody}>{card.body}</p>
              <Button href={card.href} variant={card.btnVariant}>Learn More</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
