'use client'
import { motion } from 'framer-motion'

const capabilities = [
  {
    id: "01",
    title: "High-Fidelity UI",
    desc: "Cinematic, hardware-accelerated interfaces built for modern browsers.",
  },
  {
    id: "02",
    title: "System Architecture",
    desc: "Scalable infrastructure engineered to handle complex logic and high traffic.",
  },
  {
    id: "03",
    title: "Global Edge CDN",
    desc: "Lightning-fast deployment across global networks for zero-latency load times.",
  },
  {
    id: "04",
    title: "API Integration",
    desc: "Robust headless CMS and third-party data wiring for real-time synchronization.",
  }
];

export default function SystemCapabilities() {
  return (
    <section className="w-full px-4 md:px-8 py-24 md:py-32 relative z-10 text-white selection:bg-[#4377FF] selection:text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 leading-[0.9]">
              System <br /> Capabilities.
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
              We construct scalable digital architecture. From high-fidelity front-end rendering to resilient backend logic, our stack is engineered for peak performance.
            </p>
          </div>
          
          {/* Blue Operational Pulse */}
          <div className="hidden md:flex items-center gap-3 text-xs font-mono text-[#4377FF] uppercase tracking-widest pb-2">
            <span className="w-2 h-2 rounded-full bg-[#4377FF] animate-pulse shadow-[0_0_10px_rgba(67,119,255,0.8)]" />
            Systems Operational
          </div>
        </div>

        {/* The Dark Bento Grid with Blue Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {capabilities.map((cap, index) => (
            <motion.div 
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // Changed hover border to electric blue
              className="group relative p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#4377FF]/40 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden cursor-pointer shadow-none hover:shadow-[0_0_30px_-15px_rgba(67,119,255,0.3)]"
            >
              {/* Subtle Blue hover glow effect inside the card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4377FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  {/* ID changes to blue on hover */}
                  <span className="text-zinc-600 font-mono text-sm group-hover:text-[#4377FF] transition-colors duration-300">
                    {cap.id}
                  </span>
                  {/* Plus icon changes to blue and spins */}
                  <span className="text-zinc-600 group-hover:text-[#4377FF] group-hover:rotate-90 transition-all duration-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {cap.title}
                </h3>
                
                <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors duration-500 max-w-sm">
                  {cap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}