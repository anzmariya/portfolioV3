import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Twitter, Download, Sparkles } from 'lucide-react'
import { Container, Badge, Button } from '../ui'
import profileImg from '../../assets/proimg.jpeg'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const SOCIAL_LINKS = [
  { icon: Github,   href: 'https://github.com',   label: 'GitHub'   },
  { icon: Linkedin, href: 'https://linkedin.com',  label: 'LinkedIn' },
  { icon: Twitter,  href: 'https://twitter.com',   label: 'Twitter'  },
]

const STATS = [
  { value: '2+',  label: 'Years exp.' },
  { value: '10+', label: 'Projects'   },
  { value: '5+', label: 'Clients'    },
]

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">

      {/* ── Ambient blobs ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.22, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, var(--color-primary), transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.10, 0.18, 0.10] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, var(--color-secondary), transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-10 left-1/3 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 70%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-border) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <Container className="relative z-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="mb-6">
              <Badge variant="primary" className="text-xs py-1.5 px-4">
                <Sparkles size={11} className="mr-1" />
                Available for hire
              </Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-heading mb-6"
            >
              Hi, I'm{' '}
              <span className="text-gradient">Anz Mariya Davis</span>
              <span className="text-primary">.</span>
            </motion.h1>

            <motion.div variants={item} className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-brand rounded-full" />
              <p className="font-mono text-sm tracking-widest uppercase text-primary font-medium">
                Full-Stack Developer & AI Engineer
              </p>
            </motion.div>

            <motion.p
              variants={item}
              className="text-lg text-paragraph leading-relaxed max-w-xl mb-10"
            >
              I craft exceptional digital experiences — from pixel-perfect interfaces
              to scalable backend systems. Specializing in{' '}
              <span className="text-heading font-medium">React</span>,{' '}
              <span className="text-heading font-medium">TypeScript</span>, and{' '}
              <span className="text-heading font-medium">Node.js</span>.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
              <Button href="#projects" variant="primary" size="lg" className="group">
                View my work
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href="#" variant="secondary" size="lg">
                <Download size={16} />
                Resume
              </Button>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4">
              <span className="text-sm text-paragraph/60 font-mono">find me on</span>
              <div className="flex gap-2">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={[
                      'w-10 h-10 rounded-xl flex items-center justify-center',
                      'border border-border text-paragraph hover:text-primary',
                      'hover:border-primary/50 hover:bg-primary/5',
                      'transition-all duration-300 hover:scale-110 hover:-translate-y-0.5',
                    ].join(' ')}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Profile card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
                style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
              />

              {/* Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-80 rounded-3xl border border-border bg-surface/80 backdrop-blur-sm p-6"
                style={{ boxShadow: 'var(--shadow-lg)' }}
              >
                {/* ── Profile image ── */}
                <motion.div
                  whileHover={{ scale: 2 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-28 h-28 mx-auto mb-5 cursor-pointer origin-center"
                >
                  {/* Ring glow */}
                  <div
                    className="absolute inset-0 rounded-full blur-md opacity-50"
                    style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
                  />
                  {/* Ring border */}
                  <div
                    className="absolute -inset-1 rounded-full p-[2px]"
                    style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}
                  >
                    <div className="w-full h-full rounded-full bg-surface" />
                  </div>
                  {/* Image */}
                  <img
                    src={profileImg}
                    alt="Anz Mariya Davis — Full-Stack Developer"
                    className="absolute inset-0 w-full h-full rounded-full object-cover"
                    draggable="false"
                  />
                </motion.div>

                <h3 className="font-display text-xl font-bold text-heading text-center mb-0.5">Anz Mariya Davis</h3>
                <p className="text-sm text-paragraph text-center mb-5 font-mono">Full-Stack Developer</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {STATS.map(({ value, label }) => (
                    <div key={label} className="text-center rounded-xl bg-background p-3">
                      <p className="font-display text-xl font-bold text-gradient">{value}</p>
                      <p className="text-xs text-paragraph/70 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind'].map(tech => (
                    <Badge key={tech} variant="primary" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </motion.div>

              {/* Floating chip — top right */}
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-6 -right-8 bg-surface border border-border rounded-2xl px-4 py-2.5 flex items-center gap-2"
                style={{ boxShadow: 'var(--shadow-md)' }}
              >
                <span className="text-base">✦</span>
                <div>
                  <p className="text-xs font-mono text-paragraph/60">Latest project</p>
                  <p className="text-sm font-display font-semibold text-heading">SaaS Dashboard</p>
                </div>
              </motion.div>

              {/* Floating chip — bottom left */}
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [0, -1.5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-10 bg-surface border border-border rounded-2xl px-4 py-2.5 flex items-center gap-2.5"
                style={{ boxShadow: 'var(--shadow-md)' }}
              >
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <p className="text-sm font-medium text-heading">Open to work</p>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="text-xs font-mono tracking-widest uppercase text-paragraph/40">scroll</p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent"
          />
        </motion.div>
      </Container>
    </section>
  )
}
