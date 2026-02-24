'use client'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    no: "01",
    title: "Discovery & Planning.",
    desc: "We start by understanding your business goals. We map out the website's structure and design direction before we write a single line of code."
  },
  {
    no: "02",
    title: "Design & Interface.",
    desc: "We design clean, modern, and easy-to-use layouts. Our goal is to create a digital experience that looks professional and turns your visitors into customers."
  },
  {
    no: "03",
    title: "Development & Logic.",
    desc: "This is where we build the engine. We write fast, secure code and integrate any custom Python automation your business needs to run smoothly."
  },
  {
    no: "04",
    title: "Launch & Delivery.",
    desc: "We deploy your new website to the live server, ensuring it loads instantly and works flawlessly on every device, from desktop to mobile."
  }
]

export default function ProcessSection() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Maps the 0-1 scroll value to a percentage for the glow's position
  const indicatorTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={containerRef} className="relative z-10 w-full max-w-5xl mx-auto px-6 py-32 border-t border-white/5 selection:bg-[#4377FF] selection:text-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative">
        
        {/* Left Side: Sticky Header */}
        <div className="md:col-span-4 md:sticky md:top-32 h-fit">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#4377FF] mb-6">Our Process</h2>
          <h3 className="text-3xl font-bold text-white leading-tight uppercase tracking-tighter">
            How we <br />build your <br /><span className="text-zinc-600">vision.</span>
          </h3>
        </div>

        {/* Right Side: Animated Steps */}
        <div className="md:col-span-8 space-y-32 relative pl-12 md:pl-20">
          
          {/* TRACK BACKGROUND */}
          <div className="absolute left-4 md:left-8 top-2 bottom-2 w-[1px] bg-white/10" />
          
          {/* THE GROWING BLUE LINE */}
          <motion.div 
            className="absolute left-4 md:left-8 top-2 w-[1px] bg-[#4377FF] origin-top shadow-[0_0_15px_rgba(67,119,255,0.4)]"
            style={{ 
                scaleY,
                height: "calc(100% - 16px)" 
            }}
          />

          {/* THE GLOWING BLUE TIP (The Laser Head) */}
          <motion.div 
            className="absolute left-[15px] md:left-[31px] w-[3px] h-12 bg-gradient-to-t from-[#4377FF] to-transparent blur-[2px] z-30"
            style={{ 
                top: indicatorTop,
                opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]) // Fades in/out at ends
            }}
          />
          
          {/* Glowing Pulse Dot at the exact tip */}
          <motion.div 
            className="absolute left-[15.5px] md:left-[31.5px] w-1 h-1 bg-white rounded-full shadow-[0_0_20px_4px_rgba(67,119,255,0.9)] z-40"
            style={{ top: indicatorTop }}
          />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="group relative"
            >
              <div className="flex flex-col">
                <span className="text-xs font-mono text-zinc-700 group-hover:text-[#4377FF] transition-colors duration-500 mb-4">
                  {step.no}
                </span>
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight uppercase group-hover:text-[#4377FF] transition-colors duration-500">
                  {step.title}
                </h4>
                <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors duration-500 leading-relaxed max-w-lg">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}