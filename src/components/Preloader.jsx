import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FlowerMark from './FlowerMark'

const ease = [0.22, 1, 0.36, 1]

export default function Preloader({ onComplete }) {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return true
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!visible) {
      if (onComplete) onComplete()
      return undefined
    }

    // Lock body scroll while preloader is active
    document.body.style.overflow = 'hidden'


    // Animate progress smoothly
    const start = performance.now()
    const duration = 800

    let animationFrameId
    const step = (now) => {
      const elapsed = now - start
      const nextProgress = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(nextProgress)

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        setTimeout(() => {
          setVisible(false)
          setTimeout(() => {
            document.body.style.overflow = ''
            if (onComplete) onComplete()
          }, 300)
        }, 150)
      }
    }

    animationFrameId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationFrameId)
      document.body.style.overflow = ''
    }
  }, [visible, onComplete])


  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-pine-deep text-cream-warm grain-overlay-dark"
        >
          {/* Central Flower and Wordmark Lockup */}
          <div className="relative z-10 flex flex-col items-center">
            <FlowerMark
              size={80}
              color="#F5F1E6"
              centerColor="#C6A66C"
              animate={true}
              delay={0.1}
              className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease }}
              className="mt-6 flex flex-col items-center"
            >
              <h1 className="font-display text-[1.9rem] font-light tracking-[0.2em] text-cream-warm sm:text-[2.2rem]">
                SHANTAR&#256;
              </h1>
              <p className="mt-2 text-[0.78rem] tracking-[0.24em] uppercase text-gold-soft/80">
                Naturopathy &middot; Kerala
              </p>
            </motion.div>

            {/* Subtle Progress Bar */}
            <div className="mt-10 flex flex-col items-center gap-2">
              <div className="h-px w-36 overflow-hidden bg-cream-warm/15 sm:w-48">
                <motion.div
                  className="h-full bg-gold-soft"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
              <span className="font-display text-[0.72rem] tracking-wider text-cream-warm/40 font-figures">
                {progress}%
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute bottom-8 text-[0.7rem] tracking-[0.14em] uppercase text-cream-warm/50"
          >
            A slower way back to balance
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
