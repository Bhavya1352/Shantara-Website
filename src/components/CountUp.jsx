import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useTransform, animate, motion } from 'framer-motion'

export default function CountUp({ value, suffix = '', duration = 1.8, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => {
    const n = Math.round(v)
    return n.toLocaleString('en-US')
  })
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(count, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onComplete: () => setDone(true),
    })
    return controls.stop
  }, [isInView, value, duration, count])

  const finalDisplay = value.toLocaleString('en-US')

  return (
    <span ref={ref} className={className}>
      {done ? finalDisplay : <motion.span>{rounded}</motion.span>}
      {suffix}
    </span>
  )
}
