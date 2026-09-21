import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiLockClosed, HiEye, HiEyeOff, HiSparkles } from 'react-icons/hi'
import FlowerMark from './FlowerMark'

const CORRECT_PASSWORD = 'Shantara@2026'

export default function PasswordGate({ onAuthenticated }) {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!password) return

    setIsSubmitting(true)
    setError(false)

    setTimeout(() => {
      if (password === CORRECT_PASSWORD) {
        try {
          sessionStorage.setItem('shantara_auth', 'true')
        } catch {
          // Fallback if storage access is restricted
        }
        onAuthenticated()
      } else {
        setError(true)
        setIsSubmitting(false)
      }
    }, 250)
  }

  return (
    <div className="fixed inset-0 z-[99999] w-full h-full min-h-screen flex items-center justify-center p-4 sm:p-6 bg-pine-deep grain-overlay-dark overflow-y-auto select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[440px] overflow-hidden border border-pine-deep/30 bg-cream-warm shadow-[0_24px_60px_-15px_rgba(0,0,0,0.4)] my-auto text-center"
      >
        {/* Top Dark Pine Line */}
        <div className="h-1 w-full bg-pine-deep" />

        <div className="p-8 sm:p-10">
          {/* Emblem Icon Circle */}
          <div className="inline-flex items-center justify-center p-3.5 rounded-full bg-cream border border-stone-line/70 shadow-sm mb-6">
            <FlowerMark size={34} color="#3C4A1E" centerColor="#AD8A4E" />
          </div>

          {/* Subtitle Badge */}
          <div className="mb-2">
            <span className="text-[0.68rem] tracking-[0.2em] uppercase text-pine font-semibold block">
              SHANTAR&#256; RETREAT
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-2xl sm:text-3xl font-light text-ink mb-3">
            Private Access
          </h1>

          <p className="text-[0.88rem] leading-relaxed text-ink-soft/80 max-w-xs mx-auto mb-7 font-body">
            Please enter your invitation passcode to preview the retreat experience.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-left">
              <label className="block text-[0.68rem] tracking-[0.14em] uppercase font-semibold text-ink-soft/75 mb-1.5">
                PASSCODE
              </label>

              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-pine/60 pointer-events-none">
                  <HiLockClosed className="text-lg" />
                </div>

                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (error) setError(false)
                  }}
                  placeholder="Enter passcode..."
                  autoFocus
                  required
                  className={`w-full pl-10 pr-11 py-3.5 bg-cream border ${
                    error
                      ? 'border-red-800 ring-1 ring-red-800/30'
                      : 'border-pine/80 focus:border-pine focus:ring-1 focus:ring-pine'
                  } text-ink text-sm placeholder:text-ink-soft/40 focus:outline-none transition-all duration-200`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 text-ink-soft/50 hover:text-pine transition-colors p-1"
                  aria-label={showPassword ? 'Hide passcode' : 'Show passcode'}
                >
                  {showPassword ? <HiEyeOff className="text-lg" /> : <HiEye className="text-lg" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs font-medium text-red-900 bg-red-500/10 py-2 px-3 border border-red-800/20"
                >
                  Incorrect passcode. Please try again.
                </motion.div>
              )}
            </AnimatePresence>

            {/* Enter Button */}
            <button
              type="submit"
              disabled={isSubmitting || !password}
              className="w-full py-3.5 px-6 bg-[#8F9A75] hover:bg-pine text-cream-warm text-[0.82rem] font-semibold tracking-[0.18em] uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm flex items-center justify-center gap-2 group"
            >
              <span>ENTER RETREAT</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
