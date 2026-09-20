import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Button from '../components/Button'
import Pattern from '../components/Pattern'
import { useContactModal } from '../hooks/useContactModal'

const ease = [0.22, 1, 0.36, 1]

export default function Hero({ isLoaded = true }) {
  const { openContactModal } = useContactModal()

  // Mouse parallax setup
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const springX = useSpring(rawX, { damping: 40, stiffness: 200, mass: 0.8 })
  const springY = useSpring(rawY, { damping: 40, stiffness: 200, mass: 0.8 })

  // Background subtle parallax shifts
  const bgX = useTransform(springX, [-0.5, 0.5], ['-1.5%', '1.5%'])
  const bgY = useTransform(springY, [-0.5, 0.5], ['-1.5%', '1.5%'])

  // Foreground pattern inverse shift
  const patternX = useTransform(springX, [-0.5, 0.5], ['2%', '-2%'])
  const patternY = useTransform(springY, [-0.5, 0.5], ['2%', '-2%'])

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    if (!isFine) return

    const handleMouseMove = (e) => {
      const normalizedX = (e.clientX / window.innerWidth) - 0.5
      const normalizedY = (e.clientY / window.innerHeight) - 0.5
      rawX.set(normalizedX)
      rawY.set(normalizedY)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [rawX, rawY])

  return (
    <section
      id="top"
      className="relative flex h-screen w-full items-end overflow-hidden bg-pine-deep grain-overlay-dark"
      data-cursor="explore"
    >
      {/* Parallax Background Photography */}
      <motion.div
        className="absolute inset-[-4%] min-h-[108%] w-[108%]"
        style={{ x: bgX, y: bgY }}
      >
        <motion.img
          src="/img/hero-lobby.jpg"
          alt="A sunlit Shantara lounge overlooking the Kerala hills, framed by floor-to-ceiling glass"
          className="h-full w-full object-cover object-center photo-graded"
          initial={{ scale: 1.12, opacity: 0.85 }}
          animate={isLoaded ? { scale: 1, opacity: 1 } : { scale: 1.12, opacity: 0.85 }}
          transition={{ duration: 2.2, ease }}
        />
      </motion.div>

      {/* Atmospheric Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/95 via-pine-deep/45 to-pine-deep/25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-pine-deep/70 via-transparent to-transparent pointer-events-none" />

      {/* Ambient Parallax Brand Pattern */}
      <motion.div
        className="absolute -right-20 top-0 h-[65%] w-[42%] hidden xs:block pointer-events-none"
        style={{ x: patternX, y: patternY }}
      >
        <Pattern
          className="h-full w-full opacity-[0.11]"
          color="#F5F1E6"
        />
      </motion.div>

      {/* Hero Content Container */}
      <div className="container-shantara relative z-10 w-full pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="flex flex-col items-start gap-2">
          {/* Eyebrow / Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            <p className="text-[0.82rem] tracking-[0.16em] uppercase text-cream-warm/75">
              Naturopathy &middot; Kozhikode, Kerala
            </p>
          </motion.div>

          {/* Main Headline with Signature Italic Accent */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 1.05, delay: 0.35, ease }}
            className="max-w-3xl font-display text-[3rem] font-light leading-[1.04] text-cream-warm text-balance sm:text-[4rem] md:text-[5.2rem]"
          >
            A slower way back to <span className="italic text-gold-soft">balance.</span>
          </motion.h1>
        </div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.55, ease }}
          className="mt-7 max-w-md text-[1.05rem] leading-relaxed text-cream-warm/85 font-light"
        >
          A naturopathy retreat in Kerala, designed around your healing journey &mdash; not a checkout date.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.75, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button
            onClick={() => openContactModal()}
            variant="inverse"
            dataCursor="pointer"
          >
            Begin Your Journey
          </Button>
          <Button
            href="#retreat"
            variant="outline"
            className="border-cream-warm/45 text-cream-warm hover:bg-cream-warm/15 hover:border-cream-warm"
            dataCursor="pointer"
          >
            Explore the Sanctuary
          </Button>
        </motion.div>
      </div>

    </section>
  )
}
