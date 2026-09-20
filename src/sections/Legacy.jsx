import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import { legacyStats } from '../data/content'

export default function Legacy() {
  return (
    <section id="legacy" className="bg-pine-deep text-cream-warm grain-overlay-dark">
      {/* Legacy image strip */}
      <figure className="relative overflow-hidden" data-cursor="view">
        <img
          src="/img/legacy-bw.jpg"
          alt="Hygiene Nature Cure hospital, the building where Shantara's legacy began"
          className="h-[38vh] min-h-[280px] w-full object-cover grayscale photo-graded"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/50 to-pine-deep/10 pointer-events-none" />
        <div className="container-shantara absolute bottom-0 w-full pb-8 md:pb-10">
          <Reveal>
            <p className="text-[0.82rem] tracking-[0.12em] uppercase text-cream-warm/80">
              Hygiene Nature Cure &middot; Est. 2000
            </p>
          </Reveal>
        </div>
      </figure>

      <div className="container-shantara py-20 md:py-28">
        <Reveal>
          <h2 className="max-w-3xl font-display text-[2rem] font-light leading-[1.2] text-balance sm:text-[2.6rem] md:text-[3.2rem]">
            We&rsquo;re not entering the wellness business &mdash; we&rsquo;ve been healing people for{' '}
            <span className="italic text-gold-soft">twenty-five years.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-lg text-[1.05rem] leading-[1.75] text-cream-warm/85 font-light">
            Now we are building a premium space where guests from anywhere in the world can
            experience what our patients have trusted for decades.
          </p>
        </Reveal>

        {/* Editorial stats — 2x2 grid with horizontal rhythm */}
        <div className="mt-16 divide-y divide-cream-warm/12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {legacyStats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 0.07}
                className="group flex flex-col justify-center border-b border-cream-warm/12 py-8 md:border-b-0 md:py-12 md:pr-10 lg:pr-14"
              >
                <div className="font-display text-[2.8rem] font-light leading-none sm:text-[3.4rem] md:text-[3.8rem] font-figures text-cream-warm">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-4 text-[0.92rem] text-cream-warm/90">{stat.label}</p>
                <p className="mt-1 text-[0.82rem] text-cream-warm/65">{stat.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
