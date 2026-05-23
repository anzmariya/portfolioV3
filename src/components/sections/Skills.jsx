import { motion } from 'framer-motion'
import { Container, SectionTitle, Card } from '../ui'
import { SKILL_GROUPS } from '../../utils/data'

const colorMap = {
  primary:   { bar: 'var(--color-primary)',   bg: 'rgba(79,70,229,0.1)',  text: 'text-primary'   },
  secondary: { bar: 'var(--color-secondary)', bg: 'rgba(124,58,237,0.1)', text: 'text-secondary' },
  accent:    { bar: 'var(--color-accent)',     bg: 'rgba(6,182,212,0.1)',  text: 'text-accent'    },
}

function SkillBar({ name, level, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-heading">{name}</span>
        <span className="font-mono text-xs text-paragraph/60">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-border overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: index * 0.06 + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full"
          style={{ background: color.bar }}
        />
      </div>
    </motion.div>
  )
}

function SkillGroupCard({ group, icon, color, skills, index }) {
  const c = colorMap[color] || colorMap.primary

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
    >
      <Card className="h-full">
        {/* Group header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
            style={{ background: c.bg, color: c.bar }}
          >
            {icon}
          </div>
          <h3 className={`font-display font-bold text-lg text-heading`}>{group}</h3>
        </div>

        {/* Skill bars */}
        <div className="space-y-4">
          {skills.map((s, i) => (
            <SkillBar key={s.name} {...s} color={c} index={i} />
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

/* ── Tool belt badges ── */
const TOOLS = [
  'VS Code', 'Figma', 'Postman', 'GitHub', 'Linear', 'Notion',
  'Turborepo', 'pnpm', 'Zod', 'tRPC', 'Zustand', 'React Query',
]

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface">
      <Container>
        <SectionTitle
          eyebrow="My toolkit"
          title={<>Skills & <span className="text-gradient">Technologies</span></>}
          subtitle="A curated overview of the tools and technologies I use to build fast, accessible, and maintainable software."
          align="center"
        />

        {/* Skill group cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {SKILL_GROUPS.map((g, i) => (
            <SkillGroupCard key={g.group} {...g} index={i} />
          ))}
        </div>

        {/* Tools belt */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-border bg-background p-8"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-paragraph/50 mb-5 text-center">
            Daily tools
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {TOOLS.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="px-4 py-2 rounded-xl bg-surface border border-border text-sm font-medium text-paragraph hover:text-heading hover:border-primary/40 transition-all duration-200 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
