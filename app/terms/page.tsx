
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
             Terms of Service
            </h1>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              Last Updated: October 2026
            </p>
          </div>

          {/* EXPLICIT TYPOGRAPHY LAYOUT: No plugins required. */}
          <div className="flex flex-col gap-12">
            
            <section className="relative border-l border-white/10 pl-6 md:pl-8 hover:border-[#4377FF] transition-colors duration-500 group">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#4377FF] transition-colors duration-500">
                1. The Agreement
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
              We believe contracts should be as clean as our code. By accessing our studio's site or engaging us for a project, you agree to these terms. If you don't agree with them, that's completely fine—but we won't be able to work together.
              </p>
            </section>

            <section className="relative border-l border-white/10 pl-6 md:pl-8 hover:border-[#4377FF] transition-colors duration-500 group">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#4377FF] transition-colors duration-500">
                2. Project Execution & Intellectual Property
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
              When we build a digital architecture project for you, the final deployed code and design assets belong to you once the final invoice is cleared. However, the proprietary background logic, internal components, and custom shaders we use to accelerate the build remain our intellectual property. We grant you an infinite license to use them for your specific project.
              </p>
            </section>

            <section className="relative border-l border-white/10 pl-6 md:pl-8 hover:border-[#4377FF] transition-colors duration-500 group">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#4377FF] transition-colors duration-500">
                3. Communication & Revisions
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                We operate on clear, direct communication. Project scopes are defined upfront. If you need massive changes mid-build, we are happy to pivot, but this will require an updated scope of work and budget adjustment. We don't do infinite free revisions; we do precise, high-fidelity engineering.
              </p>
            </section>

            <section className="relative border-l border-white/10 pl-6 md:pl-8 hover:border-[#4377FF] transition-colors duration-500 group">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#4377FF] transition-colors duration-500">
                4. Liability
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
              We engineer our systems to be bulletproof, but the internet is unpredictable. We are not liable for lost profits, server outages caused by third-party hosts (like AWS or Vercel), or data breaches outside of our direct control. We deliver the product; you are responsible for how you use it.
              </p>
            </section>

             <section className="relative border-l border-white/10 pl-6 md:pl-8 hover:border-[#4377FF] transition-colors duration-500 group">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#4377FF] transition-colors duration-500">
                5. Governing Law
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
              We are a globally operating studio, but our core systems are based out of Sri Lanka. Any legal disputes regarding these terms will be handled under the jurisdiction of the courts in Colombo.
              </p>
            </section>

          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}