import Reveal from '../components/Reveal'
import ImageReveal from '../components/ImageReveal'
import { retreatFacilities } from '../data/content'

export default function Retreat() {
  return (
    <section id="retreat" className="bg-cream py-28 md:py-36">
      <div className="container-shantara">
        {/* Image with integrated stats card */}
        <div className="relative" data-cursor="explore">
          <ImageReveal
            src="/img/retreat-lobby.jpg"
            alt="Shantara's lounge, framed by full-height glass looking onto the Kozhikode hills"
            className="aspect-[16/10] w-full sm:aspect-[16/8] shadow-sm"
            imgClassName="photo-graded"
          />

          <Reveal
            delay={0.25}
            className="relative z-10 mx-4 -mt-8 w-fit bg-cream-warm/95 p-6 shadow-[0_12px_32px_-6px_rgba(33,31,24,0.08),0_4px_12px_-2px_rgba(33,31,24,0.04)] backdrop-blur-sm sm:mx-8 sm:-mt-10 sm:p-7 md:absolute md:left-8 md:-mt-12 md:p-8 lg:static lg:mx-0 lg:-mt-14 border border-stone-line/50"
          >
            <div className="flex items-stretch gap-6 sm:gap-8">
              <div className="flex flex-col gap-2">
                <span className="font-display text-[2.2rem] font-light leading-none text-pine sm:text-[2.75rem] font-figures">52</span>
                <span className="max-w-[125px] text-[0.82rem] leading-snug text-ink-soft">
                  Premium rooms, thoughtfully designed
                </span>
              </div>
              <div className="w-[1px] bg-stone-line self-stretch shrink-0" />
              <div className="flex flex-col gap-2">
                <span className="font-display text-[2.2rem] font-light leading-none text-pine sm:text-[2.75rem] font-figures">56K</span>
                <span className="max-w-[125px] text-[0.82rem] leading-snug text-ink-soft">
                  Sq ft of clinical &amp; wellness facilities
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-[2.1rem] font-light leading-[1.15] text-ink text-balance sm:text-[2.7rem]">
                A sanctuary designed for <span className="italic text-pine">healing.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-[1.05rem] leading-[1.75] text-ink-soft font-light">
                Perched on a quiet hilltop in Kozhikode, Shantara pairs an organic farm and yoga
                pavilion with specialised therapy spaces and community dining &mdash; every part of
                the grounds built around the body&rsquo;s own capacity to recover.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-stone-line">
              {retreatFacilities.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.04}>
                  <li
                    className="group flex items-start gap-5 py-5 md:gap-6 cursor-pointer"
                    data-cursor="view"
                  >
                    <div className="h-16 w-20 shrink-0 overflow-hidden sm:h-20 sm:w-28 md:h-24 md:w-32 bg-stone/20">
                      <img
                        src={f.img}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 photo-graded"
                      />
                    </div>
                    <div className="pt-0.5">
                      <h3 className="font-display text-[1.1rem] text-ink sm:text-[1.25rem] group-hover:text-pine transition-colors">
                        {f.title}
                      </h3>
                      <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-soft">{f.copy}</p>
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
