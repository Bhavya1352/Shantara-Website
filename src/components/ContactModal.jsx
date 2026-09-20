import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import { useContactModal } from '../hooks/useContactModal'
import FlowerMark from './FlowerMark'

function ContactModalForm({ initialData, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    duration: initialData?.duration || '14 Days',
    condition: initialData?.condition || 'General Restoration',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <FlowerMark size={64} color="#3C4A1E" centerColor="#AD8A4E" />
        <span className="mt-6 text-[0.75rem] tracking-[0.18em] uppercase text-pine">
          Intake Request Received
        </span>
        <h3 className="mt-3 font-display text-[2rem] font-light text-ink">
          A slower way begins.
        </h3>
        <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
          Thank you, <strong className="text-ink font-medium">{formData.name || 'valued guest'}</strong>.
          Our clinical intake team will review your consultation request and reach out
          at <strong className="text-ink font-medium">{formData.phone || formData.email}</strong> within
          twenty-four hours to prepare your personalised retreat schedule.
        </p>
        <button
          onClick={onClose}
          data-cursor="pointer"
          className="mt-8 inline-flex items-center bg-pine px-8 py-3.5 text-[0.9rem] text-cream-warm transition-colors hover:bg-pine-deep"
        >
          Return to Shantar&#256;
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center gap-3">
        <FlowerMark size={28} color="#3C4A1E" centerColor="#AD8A4E" />
        <span className="text-[0.75rem] tracking-[0.18em] uppercase text-pine">
          Shantar&#256; Naturopathy Retreat
        </span>
      </div>

      <h3 className="mt-2 font-display text-[1.85rem] font-light leading-snug text-ink sm:text-[2.2rem]">
        Plan Your Healing Journey
      </h3>
      <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">
        Share your health intentions. Our residential doctors will review your intake
        and prepare a tailored programme recommendation.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-[0.78rem] tracking-[0.06em] uppercase text-ink-soft/80 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Eleanor Vance"
              className="w-full border border-stone-line bg-cream px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-soft/40 focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine transition-colors"
            />
          </div>

          <div>
            <label className="block text-[0.78rem] tracking-[0.06em] uppercase text-ink-soft/80 mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="eleanor@example.com"
              className="w-full border border-stone-line bg-cream px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-soft/40 focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-[0.78rem] tracking-[0.06em] uppercase text-ink-soft/80 mb-1.5">
              Phone / WhatsApp *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9553 600 100"
              className="w-full border border-stone-line bg-cream px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-soft/40 focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine transition-colors"
            />
          </div>

          <div>
            <label className="block text-[0.78rem] tracking-[0.06em] uppercase text-ink-soft/80 mb-1.5">
              Preferred Stay Length
            </label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full border border-stone-line bg-cream px-4 py-3 text-[0.92rem] text-ink focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine transition-colors"
            >
              <option value="7-14 Days">7&ndash;14 Days (Reset &amp; Metabolic)</option>
              <option value="14 Days">14 Days (Deeper Repair)</option>
              <option value="21 Days">21 Days (Structural Shift)</option>
              <option value="28 Days">28 Days (Full Transformation)</option>
              <option value="Undecided">Guidance Needed / Undecided</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[0.78rem] tracking-[0.06em] uppercase text-ink-soft/80 mb-1.5">
            Primary Health Focus / Condition
          </label>
          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            className="w-full border border-stone-line bg-cream px-4 py-3 text-[0.92rem] text-ink focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine transition-colors"
          >
            <option value="Metabolic & Lifestyle">Metabolic &amp; Lifestyle (Diabetes, Weight, Thyroid)</option>
            <option value="Pain & Spine">Pain &amp; Spine (Arthritis, Low Back Pain, Mobility)</option>
            <option value="Women's Health">Women&rsquo;s Health (Hormonal Balance, PCOD/PCOS)</option>
            <option value="Digestive Health">Digestive Health &amp; Gut Restoration</option>
            <option value="Heart Health">Heart Health &amp; Hypertension</option>
            <option value="Mental Wellness">Mental Wellness &amp; Burnout Recovery</option>
            <option value="Skin Health">Skin Health (Psoriasis, Chronic Conditions)</option>
            <option value="General Restoration">Preventive Rejuvenation &amp; Detox</option>
          </select>
        </div>

        <div>
          <label className="block text-[0.78rem] tracking-[0.06em] uppercase text-ink-soft/80 mb-1.5">
            Notes or Medical Details (Optional)
          </label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell our doctors about any current symptoms, medications, or travel timeline..."
            className="w-full border border-stone-line bg-cream px-4 py-3 text-[0.92rem] text-ink placeholder:text-ink-soft/40 focus:border-pine focus:outline-none focus:ring-1 focus:ring-pine transition-colors resize-none"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.75rem] text-ink-soft/60 text-center sm:text-left">
            Doctor-patient confidentiality strictly preserved.
          </p>
          <button
            type="submit"
            disabled={loading}
            data-cursor="pointer"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-pine px-8 py-3.5 text-[0.92rem] tracking-wide text-cream-warm transition-colors hover:bg-pine-deep disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Request Doctor Consultation'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default function ContactModal() {
  const { isOpen, initialData, closeContactModal } = useContactModal()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeContactModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeContactModal])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99990] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={closeContactModal}
            className="fixed inset-0 bg-pine-deep/80 backdrop-blur-md grain-overlay-dark cursor-pointer"
            data-cursor="close"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-2xl overflow-hidden border border-stone-line bg-cream-warm shadow-[0_32px_80px_-20px_rgba(41,51,18,0.4)] my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-pine-deep via-pine to-gold" />

            {/* Close Button */}
            <button
              onClick={closeContactModal}
              aria-label="Close modal"
              data-cursor="close"
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full text-ink-soft/70 transition-colors hover:bg-cream hover:text-ink"
            >
              <HiX className="text-xl" />
            </button>

            <div className="p-6 sm:p-10 md:p-12">
              <ContactModalForm
                key={isOpen ? `${initialData?.duration}-${initialData?.condition}` : 'closed'}
                initialData={initialData}
                onClose={closeContactModal}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
