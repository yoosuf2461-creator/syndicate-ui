'use client'
import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function LusionCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Smooth, snappy spring physics for the heavy dot
  const smoothX = useSpring(cursorX, { damping: 25, stiffness: 150, mass: 0.5 })
  const smoothY = useSpring(cursorY, { damping: 25, stiffness: 150, mass: 0.5 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [cursorX, cursorY])

  return (
    <>
      {/* The Solid Disc (Inverts everything underneath it) */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="fixed top-0 left-0 w-16 h-16 -ml-8 -mt-8 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
      />
      
      {/* The Tiny Tracking Dot (Pinpoint accuracy) */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-white rounded-full pointer-events-none z-[101] mix-blend-difference hidden md:block"
      />
    </>
  )
}