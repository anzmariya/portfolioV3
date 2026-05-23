import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Badge } from '../ui'
import { cn } from '../../utils/cn'

export function BlogCard({ post, index }) {
  const { title, excerpt, date, readTime, category, featured, slug, tags } = post

  const formatDate = (dateStr) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      className={cn(
        'group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300',
        'hover:-translate-y-1.5 hover:border-primary/30',
        featured && 'lg:col-span-2 ring-1 ring-primary/10',
      )}
      style={{ boxShadow: 'var(--shadow-sm)' }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl"
        style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}
      />

      {/* Featured badge */}
      {featured && (
        <div className="mb-3">
          <Badge variant="accent" className="text-xs">Featured</Badge>
        </div>
      )}

      {/* Title */}
      <h3 className="font-display font-bold text-xl lg:text-2xl text-heading mb-2.5 line-clamp-2 group-hover:text-primary transition-colors duration-200">
        {title}
      </h3>

      {/* Excerpt */}
      <p className="text-paragraph text-sm lg:text-base leading-relaxed flex-1 mb-5 line-clamp-3">
        {excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {tags.map(tag => (
          <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-border mb-5" />

      {/* Meta footer */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        {/* Date & read time */}
        <div className="flex items-center gap-4 text-xs text-paragraph/60">
          <div className="flex items-center gap-1.5">
            <Calendar size={13} />
            {formatDate(date)}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={13} />
            {readTime} min
          </div>
        </div>

        {/* Read more link */}
        <a
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:gap-2.5 transition-all duration-200"
          aria-label={`Read "${title}"`}
        >
          Read
          <ArrowRight size={12} />
        </a>
      </div>

      {/* Category pill — bottom right */}
      <div className="absolute top-6 right-6">
        <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-heading/60 bg-background border border-border/50 group-hover:border-primary/30 transition-colors duration-200">
          {category}
        </span>
      </div>
    </motion.article>
  )
}
