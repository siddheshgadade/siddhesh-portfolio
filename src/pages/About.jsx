import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import PageTransition from '../components/PageTransition'

/* ── Bio Data ─────────────────────────────────────────────────── */
const bio = `I am an M.Sc. Computer Science candidate based in Navi Mumbai, bridging the gap between advanced research and industrial application. I specialize in highly normalized relational databases, decoupled API backends, and Machine Learning optimizations.`

/* ── Education Timeline ───────────────────────────────────────── */
const education = [
  {
    degree: 'M.Sc. Computer Science',
    institution: 'University of Mumbai',
    period: '2024 – 2026',
    location: 'Navi Mumbai, India',
    description: 'Advanced coursework in Machine Learning, Distributed Systems, and Data Engineering.',
    current: true,
  },
  {
    degree: 'B.Sc. Computer Science',
    institution: 'University of Mumbai',
    period: '2021 – 2024',
    location: 'Navi Mumbai, India',
    description: 'Foundation in algorithms, databases, web development, and software engineering principles.',
    current: false,
  },
]

/* ── Tech Stack Grid ──────────────────────────────────────────── */
const techCategories = [
  {
    title: 'Frontend',
    color: '#7AA2F7',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    color: '#9ECE6A',
    techs: ['Node.js', 'Express', 'Flask', 'FastAPI', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Databases',
    color: '#FF9E64',
    techs: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Vector DB', 'Firebase'],
  },
  {
    title: 'AI / ML',
    color: '#BB9AF7',
    techs: ['Scikit-Learn', 'TensorFlow', 'Pandas', 'NumPy', 'NLP', 'OpenCV'],
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

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

/* ── Page ──────────────────────────────────────────────────────── */
export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto">

          {/* ── Section: Bio ───────────────────────────────────── */}
          <motion.section
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            className="mb-20"
            id="about-bio"
          >
            <motion.div variants={fadeUp} className="mb-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-tokyo-blue">
                About Me
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              Turning <span className="gradient-text">complex problems</span> into
              <br className="hidden sm:block" /> elegant solutions.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-tokyo-text-muted leading-relaxed max-w-3xl">
              {bio}
            </motion.p>
          </motion.section>

          {/* ── Section: Education Timeline ─────────────────────── */}
          <motion.section
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            className="mb-20"
            id="education-timeline"
          >
            <motion.div variants={fadeUp} className="mb-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-tokyo-green">
                Education
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold mb-10">
              Academic Journey
            </motion.h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-tokyo-blue via-tokyo-green to-transparent" />

              <div className="space-y-8">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="relative pl-16 md:pl-20"
                  >
                    {/* Dot */}
                    <div className={`absolute left-[18px] md:left-[26px] top-2 w-4 h-4 rounded-full border-2 ${
                      edu.current
                        ? 'bg-tokyo-blue border-tokyo-blue shadow-lg shadow-tokyo-blue/30'
                        : 'bg-tokyo-surface border-tokyo-border'
                    }`} />

                    <div className="glass rounded-2xl p-6 hover:glow-blue transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <GraduationCap size={18} className="text-tokyo-blue" />
                        <h3 className="text-lg font-semibold text-tokyo-text">{edu.degree}</h3>
                        {edu.current && (
                          <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-tokyo-green/15 text-tokyo-green border border-tokyo-green/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-tokyo-text-muted mb-1">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-tokyo-text-muted mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} /> {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} /> {edu.location}
                        </span>
                      </div>
                      <p className="text-sm text-tokyo-text-muted leading-relaxed">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ── Section: Tech Stack Grid ────────────────────────── */}
          <motion.section
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            id="tech-stack-grid"
          >
            <motion.div variants={fadeUp} className="mb-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-tokyo-purple">
                Tech Stack
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold mb-10">
              Tools &amp; Technologies
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {techCategories.map((cat, ci) => (
                <motion.div
                  key={cat.title}
                  variants={scaleIn}
                  className="glass rounded-2xl p-6 hover:glow-blue transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: cat.color, boxShadow: `0 0 12px ${cat.color}40` }}
                    />
                    <h3 className="text-base font-semibold" style={{ color: cat.color }}>
                      {cat.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-tokyo-surface-light/60 text-tokyo-text-muted hover:text-tokyo-text border border-tokyo-border/30 hover:border-tokyo-blue/30 transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  )
}
