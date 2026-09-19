export default function Button({ children, href = '#', variant = 'primary', className = '', onClick }) {
  const base =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.95rem] tracking-[0.01em] transition-colors duration-300 whitespace-nowrap'

  const variants = {
    primary: 'bg-pine text-cream-warm hover:bg-pine-deep',
    inverse: 'bg-cream-warm text-pine hover:bg-white',
    outline: 'border border-current text-current hover:bg-black/5',
    ghost: 'text-current underline underline-offset-8 decoration-1 decoration-current/40 hover:decoration-current',
  }

  return (
    <a href={href} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  )
}
