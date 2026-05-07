import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal as TerminalIcon, X, Maximize2, Minus } from 'lucide-react'

const COMMANDS = {
  help: 'Available commands: whoami, skills, projects, clear, echo, date',
  whoami: 'Siddhesh Gadade - M.Sc. Computer Science Candidate & Full-Stack Engineer',
  skills: 'React, Python, Machine Learning, PostgreSQL, Flask, Tailwind CSS, Three.js',
  projects: '1. NeuroPlay\n2. ClarifAI\n3. AstroFix\n4. PSO Climate Forecast',
  date: new Date().toString(),
}

export default function Terminal({ onClose }) {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Tokyo Night OS v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.' },
  ])
  const [input, setInput] = useState('')
  const [isMinimized, setIsMinimized] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const cmd = input.trim().toLowerCase()
    const newHistory = [...history, { type: 'input', content: input }]

    if (cmd === 'clear') {
      setHistory([])
    } else if (cmd.startsWith('echo ')) {
      newHistory.push({ type: 'output', content: input.substring(5) })
      setHistory(newHistory)
    } else if (COMMANDS[cmd]) {
      newHistory.push({ type: 'output', content: COMMANDS[cmd] })
      setHistory(newHistory)
    } else {
      newHistory.push({ type: 'output', content: `Command not found: ${cmd}` })
      setHistory(newHistory)
    }

    setInput('')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1, height: isMinimized ? '40px' : '400px' }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-6 right-6 w-[90vw] sm:w-[450px] bg-[#1a1b26] border border-[#2f3049] rounded-lg shadow-2xl shadow-tokyo-blue/20 overflow-hidden z-50 flex flex-col font-mono text-sm"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#13141c] border-b border-[#2f3049] select-none">
        <div className="flex items-center gap-2 text-[#565f89]">
          <TerminalIcon size={14} />
          <span className="text-xs font-semibold tracking-wider">guest@tokyo-night:~</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsMinimized(!isMinimized)} className="text-[#565f89] hover:text-white transition-colors">
            <Minus size={14} />
          </button>
          <button className="text-[#565f89] hover:text-white transition-colors">
            <Maximize2 size={12} />
          </button>
          <button onClick={onClose} className="text-[#f7768e] hover:text-red-400 transition-colors">
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <AnimatePresence>
        {!isMinimized && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-[#2f3049] scrollbar-track-transparent"
          >
            {history.map((line, i) => (
              <div key={i} className="mb-2">
                {line.type === 'input' ? (
                  <div className="flex items-start gap-2">
                    <span className="text-[#9ece6a]">➜</span>
                    <span className="text-[#7aa2f7]">~</span>
                    <span className="text-white">{line.content}</span>
                  </div>
                ) : (
                  <div className="text-[#c0caf5] whitespace-pre-wrap leading-relaxed opacity-90 pl-5">
                    {line.content}
                  </div>
                )}
              </div>
            ))}
            
            <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
              <span className="text-[#9ece6a]">➜</span>
              <span className="text-[#7aa2f7]">~</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 m-0"
                autoFocus
                autoComplete="off"
                spellCheck="false"
              />
            </form>
            <div ref={bottomRef} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
