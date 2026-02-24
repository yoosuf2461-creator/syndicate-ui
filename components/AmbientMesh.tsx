'use client'
import { motion } from 'framer-motion'

export default function AmbientMesh() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      
      {/* Orb 1: Subtle Mars Orange / Rust Warmth */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-900/10 blur-[120px] mix-blend-screen"
      />

      {/* Orb 2: Deep Charcoal / Zinc Structure */}
      <motion.div
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 80, -60, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-zinc-800/30 blur-[150px] mix-blend-screen"
      />

      {/* Orb 3: Faint White Core Light */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, -50, 0],
          scale: [0.8, 1.1, 0.9, 0.8],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-white/5 blur-[100px] mix-blend-screen"
      />

      {/* Cinematic Static Noise Overlay */}
      {/* This binds the soft gradients together and prevents color banding */}
      <div 
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  )
}