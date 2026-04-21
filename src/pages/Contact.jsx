import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, CheckCircle, AlertCircle } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import PageTransition from '../components/PageTransition'

/* ── Socials ──────────────────────────────────────────────────── */
const socials = [
  {
    icon: FaGithub,
    label: 'GitHub',
    handle: '@siddheshgadade',
    href: 'https://github.com/siddheshgadade',
    color: '#C0CAF5',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    handle: 'Siddhesh Gadade',
    href: 'https://linkedin.com/in/siddheshgadade',
    color: '#7AA2F7',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'siddhesh.gadade@email.com',
    href: 'mailto:siddhesh.gadade@email.com',
    color: '#9ECE6A',
  },
]

/* ── Animation Variants ───────────────────────────────────────── */
const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

/* ── Page ──────────────────────────────────────────────────────── */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) {
      errs.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Invalid email format'
    }
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev }
        delete copy[field]
        return copy
      })
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto">

          {/* ── Header ──────────────────────────────────────── */}
          <motion.section
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            className="mb-14"
            id="contact-header"
          >
            <motion.div variants={fadeUp} className="mb-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-tokyo-green">
                Contact
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Let&apos;s <span className="gradient-text">Connect</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-tokyo-text-muted max-w-2xl">
              Have a project in mind or want to collaborate? Drop me a message and I&apos;ll get back to you promptly.
            </motion.p>
          </motion.section>

          {/* ── Content Grid ────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* ── Contact Form ──────────────────────────────── */}
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-50px' }}
              className="lg:col-span-3"
            >
              <motion.form
                variants={fadeUp}
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-6 sm:p-8 space-y-6"
                id="contact-form"
                noValidate
              >
                {/* Success toast */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-tokyo-green/10 border border-tokyo-green/20 text-tokyo-green text-sm"
                  >
                    <CheckCircle size={18} />
                    Message sent successfully! I&apos;ll be in touch.
                  </motion.div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-tokyo-text mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-tokyo-surface/60 border text-sm text-tokyo-text placeholder:text-tokyo-text-muted/50 focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.name
                        ? 'border-tokyo-red/50 focus:ring-tokyo-red/30'
                        : 'border-tokyo-border/30 focus:ring-tokyo-blue/30 focus:border-tokyo-blue/50'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-tokyo-red flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-tokyo-text mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-tokyo-surface/60 border text-sm text-tokyo-text placeholder:text-tokyo-text-muted/50 focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.email
                        ? 'border-tokyo-red/50 focus:ring-tokyo-red/30'
                        : 'border-tokyo-border/30 focus:ring-tokyo-blue/30 focus:border-tokyo-blue/50'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-tokyo-red flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-tokyo-text mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-tokyo-surface/60 border text-sm text-tokyo-text placeholder:text-tokyo-text-muted/50 focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
                      errors.message
                        ? 'border-tokyo-red/50 focus:ring-tokyo-red/30'
                        : 'border-tokyo-border/30 focus:ring-tokyo-blue/30 focus:border-tokyo-blue/50'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-tokyo-red flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="contact-submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-tokyo-blue text-tokyo-bg font-semibold text-sm hover:shadow-lg hover:shadow-tokyo-blue/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </motion.form>
            </motion.div>

            {/* ── Social Links ──────────────────────────────── */}
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-50px' }}
              className="lg:col-span-2 space-y-4"
              id="contact-socials"
            >
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  variants={fadeUp}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 glass rounded-2xl p-5 hover:glow-blue transition-all duration-300"
                >
                  <div
                    className="p-3 rounded-xl transition-colors duration-300"
                    style={{ backgroundColor: `${social.color}10` }}
                  >
                    <social.icon size={22} style={{ color: social.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-tokyo-text group-hover:text-white transition-colors">
                      {social.label}
                    </p>
                    <p className="text-xs text-tokyo-text-muted">{social.handle}</p>
                  </div>
                </motion.a>
              ))}

              {/* Status card */}
              <motion.div
                variants={fadeUp}
                className="glass rounded-2xl p-6 mt-4"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-tokyo-green" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-tokyo-green animate-ping opacity-40" />
                  </div>
                  <p className="text-sm font-medium text-tokyo-green">Available for work</p>
                </div>
                <p className="text-xs text-tokyo-text-muted leading-relaxed">
                  Currently open to full-time opportunities, freelance projects, and research collaborations.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
