import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { navLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-pine-deep text-cream-warm/80">
      <div className="container-shantara flex flex-col gap-12 py-16 md:flex-row md:justify-between md:py-20">
        <div className="max-w-xs">
          <span className="font-display text-[1.5rem] tracking-[0.04em] text-cream-warm">SHANTAR&#256;</span>
          <p className="mt-4 text-[0.9rem] leading-relaxed">
            Chennamangallur, Kozhikode,
            <br />
            Kerala, India &ndash; 673602
          </p>
          <p className="mt-4 text-[0.9rem] leading-relaxed">
            +91 9553 600 100
            <br />
            heal@shantara.life
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="text-[0.8rem] text-cream-warm/50">Explore</p>
            <ul className="mt-4 flex flex-col gap-3 text-[0.92rem]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-cream-warm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.8rem] text-cream-warm/50">Legal</p>
            <ul className="mt-4 flex flex-col gap-3 text-[0.92rem]">
              <li><a href="#" className="transition-colors hover:text-cream-warm">Privacy Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-cream-warm">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[0.8rem] text-cream-warm/50">Follow</p>
            <div className="mt-4 flex gap-4 text-lg">
              <a href="#" aria-label="WhatsApp" className="transition-colors hover:text-cream-warm"><FaWhatsapp /></a>
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-cream-warm"><FiInstagram /></a>
              <a href="#" aria-label="Facebook" className="transition-colors hover:text-cream-warm"><FiFacebook /></a>
              <a href="#" aria-label="YouTube" className="transition-colors hover:text-cream-warm"><FiYoutube /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream-warm/10">
        <div className="container-shantara flex flex-col gap-2 py-6 text-[0.78rem] text-cream-warm/45 sm:flex-row sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Shantara. A sister concern of Hygiene Nature Cure.</span>
          <span>Kerala&rsquo;s naturopathy retreat since 2000.</span>
        </div>
      </div>
    </footer>
  )
}
