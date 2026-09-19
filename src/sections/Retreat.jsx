import Reveal from '../components/Reveal'
import ImageReveal from '../components/ImageReveal'
import { retreatFacilities } from '../data/content'

export default function Retreat() {
  return (
    <section id="retreat" className="bg-cream py-28 md:py-36">
      <div className="container-shantara">
        <div className="relative">
          <ImageReveal
            src="/img/retreat-lobby.jpg"
            alt="Shantara's lounge, framed by full-height glass looking onto the Kozhikode hills"
            className="aspect-[16/10] w-full sm:aspect-[16/8]"
          />

          <Reveal
            delay={0.3}
            className="relative z-10 -mt-10 ml-4 flex max-w-xs flex-col gap-6 bg-cream-warm p-7 shadow-[0_20px_60px_-20px_rgba(33,31,24,0.25)] sm:ml-10 md:-mt-16 md:max-w-sm md:p-9"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-display text-[2.6rem] font-light leading-none text-pine">52</span>
              <span className="max-w-[7rem] text-[0.85rem] leading-tight text-ink-soft">Premium rooms, thoughtfully designed</span>
            </div>
            <div className="h-px w-full bg-stone-line" />
            <div className="flex items-baseline gap-4">
              <span className="font-display text-[2.6rem] font-light leading-none text-pine">56K</span>
              <span className="max-w-[7rem] text-[0.85rem] leading-tight text-ink-soft">Sq ft of clinical &amp; wellness facilities</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-[2.2rem] font-light italic leading-[1.15] text-ink text-balance sm:text-[2.8rem]">
                A sanctuary designed for healing.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-[1.02rem] leading-[1.8] text-ink-soft">
                Perched on a quiet hilltop in Kozhikode, Shantara pairs an organic farm and yoga
                pavilion with specialised therapy spaces and community dining &mdash; every part of
                the grounds built around the body&rsquo;s own capacity to recover.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-stone-line border-t border-stone-line">
              {retreatFacilities.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.05}>
                  <li className="group flex items-center gap-6 py-5">
                    <div className="h-16 w-20 shrink-0 overflow-hidden sm:h-20 sm:w-28">
                      <img
                        src={f.img}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-[1.15rem] text-ink sm:text-[1.3rem]">{f.title}</h3>
                      <p className="mt-1 text-[0.9rem] leading-snug text-ink-soft">{f.copy}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
