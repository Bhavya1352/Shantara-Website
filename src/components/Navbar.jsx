import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
          ? 'bg-cream-warm/92 backdrop-blur-md shadow-[0_1px_0_0_rgba(33,31,24,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-shantara flex h-20 items-center justify-between md:h-24">
        <a href="#top" className="flex items-center gap-2 z-10">
          <span
            className={`font-display text-[1.4rem] tracking-[0.04em] transition-colors duration-500 md:text-[1.65rem] ${
              scrolled || open ? 'text-pine' : 'text-cream-warm'
            }`}
          >
            SHANTAR&#256;
          </span>
        </a>

        <nav
          className={`hidden items-center gap-10 text-[0.95rem] transition-colors duration-500 lg:flex ${
            scrolled ? 'text-ink-soft' : 'text-cream-warm/90'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-2 transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 z-10">
          <a
            href="#final-cta"
            className={`hidden items-center border px-6 py-2.5 text-[0.9rem] transition-colors duration-500 sm:inline-flex ${
              scrolled
                ? 'border-pine text-pine hover:bg-pine hover:text-cream-warm'
                : 'border-cream-warm/60 text-cream-warm hover:bg-cream-warm hover:text-pine'
            }`}
          >
            Begin Your Journey
          </a>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden text-2xl transition-colors duration-500 ${
              scrolled || open ? 'text-pine' : 'text-cream-warm'
            }`}
          >
            {open ? <HiX /> : <HiMenuAlt4 />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-cream-warm lg:hidden"
          >
            <nav className="container-shantara flex flex-col gap-1 pb-8 pt-2 text-ink">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-stone-line py-4 font-display text-xl"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#final-cta"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center bg-pine px-6 py-3.5 text-cream-warm"
              >
                Begin Your Journey
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
