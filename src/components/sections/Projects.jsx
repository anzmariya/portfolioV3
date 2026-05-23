import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, SectionTitle } from '../ui'
import { ProjectCard } from '../ui/ProjectCard'
import { PROJECTS } from '../../utils/data'
import { cn } from '../../utils/cn'

const FILTERS = ['All', 'SaaS', 'EdTech', 'Tool']

export function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  return (
    <section id="projects" className="section-padding bg-surface">
      <Container>
        <SectionTitle
          eyebrow="My work"
          title={<>Selected <span className="text-gradient">Projects</span></>}
          subtitle="A selection of products and tools I've built — ranging from SaaS platforms to open-source libraries."
          align="center"
        />

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="tablist"
          aria-label="Filter projects"
        >
          {FILTERS.map(f => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm font-mono font-medium transition-all duration-200',
                active === f
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-background border border-border text-paragraph hover:text-heading hover:border-primary/40',
              )}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} featured={project.featured} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            View all on GitHub →
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
