"use client";

import Navbar from "../components/Navbar";
import LusionCursor from "../components/LusionCursor";
import BentoGrid from "../components/BentoGrid";
import ProcessSection from '../components/ProcessSection';
import WorkGallery from '../components/WorkGallery';
import AmbientMesh from '../components/AmbientMesh';
import Footer from '../components/Footer'; 
import Hero from '../components/hero' // We are actually using this now!
import Testimonials from '../components/Testimonial';

export default function Home() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden selection:bg-[#4377FF] selection:text-white relative">
      
      {/* 1. The Breathing Global Background */}
      <AmbientMesh />

      {/* 2. Interactive Layer */}
      <LusionCursor />

      {/* 3. Navigation */}
      <Navbar />

      {/* 4. The NEW Terminal Hero Section */}
      <Hero />

      {/* 5. Sections Wrapped with IDs for Navbar Routing */}
      <div id="about">
        <BentoGrid />
        <ProcessSection />
        <Testimonials />
      </div>

      <div id="projects">
        <WorkGallery />
      </div>

      {/* 6. Premium Footer */}
      <Footer />

    </main>
  );
}