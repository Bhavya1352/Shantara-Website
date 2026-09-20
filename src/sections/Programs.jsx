import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { stayDurations } from '../data/content'
import { useContactModal } from '../hooks/useContactModal'

export default function Programs() {
  const [active, setActive] = useState(0)
  const current = stayDurations[active]
  const { openContactModal } = useContactModal()

  return (
    <section id="programs" className="relative overflow-hidden bg-pine-deep text-cream-warm grain-overlay-dark">
      <AnimatePresence mode="sync">
        <motion.img
          key={active}
          src={current.img}
          alt=""
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover opacity-25 photo-graded"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/85 to-pine-deep/70 pointer-events-none" />

      <div className="container-shantara relative z-10 py-28 md:py-36">
        <Reveal>
          <p className="text-[0.82rem] tracking-[0.14em] uppercase text-cream-warm/70 font-medium">Length of stay</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 max-w-xl font-display text-[2.2rem] font-light leading-[1.15] text-balance sm:text-[2.8rem]">
            A journey <span className="italic text-gold-soft">measured in days</span>, not a checkout.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-wrap gap-x-2 gap-y-6 lg:col-span-5 lg:flex-col lg:gap-0">
            {stayDurations.map((d, i) => (
              <button
                key={d.days}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                data-cursor="select"
                className={`group flex items-baseline gap-4 py-5 pr-6 text-left transition-all duration-300 lg:w-full cursor-pointer ${
                  active === i ? '' : 'opacity-55 hover:opacity-90'
                }`}
              >
                <span
                  className={`font-display text-[2.4rem] leading-none transition-all duration-300 sm:text-[3rem] font-figures ${
                    active === i ? 'italic text-gold-soft' : 'text-cream-warm'
                  }`}
                >
                  {d.days}
                </span>
                <span className="text-[0.95rem] text-cream-warm/75">days</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-lg"
              >
                <p className="text-[0.85rem] tracking-wide text-cream-warm/70 uppercase">{current.label}</p>

                <h3 className="mt-3 font-display text-[2rem] font-light text-cream-warm sm:text-[2.4rem]">
                  {current.headline}
                </h3>
                <p className="mt-5 text-[1.05rem] leading-[1.75] text-cream-warm/85 font-light">{current.copy}</p>

                <button
                  type="button"
                  onClick={() => openContactModal({ duration: `${current.days} Days` })}
                  data-cursor="pointer"
                  className="mt-8 inline-flex items-center gap-2 border border-gold-soft/50 px-6 py-3 text-[0.85rem] tracking-wide text-cream-warm hover:bg-gold-soft/15 transition-colors cursor-pointer"
                >
                  <span>Plan a {current.days}-Day Retreat</span>
                  <span>&rarr;</span>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
