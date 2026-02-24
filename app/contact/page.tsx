"use client";

import { motion } from "framer-motion";
import { useForm } from "@formspree/react";
import Navbar from "../../components/Navbar";
import LusionCursor from "../../components/LusionCursor";
import MagneticButton from "../../components/MagneticButton";

export default function ContactPage() {
  // Replace "YOUR_FORM_ID" with the ID Formspree gives you
  const [state, handleSubmit] = useForm("mjgepkba");

  return (
    <main className="bg-black min-h-screen w-full overflow-hidden relative selection:bg-[#4377FF] selection:text-white">
      
      {/* 1. Global Architectural Grid Background */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)', 
          backgroundSize: '4rem 4rem',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }} 
      />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_800px_at_50%_50%,transparent_20%,black_100%)]" />

      {/* 2. Interactive Cursor */}
      <LusionCursor />
      <Navbar />

      {/* 4. Contact Form Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-32 pb-20">
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Left Side: Copy */}
          <div className="flex flex-col justify-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#4377FF] text-sm font-bold tracking-[0.3em] uppercase mb-6"
            >
              Initiate Link
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white leading-[0.9] mb-6"
            >
              Start a <br /> Project.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-zinc-400 text-lg max-w-md leading-relaxed font-medium"
            >
              Let's build something exceptional. Submit your details below, and our team will connect with you within 24 hours.
            </motion.p>
          </div>

          {/* Right Side: The Form & Success State */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-zinc-950/80 border border-white/10 p-8 md:p-10 rounded-[2rem] backdrop-blur-xl shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4377FF] opacity-10 blur-[80px] rounded-full pointer-events-none" />

            {state.succeeded ? (
              // --- SUCCESS STATE UI ---
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="relative z-10 flex flex-col items-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#4377FF]/10 border border-[#4377FF]/30 flex items-center justify-center text-[#4377FF] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Transmission Received</h3>
                <p className="text-zinc-400 text-sm">Your data has been securely routed to our operations team. We will be in touch shortly.</p>
              </motion.div>
            ) : (
              // --- FORM UI ---
              <form className="flex flex-col gap-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Name</label>
                    <input 
                      type="text" 
                      name="name" // Required for Formspree mapping
                      required
                      placeholder="John Doe" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#4377FF]/50 focus:bg-[#4377FF]/5 transition-all duration-300 placeholder:text-zinc-600"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Email</label>
                    <input 
                      type="email" 
                      name="email" // Required
                      required
                      placeholder="john@company.com" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#4377FF]/50 focus:bg-[#4377FF]/5 transition-all duration-300 placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Company / From</label>
                    <input 
                      type="text" 
                      name="company" // Required
                      placeholder="Your Organization" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#4377FF]/50 focus:bg-[#4377FF]/5 transition-all duration-300 placeholder:text-zinc-600"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Scope of Work</label>
                    <select name="scope" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#4377FF]/50 focus:bg-[#4377FF]/5 transition-all duration-300 appearance-none">
                      <option value="" className="bg-zinc-900">Select a service...</option>
                      <option value="Digital Architecture (Web)" className="bg-zinc-900">Digital Architecture (Web)</option>
                      <option value="Commercial Production (Video)" className="bg-zinc-900">Commercial Production (Video)</option>
                      <option value="Custom System Logic (Backend)" className="bg-zinc-900">Custom System Logic (Backend)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Project Details</label>
                  <textarea 
                    name="details" // Required
                    required
                    rows={4} 
                    placeholder="Tell us about your timeline and vision..." 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#4377FF]/50 focus:bg-[#4377FF]/5 transition-all duration-300 placeholder:text-zinc-600 resize-none"
                  />
                </div>

                <MagneticButton strength={0.2} className="mt-4">
                  <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="w-full md:w-auto px-10 py-4 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:scale-105 hover:bg-[#4377FF] hover:text-white transition-all duration-500 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "Processing..." : "Submit Inquiry"}
                  </button>
                </MagneticButton>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}