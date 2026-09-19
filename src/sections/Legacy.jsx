import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import { legacyStats } from '../data/content'

export default function Legacy() {
  return (
    <section id="legacy" className="bg-pine-deep text-cream-warm">
      <div className="relative overflow-hidden">
        <img
          src="/img/legacy-bw.jpg"
          alt="Hygiene Nature Cure hospital, the building where Shantara's legacy began"
          className="h-[46vh] min-h-[340px] w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/60 to-pine-deep/30" />
        <div className="container-shantara absolute inset-x-0 bottom-0 pb-10 md:pb-14">
          <Reveal>
            <p className="text-[0.85rem] text-cream-warm/70">Hygiene Nature Cure &middot; 25 years of natural healing</p>
          </Reveal>
        </div>
      </div>

      <div className="container-shantara py-20 md:py-28">
        <Reveal>
          <h2 className="max-w-4xl font-display text-[2.1rem] font-light italic leading-[1.2] text-balance sm:text-[2.8rem] md:text-[3.4rem]">
            We&rsquo;re not entering the wellness business &mdash; we&rsquo;ve been healing people for
            twenty-five years.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.8] text-cream-warm/75">
            Now we are building a premium space where guests from anywhere in the world can
            experience what our patients have trusted for decades.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-14 border-t border-cream-warm/15 pt-14 md:grid-cols-4">
          {legacyStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div>
                <div className="font-display text-[2.6rem] font-light leading-none sm:text-[3.2rem]">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-4 text-[0.95rem] text-cream-warm/90">{stat.label}</p>
                <p className="mt-1 text-[0.82rem] text-cream-warm/55">{stat.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
