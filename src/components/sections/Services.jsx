import { motion } from 'framer-motion'
import { Container, SectionTitle, Badge } from '../ui'
import { SERVICES } from '../../utils/data'

const colorMap = ['primary', 'secondary', 'accent', 'primary']

function ServiceCard({ icon, title, description, highlights, index }) {
  const color = colorMap[index % colorMap.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 overflow-hidden"
      style={{ boxShadow: 'var(--shadow-sm)' }}
    >
      {/* Hover gradient wash */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(400px circle at 0% 0%, var(--color-primary) 0%, transparent 70%)',
          opacity: 0,
        }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(300px circle at 0% 0%, var(--color-primary), transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center text-xl font-bold transition-all duration-300
          bg-${color}/10 text-${color} group-hover:scale-110`}
        style={{
          background: `rgba(var(--${color}-rgb, 79 70 229) / 0.1)`,
          color: `var(--color-${color})`,
        }}
      >
        {icon}
      </div>

      <h3 className="font-display font-bold text-xl text-heading mb-3">{title}</h3>
      <p className="text-paragraph text-sm leading-relaxed mb-5">{description}</p>

      <div className="flex flex-wrap gap-2">
        {highlights.map(h => (
          <Badge key={h} variant="outline" className="text-xs">{h}</Badge>
        ))}
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))' }}
      />
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="services" className="section-padding bg-background">
      <Container>
        <SectionTitle
          eyebrow="What I do"
          title={<>Services I <span className="text-gradient">offer</span></>}
          subtitle="From pixel-perfect interfaces to robust backend systems — I bring the full stack to every engagement."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-border bg-surface p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ boxShadow: 'var(--shadow-sm)' }}
        >
          <div>
            <h3 className="font-display font-bold text-xl text-heading mb-1">Have a project in mind?</h3>
            <p className="text-paragraph text-sm">Let's talk about how I can help you ship it.</p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            Start a conversation →
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
