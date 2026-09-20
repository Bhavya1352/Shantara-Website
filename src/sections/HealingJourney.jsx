import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import Reveal from '../components/Reveal'
import { journeyPhases } from '../data/content'

const PHASE_HEIGHT_VH = 40

export default function HealingJourney() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(journeyPhases.length - 1, Math.floor(v * journeyPhases.length))
    setActive(idx)
  })

  return (
    <section id="journey" className="bg-cream-warm">
      <div className="container-shantara pb-14 pt-28 md:pt-36">
        <Reveal>
          <p className="text-[0.82rem] tracking-[0.14em] uppercase text-ink-soft/70 font-medium">The healing journey</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 max-w-2xl font-display text-[2.1rem] font-light leading-[1.15] text-ink text-balance sm:text-[2.7rem]">
            Most retreats end at checkout. Ours begins a <span className="italic text-pine">new chapter</span> there.
          </h2>
        </Reveal>
      </div>

      <div ref={containerRef} className="relative" style={{ height: `${journeyPhases.length * PHASE_HEIGHT_VH}vh` }}>
        <div
          className="sticky top-0 flex h-[100svh] min-h-[540px] w-full items-center overflow-hidden bg-pine-deep grain-overlay-dark"
          data-cursor="view"
        >
          <AnimatePresence mode="sync">
            <motion.img
              key={active}
              src={journeyPhases[active].img}
              alt={journeyPhases[active].title}
              className="absolute inset-0 h-full w-full object-cover photo-graded"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-pine-deep/95 via-pine-deep/60 to-pine-deep/20 pointer-events-none" />

          <div className="container-shantara relative z-10 grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="mb-8 flex items-center gap-2">
                {journeyPhases.map((p, i) => (
                  <motion.span
                    key={p.number}
                    initial={false}
                    animate={{
                      width: i === active ? '3rem' : '1.5rem',
                      backgroundColor: i === active ? '#F5F1E6' : 'rgba(251,248,242,0.3)',
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="h-px"
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-display italic text-cream-warm/60 font-figures text-lg">
                    Phase {journeyPhases[active].number}
                  </span>
                  <h3 className="mt-2 font-display text-[1.9rem] font-light text-cream-warm sm:text-[2.5rem]">
                    {journeyPhases[active].title}
                  </h3>
                  <p className="mt-1 text-[0.8rem] tracking-[0.1em] uppercase text-gold-soft/80 font-medium">
                    {journeyPhases[active].duration}
                  </p>

                  <ul className="mt-8 flex flex-col gap-3.5">
                    {journeyPhases[active].items.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-cream-warm/90 font-light">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-soft" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
