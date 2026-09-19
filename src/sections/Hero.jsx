import { motion } from 'framer-motion'
import Button from '../components/Button'
import Pattern from '../components/Pattern'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section id="top" className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-pine-deep">
      <motion.img
        src="/img/hero-lobby.jpg"
        alt="A sunlit Shantara lounge overlooking the Kerala hills, framed by floor-to-ceiling glass"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/85 via-pine-deep/20 to-pine-deep/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-pine-deep/55 via-transparent to-transparent" />

      <Pattern
        className="absolute -right-24 top-0 h-[70%] w-[46%] opacity-[0.14] xs:block hidden"
        color="#F5F1E6"
      />

      <div className="container-shantara relative z-10 w-full pb-16 pt-40 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="mb-6 text-[0.85rem] tracking-[0.02em] text-cream-warm/75"
        >
          Naturopathy &middot; Kozhikode, Kerala
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease }}
          className="max-w-3xl font-display text-[2.75rem] font-light italic leading-[1.08] text-cream-warm text-balance sm:text-[3.6rem] md:text-[4.5rem]"
        >
          A slower way back to balance.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
          className="mt-7 max-w-md text-[1.05rem] leading-relaxed text-cream-warm/85"
        >
          A naturopathy retreat in Kerala, designed around your healing journey &mdash; not a checkout date.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#final-cta" variant="inverse">
            Begin Your Journey
          </Button>
          <Button href="#introduction" variant="outline" className="border-cream-warm/50 text-cream-warm hover:bg-cream-warm/10">
            Explore Shantara
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 right-6 hidden flex-col items-center gap-3 text-cream-warm/70 sm:flex md:right-12"
      >
        <span className="text-[0.75rem] tracking-[0.02em] [writing-mode:vertical-lr]">Scroll</span>
        <span className="h-14 w-px bg-cream-warm/40" />
      </motion.div>
    </section>
  )
}
