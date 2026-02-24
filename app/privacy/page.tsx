"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import LusionCursor from "../../components/LusionCursor";
import Footer from "../../components/Footer";

export default function PrivacyPage() {
  return (
    <main className="bg-black min-h-screen w-full overflow-hidden relative selection:bg-[#4377FF] selection:text-white font-sans">
      
      {/* 1. The Faded Border Grid */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)', 
          backgroundSize: '4rem 4rem',
          // THIS FIXES THE EDGES: Radial mask fades out smoothly on all four sides
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 90%)',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 90%)'
        }} 
      />

      {/* Ambient reading glow */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_800px_at_50%_30%,rgba(67,119,255,0.03),transparent_100%)]" />

      <LusionCursor />
      <Navbar />

      <section className="relative z-10 pt-48 pb-32 px-4 md:px-8 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl"
        >
          {/* Header Area */}
          <div className="mb-16 border-b border-white/10 pb-12">
            <p className="text-[#4377FF] text-xs font-mono tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#4377FF] rounded-full animate-pulse" />
              Fine Print
            </p>
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-6 leading-none">
              Privacy Policy
            </h1>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              Last Updated: October 2026
            </p>
          </div>

          {/* EXPLICIT TYPOGRAPHY LAYOUT: No plugins required. */}
          <div className="flex flex-col gap-12">
            
            <section className="relative border-l border-white/10 pl-6 md:pl-8 hover:border-[#4377FF] transition-colors duration-500 group">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#4377FF] transition-colors duration-500">
                1. Our Philosophy on Data
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                Your data is your business. We only collect the absolute minimum amount of information required to execute your projects, communicate effectively, and keep our website running smoothly. We do not—and will never—sell your data to third-party brokers.
              </p>
            </section>

            <section className="relative border-l border-white/10 pl-6 md:pl-8 hover:border-[#4377FF] transition-colors duration-500 group">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#4377FF] transition-colors duration-500">
                2. What We Collect
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                When you initiate a project via our contact link, we collect your name, email, company, and project details. We use this strictly to evaluate your request and reply to you. Our system forms are securely routed, and we don't scrape your inbox or track you across the web.
              </p>
            </section>

            <section className="relative border-l border-white/10 pl-6 md:pl-8 hover:border-[#4377FF] transition-colors duration-500 group">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#4377FF] transition-colors duration-500">
                3. Analytics & Performance
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                We monitor standard, anonymized server logs (like browser type and general region) to ensure our WebGL environments are performing optimally and to catch rendering errors. This data cannot be tied back to your personal identity.
              </p>
            </section>

            <section className="relative border-l border-white/10 pl-6 md:pl-8 hover:border-[#4377FF] transition-colors duration-500 group">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#4377FF] transition-colors duration-500">
                4. Data Retention
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                We keep your project files and communication history securely archived for our records and your future maintenance needs. If you want us to wipe your existence from our servers after a project concludes, just email our lead engineer. We will execute the deletion within 48 hours.
              </p>
            </section>

          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}