import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { navLinks } from '../data/content'
import { useContactModal } from '../hooks/useContactModal'

export default function Footer() {
  const { openContactModal } = useContactModal()

  return (
    <footer className="bg-pine-deep text-cream-warm/80 grain-overlay-dark border-t border-cream-warm/10">
      <div className="container-shantara flex flex-col gap-12 py-16 md:flex-row md:justify-between md:py-20">
        <div className="max-w-xs">
          <span className="font-display text-[1.5rem] tracking-[0.05em] text-cream-warm">SHANTAR&#256;</span>
          <p className="mt-4 text-[0.88rem] leading-relaxed text-cream-warm/70">
            Chennamangallur, Kozhikode,
            <br />
            Kerala, India &ndash; 673602
          </p>
          <p className="mt-4 text-[0.88rem] leading-relaxed text-cream-warm/70">
            +91 9553 600 100
            <br />
            heal@shantara.life
          </p>
          <button
            type="button"
            onClick={() => openContactModal()}
            data-cursor="pointer"
            className="mt-5 inline-flex items-center gap-2 text-[0.82rem] uppercase tracking-wider text-gold-soft hover:text-cream-warm transition-colors underline underline-offset-4"
          >
            <span>Doctor Consultation Intake</span>
            <span>&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="text-[0.78rem] tracking-[0.12em] uppercase text-cream-warm/40 font-medium">Explore</p>
            <ul className="mt-4 flex flex-col gap-3 text-[0.92rem]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} data-cursor="pointer" className="transition-colors hover:text-cream-warm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.78rem] tracking-[0.12em] uppercase text-cream-warm/40 font-medium">Legal</p>
            <ul className="mt-4 flex flex-col gap-3 text-[0.92rem]">
              <li><a href="#" data-cursor="pointer" className="transition-colors hover:text-cream-warm">Privacy Policy</a></li>
              <li><a href="#" data-cursor="pointer" className="transition-colors hover:text-cream-warm">Terms of Service</a></li>
              <li><a href="#" data-cursor="pointer" className="transition-colors hover:text-cream-warm">Clinical Standards</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[0.78rem] tracking-[0.12em] uppercase text-cream-warm/40 font-medium">Connect</p>
            <div className="mt-4 flex gap-4 text-xl">
              <a href="https://wa.me/919553600100" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" data-cursor="pointer" className="transition-colors hover:text-cream-warm"><FaWhatsapp /></a>
              <a href="#" aria-label="Instagram" data-cursor="pointer" className="transition-colors hover:text-cream-warm"><FiInstagram /></a>
              <a href="#" aria-label="Facebook" data-cursor="pointer" className="transition-colors hover:text-cream-warm"><FiFacebook /></a>
              <a href="#" aria-label="YouTube" data-cursor="pointer" className="transition-colors hover:text-cream-warm"><FiYoutube /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container-shantara flex flex-col gap-2 py-6 text-[0.78rem] text-cream-warm/45 sm:flex-row sm:justify-between font-light">
          <span>&copy; {new Date().getFullYear()} Shantar&amacr;. A sister concern of Hygiene Nature Cure.</span>
          <span>Kerala&rsquo;s naturopathy retreat since 2000.</span>
        </div>
      </div>
    </footer>
  )
}
