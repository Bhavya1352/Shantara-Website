import Reveal from '../components/Reveal'
import ImageReveal from '../components/ImageReveal'

export default function Experience() {
  return (
    <section id="experience" className="relative bg-cream py-28 md:py-36">

      <div className="container-shantara">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="text-[0.82rem] tracking-[0.14em] uppercase text-ink-soft/70 font-medium">The experience</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 font-display text-[2.1rem] font-light leading-[1.15] text-ink text-balance sm:text-[2.7rem]">
                Every detail has <span className="italic text-pine">a purpose.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="mt-4 max-w-xs sm:mt-0">
            <p className="text-[0.95rem] leading-relaxed text-ink-soft font-light">
              Rooms, therapies, dining and architecture &mdash; each considered as part of one
              unhurried environment for recovery.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-4 md:gap-5">
          {/* Row 1 */}
          <div className="flex flex-col gap-4 md:h-[62vh] md:min-h-[420px] md:flex-row md:gap-5">
            <div className="w-full md:h-full md:w-[38%]" data-cursor="view">
              <ImageReveal
                src="/img/room-bedroom.jpg"
                alt="A Shantara guest room, softly lit with a view over the hills"
                className="aspect-[4/5] w-full md:aspect-auto md:h-full shadow-sm"
                imgClassName="photo-graded"
              />
            </div>

            <div className="flex flex-col gap-4 md:h-full md:w-[62%] md:gap-5">
              <div className="w-full md:h-[55%]" data-cursor="view">
                <ImageReveal
                  src="/img/room-therapy-table.jpg"
                  alt="A private therapy room prepared for treatment"
                  className="aspect-[16/10] w-full md:h-full md:aspect-auto shadow-sm"
                  imgClassName="photo-graded"
                  delay={0.1}
                />
              </div>

              <div className="w-full md:h-[45%]" data-cursor="view">
                <ImageReveal
                  src="/img/dining-hall.jpg"
                  alt="Shantara's community dining hall"
                  className="aspect-[16/10] w-full md:h-full md:aspect-auto shadow-sm"
                  imgClassName="photo-graded"
                  delay={0.15}
                />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col gap-4 md:h-[52vh] md:min-h-[360px] md:flex-row md:gap-5">
            <div className="w-full md:h-full md:w-[32%]" data-cursor="view">
              <ImageReveal
                src="/img/exterior-architecture.jpg"
                alt="Shantara's architecture, framed by tropical foliage"
                className="aspect-[3/4] w-full md:aspect-auto md:h-full shadow-sm"
                imgClassName="photo-graded"
                delay={0.05}
              />
            </div>

            <div className="w-full md:h-full md:w-[68%]" data-cursor="view">
              <ImageReveal
                src="/img/lounge-nature.jpg"
                alt="A quiet lounge space opening onto nature"
                className="aspect-[16/9] w-full md:aspect-auto md:h-full shadow-sm"
                imgClassName="photo-graded"
                delay={0.2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
