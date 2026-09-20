import Reveal from '../components/Reveal'
import Button from '../components/Button'
import Pattern from '../components/Pattern'
import { useContactModal } from '../hooks/useContactModal'

export default function FinalCTA() {
  const { openContactModal } = useContactModal()

  return (
    <section id="final-cta" className="relative overflow-hidden bg-pine-deep text-cream-warm py-24 md:py-36 grain-overlay-dark">
      <Pattern className="absolute -bottom-20 -left-20 h-64 w-64 opacity-[0.08] md:h-80 md:w-80 pointer-events-none" color="#F5F1E6" />
      <Pattern className="absolute -right-16 -top-16 h-48 w-48 opacity-[0.06] md:h-64 md:w-64 pointer-events-none" color="#F5F1E6" />

      <div className="container-shantara relative z-10 flex flex-col items-center text-center">
        <span className="text-[0.82rem] tracking-[0.16em] uppercase text-cream-warm/75">Plan Your Stay</span>

        <Reveal className="mt-8">
          <h2 className="max-w-2xl font-display text-[2.4rem] font-light leading-[1.15] text-balance sm:text-[3.4rem]">
            Begin your <span className="italic text-gold-soft">healing journey</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-cream-warm/80 font-light">
            Discover a more natural way to reconnect, rebalance and restore on our quiet Kerala hilltop.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10">
          <Button
            onClick={() => openContactModal()}
            variant="inverse"
            dataCursor="pointer"
          >
            Plan Your Stay
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
