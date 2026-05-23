import { motion } from 'framer-motion'
import { Container, SectionTitle, Badge } from '../ui'
import profileImg from '../../assets/proimg.jpeg'

const HIGHLIGHTS = [
  { value: '2+',  label: 'Years of experience' },
  { value: '10+', label: 'Projects shipped' },
  { value: '5+', label: 'Happy clients' },
  { value: '5',   label: 'Open-source repos' },
]

const CURRENTLY = [
  { label: 'Role',     value: 'MERN Stack Developer' },
  { label: 'Stack',    value: 'React, TypeScript, Node.js' },
  { label: 'Based',    value: 'Kerala, India' },
  { label: 'Status',   value: 'Open to new opportunities' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Visual card cluster ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex justify-center"
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 rounded-3xl opacity-20 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, var(--color-primary), transparent 70%)' }}
            />

            {/* Main bio card */}
            <div
              className="relative w-full max-w-sm rounded-3xl border border-border bg-surface p-8"
              style={{ boxShadow: 'var(--shadow-lg)' }}
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-16 h-16 shrink-0 cursor-pointer"
                >
                  <div
                    className="absolute -inset-0.5 rounded-2xl"
                    style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', padding: '2px' }}
                  />
                  <img
                    src={profileImg}
                    alt="Anz Mariya Davis"
                    className="relative w-full h-full rounded-2xl object-cover"
                    style={{ boxShadow: '0 8px 24px rgba(79,70,229,0.35)' }}
                    draggable="false"
                  />
                </motion.div>
                <div>
                  <h3 className="font-display font-bold text-heading text-lg">Anz Mariya Davis</h3>
                  <p className="text-sm text-paragraph font-mono">Full-Stack Developer</p>
                </div>
              </div>

              {/* Currently section */}
              <div className="space-y-3 mb-8">
                {CURRENTLY.map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-paragraph/50 mt-0.5 shrink-0 w-14">{label}</span>
                    <span className="text-sm text-heading font-medium leading-snug">{value}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-border mb-6" />

              {/* Stat grid */}
              <div className="grid grid-cols-2 gap-3">
                {HIGHLIGHTS.map(({ value, label }) => (
                  <div key={label} className="rounded-xl bg-background p-4">
                    <p className="font-display text-2xl font-bold text-gradient leading-none mb-1">{value}</p>
                    <p className="text-xs text-paragraph/70 leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating tag */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -right-4 bg-surface border border-border rounded-2xl px-4 py-2.5 flex items-center gap-2"
              style={{ boxShadow: 'var(--shadow-md)' }}
            >
              <span className="text-base">🏆</span>
              <div>
                <p className="text-xs font-mono text-paragraph/50">Latest win</p>
                <p className="text-sm font-display font-semibold text-heading">1 million prompters certificate of completion</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Text content ── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <SectionTitle
              eyebrow="About me"
              title={<>Crafting software that <span className="text-gradient">matters.</span></>}
            />

            <motion.div variants={fadeUp} className="space-y-4 text-paragraph leading-relaxed mb-8">
              <p>
                I'm a full-stack developer with over 2 years of experience building products at the
                intersection of performance, design, and developer experience. I've shipped production systems
                at companies like <span className="text-heading font-medium">E2T - Educated2Trade</span>,{' '}
                <span className="text-heading font-medium">Nanoskool</span>, and{' '}
                <span className="text-heading font-medium">Inciem</span>.
              </p>
              <p>
                I care deeply about the craft — clean architecture, thoughtful APIs, and interfaces that feel
                inevitable rather than assembled. When I'm not building, I write about frontend engineering and
                contribute to open-source projects.
              </p>
              <p>
                Currently focused on edge computing, AI-driven UIs, and the future of the web platform.
              </p>
            </motion.div>

            {/* Interest badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
              {['Web Performance', 'Design Systems', 'Open Source', 'AI/ML Integration', 'Developer Tools', 'TypeScript'].map(tag => (
                <Badge key={tag} variant="primary">{tag}</Badge>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <a href="#contact" className="btn-primary inline-flex">
                Let's work together
                <span className="ml-2">→</span>
              </a>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
