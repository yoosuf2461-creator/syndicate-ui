"use client";

import Navbar from "../components/Navbar";
import Hero from '../components/hero'; 
import dynamic from 'next/dynamic';

// 🚀 THE LAZY LOAD ARCHITECTURE
// These components are stripped from the initial download bundle.
// ssr: false ensures WebGL never tries to render on the Next.js server.
const AmbientMesh = dynamic(() => import('../components/AmbientMesh'), { ssr: false });
const LusionCursor = dynamic(() => import('../components/LusionCursor'), { ssr: false });
const BentoGrid = dynamic(() => import('../components/BentoGrid'));
const ProcessSection = dynamic(() => import('../components/ProcessSection'));
const WorkGallery = dynamic(() => import('../components/WorkGallery'));
const Testimonials = dynamic(() => import('../components/Testimonial'));
const Footer = dynamic(() => import('../components/Footer'));

export default function Home() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden selection:bg-[#4377FF] selection:text-white relative">
      
      {/* 1. THE DESKTOP-ONLY WEBGL LAYER 
        hidden md:block ensures mobile GPUs never paint this global mesh.
      */}
      <div className="hidden md:block">
        <AmbientMesh />
      </div>

      {/* 2. THE DESKTOP-ONLY CURSOR 
        Phones don't have mice. Calculating cursor physics on mobile melts the CPU.
      */}
      <div className="hidden md:block">
        <LusionCursor />
      </div>

      {/* 3. PRIORITY RENDER: Navigation (Loads Instantly) */}
      <Navbar />

      {/* 4. PRIORITY RENDER: Hero Section (Loads Instantly) */}
      <Hero />

      {/* 5. DEFERRED RENDER: Below The Fold (Loads in the background) */}
      <div id="about" className="relative z-10">
        <BentoGrid />
        <ProcessSection />
        <Testimonials />
      </div>

      <div id="projects" className="relative z-10">
        <WorkGallery />
      </div>

      {/* 6. DEFERRED RENDER: Premium Footer */}
      <Footer />

    </main>
  );
}