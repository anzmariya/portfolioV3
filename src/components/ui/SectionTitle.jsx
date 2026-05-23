import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export function SectionTitle({ eyebrow, title, subtitle, align = 'left', className }) {
  const alignClass = {
    left:   'text-left',
    center: 'text-center mx-auto',
    right:  'text-right ml-auto',
  }

  return (
    <div className={cn('max-w-2xl mb-16', alignClass[align], className)}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm tracking-widest uppercase text-primary mb-3"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="font-display text-4xl md:text-5xl font-bold text-heading leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-4 text-lg text-paragraph leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
