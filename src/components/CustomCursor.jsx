import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(pointer: fine)').matches
  })
  const [isVisible, setIsVisible] = useState(false)
  const [cursorType, setCursorType] = useState('default')
  const [cursorLabel, setCursorLabel] = useState('')

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Spring physics for smooth follower movement
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    if (!enabled) return

    document.body.classList.add('custom-cursor-active')


    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)

      // Find nearest data-cursor element
      const target = e.target.closest('[data-cursor], a, button')
      if (target) {
        const customType = target.getAttribute('data-cursor')
        if (customType) {
          setCursorType(customType)
          if (['view', 'explore', 'select', 'drag', 'close'].includes(customType)) {
            setCursorLabel(customType.toUpperCase())
          } else {
            setCursorLabel('')
          }
        } else if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          setCursorType('pointer')
          setCursorLabel('')
        }
      } else {
        setCursorType('default')
        setCursorLabel('')
      }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [enabled, mouseX, mouseY, isVisible])


  if (!enabled) return null

  // Determine appearance based on cursorType
  const isLabelType = ['view', 'explore', 'select', 'drag', 'close'].includes(cursorType)
  const isPointer = cursorType === 'pointer'

  return (
    <>
      {/* Center pinpoint */}
      <motion.div
        className="custom-cursor-dot pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: isVisible ? (isLabelType ? 0 : 1) : 0,
        }}
      >
        <div className="h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-soft shadow-sm" />
      </motion.div>

      {/* Trailing follower circle or labeled capsule */}
      <motion.div
        className="custom-cursor-dot pointer-events-none flex items-center justify-center text-center select-none"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isLabelType ? 1 : isPointer ? 1.5 : 1,
          width: isLabelType ? 76 : isPointer ? 44 : 32,
          height: isLabelType ? 76 : isPointer ? 44 : 32,
          backgroundColor: isLabelType
            ? 'rgba(41, 51, 18, 0.88)'
            : isPointer
            ? 'rgba(173, 138, 78, 0.15)'
            : 'rgba(245, 241, 230, 0.05)',
          borderColor: isLabelType
            ? 'rgba(198, 166, 108, 0.4)'
            : isPointer
            ? 'rgba(173, 138, 78, 0.5)'
            : 'rgba(198, 166, 108, 0.3)',
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <div
          className={`h-full w-full rounded-full border flex items-center justify-center transition-all duration-300 ${
            isLabelType ? 'border-gold-soft/50 backdrop-blur-sm shadow-lg' : 'border-gold-soft/30'
          }`}
        >
          {isLabelType && (
            <span className="font-body text-[0.65rem] font-medium tracking-[0.14em] text-cream-warm">
              {cursorLabel === 'CLOSE' ? '\u2715' : cursorLabel}
            </span>
          )}
        </div>
      </motion.div>
    </>
  )
}
