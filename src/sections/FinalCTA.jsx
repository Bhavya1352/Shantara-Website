import Reveal from '../components/Reveal'
import Button from '../components/Button'
import Pattern from '../components/Pattern'

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative overflow-hidden bg-merino py-28 text-ink md:py-36">
      <Pattern className="absolute -bottom-16 -left-16 h-64 w-64 opacity-[0.18] md:h-96 md:w-96" color="#3C4A1E" />
      <Pattern className="absolute -right-10 -top-10 h-48 w-48 opacity-[0.12] md:h-72 md:w-72" color="#3C4A1E" />

      <div className="container-shantara relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <h2 className="max-w-2xl font-display text-[2.4rem] font-light italic leading-[1.15] text-balance sm:text-[3.4rem]">
            Begin your healing journey.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
            Discover a more natural way to reconnect, rebalance and restore.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10">
          <Button href="mailto:heal@shantara.life" variant="primary">
            Plan Your Stay
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
