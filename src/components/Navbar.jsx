import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/content'
import { useContactModal } from '../hooks/useContactModal'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { openContactModal } = useContactModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-cream-warm/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(33,31,24,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-shantara flex h-20 items-center justify-between md:h-24">
        {/* Brand Wordmark (Text-only as per brand guide) */}
        <a href="#top" className="flex items-center z-10" data-cursor="pointer">
          <span
            className={`font-display text-[1.4rem] tracking-[0.05em] transition-colors duration-500 md:text-[1.65rem] ${
              scrolled || open ? 'text-pine' : 'text-cream-warm'
            }`}
          >
            SHANTAR&#256;
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className={`hidden items-center gap-10 text-[0.92rem] tracking-wide transition-colors duration-500 lg:flex ${
            scrolled ? 'text-ink-soft' : 'text-cream-warm/90'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor="pointer"
              className="relative py-2 transition-all duration-300 hover:text-gold-soft hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button and Text Menu Toggle */}
        <div className="flex items-center gap-5 z-10">
          <button
            type="button"
            onClick={() => openContactModal()}
            data-cursor="pointer"
            className={`hidden items-center border px-6 py-2.5 text-[0.88rem] tracking-wide transition-all duration-500 sm:inline-flex ${
              scrolled
                ? 'border-pine text-pine hover:bg-pine hover:text-cream-warm'
                : 'border-cream-warm/60 text-cream-warm hover:bg-cream-warm hover:text-pine'
            }`}
          >
            Begin Your Journey
          </button>

          {/* Text-based Menu / Close Toggle */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            data-cursor="pointer"
            className={`lg:hidden flex items-center gap-2 text-[0.78rem] font-medium tracking-[0.18em] uppercase transition-colors duration-500 ${
              scrolled || open ? 'text-pine' : 'text-cream-warm'
            }`}
          >
            <span>{open ? 'CLOSE' : 'MENU'}</span>
            <span className="text-[0.85rem] font-light leading-none">{open ? '\u2715' : '\u2014'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-cream-warm border-b border-stone-line lg:hidden"
          >
            <nav className="container-shantara flex flex-col gap-1 pb-8 pt-3 text-ink">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  data-cursor="pointer"
                  className="py-4 font-display text-xl tracking-wide flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-ink-soft/40 uppercase font-sans">&rarr;</span>
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  openContactModal()
                }}
                data-cursor="pointer"
                className="mt-6 inline-flex items-center justify-center bg-pine px-6 py-3.5 text-cream-warm font-sans text-[0.92rem] tracking-wide"
              >
                Begin Your Journey
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
