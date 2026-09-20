import Reveal from '../components/Reveal'
import ImageReveal from '../components/ImageReveal'

export default function Introduction() {
  return (
    <section id="introduction" className="relative bg-cream py-28 md:py-36">

      <div className="container-shantara grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7 lg:pr-8">
          <Reveal>
            <p className="text-[0.82rem] tracking-[0.14em] uppercase text-ink-soft/70 font-medium">The retreat</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-3 font-display text-[2.2rem] font-light leading-[1.12] text-ink text-balance sm:text-[2.8rem] md:text-[3.4rem]">
              Not a holiday.
              <br />
              A return to <span className="italic text-pine">balance.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-xl text-[1.05rem] leading-[1.8] text-ink-soft font-light">
              Shantara was never built as a place to pass through. It is an immersive naturopathy
              retreat, where every meal, treatment and hour of rest is part of one continuous
              programme &mdash; guided by doctors, grounded in twenty-five years of clinical practice,
              and set on a quiet Kerala hilltop.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-4 max-w-xl text-[1.05rem] leading-[1.8] text-ink-soft font-light">
              You arrive with a condition to address.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="max-w-xl text-[1.05rem] leading-[1.8] text-ink-soft font-light">
              You leave with a plan for the years after.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.15}>
            <ImageReveal
              src="/img/plant-organic.jpg"
              alt="Detail of an organic plant grown on Shantara's grounds"
              className="aspect-[4/5] w-full shadow-[0_16px_40px_-16px_rgba(33,31,24,0.15)]"
              imgClassName="photo-graded"
            />
          </Reveal>
        </div>
      </div>

    </section>
  )
}
