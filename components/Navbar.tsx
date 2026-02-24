'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import MagneticButton from './MagneticButton'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [terminalOpen, setTerminalOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-start pointer-events-none"
    >
      
      {/* LEFT: LOGO */}
      <div className="pointer-events-auto mt-2 relative">
        <span className="text-white font-bold text-xl tracking-tighter uppercase">
          STUDIO
        </span>

        {/* TERMINAL EASTER EGG */}
        <AnimatePresence>
          {terminalOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-12 left-0 w-72 md:w-80 bg-zinc-950/80 border border-white/10 p-5 rounded-xl backdrop-blur-xl font-mono text-[11px] md:text-xs text-[#4377FF] shadow-2xl overflow-hidden"
            >
              {/* Terminal Header (Mac Style Dots) */}
              <div className="flex gap-2 mb-4 border-b border-white/10 pb-3 items-center">
                <div 
                  className="w-2.5 h-2.5 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-400 transition-colors" 
                  onClick={() => setTerminalOpen(false)} 
                />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-[9px] text-zinc-500 leading-none tracking-widest uppercase">sys_core.exe</span>
              </div>

              {/* Terminal Boot Sequence */}
              <div className="flex flex-col gap-2">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2}}>
                  <span className="text-zinc-500">&gt;</span> python init_operations.py
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.8}}>
                  [SYSTEM] Booting High-Fidelity UI... <span className="text-white">OK</span>
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.4}}>
                  [NETWORK] Global Edge CDN... <span className="text-white">12ms ping</span>
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2.0}}>
                  [LOGIC] Architecture Status: <span className="text-green-400">STABLE</span>
                </motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2.6}} className="mt-2 text-zinc-400">
                  Awaiting client command
                  <motion.span 
                    animate={{opacity: [0, 1, 0]}} 
                    transition={{repeat: Infinity, duration: 0.8}} 
                    className="inline-block w-2 h-3 bg-white ml-1 align-middle"
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* RIGHT: CONTROLS & DROPDOWN MENU */}
      <div className="flex flex-col items-end gap-2 pointer-events-auto relative">
        
        {/* Top Button Row */}
        <div className="flex items-center gap-2">
          
          {/* Magnetic Minus Button -> Now triggers the Terminal! */}
          <MagneticButton strength={0.4}>
            <button 
              onClick={() => setTerminalOpen(!terminalOpen)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors border ${terminalOpen ? 'bg-white text-black border-white' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'}`}
            >
              {/* Animates into an 'X' when the terminal is open */}
              <motion.span 
                animate={{ rotate: terminalOpen ? 45 : 0 }}
                className="block relative w-3 h-[2px] bg-current rounded-full"
              >
                {terminalOpen && (
                  <span className="absolute top-0 left-0 w-3 h-[2px] bg-current rounded-full rotate-90" />
                )}
              </motion.span>
            </button>
          </MagneticButton>

          {/* Magnetic Let's Talk Button */}
          <MagneticButton strength={0.2}>
            <Link href="/contact" className="inline-block">
              <button className="h-10 px-5 rounded-full bg-zinc-900 border border-white/10 text-white text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-zinc-800 transition-colors">
                LET'S TALK
                <div className="w-1 h-1 bg-white rounded-full" />
              </button>
            </Link>
          </MagneticButton>

          {/* Magnetic Menu Button */}
          <MagneticButton strength={0.2}>
            <button 
              onClick={() => {
                setMenuOpen(!menuOpen)
                if (terminalOpen) setTerminalOpen(false) // Close terminal if menu opens
              }}
              className="h-10 px-5 rounded-full bg-white text-black text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-zinc-200 transition-colors"
            >
              {menuOpen ? 'CLOSE' : 'MENU'}
              <div className={menuOpen ? "flex flex-col gap-[2px]" : "flex gap-[2px]"}>
                <div className="w-[3px] h-[3px] bg-black rounded-full" />
                <div className="w-[3px] h-[3px] bg-black rounded-full" />
              </div>
            </button>
          </MagneticButton>
        </div>

        {/* The Dropdown Menu Card */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="w-72 bg-white rounded-3xl p-6 shadow-2xl origin-top-right mt-2 overflow-hidden border border-zinc-200"
            >
              <ul className="space-y-4 mb-8">
                {[
                  { name: 'Home', path: '/#home' },
                  { name: 'About Us', path: '/about' }, // UPDATED THIS
                  { name: 'Projects', path: '/#projects' }, // UPDATED THIS
                  { name: 'Contact', path: '/contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.path} 
                      onClick={() => setMenuOpen(false)} // Closes the menu gracefully
                      className="text-black text-sm font-bold uppercase tracking-widest hover:text-zinc-500 transition-colors flex justify-between items-center group"
                    >
                      {item.name}
                      <span className="w-1.5 h-1.5 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="bg-zinc-100/50 rounded-2xl p-5 border border-zinc-100">
                <p className="text-black font-semibold mb-4 text-sm tracking-tight">
                  Subscribe to our newsletter
                </p>
                <div className="flex items-center border border-zinc-200 rounded-xl overflow-hidden bg-white hover:border-zinc-300 transition-colors">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full px-4 py-3 text-xs outline-none text-black placeholder:text-zinc-400 font-medium"
                  />
                  <button className="px-4 text-zinc-400 hover:text-black transition-colors font-bold text-lg">
                    →
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}