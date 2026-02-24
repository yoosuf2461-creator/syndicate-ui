'use client'
import { Canvas } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial, Environment } from '@react-three/drei'

export default function VisualShape() {
  return (
    <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Environmental lighting is crucial for reflections */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="city" /> 
        
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <mesh position={[1.5, 0, 0]} rotation={[0.5, 0.5, 0]}>
            {/* High-poly Torus Knot for complex light refraction */}
            <torusKnotGeometry args={[1.2, 0.3, 128, 64]} />
            
            {/* Advanced Glass Material */}
            <MeshTransmissionMaterial
              backside
              samples={4} // Higher = better quality, lower performance
              thickness={1.5}
              roughness={0.1}
              chromaticAberration={0.05} // Adds that high-end lens distortion
              anisotropy={0.1}
              distortion={0.2}
              distortionScale={0.3}
              temporalDistortion={0.1} // Morphs the internal distortion over time
              color="#4377FF" // Your signature electric blue
            />
          </mesh>
        </Float>
      </Canvas>
    </div>
  )
}