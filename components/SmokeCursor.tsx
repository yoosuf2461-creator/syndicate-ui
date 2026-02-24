"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function SmokeCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Create springs for each dot with varying stiffness and damping
  // Higher index = more lag (lower stiffness, higher damping)
  const dot0X = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const dot0Y = useSpring(mouseY, { stiffness: 200, damping: 20 });
  const dot1X = useSpring(mouseX, { stiffness: 185, damping: 23 });
  const dot1Y = useSpring(mouseY, { stiffness: 185, damping: 23 });
  const dot2X = useSpring(mouseX, { stiffness: 170, damping: 26 });
  const dot2Y = useSpring(mouseY, { stiffness: 170, damping: 26 });
  const dot3X = useSpring(mouseX, { stiffness: 155, damping: 29 });
  const dot3Y = useSpring(mouseY, { stiffness: 155, damping: 29 });
  const dot4X = useSpring(mouseX, { stiffness: 140, damping: 32 });
  const dot4Y = useSpring(mouseY, { stiffness: 140, damping: 32 });
  const dot5X = useSpring(mouseX, { stiffness: 125, damping: 35 });
  const dot5Y = useSpring(mouseY, { stiffness: 125, damping: 35 });
  const dot6X = useSpring(mouseX, { stiffness: 110, damping: 38 });
  const dot6Y = useSpring(mouseY, { stiffness: 110, damping: 38 });
  const dot7X = useSpring(mouseX, { stiffness: 95, damping: 41 });
  const dot7Y = useSpring(mouseY, { stiffness: 95, damping: 41 });
  const dot8X = useSpring(mouseX, { stiffness: 80, damping: 44 });
  const dot8Y = useSpring(mouseY, { stiffness: 80, damping: 44 });
  const dot9X = useSpring(mouseX, { stiffness: 65, damping: 47 });
  const dot9Y = useSpring(mouseY, { stiffness: 65, damping: 47 });

  const trailDots = [
    { springX: dot0X, springY: dot0Y, index: 0 },
    { springX: dot1X, springY: dot1Y, index: 1 },
    { springX: dot2X, springY: dot2Y, index: 2 },
    { springX: dot3X, springY: dot3Y, index: 3 },
    { springX: dot4X, springY: dot4Y, index: 4 },
    { springX: dot5X, springY: dot5Y, index: 5 },
    { springX: dot6X, springY: dot6Y, index: 6 },
    { springX: dot7X, springY: dot7Y, index: 7 },
    { springX: dot8X, springY: dot8Y, index: 8 },
    { springX: dot9X, springY: dot9Y, index: 9 },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {trailDots.map(({ springX, springY, index }) => {
        // Calculate visual properties based on index
        const isHead = index === 0;
        const size = isHead ? 12 : 4; // w-3 h-3 = 12px, w-1 h-1 = 4px
        const opacity = isHead ? 1 : 0.2 + (index / 10) * 0.3; // Head is 1.0, tail progresses
        const bgColor = isHead ? "bg-orange-400" : "bg-red-700";
        const glow = isHead
          ? "shadow-[0_0_10px_rgba(255,0,0,0.8)]"
          : "shadow-[0_0_4px_rgba(185,28,28,0.4)]";

        return (
          <motion.div
            key={index}
            className={`rounded-full pointer-events-none fixed z-50 mix-blend-screen ${bgColor} ${glow}`}
            style={{
              width: size,
              height: size,
              x: springX,
              y: springY,
              opacity: opacity,
              transform: "translate(-50%, -50%)", // Center the dot on cursor
            }}
            aria-hidden
          />
        );
      })}
    </>
  );
}
