import Image from 'next/image'
import styles from './Portfolio.module.css'

interface PortfolioItem {
  id: string
  title: string
  category: string
  src?: string
  href?: string
}

interface PortfolioProps {
  items?: PortfolioItem[]
}

const placeholders: PortfolioItem[] = Array.from({ length: 6 }, (_, i) => ({
  id: `placeholder-${i}`,
  title: 'Project Title',
  category: 'Brand Design',
}))

export default function Portfolio({ items = placeholders }: PortfolioProps) {
  return (
    <section className={styles.portfolio} id="portfolio">
      {/* Laptop sticker — absolute bottom, behind all content */}
      <div className={styles.stickerWrap} aria-hidden>
        <Image
          src="/images/laptop_on_feet_bluebg.png"
          alt=""
          width={620}
          height={768}
          className={styles.sticker}
        />
      </div>

      <div className={styles.header}>
        <h2 className={styles.heading}>
          Some Work I&apos;m Lowkey (highkey) Proud Of
        </h2>
      </div>

      {/* Portfolio grid */}
      <div className={styles.grid}>
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href ?? '#'}
            className={styles.item}
            aria-label={item.title}
          >
            {item.src ? (
              <Image src={item.src} alt={item.title} fill style={{ objectFit: 'cover' }} />
            ) : (
              <div className={styles.placeholder} />
            )}
            <div className={styles.overlay}>
              <p className={styles.category}>{item.category}</p>
              <p className={styles.title}>{item.title}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
