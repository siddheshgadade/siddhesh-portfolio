import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import PageTransition from '../components/PageTransition'

/* ── Typing Effect Hook ────────────────────────────────────────── */
function useTypingEffect(text, speed = 80, delay = 600) {
  const [displayed, setDisplayed] = useState('')
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setIsDone(false)
    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
        } else {
          setIsDone(true)
          clearInterval(interval)
        }
      }, speed)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  return { displayed, isDone }
}

/* ── Tech Marquee Data ────────────────────────────────────────── */
const techStack = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#68A063' },
  { name: 'Python', color: '#FFD43B' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Flask', color: '#9ECE6A' },
  { name: 'TensorFlow', color: '#FF6F00' },
  { name: 'MongoDB', color: '#47A248' },
]

/* ── Stagger Container ────────────────────────────────────────── */
const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

/* ── Page ──────────────────────────────────────────────────────── */
export default function Home() {
  const { displayed, isDone } = useTypingEffect("Hi, I'm Siddhesh Gadade.", 70, 800)

  return (
    <PageTransition>
      <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6" id="hero-section">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Greeting chip */}
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-tokyo-blue">
              <Sparkles size={14} />
              <span>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Typed Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
          >
            <span className={!isDone ? 'typing-cursor' : ''}>
              {displayed.split('Siddhesh Gadade').map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <span className="gradient-text">Siddhesh Gadade</span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl md:text-2xl text-tokyo-text-muted font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            <span className="text-tokyo-blue font-medium">M.Sc. Computer Science</span>
            {' | '}
            Full-Stack &amp; Data Engineer
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/projects"
              id="cta-explore"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-tokyo-blue text-tokyo-bg font-semibold text-sm hover:shadow-lg hover:shadow-tokyo-blue/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              id="cta-hire"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass text-tokyo-text font-semibold text-sm hover:border-tokyo-green/40 hover:text-tokyo-green transition-all duration-300 hover:-translate-y-0.5"
            >
              Hire Me
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Tech Snapshot Marquee ─────────────────────────────────── */}
      <section className="py-16 overflow-hidden relative" id="tech-marquee-section">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-tokyo-text-muted">
            Tech Snapshot
          </p>
        </div>

        {/* Gradient fades on edges */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-tokyo-bg to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-tokyo-bg to-transparent z-10" />

          <div className="flex marquee-track" style={{ width: 'max-content' }}>
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex items-center gap-3 px-6 py-3 mx-3 rounded-xl glass hover:glow-blue transition-all duration-300 cursor-default group"
              >
                <div
                  className="w-3 h-3 rounded-full shrink-0 group-hover:scale-125 transition-transform"
                  style={{ backgroundColor: tech.color }}
                />
                <span className="text-sm font-medium text-tokyo-text-muted group-hover:text-tokyo-text whitespace-nowrap transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
