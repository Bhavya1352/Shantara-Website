import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import Reveal from '../components/Reveal'
import { journeyPhases } from '../data/content'

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
          <p className="text-[0.85rem] text-ink-soft/70">The healing journey</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-2xl font-display text-[2.2rem] font-light italic leading-[1.15] text-ink text-balance sm:text-[2.9rem]">
            Most retreats end at checkout. Ours begins a new chapter there.
          </h2>
        </Reveal>
      </div>

      <div ref={containerRef} className="relative" style={{ height: `${journeyPhases.length * 100}vh` }}>
        <div className="sticky top-0 flex h-[100svh] min-h-[560px] w-full items-center overflow-hidden bg-pine-deep">
          <AnimatePresence mode="sync">
            <motion.img
              key={active}
              src={journeyPhases[active].img}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-pine-deep/90 via-pine-deep/45 to-pine-deep/10" />

          <div className="container-shantara relative z-10 grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="mb-8 flex items-center gap-3">
                {journeyPhases.map((p, i) => (
                  <span
                    key={p.number}
                    className={`h-px transition-all duration-500 ${
                      i === active ? 'w-12 bg-cream-warm' : 'w-6 bg-cream-warm/30'
                    }`}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-display italic text-cream-warm/60">{journeyPhases[active].number}</span>
                  <h3 className="mt-3 font-display text-[2rem] font-light text-cream-warm sm:text-[2.6rem]">
                    {journeyPhases[active].title}
                  </h3>
                  <p className="mt-1 text-[0.85rem] tracking-wide text-cream-warm/60">
                    {journeyPhases[active].duration}
                  </p>

                  <ul className="mt-8 flex flex-col gap-3">
                    {journeyPhases[active].items.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.98rem] leading-snug text-cream-warm/85">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-soft" />
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
