'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import MagneticButton from './MagneticButton'

// Dynamically import the WebGL environment to prevent SSR hydration errors
const HeroBackground = dynamic(() => import('./HeroBackground'), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-transparent" />
})

export default function Hero() {
  const [isBooting, setIsBooting] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false)
    }, 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden selection:bg-[#4377FF] selection:text-white">
      
      {/* --- THE GROUNDED BOOT SEQUENCE --- */}
      <AnimatePresence>
        {isBooting && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[999] flex flex-col justify-center px-8 md:px-24 font-mono text-xs md:text-sm bg-black"
          >
            <div className="max-w-3xl flex flex-col gap-2 text-zinc-500">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <span className="text-[#4377FF]">root@studio</span>:~$ ./init_core.sh
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                [SYSTEM] Allocating memory for High-Fidelity UI... <span className="text-white">OK</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
                [NETWORK] Establishing secure link to Colombo (IST)... <span className="text-[#4377FF]">CONNECTED</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
                [ENGINE] WebGL rendering environment initialized... <span className="text-white">OK</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
                [LOGIC] System automation logic synced... <span className="text-[#4377FF]">READY</span>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="text-white font-bold mt-2">
                &gt; LAUNCHING INTERFACE...
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- WEBGL INFINITE TOPOGRAPHY (OPTIMIZED LOAD) --- */}
      {/* This is no longer wrapped in a conditional. 
        It mounts immediately and calculates in the background, 
        but stays visually hidden (opacity 0) until the boot sequence finishes. 
      */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isBooting ? 0 : 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }} 
        className="absolute inset-0 z-0 pointer-events-none w-full h-full"
      >
        <HeroBackground />
      </motion.div>

      {/* --- MAIN CONTENT --- */}
      <AnimatePresence>
        {!isBooting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center text-center"
          >
            <div className="relative z-10 flex flex-col items-center">
              
              {/* Updated Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-[#4377FF]/30 bg-[#4377FF]/5 backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-[#4377FF] animate-pulse shadow-[0_0_10px_rgba(67,119,255,0.8)]" />
                <span className="text-xs font-mono text-[#4377FF] uppercase tracking-widest">Core Systems Online</span>
              </motion.div>

              {/* Updated Pure White Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-white leading-[0.85] mb-8"
              >
                Engineered <br />
                Web Solutions.
              </motion.h1>

              {/* Updated Honest Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
              >
                Specializing in high-performance web applications and robust automation logic. Based in Colombo, Sri Lanka.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <MagneticButton strength={0.3}>
                  <Link href="/contact" className="inline-block">
                    <button className="h-14 px-8 rounded-full bg-white text-black text-xs font-bold tracking-widest uppercase hover:scale-105 hover:bg-[#4377FF] hover:text-white transition-all duration-300 shadow-[0_0_30px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_30px_-5px_rgba(67,119,255,0.6)]">
                      Initiate Project
                    </button>
                  </Link>
                </MagneticButton>

                <MagneticButton strength={0.3}>
                  <Link href="/about" className="inline-block">
                    <button className="h-14 px-8 rounded-full bg-transparent border border-white/20 text-white text-xs font-bold tracking-widest uppercase hover:bg-white/5 hover:border-[#4377FF]/50 transition-all duration-300">
                      View Operations
                    </button>
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}