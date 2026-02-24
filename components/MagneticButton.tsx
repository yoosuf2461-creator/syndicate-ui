'use client'
import { motion, useSpring } from 'framer-motion'
import { useRef, ReactNode } from 'react'

export default function MagneticButton({ 
  children, 
  className = "",
  strength = 0.3 // Controls how far the button is pulled
}: { 
  children: ReactNode, 
  className?: string,
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  // Spring physics for that snappy, elastic return
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    
    // Calculate distance from the exact center of the button
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    
    // Apply the pull
    x.set(middleX * strength)
    y.set(middleY * strength)
  }

  const reset = () => {
    // Snap back to zero when the mouse leaves
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x, y }}
      className={`w-max cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  )
}