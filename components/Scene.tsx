"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Environment, Sparkles, Sphere } from "@react-three/drei";
import * as THREE from "three";

function FluidBlob() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.position.lerp(
      new THREE.Vector3(
        (state.pointer.x * state.viewport.width) / 4,
        (state.pointer.y * state.viewport.height) / 4,
        0
      ),
      0.05
    );
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 128, 128]}>
      <MeshTransmissionMaterial
        background={new THREE.Color("#050505")}
        transmission={1}
        thickness={1.5}
        roughness={0}
        chromaticAberration={1}
        anisotropy={0.3}
        distortion={0.5}
        distortionScale={0.5}
        temporalDistortion={0.2}
        color="#ffffff"
      />
    </Sphere>
  );
}

function SmokeParticles() {
  return (
    <Sparkles
      count={150}
      scale={12}
      size={80}
      speed={0.2}
      opacity={0.03}
      color="#ffffff"
    />
  );
}

export default function Scene() {
  return (
    <Canvas
      className="!absolute !inset-0 !z-0"
      style={{ pointerEvents: "none" }}
      camera={{ position: [0, 0, 8], fov: 45 }}
    >
      <color attach="background" args={["#050505"]} />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={50} color="#ffffff" />
      <SmokeParticles />
      <FluidBlob />
    </Canvas>
  );
}
