"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import LusionCursor from "../../components/LusionCursor";
import Footer from "../../components/Footer";
import VisualShape from '../../components/VisualShape'; // Make sure this path is correct

// Removed roles, updated New York to Louisiana, and adjusted timezone
const locations = [
  {
    city: "Dubai",
    region: "UAE",
    timeZone: "GST (UTC +4)",
  },
  {
    city: "Louisiana", 
    region: "USA",
    timeZone: "CST (UTC -6)",
  },
  {
    city: "Colombo", 
    region: "Sri Lanka",
    timeZone: "IST (UTC +5:30)",
  }
];

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen w-full overflow-hidden relative selection:bg-[#4377FF] selection:text-white font-sans text-zinc-400">
      
      {/* 1. Global Architectural Grid Background (Increased opacity to 0.08) */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)', 
          backgroundSize: '4rem 4rem',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
        }} 
      />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_800px_at_50%_0%,transparent_0%,black_100%)]" />

      {/* Interactive Cursor & Nav */}
      <LusionCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-4 md:px-8 z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#4377FF] text-xs font-mono tracking-[0.3em] uppercase mb-8"
          >
            The Syndicate
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-white leading-[0.85] mb-12"
          >
            Built Across <br /> Borders.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light"
          >
            A privately held digital architecture firm. We leverage our international presence to deliver high-fidelity web experiences and resilient system logic for ambitious brands.
          </motion.p>
        </div>
      </section>

      {/* Global Footprint Section */}
      <section className="py-20 px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {locations.map((loc, index) => (
              <motion.div 
                key={loc.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                // Added glassmorphism classes: backdrop-blur-xl, bg-white/[0.03], border-white/10
                className="group p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-[#4377FF]/40 hover:bg-white/[0.05] shadow-2xl transition-all duration-500 flex flex-col justify-between h-40"
              >
                <div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">{loc.city}</h3>
                  <p className="text-[#4377FF] font-mono text-xs uppercase tracking-widest mt-1">{loc.region}</p>
                </div>
                <div className="flex justify-end w-full">
                  <span className="text-zinc-600 text-xs font-mono group-hover:text-zinc-400 transition-colors">{loc.timeZone}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Bento Grid */}
      <section className="py-20 px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            {/* Box 1: Engineering */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              // Glassmorphism classes applied here
              className="group relative p-10 md:p-14 rounded-[2rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 overflow-hidden hover:border-[#4377FF]/30 transition-colors shadow-2xl"
            >
              <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                <div>
                  <span className="text-[#4377FF] text-xs font-mono mb-4 block uppercase tracking-widest">01. Architecture</span>
                  <h3 className="text-4xl font-bold text-white uppercase tracking-tighter">System Logic.</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed font-light">
                  Building resilient backend infrastructure. From high-speed data structures to seamless APIs, our systems scale effortlessly with zero latency.
                </p>
              </div>
            </motion.div>

            {/* Box 2: Visuals (with WebGL) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              // Glassmorphism classes + min-h-[400px] for WebGL spacing
              className="group relative p-10 md:p-14 rounded-[2rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col justify-between gap-12 hover:border-[#4377FF]/30 transition-colors shadow-2xl min-h-[400px]"
            >
              {/* WebGL Canvas Background */}
              <VisualShape />

              {/* Pointer-events-none ensures the text doesn't block WebGL interactions if you add them later */}
              <div className="relative z-10 pointer-events-none">
                <span className="text-[#4377FF] text-xs font-mono mb-4 block uppercase tracking-widest">02. Aesthetic</span>
                <h3 className="text-4xl font-bold text-white uppercase tracking-tighter">Visual Execution.</h3>
              </div>
              <p className="relative z-10 text-zinc-400 leading-relaxed font-light pointer-events-none max-w-[80%]">
                Engineering cinematic interfaces. We merge modern WebGL components with minimalist layouts to create deeply immersive digital environments.
              </p>
            </motion.div>

            {/* Box 3: CTA (Spans full width) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              // Glassmorphism applied
              className="md:col-span-2 group relative p-10 md:p-12 rounded-[2rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-[#4377FF]/50 hover:bg-white/[0.05] transition-all duration-500 shadow-2xl"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-2">Ready to deploy?</h3>
                <p className="text-zinc-400 font-light">Initiate a project sequence with the syndicate.</p>
              </div>
              <a href="/contact" className="w-16 h-16 shrink-0 rounded-full bg-white flex items-center justify-center text-black group-hover:scale-105 group-hover:bg-[#4377FF] group-hover:text-white transition-all duration-500 shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 14 0"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}