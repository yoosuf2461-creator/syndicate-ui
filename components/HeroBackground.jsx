'use client'
import { useRef } from 'react'
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
    // Correct aspect ratio so the grid remains perfectly square
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 st = vUv * aspect;
    vec2 mouse = uMouse * aspect;

    // Calculate distance from current pixel to mouse
    float dist = distance(st, mouse);

    // FLUID DISTORTION LOGIC (added +0.0001 to prevent NaN GPU crashes)
    vec2 warp = normalize(st - mouse + 0.0001) * exp(-dist * 8.0) * 0.04;
    
    // Ambient breathing motion over time
    warp += vec2(sin(uTime * 0.5 + st.y * 5.0), cos(uTime * 0.5 + st.x * 5.0)) * 0.002;
    vec2 warpedSt = st + warp;

    // Map the grid scale (64.0 approximates your 4rem CSS size)
    float gridScale = uResolution.y / 64.0;
    vec2 grid = fract(warpedSt * gridScale);

    // Generate crisp 1px lines using smoothstep
    float lineThickness = 0.02;
    float lineX = smoothstep(0.0, lineThickness, grid.x) - smoothstep(1.0 - lineThickness, 1.0, grid.x);
    float lineY = smoothstep(0.0, lineThickness, grid.y) - smoothstep(1.0 - lineThickness, 1.0, grid.y);
    float lines = 1.0 - (lineX * lineY); 

    // LIGHTING & COLOR: Base is white, highlight is your studio's electric blue
    vec3 baseColor = vec3(1.0, 1.0, 1.0);
    vec3 highlightColor = vec3(0.26, 0.46, 1.0); // #4377FF

    // Intensity multiplier based on proximity to mouse
    float glow = exp(-dist * 6.0);
    vec3 finalColor = mix(baseColor, highlightColor, glow * 0.8);
    
    // Base opacity matches your old CSS, scaling up near mouse
    float opacity = (0.06 + glow * 0.4) * lines;

    gl_FragColor = vec4(finalColor, opacity);
  }
  `
)

// Register material to React Three Fiber
extend({ FluidGridMaterial })

function ShaderPlane() {
  const materialRef = useRef()
  // THE FIX: Grab the exact viewport dimensions of the user's screen
  const { size, viewport } = useThree()

  useFrame((state) => {
    if (!materialRef.current) return

    materialRef.current.uTime = state.clock.elapsedTime
    
    // Map R3F pointer [-1, 1] to UV coordinates [0, 1]
    const targetX = (state.pointer.x + 1) / 2
    const targetY = (state.pointer.y + 1) / 2

    // Smooth Lerp for the mouse tracking
    materialRef.current.uMouse.x = THREE.MathUtils.lerp(materialRef.current.uMouse.x, targetX, 0.1)
    materialRef.current.uMouse.y = THREE.MathUtils.lerp(materialRef.current.uMouse.y, targetY, 0.1)
    
    // Constantly update resolution on window resize
    materialRef.current.uResolution.set(size.width, size.height)
  })

  return (
    // THE FIX: Scale the mesh to dynamically fill 100% of the screen width and height
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <fluidGridMaterial ref={materialRef} transparent={true} />
    </mesh>
  )
}

export default function HeroBackground() {
  return (
    <div 
      className="absolute inset-0 z-0 pointer-events-auto"
      style={{
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, black 0%, black 75%, transparent 100%)'
      }}
    >
      <Canvas dpr={[1, 1.5]} gl={{ antialias: false }}>
        <ShaderPlane />
      </Canvas>
    </div>
  )
}