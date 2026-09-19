import { motion } from 'framer-motion'

export default function ImageReveal({ src, alt, className = '', imgClassName = '', delay = 0 }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${imgClassName}`}
        initial={{ scale: 1.14, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}
