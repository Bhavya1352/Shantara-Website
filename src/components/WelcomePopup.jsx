import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import { useContactModal } from '../hooks/useContactModal'
import { stopLenis, startLenis } from '../hooks/useLenis'
import FlowerMark from './FlowerMark'

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false)
  const { openContactModal, isOpen: isContactOpen } = useContactModal()
  const modalRef = useRef(null)

  useEffect(() => {
    let isTriggered = false

    const triggerShow = () => {
      if (isTriggered || hasBeenDismissed) return
      isTriggered = true
      setIsVisible(true)
      stopLenis()
    }

    // 1. Scroll position listener
    const handleScroll = () => {
      if (hasBeenDismissed) return
      const scrollY = window.scrollY || document.documentElement.scrollTop || window.pageYOffset || 0
      const threshold = Math.min(window.innerHeight * 0.4, 350)
      if (scrollY > threshold) {
        triggerShow()
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check immediately in case page is already scrolled

    // 2. IntersectionObserver on Hero section (#top)
    const heroEl = document.getElementById('top')
    let observer = null

    if (heroEl) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (hasBeenDismissed) return
            // Trigger when Hero starts scrolling out of viewport
            if (!entry.isIntersecting || entry.intersectionRatio < 0.6) {
              triggerShow()
            }
          })
        },
        { threshold: [0, 0.6] }
      )
      observer.observe(heroEl)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (observer && heroEl) observer.unobserve(heroEl)
    }
  }, [hasBeenDismissed])

  // If ContactModal opens while WelcomePopup is active, hide WelcomePopup
  useEffect(() => {
    if (isContactOpen && isVisible) {
      dismissPopup(false)
    }
  }, [isContactOpen])

  const dismissPopup = (shouldResumeLenis = true) => {
    setHasBeenDismissed(true)
    setIsVisible(false)
    if (shouldResumeLenis && !isContactOpen) {
      startLenis()
      document.body.style.overflow = ''
    }
  }

  // Handle ESC key press
  useEffect(() => {
    if (!isVisible) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        dismissPopup()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isVisible])

  const handleCTA = () => {
    dismissPopup(false)
    openContactModal({ condition: 'General Restoration' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          className="fixed inset-0 z-[99980] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="welcome-popup-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => dismissPopup()}
            className="fixed inset-0 bg-pine-deep/80 backdrop-blur-sm grain-overlay-dark cursor-pointer"
            data-cursor="close"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-3xl overflow-hidden border border-stone-line bg-cream-warm shadow-[0_32px_80px_-20px_rgba(41,51,18,0.4)] my-auto grid grid-cols-1 md:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Minimal Close (X) Button */}
            <button
              onClick={() => dismissPopup()}
              aria-label="Close welcome overlay"
              data-cursor="close"
              className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center text-ink-soft/60 transition-colors hover:text-ink focus:outline-none focus-visible:ring-1 focus-visible:ring-pine"
            >
              <HiX className="text-xl stroke-1" />
            </button>

            {/* Left Column: Property Photo */}
            <div className="relative md:col-span-5 h-48 md:h-auto overflow-hidden bg-pine-deep">
              <img
                src="/img/room-balcony.jpg"
                alt="Shantarā Sanctuary Balcony View"
                className="h-full w-full object-cover photo-graded scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/40 via-transparent to-transparent md:hidden" />
            </div>

            {/* Right Column: Warm Copy & CTA */}
            <div className="md:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-center text-left relative">
              <div className="flex items-center gap-2.5 mb-3">
                <FlowerMark size={24} color="#3C4A1E" centerColor="#AD8A4E" />
                <span className="text-[0.72rem] tracking-[0.18em] uppercase text-pine font-medium">
                  Welcome to Shantar&#256;
                </span>
              </div>

              <h3
                id="welcome-popup-title"
                className="font-display text-[1.75rem] sm:text-[2.05rem] font-light leading-snug text-ink text-balance"
              >
                Begin your healing journey.
              </h3>

              <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft">
                Step away into quiet sanctuary. Experience time-tested Kerala naturopathy,
                restorative hydrotherapy, and personalized wellness tailored to your life.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={handleCTA}
                  data-cursor="pointer"
                  className="inline-flex items-center justify-center bg-pine px-7 py-3.5 text-[0.9rem] font-medium tracking-wide text-cream-warm transition-all duration-300 hover:bg-pine-deep shadow-sm"
                >
                  Plan Your Stay
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </button>
              </div>

              <p className="mt-4 text-[0.73rem] text-ink-soft/60 italic">
                Doctor-led consultations &bull; Confidential &bull; Personalised care
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
