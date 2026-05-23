import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '../ui'
import { useScrollY } from '../../hooks/useScrollY'
import { cn } from '../../utils/cn'

const NAV_LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

function NavLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="nav-link text-sm font-semibold tracking-wide"
    >
      {label}
    </a>
  )
}

export function Navbar() {
  const scrollY = useScrollY()
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = scrollY > 20

  // Close mobile menu on resize
  useEffect(() => {
    const close = () => setMobileOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-surface/80 backdrop-blur-xl border-b border-border shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span
              className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white font-display font-bold text-sm"
            >
              AD
            </span>
            <span className="font-display font-bold text-heading text-lg tracking-tight">
              Anz Mariya<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Hire me
            </a>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              className={cn(
                'w-10 h-10 rounded-xl flex items-center justify-center',
                'border border-border text-paragraph hover:text-heading',
                'hover:bg-surface transition-all duration-200'
              )}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={cn(
                'fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden',
                'bg-surface border-l border-border flex flex-col pt-20 pb-8 px-8'
              )}
            >
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 font-display font-semibold text-lg text-paragraph hover:text-heading transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Hire me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
