import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Ambient background orbs - Static for performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-tokyo-blue/[0.04] blur-[120px]" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-tokyo-green/[0.04] blur-[120px]" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-tokyo-purple/[0.03] blur-[100px]" style={{ transform: 'translateZ(0)' }} />
      </div>

      <Navbar />

      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

export default App
