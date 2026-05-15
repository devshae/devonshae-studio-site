import styles from './Button.module.css'

type Variant = 'primary' | 'orange' | 'blue' | 'olive' | 'ghost'

interface ButtonProps {
  children: React.ReactNode
  variant?: Variant
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`

  if (href) {
    return <a href={href} className={cls}>{children}</a>
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
