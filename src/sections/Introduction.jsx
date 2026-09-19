import Reveal from '../components/Reveal'
import ImageReveal from '../components/ImageReveal'

export default function Introduction() {
  return (
    <section id="introduction" className="bg-cream py-28 md:py-36">
      <div className="container-shantara grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7 lg:pr-8">
          <Reveal>
            <h2 className="font-display text-[2.4rem] font-light leading-[1.14] text-ink text-balance sm:text-[3rem] md:text-[3.6rem]">
              Not a holiday.
              <br />
              <span className="italic text-pine">A return to balance.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-[1.05rem] leading-[1.8] text-ink-soft">
              Shantara was never built as a place to pass through. It is an immersive naturopathy
              retreat, where every meal, treatment and hour of rest is part of one continuous
              programme &mdash; guided by doctors, grounded in twenty-five years of clinical practice,
              and set on a quiet Kerala hilltop.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-[1.8] text-ink-soft">
              You arrive with a condition to address. You leave with a plan for the years after.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <ImageReveal
            src="/img/plant-organic.jpg"
            alt="Detail of an organic plant grown on Shantara's grounds"
            className="aspect-[4/5] w-full"
          />
        </div>
      </div>
    </section>
  )
}
