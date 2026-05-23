import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { Badge } from '../ui'
import { cn } from '../../utils/cn'

const CATEGORY_COLORS = {
  SaaS:        'primary',
  'E-Commerce':'secondary',
  Tool:        'accent',
  Mobile:      'primary',
  Backend:     'secondary',
  'Open Source':'accent',
}

export function ProjectCard({ project, index, featured = false }) {
  const { title, description, tags, github, live, category } = project
  const catColor = CATEGORY_COLORS[category] || 'primary'

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      className={cn(
        'group relative flex flex-col rounded-2xl border border-border bg-surface overflow-hidden',
        'transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30',
        featured && 'ring-1 ring-primary/10',
      )}
      style={{ boxShadow: 'var(--shadow-sm)' }}
    >
      {/* Thumbnail placeholder with gradient */}
      <div
        className="h-44 w-full relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg,
            color-mix(in srgb, var(--color-primary) 15%, var(--color-background)) 0%,
            color-mix(in srgb, var(--color-secondary) 10%, var(--color-background)) 100%)`,
        }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-heading) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-heading) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />
        {/* Center glyph */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display font-black text-6xl opacity-10 select-none"
            style={{ color: 'var(--color-primary)' }}
          >
            {title.charAt(0)}
          </span>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <Badge variant={catColor} className="text-xs">{category}</Badge>
        </div>
        {/* Featured marker */}
        {featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="accent" className="text-xs">Featured</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display font-bold text-lg text-heading mb-2 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-paragraph leading-relaxed flex-1 mb-5">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags.map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
          ))}
        </div>

        {/* Action row */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-paragraph/70 hover:text-primary transition-colors duration-200"
              aria-label={`View ${title} on GitHub`}
            >
              <Github size={13} />
              Source
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-paragraph/70 hover:text-primary transition-colors duration-200"
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink size={13} />
              Live demo
            </a>
          )}
        </div>
      </div>

      {/* Bottom border accent on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}
      />
    </motion.article>
  )
}
