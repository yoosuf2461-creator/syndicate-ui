"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function FluidBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#030303] pointer-events-none flex items-center justify-center">
      {/* Ambient Smoke */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
        }}
        aria-hidden
      />

      {/* Iridescent Blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-[#050505] border border-white/5 backdrop-blur-3xl mix-blend-lighten"
        style={{
          x: springX,
          y: springY,
          boxShadow:
            "inset 40px 0 80px rgba(0, 255, 255, 0.2), inset -40px 0 80px rgba(255, 0, 255, 0.2), inset 0 40px 80px rgba(255, 255, 0, 0.1), 0 0 120px rgba(255,255,255,0.05)",
        }}
        animate={{
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 70% 30% / 40% 50% 60% 50%",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
    </div>
  );
}
