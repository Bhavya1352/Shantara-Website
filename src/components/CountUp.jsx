import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

export default function CountUp({ value, suffix = '', duration = 1.8, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString('en-IN'))

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration, ease: [0.16, 1, 0.3, 1] })
      return controls.stop
    }
    return undefined
  }, [isInView, value, duration, count])

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
