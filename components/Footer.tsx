'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import MagneticButton from './MagneticButton' 

export default function Footer() {
  // Automatically grabs the current year so your copyright is never out of date
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-4 md:px-8 pb-4 md:pb-8 pt-32 relative z-10 overflow-hidden selection:bg-[#4377FF] selection:text-white">
      
      {/* THE ANIMATED WHITE CARD */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 flex flex-col shadow-[0_0_80px_-15px_rgba(67,119,255,0.15)]"
      >
        
        {/* TOP: Massive Typography */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-6xl md:text-8xl lg:text-[10vw] font-bold tracking-tighter leading-[0.85]">
            <span className="text-black">Ready to build</span><br />
            <span className="text-zinc-400 hover:text-[#4377FF] transition-colors duration-500">something</span><br />
            <span className="text-black">extraordinary?</span>
          </h2>
        </div>

        {/* MIDDLE: 3-Column Action Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-zinc-200 pb-12 mb-12">
          
          {/* Column 1: Email */}
          <div className="flex flex-col gap-4 items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Get Started</span>
            <MagneticButton strength={0.1}>
              <a href="mailto:hello@thulaa.com" className="text-xl md:text-2xl font-bold text-black flex items-center gap-3 hover:text-[#4377FF] transition-colors w-max">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                hello@thesyndicate.com
              </a>
            </MagneticButton>
          </div>

          {/* Column 2: Booking */}
          <div className="flex flex-col gap-4 items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Let's Talk</span>
            <MagneticButton strength={0.2}>
              <Link href="/contact" className="group flex items-center gap-3 w-max px-6 py-4 bg-black text-white rounded-full font-bold text-sm hover:bg-[#4377FF] transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_-5px_rgba(67,119,255,0.4)]">
                {/* Pulsing Green Dot */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                
                Book a Call
                
                {/* Arrow */}
                <svg className="transform transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            </MagneticButton>
          </div>

          {/* Column 3: Socials */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Follow Along</span>
            <div className="flex flex-wrap gap-3">
              {[
                { 
                  name: 'X (Twitter)', 
                  path: <path fill="currentColor" stroke="none" d="M18.188 22L11.028 12.394 4.542 22H2.25l7.63-11.314L2.834 2h2.404l6.574 8.818L17.75 2h2.292l-7.042 10.437L20.48 22h-2.292zM16.298 20.08h1.27L6.46 3.84H5.11l11.188 16.24z"/> 
                },
                { 
                  name: 'Instagram', 
                  path: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></> 
                },
                { 
                  name: 'LinkedIn', 
                  path: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></> 
                }
              ].map((icon, idx) => (
                <MagneticButton key={idx} strength={0.3}>
                  <button aria-label={icon.name} className="w-12 h-12 flex items-center justify-center bg-white border border-zinc-200 text-black rounded-full hover:bg-[#4377FF] hover:border-[#4377FF] hover:text-white transition-all duration-300 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {icon.path}
                    </svg>
                  </button>
                </MagneticButton>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM: Link Grid & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          <div className="grid grid-cols-2 gap-12 md:gap-24 w-full md:w-auto">
            {/* Explore / Company Links */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Company</span>
              <Link href="/work" className="text-black font-bold hover:text-[#4377FF] transition-colors">Our Work</Link>
              <Link href="/about" className="text-black font-bold hover:text-[#4377FF] transition-colors">About Studio</Link>
              <Link href="/careers" className="text-black font-bold hover:text-[#4377FF] transition-colors">Careers</Link>
            </div>
            
            {/* Fine Print Links */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Fine Print</span>
              <Link href="/terms" className="text-black font-bold hover:text-[#4377FF] transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="text-black font-bold hover:text-[#4377FF] transition-colors">Privacy Policy</Link>
              <Link href="/cookies" className="text-black font-bold hover:text-[#4377FF] transition-colors">Cookie Notice</Link>
            </div>
          </div>

        </div>

        {/* Floating Copyright at the very bottom */}
        <div className="w-full text-center mt-16 md:mt-24 text-sm font-medium text-zinc-400 flex flex-col items-center gap-2">
          <span>© {currentYear} The Syndicate</span>
          <span className="text-xs text-zinc-400">Dubai | Louisiana | Colombo</span>
        </div>

      </motion.div>
    </footer>
  )
}