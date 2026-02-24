'use client'
import { motion } from 'framer-motion'

// Placeholder testimonials. You can swap these out with real client quotes later!
const testimonials = [
  {
    id: 1,
    quote: "They completely overhauled our digital presence. The new Next.js site is incredibly fast, and the design perfectly captures our brand. We saw a 40% increase in mobile conversions within the first month.",
    name: "Sarah Jenkins",
    role: "Marketing Director",
    company: "Lumina Tech",
  },
  {
    id: 2,
    quote: "The task automation scripts they built for our team saved us countless hours of manual data entry. They understood our business problem immediately and delivered a flawless, clean solution.",
    name: "David Chen",
    role: "Operations Manager",
    company: "Nexus Logistics",
  },
  {
    id: 3,
    quote: "Working with them was seamless. They don't just write code; they actually care about the user experience and the final business outcome. The attention to detail is unmatched.",
    name: "Elena Rostova",
    role: "Founder",
    company: "Aura Creative",
  }
]

export default function Testimonials() {
  return (
    <section className="w-full px-4 md:px-8 py-24 md:py-32 relative z-10 selection:bg-[#4377FF] selection:text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4377FF] animate-pulse shadow-[0_0_10px_rgba(67,119,255,0.8)]" />
              <span className="text-xs font-mono text-[#4377FF] uppercase tracking-widest">Client Voices</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white leading-tight">
              Trusted by <br />
              <span className="text-zinc-600">ambitious brands.</span>
            </h3>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 hover:border-[#4377FF]/40 hover:shadow-[0_8px_40px_-12px_rgba(67,119,255,0.25)] transition-all duration-700 group overflow-hidden flex flex-col justify-between"
            >
              {/* Premium Hover Glow Effect */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#4377FF] rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10">
                {/* The Quote Icon */}
                <svg className="w-8 h-8 text-zinc-700 group-hover:text-[#4377FF] transition-colors duration-500 mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                {/* The Quote */}
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base group-hover:text-zinc-300 transition-colors duration-500 mb-10">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* The Author */}
              <div className="relative z-10 flex items-center gap-4 mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors duration-500">
                {/* Minimalist Avatar Placeholder */}
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-white uppercase group-hover:border-[#4377FF]/50 transition-colors duration-500">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold tracking-tight">{testimonial.name}</h4>
                  <p className="text-zinc-500 text-xs mt-0.5">
                    {testimonial.role}, <span className="text-[#4377FF]">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}