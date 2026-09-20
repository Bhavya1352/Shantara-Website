import { motion } from 'framer-motion'

/**
 * Plumeria (Frangipani) 5-petal botanical emblem for Shantarā.
 * In Kerala naturopathy, the plumeria represents purity, devotion, and natural rejuvenation.
 */
export default function FlowerMark({
  size = 32,
  className = '',
  color = 'currentColor',
  centerColor = '#AD8A4E',
  animate = false,
  delay = 0,
}) {
  const petals = [0, 72, 144, 216, 288]

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="plumeria-center-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={centerColor} stopOpacity="0.95" />
          <stop offset="50%" stopColor={centerColor} stopOpacity="0.5" />
          <stop offset="100%" stopColor={centerColor} stopOpacity="0" />
        </radialGradient>
      </defs>

      <g transform="translate(50, 50)">
        {petals.map((angle, i) => (
          <motion.path
            key={angle}
            d="M 0 -3 C -7 -10, -13 -26, -9 -38 C -6 -47, 5 -47, 9 -40 C 13 -32, 9 -14, 0 -3 Z"
            fill={color}
            transform={`rotate(${angle})`}
            initial={animate ? { scale: 0, opacity: 0, rotate: angle - 20 } : false}
            animate={
              animate
                ? {
                    scale: 1,
                    opacity: 1,
                    rotate: angle,
                    transition: {
                      duration: 0.8,
                      delay: delay + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }
                : undefined
            }
          />
        ))}

        {/* Center core bloom */}
        <motion.circle
          cx="0"
          cy="0"
          r="9"
          fill="url(#plumeria-center-glow)"
          initial={animate ? { scale: 0, opacity: 0 } : false}
          animate={
            animate
              ? {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    delay: delay + 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }
              : undefined
          }
        />

        <circle cx="0" cy="0" r="3.2" fill={centerColor} opacity="0.85" />
      </g>
    </svg>
  )
}
