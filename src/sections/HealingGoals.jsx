import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { healingGoals } from '../data/content'
import { useContactModal } from '../hooks/useContactModal'

export default function HealingGoals() {
  const [active, setActive] = useState(0)
  const { openContactModal } = useContactModal()

  return (
    <section id="healing-goals" className="bg-cream py-28 md:py-36">
      <div className="container-shantara">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[0.82rem] tracking-[0.14em] uppercase text-ink-soft/70 font-medium">Who we help</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 max-w-md font-display text-[2.2rem] font-light leading-[1.15] text-ink text-balance sm:text-[2.7rem]">
                Every programme begins with a <span className="italic text-pine">condition</span>, not a checklist.
              </h2>
            </Reveal>

            <div className="mt-8 hidden overflow-hidden lg:block">
              <Reveal delay={0.18}>
                <div data-cursor="view">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={active}
                      src={healingGoals[active].img}
                      alt={healingGoals[active].title}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="aspect-[4/5] w-full max-w-sm object-cover shadow-sm photo-graded"
                    />
                  </AnimatePresence>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-stone-line">
              {healingGoals.map((goal, i) => (
                <li
                  key={goal.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  data-cursor="select"
                  className="group cursor-pointer py-5 transition-colors duration-300"
                >
                  <div className="flex items-baseline justify-between gap-6">
                    <h3
                      className={`font-display text-[1.5rem] transition-colors duration-300 sm:text-[1.9rem] ${
                        active === i ? 'text-pine italic' : 'text-ink'
                      }`}
                    >
                      {goal.title}
                    </h3>
                    <span className="hidden shrink-0 text-[0.85rem] text-ink-soft/60 font-figures sm:block">
                      0{i + 1}
                    </span>
                  </div>
                  <AnimatePresence>
                    {active === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden text-[0.95rem] leading-relaxed text-ink-soft"
                      >
                        <p className="mt-2.5 max-w-lg font-light leading-[1.75]">{goal.copy}</p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            openContactModal({ condition: goal.title })
                          }}
                          data-cursor="pointer"
                          className="mt-3 inline-flex items-center gap-2 text-[0.85rem] font-medium tracking-wide uppercase text-pine hover:text-pine-deep underline underline-offset-4"
                        >
                          <span>Consult on this condition</span>
                          <span>&rarr;</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
