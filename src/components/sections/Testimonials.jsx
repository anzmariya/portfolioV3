import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Container, SectionTitle } from '../ui'
import { TESTIMONIALS } from '../../utils/data'

function TestimonialCard({ name, role, company, avatar, quote }) {
  return (
    <div className="relative rounded-2xl border border-border bg-surface p-8 md:p-10" style={{ boxShadow: 'var(--shadow-md)' }}>
      {/* Large quote mark */}
      <Quote
        size={48}
        className="absolute top-6 right-8 opacity-[0.06]"
        style={{ color: 'var(--color-primary)' }}
        aria-hidden
      />

      <p className="text-paragraph text-lg leading-relaxed mb-8 relative z-10">
        "{quote}"
      </p>

      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div
          className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white font-display font-bold text-sm shrink-0"
          aria-hidden
        >
          {avatar}
        </div>
        <div>
          <p className="font-display font-bold text-heading text-base">{name}</p>
          <p className="text-sm text-paragraph/70 font-mono">
            {role} · <span className="text-primary">{company}</span>
          </p>
        </div>

        {/* Star rating */}
        <div className="ml-auto flex gap-0.5" aria-label="5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-amber-400 text-sm">★</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const count = TESTIMONIALS.length

  const prev = () => setCurrent(c => (c - 1 + count) % count)
  const next = () => setCurrent(c => (c + 1) % count)

  return (
    <section id="testimonials" className="section-padding bg-surface">
      <Container size="sm">
        <SectionTitle
          eyebrow="Kind words"
          title={<>What clients <span className="text-gradient">say</span></>}
          align="center"
        />

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <TestimonialCard {...TESTIMONIALS[current]} />
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-paragraph hover:text-heading hover:border-primary/40 hover:bg-background transition-all duration-200"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 bg-primary' : 'w-1.5 bg-border'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-paragraph hover:text-heading hover:border-primary/40 hover:bg-background transition-all duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Trust logos strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-paragraph/40 mb-6">
            Previously at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Vercel', 'Linear', 'Stripe', 'GitHub'].map(company => (
              <span key={company} className="font-display font-bold text-xl text-heading/20 hover:text-heading/40 transition-colors duration-200 cursor-default select-none">
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
