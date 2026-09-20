export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  as,
  type = 'button',
  dataCursor = 'pointer',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.95rem] tracking-[0.01em] transition-all duration-300 whitespace-nowrap cursor-pointer'

  const variants = {
    primary: 'bg-pine text-cream-warm hover:bg-pine-deep',
    inverse: 'bg-cream-warm text-pine hover:bg-white',
    outline: 'border border-current text-current hover:bg-white/10',
    ghost: 'text-current underline underline-offset-8 decoration-1 decoration-current/40 hover:decoration-current',
  }

  const combinedClass = `${base} ${variants[variant]} ${className}`

  if (as === 'button' || (!href && onClick)) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={combinedClass}
        data-cursor={dataCursor}
        {...props}
      >
        {children}
      </button>
    )
  }

  return (
    <a
      href={href || '#'}
      onClick={onClick}
      className={combinedClass}
      data-cursor={dataCursor}
      {...props}
    >
      {children}
    </a>
  )
}

