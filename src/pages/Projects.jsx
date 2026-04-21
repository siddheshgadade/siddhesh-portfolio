import { motion } from 'framer-motion'
import { ExternalLink, Github, Layers } from 'lucide-react'
import PageTransition from '../components/PageTransition'

/* ── Projects Data ────────────────────────────────────────────── */
const projects = [
  {
    title: 'NeuroPlay',
    description:
      'An ML-driven Behavioral Biomarker platform that captures and analyzes user interaction patterns to identify cognitive and behavioral markers, enabling early-stage screening through gamified assessments.',
    tags: ['React', 'Flask', 'Scikit-Learn', 'Python', 'REST API'],
    color: '#7AA2F7',
    github: 'https://github.com/siddheshgadade/neuroplay',
    live: '#',
  },
  {
    title: 'ClarifAI',
    description:
      'A RAG-based Customer Support System leveraging vector embeddings and retrieval-augmented generation to provide accurate, context-aware responses from documentation and knowledge bases.',
    tags: ['Python', 'Vector DB', 'NLP', 'LangChain', 'FastAPI'],
    color: '#9ECE6A',
    github: 'https://github.com/siddheshgadade/clarifai',
    live: '#',
  },
  {
    title: 'AstroFix',
    description:
      'A Zero-G Repair Protocol prototype using HCI & WebXR, combining hand gesture recognition and voice commands to guide astronauts through equipment repair procedures in microgravity environments.',
    tags: ['MediaPipe', 'Web Speech API', 'WebXR', 'Three.js', 'JavaScript'],
    color: '#BB9AF7',
    github: 'https://github.com/siddheshgadade/astrofix',
    live: '#',
  },
  {
    title: 'PSO Climate Forecast',
    description:
      'A 120-Year Temperature Optimization engine that applies a custom Particle Swarm Optimization algorithm to global climate data, modeling long-term temperature trends with high predictive accuracy.',
    tags: ['Python', 'Pandas', 'Custom PSO', 'NumPy', 'Matplotlib'],
    color: '#FF9E64',
    github: 'https://github.com/siddheshgadade/pso-climate',
    live: '#',
  },
]

/* ── Animation Variants ───────────────────────────────────────── */
const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

/* ── Page ──────────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* ── Header ──────────────────────────────────────── */}
          <motion.section
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            className="mb-14"
            id="projects-header"
          >
            <motion.div variants={fadeUp} className="mb-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-tokyo-blue">
                Projects
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Work</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-tokyo-text-muted max-w-2xl">
              A curated selection of projects showcasing full-stack engineering, data science, and human-computer interaction.
            </motion.p>
          </motion.section>

          {/* ── Project Grid ────────────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            id="projects-grid"
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                className="group glass rounded-2xl overflow-hidden hover:glow-blue transition-all duration-500 flex flex-col"
              >
                {/* Color accent bar */}
                <div
                  className="h-1 w-full transition-all duration-500 group-hover:h-1.5"
                  style={{
                    background: `linear-gradient(90deg, ${project.color}, ${project.color}80)`,
                  }}
                />

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  {/* Title row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${project.color}15` }}
                      >
                        <Layers size={20} style={{ color: project.color }} />
                      </div>
                      <h3 className="text-xl font-bold text-tokyo-text group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-tokyo-text-muted leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-tokyo-surface-light/60 text-tokyo-text-muted border border-tokyo-border/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-tokyo-border/20">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-tokyo-text-muted hover:text-tokyo-text hover:bg-tokyo-surface-light/50 border border-tokyo-border/30 hover:border-tokyo-blue/30 transition-all duration-200"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-tokyo-text-muted hover:text-tokyo-text hover:bg-tokyo-surface-light/50 border border-tokyo-border/30 hover:border-tokyo-green/30 transition-all duration-200"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
