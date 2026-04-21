import { useState, useEffect } from 'react'
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
      <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-5 sm:px-6" id="hero-section">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Greeting chip */}
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass glow-blue text-sm font-semibold text-tokyo-blue">
              <Sparkles size={16} />
              <span>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Typed Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] font-extrabold leading-tight tracking-tight mb-6 sm:mb-8"
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
            className="text-lg sm:text-2xl md:text-3xl text-tokyo-text-muted font-light max-w-3xl mx-auto mb-10 sm:mb-14 leading-relaxed px-2"
          >
            <span className="text-tokyo-blue font-bold tracking-wider block sm:inline mb-1 sm:mb-0">M.Sc. Computer Science</span>
            <span className="hidden sm:inline">{' | '}</span>
            <span className="text-tokyo-text font-medium block sm:inline">Full-Stack &amp; Data Engineer</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-4 sm:px-0">
            <Link
              to="/projects"
              id="cta-explore"
              className="btn-shine w-full sm:w-auto justify-center group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl bg-tokyo-blue text-tokyo-bg font-bold text-sm sm:text-base hover:shadow-lg hover:shadow-tokyo-blue/30 transition-all duration-300 hover:-translate-y-1"
            >
              Explore My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              id="cta-hire"
              className="w-full sm:w-auto justify-center inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl glass text-tokyo-text font-bold text-sm sm:text-base hover:bg-tokyo-surface-light border border-tokyo-border hover:border-tokyo-green/40 hover:text-tokyo-green transition-all duration-300 hover:-translate-y-1"
            >
              Hire Me
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Tech Snapshot Marquee ─────────────────────────────────── */}
      <section className="py-20 overflow-hidden relative" id="tech-marquee-section">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-tokyo-text-muted">
            Tech Snapshot
          </p>
        </div>

        {/* Gradient fades on edges */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-40 bg-gradient-to-r from-tokyo-bg to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-40 bg-gradient-to-l from-tokyo-bg to-transparent z-10" />

          <div className="flex marquee-track" style={{ width: 'max-content' }}>
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex items-center gap-3 px-8 py-4 mx-4 rounded-xl bg-tokyo-surface border border-tokyo-border hover:border-tokyo-blue/50 hover:bg-tokyo-surface-light transition-colors duration-300 cursor-default group"
              >
                <div
                  className="w-4 h-4 rounded-full shrink-0 group-hover:scale-125 transition-transform"
                  style={{ backgroundColor: tech.color }}
                />
                <span className="text-base font-bold text-tokyo-text-muted group-hover:text-tokyo-text whitespace-nowrap transition-colors">
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
