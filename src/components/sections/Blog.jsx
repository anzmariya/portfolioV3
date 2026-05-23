import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, SectionTitle, BlogCard } from '../ui'
import { BLOG_POSTS, BLOG_CATEGORIES } from '../../utils/data'
import { cn } from '../../utils/cn'

export function Blog() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === active)

  return (
    <section id="blog" className="section-padding bg-background">
      <Container>
        <SectionTitle
          eyebrow="Latest articles"
          title={<>From my <span className="text-gradient">blog</span></>}
          subtitle="Thoughts on frontend, backend, design systems, and the craft of building software. Updated regularly."
          align="center"
        />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="tablist"
          aria-label="Filter blog posts"
        >
          {BLOG_CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm font-mono font-medium transition-all duration-200',
                active === cat
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-surface border border-border text-paragraph hover:text-heading hover:border-primary/40',
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Posts grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA — Read more on blog */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-paragraph mb-4">Interested in more?</p>
          <a
            href="/blog"
            className="btn-secondary inline-flex"
          >
            Read all articles →
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
