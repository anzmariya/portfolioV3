import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Twitter, Mail, MapPin, Clock } from 'lucide-react'
import { Container, SectionTitle, Badge } from '../ui'
import { cn } from '../../utils/cn'

const SOCIALS = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com',   handle: '@alexchen' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', handle: 'in/alexchen' },
  { icon: Twitter,  label: 'Twitter',  href: 'https://twitter.com',  handle: '@alexchendev' },
  { icon: Mail,     label: 'Email',    href: 'mailto:hello@alexchen.dev', handle: 'hello@alexchen.dev' },
]

const INFO = [
  { icon: MapPin,  label: 'Location', value: 'Kerala, India' },
  { icon: Clock,   label: 'Timezone', value: 'IST (UTC+5:30)' },
  { icon: Mail,    label: 'Response', value: 'Within 24 hours' },
]

function Field({ label, id, children, error }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-heading mb-2">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  )
}

const inputClass = cn(
  'w-full px-4 py-3 rounded-xl border border-border bg-background text-heading text-sm',
  'placeholder:text-paragraph/40 font-body',
  'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary',
  'transition-all duration-200'
)

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required.'
    if (!form.email.trim())   e.email   = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.message.trim()) e.message = 'Message is required.'
    return e
  }

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('sending')
    // Simulate async send
    await new Promise(r => setTimeout(r, 1400))
    setStatus('success')
  }

  return (
    <section id="contact" className="section-padding bg-background">
      <Container>
        <SectionTitle
          eyebrow="Get in touch"
          title={<>Let's build something <span className="text-gradient">great</span></>}
          subtitle="Have a project, a question, or just want to say hi? My inbox is always open."
          align="center"
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

          {/* ── Left: info panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Info items */}
            <div className="rounded-2xl border border-border bg-surface p-6 space-y-5" style={{ boxShadow: 'var(--shadow-sm)' }}>
              {INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={15} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-paragraph/50">{label}</p>
                    <p className="text-sm font-medium text-heading">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <p className="text-sm font-medium text-heading">
                Available for new projects
              </p>
            </div>

            {/* Socials */}
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-paragraph/40 mb-4">Find me on</p>
              <div className="space-y-2">
                {SOCIALS.map(({ icon: Icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-border hover:bg-surface transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-border/50 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-200">
                      <Icon size={14} className="text-paragraph group-hover:text-primary transition-colors duration-200" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-heading leading-none mb-0.5">{label}</p>
                      <p className="font-mono text-xs text-paragraph/50">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-border bg-surface p-8" style={{ boxShadow: 'var(--shadow-md)' }}>
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-5">
                    <Send size={24} className="text-emerald-500" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-heading mb-2">Message sent!</h3>
                  <p className="text-paragraph text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="mt-6 text-sm text-primary hover:underline font-mono"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full name" id="name" error={errors.name}>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Anz Mariya Davis"
                        value={form.name}
                        onChange={handleChange}
                        className={cn(inputClass, errors.name && 'border-red-500/50 focus:ring-red-500/20')}
                      />
                    </Field>
                    <Field label="Email address" id="email" error={errors.email}>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="hello@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={cn(inputClass, errors.email && 'border-red-500/50 focus:ring-red-500/20')}
                      />
                    </Field>
                  </div>

                  <Field label="Subject" id="subject">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project inquiry, collaboration, etc."
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Message" id="message" error={errors.message}>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      value={form.message}
                      onChange={handleChange}
                      className={cn(inputClass, 'resize-none', errors.message && 'border-red-500/50 focus:ring-red-500/20')}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={cn(
                      'btn-primary w-full justify-center',
                      status === 'sending' && 'opacity-70 cursor-not-allowed'
                    )}
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-paragraph/40 font-mono">
                    No spam, ever. I'll only reply to your message.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
