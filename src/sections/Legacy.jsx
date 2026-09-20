import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import { legacyStats } from '../data/content'

// Sizes: primary stats (0,1) larger, supporting stats (2,3) smaller
const CIRCLE_SIZES = [240, 256, 208, 220]

// Subtle rosette watermark — echoes Pattern.jsx interlocking-circle motif
function RosetteWatermark() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke="#C6A66C" strokeWidth="0.8">
        <circle cx="50" cy="50" r="30" />
        <circle cx="50" cy="20" r="30" />
        <circle cx="50" cy="80" r="30" />
        <circle cx="20" cy="50" r="30" />
        <circle cx="80" cy="50" r="30" />
        <circle cx="28" cy="28" r="30" />
        <circle cx="72" cy="28" r="30" />
        <circle cx="28" cy="72" r="30" />
        <circle cx="72" cy="72" r="30" />
      </g>
    </svg>
  )
}

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
          <h2 className="max-w-3xl mx-auto text-center font-display text-[2rem] font-light leading-[1.2] text-balance sm:text-[2.6rem] md:text-[3.2rem]">
            We&rsquo;re not entering the wellness business &mdash; we&rsquo;ve been healing people for{' '}
            <span className="italic text-gold-soft">twenty-five years.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-lg mx-auto text-center text-[1.05rem] leading-[1.75] text-cream-warm/85 font-light">
            Now we are building a premium space where guests from anywhere in the world can
            experience what our patients have trusted for decades.
          </p>
        </Reveal>

        {/* Overlapping circle stat composition — echoes brand rosette motif */}
        <div className="mt-14">
          {/* Desktop: single row with overlapping circles */}
          <div className="hidden md:flex items-center justify-center">
            {legacyStats.map((stat, i) => {
              const d = CIRCLE_SIZES[i]
              const zIndex = [10, 9, 7, 8][i]
              return (
                <div key={stat.label} className={i > 0 ? '-ml-10' : ''} style={{ zIndex, position: 'relative' }}>
                <Reveal
                  delay={i * 0.09}
                >
                  <div
                    className="relative flex flex-col items-center justify-center rounded-full bg-pine-mid border border-gold-soft/40 text-center transition-transform duration-500 ease-out hover:scale-[1.04] hover:z-20 cursor-default shrink-0"
                    style={{ width: d, height: d }}
                  >
                    <RosetteWatermark />
                    <div className="relative z-10 px-5">
                      <div className="font-display font-light leading-none text-cream-warm font-figures" style={{ fontSize: d >= 240 ? '2.6rem' : '2.1rem' }}>
                        <CountUp value={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="mt-2 text-cream-warm/90 leading-snug" style={{ fontSize: d >= 240 ? '0.78rem' : '0.72rem' }}>{stat.label}</p>
                      <p className="mt-1 text-cream-warm/50" style={{ fontSize: '0.68rem' }}>{stat.detail}</p>
                    </div>
                  </div>
                </Reveal>
                </div>
              )
            })}
          </div>

          {/* Mobile: 2×2 grid, no overlap */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {legacyStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.07} className="flex justify-center">
                <div className="relative flex flex-col items-center justify-center rounded-full bg-pine-mid border border-gold-soft/40 text-center" style={{ width: 156, height: 156 }}>
                  <RosetteWatermark />
                  <div className="relative z-10 px-4">
                    <div className="font-display text-[1.9rem] font-light leading-none text-cream-warm font-figures">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-1.5 text-[0.7rem] text-cream-warm/90 leading-snug">{stat.label}</p>
                    <p className="mt-0.5 text-[0.62rem] text-cream-warm/50">{stat.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
