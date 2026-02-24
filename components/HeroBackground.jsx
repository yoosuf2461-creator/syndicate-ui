'use client'
import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

// 1. Engine the Custom GLSL Shader
const FluidGridMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector2(0.5, 0.5),
    uResolution: new THREE.Vector2(1920, 1080),
  },
  // Vertex Shader
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  // Fragment Shader
  `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  varying vec2 vUv;

  void main() {
    // Correct aspect ratio
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 st = vUv * aspect;
    vec2 mouse = uMouse * aspect;

    // Mobile optimization: Use length of delta instead of distance() function
    vec2 delta = st - mouse;
    float dist = length(delta);

    // FLUID DISTORTION LOGIC
    vec2 warp = normalize(delta + 0.0001) * exp(-dist * 8.0) * 0.04;
    warp += vec2(sin(uTime * 0.5 + st.y * 5.0), cos(uTime * 0.5 + st.x * 5.0)) * 0.002;
    vec2 warpedSt = st + warp;

    // Map the grid scale
    float gridScale = uResolution.y / 64.0;
    vec2 grid = fract(warpedSt * gridScale);

    // Generate crisp 1px lines using smoothstep
    float lineThickness = 0.02;
    float lineX = smoothstep(0.0, lineThickness, grid.x) - smoothstep(1.0 - lineThickness, 1.0, grid.x);
    float lineY = smoothstep(0.0, lineThickness, grid.y) - smoothstep(1.0 - lineThickness, 1.0, grid.y);
    float lines = 1.0 - (lineX * lineY); 

    // LIGHTING & COLOR
    vec3 baseColor = vec3(1.0, 1.0, 1.0);
    vec3 highlightColor = vec3(0.26, 0.46, 1.0); // #4377FF

    float glow = exp(-dist * 6.0);
    vec3 finalColor = mix(baseColor, highlightColor, glow * 0.8);
    
    // Base opacity calculation
    float opacity = (0.06 + glow * 0.4) * lines;

    // NATIVE GPU FADE (Replaces the expensive CSS mask-image)
    // vUv.y goes from 0.0 at the bottom to 1.0 at the top.
    // This perfectly mimics the "transparent 100%" at the bottom.
    float verticalFade = smoothstep(0.0, 0.25, vUv.y);
    opacity *= verticalFade;

    gl_FragColor = vec4(finalColor, opacity);
  }
  `
)

extend({ FluidGridMaterial })

function ShaderPlane() {
  const materialRef = useRef()
  const { size, viewport } = useThree()

  // THE FIX: Only update resolution when the screen size actually changes
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uResolution.set(size.width, size.height)
    }
  }, [size])

  useFrame((state) => {
    if (!materialRef.current) return

    materialRef.current.uTime = state.clock.elapsedTime
    
    const targetX = (state.pointer.x + 1) / 2
    const targetY = (state.pointer.y + 1) / 2

    // Smooth Lerp for the mouse tracking
    materialRef.current.uMouse.x = THREE.MathUtils.lerp(materialRef.current.uMouse.x, targetX, 0.1)
    materialRef.current.uMouse.y = THREE.MathUtils.lerp(materialRef.current.uMouse.y, targetY, 0.1)
  })

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      {/* THE FIX: depthWrite={false} skips expensive 3D overlap math for a 2D plane */}
      <fluidGridMaterial ref={materialRef} transparent={true} depthWrite={false} depthTest={false} />
    </mesh>
  )
}

export default function HeroBackground() {
  return (
    <>
      {/* 💻 DESKTOP: The full interactive WebGL Fluid Grid */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-auto">
        <Canvas 
          dpr={[1, 1.2]} // Slightly more aggressive cap for safety
          gl={{ 
            antialias: false,
            powerPreference: "high-performance",
            alpha: true
          }}
          camera={{ position: [0, 0, 1], fov: 45 }}
        >
          <ShaderPlane />
        </Canvas>
      </div>

      {/* 📱 MOBILE: The hyper-optimized pure CSS clone */}
      <div className="block md:hidden absolute inset-0 z-0 bg-black pointer-events-none">
        {/* CSS Grid Lines */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            // Replicates the exact bottom-fade from your shader
            maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)'
          }}
        />
        {/* The Electric Blue Glow (No math required) */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-3/4 h-1/3 bg-[#4377FF]/20 blur-[80px] rounded-full mix-blend-screen" />
      </div>
    </>
  )
}