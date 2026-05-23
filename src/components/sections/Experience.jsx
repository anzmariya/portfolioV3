import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Container, SectionTitle, Badge } from '../ui'
import { EXPERIENCE } from '../../utils/data'

function TimelineItem({ role, company, period, location, description, highlights, current, index }) {
  const isEven = index % 2 === 0

  return (
    <div className={`relative grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12 last:mb-0`}>

      {/* Timeline line — desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" aria-hidden />

      {/* Dot */}
      <div
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full border-2 border-primary bg-surface z-10 items-center justify-center"
        aria-hidden
      >
        {current && (
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        )}
      </div>

      {/* Left slot (even) or right slot (odd) */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -24 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={isEven ? 'md:text-right md:pr-8' : 'md:col-start-2 md:pl-8'}
      >
        {/* Period + location */}
        <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : ''}`}>
          <span className="font-mono text-xs text-paragraph/50">{period}</span>
          <span className="text-border">·</span>
          <span className="flex items-center gap-1 font-mono text-xs text-paragraph/50">
            <MapPin size={10} />
            {location}
          </span>
        </div>

        {/* Role & company */}
        <h3 className="font-display font-bold text-xl text-heading mb-0.5">{role}</h3>
        <p className="font-semibold text-primary text-sm mb-4">{company}</p>

        {/* Description */}
        <p className="text-paragraph text-sm leading-relaxed mb-4">{description}</p>

        {/* Highlights */}
        <ul className={`space-y-1.5 ${isEven ? 'md:items-end' : ''} flex flex-col`}>
          {highlights.map(h => (
            <li key={h} className={`flex items-start gap-2 text-xs text-paragraph/80 ${isEven ? 'md:flex-row-reverse' : ''}`}>
              <span className="text-primary mt-0.5 shrink-0">▸</span>
              {h}
            </li>
          ))}
        </ul>

        {current && (
          <div className={`mt-4 ${isEven ? 'md:flex md:justify-end' : ''}`}>
            <Badge variant="success" className="text-xs">Current role</Badge>
          </div>
        )}
      </motion.div>

      {/* Opposite placeholder — keeps grid symmetry */}
      {!isEven && <div className="hidden md:block md:col-start-1 md:row-start-1" />}
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-background">
      <Container size="sm">
        <SectionTitle
          eyebrow="My journey"
          title={<>Work <span className="text-gradient">Experience</span></>}
          subtitle="Companies and teams I've had the privilege of building with."
          align="center"
        />

        {/* Mobile: single column timeline */}
        <div className="md:hidden space-y-10">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pl-6 border-l border-border"
            >
              <div className="absolute left-0 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full border-2 border-primary bg-surface" />
              <p className="font-mono text-xs text-paragraph/50 mb-1">{exp.period} · {exp.location}</p>
              <h3 className="font-display font-bold text-lg text-heading">{exp.role}</h3>
              <p className="font-semibold text-primary text-sm mb-3">{exp.company}</p>
              <p className="text-paragraph text-sm leading-relaxed mb-3">{exp.description}</p>
              <ul className="space-y-1">
                {exp.highlights.map(h => (
                  <li key={h} className="flex items-start gap-2 text-xs text-paragraph/80">
                    <span className="text-primary mt-0.5">▸</span>{h}
                  </li>
                ))}
              </ul>
              {exp.current && <Badge variant="success" className="text-xs mt-3">Current role</Badge>}
            </motion.div>
          ))}
        </div>

        {/* Desktop: staggered two-column */}
        <div className="hidden md:block">
          {EXPERIENCE.map((exp, i) => (
            <TimelineItem key={exp.id} {...exp} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
