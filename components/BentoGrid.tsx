'use client'
import { motion } from 'framer-motion'

export default function BentoGrid() {
  return (
    <section className="w-full px-4 md:px-8 py-24 md:py-32 relative z-10 selection:bg-[#4377FF] selection:text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-6">
            Our <span className="text-[#4377FF]">Services.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed">
            We focus on building fast, beautiful websites and practical tools that actually help your business run smoother.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Web Development (Active) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative md:col-span-2 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 hover:border-[#4377FF]/40 hover:shadow-[0_8px_40px_-12px_rgba(67,119,255,0.25)] transition-all duration-700 group overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#4377FF] rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10">
              {/* Added flex-wrap and gap-4 so it doesn't crush the badge */}
              <div className="flex flex-wrap justify-between items-start gap-4 mb-12">
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-[#4377FF] transition-colors duration-500">
                  Web Development
                </h3>
                {/* Added whitespace-nowrap and refined padding */}
                <span className="px-4 py-1.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] whitespace-nowrap">
                  Active
                </span>
              </div>
              <p className="text-zinc-400 leading-relaxed max-w-md group-hover:text-zinc-300 transition-colors duration-500">
                We build custom, incredibly fast, and highly responsive websites. We focus on clean code and premium design to ensure your brand looks professional and works flawlessly on every device.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Task Automation (Coming Soon) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative md:col-span-1 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 hover:border-[#4377FF]/40 hover:shadow-[0_8px_40px_-12px_rgba(67,119,255,0.25)] transition-all duration-700 group overflow-hidden"
          >
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#4377FF] rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Added flex-wrap and gap-4 */}
              <div className="flex flex-wrap justify-between items-start gap-4 mb-12">
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-[#4377FF] transition-colors duration-500">
                  Task Automation
                </h3>
                {/* Sleeker glass pill + whitespace-nowrap to fix the ugly stacking */}
                <span className="px-4 py-1.5 bg-white/5 text-zinc-400 border border-white/10 text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-sm whitespace-nowrap">
                  Coming Soon
                </span>
              </div>
              <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-500 mt-auto">
                Simple, effective Python scripts designed to handle your repetitive daily workflows, freeing up your time to focus on what actually matters.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Digital Strategy (Under Development) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative md:col-span-3 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 hover:border-[#4377FF]/40 hover:shadow-[0_8px_40px_-12px_rgba(67,119,255,0.25)] transition-all duration-700 group flex flex-col items-center text-center overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4377FF] rounded-full blur-[120px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-8">
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-[#4377FF] transition-colors duration-500">
                  Digital Strategy
                </h3>
                {/* Sleeker glass pill + whitespace-nowrap */}
                <span className="px-4 py-1.5 bg-white/5 text-zinc-400 border border-white/10 text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-sm whitespace-nowrap">
                  Under Development
                </span>
              </div>
              <p className="text-zinc-500 leading-relaxed max-w-2xl group-hover:text-zinc-400 transition-colors duration-500">
                Complete guidance on how to launch, manage, and scale your digital presence online. We are currently building out this full-service offering.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}