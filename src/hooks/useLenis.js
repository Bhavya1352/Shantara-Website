import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

let lenisInstance = null

export function getLenis() {
  return lenisInstance
}

export function stopLenis() {
  if (lenisInstance) lenisInstance.stop()
}

export function startLenis() {
  if (lenisInstance) lenisInstance.start()
}

export function scrollTo(target, options = {}) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, options)
  } else {
    const el = typeof target === 'string' ? document.querySelector(target) : target
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function useLenis() {
  const instanceRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenisInstance = lenis
    instanceRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const raf_id = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(raf_id)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])

  return instanceRef
}

