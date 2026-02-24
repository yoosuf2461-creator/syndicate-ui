'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import MagneticButton from './MagneticButton'

// This is the array you will update in the future! 
// Just change the "image", "title", and "link" when you finish a real project.
const projects = [
  {
    id: "01",
    title: "E-Commerce Store",
    category: "Custom Web Application",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2664&auto=format&fit=crop",
    colSpan: "md:col-span-2", 
    link: "#" // <-- Put your live website links here later!
  },
  {
    id: "02",
    title: "SaaS Landing Page",
    category: "Marketing Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    link: "#"
  },
  {
    id: "03",
    title: "Corporate Portfolio",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    link: "#"
  },
  {
    id: "04",
    title: "Local Business Site",
    category: "Responsive Web Design",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    link: "#"
  }
]

export default function WorkGallery() {
  return (
    <section className="w-full px-4 md:px-8 py-24 md:py-32 relative z-10 selection:bg-[#4377FF] selection:text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4377FF] animate-pulse shadow-[0_0_10px_rgba(67,119,255,0.8)]" />
              <span className="text-xs font-mono text-[#4377FF] uppercase tracking-widest">Selected Deployments</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white leading-[0.9]">
              Recent <br /> Work.
            </h3>
          </div>
          
          {/* DESKTOP BUTTON - Only shows on larger screens */}
          <div className="hidden md:block">
            <MagneticButton strength={0.3}>
              <Link href="/contact" className="inline-block">
                <button className="h-12 px-6 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-widest uppercase hover:bg-[#4377FF] hover:border-[#4377FF] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(67,119,255,0.4)]">
                  Start a Project
                </button>
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Link href={project.link} key={project.id} className={`block ${project.colSpan}`}>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer hover:border-[#4377FF]/50 transition-colors duration-500 hover:shadow-[0_0_40px_-15px_rgba(67,119,255,0.3)] w-full h-full"
                style={{ minHeight: project.colSpan === "md:col-span-2" ? '600px' : '450px' }}
              >
                {/* Background Image with slow zoom on hover */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Dark Gradient Overlay to ensure text is readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Text Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                  
                  {/* Top Row: ID & Arrow */}
                  <div className="flex justify-between items-start">
                    <span className="inline-block px-4 py-2 rounded-full border border-white/20 bg-black/50 backdrop-blur-md text-xs font-mono text-zinc-300 group-hover:border-[#4377FF]/50 group-hover:text-[#4377FF] transition-colors duration-500">
                      {project.id}
                    </span>
                    
                    {/* The Arrow Icon */}
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-[#4377FF] group-hover:border-[#4377FF] transition-all duration-500 overflow-hidden relative">
                      <svg className="w-5 h-5 absolute transition-transform duration-500 group-hover:translate-x-10 group-hover:-translate-y-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                      <svg className="w-5 h-5 absolute -translate-x-10 translate-y-10 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                    </div>
                  </div>

                  {/* Bottom Row: Title & Category */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p className="text-[#4377FF] text-xs font-mono uppercase tracking-widest mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.category}
                    </p>
                    <h4 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">
                      {project.title}
                    </h4>
                  </div>
                  
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON - Only shows on smaller screens (phones) */}
        <div className="mt-12 flex justify-center md:hidden">
          <MagneticButton strength={0.3}>
            <Link href="/contact" className="inline-block">
              <button className="h-12 px-8 rounded-full bg-white text-black text-xs font-bold tracking-widest uppercase hover:scale-105 transition-all duration-300">
                Start a Project
              </button>
            </Link>
          </MagneticButton>
        </div>

      </div>
    </section>
  )
}