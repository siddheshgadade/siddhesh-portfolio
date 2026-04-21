import { motion } from 'framer-motion'
import { ExternalLink, Layers } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import PageTransition from '../components/PageTransition'

/* ── Projects Data ────────────────────────────────────────────── */
import imgNeuroPlay from '../assets/project_neuroplay.png'
import imgClarifAI from '../assets/project_clarifai.png'
import imgAstroFix from '../assets/project_astrofix.png'
import imgPsoClimate from '../assets/project_psoclimate.png'

const projects = [
  {
    title: 'NeuroPlay',
    description: 'An ML-driven Behavioral Biomarker platform that captures and analyzes user interaction patterns to identify cognitive and behavioral markers.',
    tags: ['React', 'Flask', 'Scikit-Learn', 'Python'],
    color: '#7AA2F7',
    image: imgNeuroPlay,
    github: 'https://github.com/siddheshgadade/neuroplay',
    live: '#',
  },
  {
    title: 'ClarifAI',
    description: 'A RAG-based Customer Support System leveraging vector embeddings and retrieval-augmented generation to provide accurate, context-aware responses.',
    tags: ['Python', 'LangChain', 'FastAPI'],
    color: '#9ECE6A',
    image: imgClarifAI,
    github: 'https://github.com/siddheshgadade/clarifai',
    live: '#',
  },
  {
    title: 'AstroFix',
    description: 'A Zero-G Repair Protocol prototype using HCI & WebXR, combining hand gesture recognition and voice commands to guide astronauts through repair procedures.',
    tags: ['WebXR', 'Three.js', 'JavaScript'],
    color: '#BB9AF7',
    image: imgAstroFix,
    github: 'https://github.com/siddheshgadade/astrofix',
    live: '#',
  },
  {
    title: 'PSO Climate Forecast',
    description: 'A 120-Year Temperature Optimization engine that applies a custom Particle Swarm Optimization algorithm to global climate data.',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    color: '#FF9E64',
    image: imgPsoClimate,
    github: 'https://github.com/siddheshgadade/pso-climate',
    live: '#',
  },
]

/* ── Animation Variants ───────────────────────────────────────── */
const stagger = {
  animate: { transition: { staggerChildren: 0.15 } },
}

const fadeScale = {
  initial: { opacity: 0, scale: 0.95, y: 30 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

/* ── Page ──────────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* ── Header ──────────────────────────────────────── */}
          <motion.section
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            className="mb-16 md:mb-24 text-center"
            id="projects-header"
          >
            <motion.div variants={fadeScale} className="mb-4">
              <span className="inline-block px-4 py-1.5 rounded-full glass border-tokyo-blue/30 text-xs font-bold uppercase tracking-[0.3em] text-tokyo-blue">
                Portfolio
              </span>
            </motion.div>
            <motion.h1 variants={fadeScale} className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6">
              Featured <span className="gradient-text">Work</span>
            </motion.h1>
            <motion.p variants={fadeScale} className="text-lg md:text-xl text-tokyo-text-muted max-w-2xl mx-auto leading-relaxed">
              A curated selection of projects showcasing full-stack engineering, data science, and advanced human-computer interaction.
            </motion.p>
          </motion.section>

          {/* ── Project Grid ────────────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            id="projects-grid"
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={fadeScale}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative glass-strong rounded-[2rem] overflow-hidden flex flex-col border border-tokyo-border/50 hover:border-tokyo-border transition-colors duration-500"
              >
                {/* ── Image Cover ─────────────────────────── */}
                <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-tokyo-bg-dark">
                  <div className="absolute inset-0 bg-tokyo-bg/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Inner subtle gradient fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-tokyo-surface to-transparent z-10" />
                </div>

                {/* ── Content Area ────────────────────────── */}
                <div className="relative p-6 sm:p-8 md:p-10 flex flex-col flex-1 bg-tokyo-surface">
                  {/* Title */}
                  <div className="flex items-center gap-3 md:gap-4 mb-4">
                    <div className="p-2 md:p-2.5 rounded-xl" style={{ backgroundColor: `${project.color}15` }}>
                      <Layers size={20} className="md:w-6 md:h-6" style={{ color: project.color }} />
                    </div>
                    <h3 className="text-xl md:text-3xl font-extrabold text-tokyo-text group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-base md:text-lg text-tokyo-text-muted leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-bold tracking-wide rounded-lg bg-tokyo-bg-dark text-tokyo-text-muted border border-tokyo-border border-opacity-50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-6 border-t border-tokyo-border/30 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm text-tokyo-text bg-tokyo-surface-light border border-tokyo-border hover:bg-tokyo-border/50 hover:text-white transition-all duration-300 w-full sm:w-auto"
                    >
                      <FaGithub size={16} />
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shine inline-flex justify-center items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm text-tokyo-bg bg-tokyo-text hover:bg-white transition-all duration-300 w-full sm:w-auto"
                    >
                      <ExternalLink size={16} />
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
