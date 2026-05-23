import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'
import { Container } from '../ui'

const NAV_COLS = [
  {
    heading: 'Navigate',
    links: [
      { label: 'About',       href: '#about'       },
      { label: 'Skills',      href: '#skills'      },
      { label: 'Services',    href: '#services'    },
      { label: 'Projects',    href: '#projects'    },
    ],
  },
  {
    heading: 'More',
    links: [
      { label: 'Experience',   href: '#experience'   },
      { label: 'Blog',         href: '#blog'         },
      { label: 'Contact',      href: '#contact'      },
    ],
  },
]

const SOCIALS = [
  { icon: Github,   href: 'https://github.com',   label: 'GitHub'   },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter,  href: 'https://twitter.com',  label: 'Twitter'  },
  { icon: Mail,     href: 'mailto:hello@alexchen.dev', label: 'Email' },
]

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-border bg-surface">
      <Container>
        {/* Top section */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand col */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center text-white font-display font-bold text-sm">
                AD
              </span>
              <span className="font-display font-bold text-heading text-xl">
                Anz Mariya<span className="text-primary">.</span>
              </span>
            </a>

            <p className="text-sm text-paragraph leading-relaxed max-w-xs mb-6">
              Full-stack developer building fast, accessible, and beautifully crafted digital products. Open to freelance and full-time opportunities.
            </p>

            {/* Social row */}
            <div className="flex gap-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-paragraph hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {NAV_COLS.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="font-mono text-xs tracking-widest uppercase text-paragraph/40 mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-paragraph hover:text-primary transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-paragraph/40 font-mono">
            © {new Date().getFullYear()} Anz Mariya Davis. Built with React, Vite & Tailwind CSS.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-xs text-paragraph/30 font-mono hidden sm:inline">
              Designed & developed by Anz Mariya Davis
            </span>

            {/* Back to top */}
            <motion.button
              onClick={scrollTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
              className="w-8 h-8 rounded-xl border border-border flex items-center justify-center text-paragraph hover:text-primary hover:border-primary/40 transition-all duration-200"
            >
              <ArrowUp size={13} />
            </motion.button>
          </div>
        </div>
      </Container>
    </footer>
  )
}
