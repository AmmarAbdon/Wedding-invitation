"use client";

import { useState } from "react";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import InteractiveBackground from "@/components/InteractiveBackground";
import Hero from "@/components/Hero";
import LoveStory from "@/components/LoveStory";
import Countdown from "@/components/Countdown";
import EventDetails from "@/components/EventDetails";
import Gallery from "@/components/Gallery";
import Timeline from "@/components/Timeline";

import MusicController from "@/components/MusicController";

export default function Home() {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);



  return (
    <LenisProvider>
      {/* Custom Animated Glow Cursor */}
      <CustomCursor />

      {/* Cinematic Preloader Experience */}
      <Preloader onComplete={() => setIsPreloaderDone(true)} />

      {/* 3D WebGL Glowing Particle Background */}
      <InteractiveBackground />

      {/* Main Content Assembly */}
      <main className="relative z-10 w-full min-h-screen flex flex-col selection:bg-[#D4AF37] selection:text-[#040D0A]">
        {/* Hero Section */}
        <Hero />

        {/* Love Story Editorial Section */}
        <LoveStory />

        {/* Luxury Countdown Section */}
        <Countdown />

        {/* Event Details & Itinerary Section */}
        <EventDetails />

        {/* Advanced Lightbox Gallery Section */}
        <Gallery />

        {/* Cinematic Animated Timeline Section */}
        <Timeline />



        {/* Floating Premium Music Controller */}
        <MusicController />

        {/* Elegant Footer */}
        <footer className="relative w-full py-16 px-6 md:px-16 z-10 bg-[#040D0A] border-t border-[#D4AF37]/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="font-cormorant text-2xl md:text-3xl text-[#E8E2D5] font-light tracking-wider">
              AHMED <span className="text-[#D4AF37] italic font-playfair">&</span> ESRAA
            </span>
            <p className="font-poppins text-xs tracking-[0.3em] text-[#D4AF37]/70 uppercase mt-1">
              August 30, 2026 • Sunday
            </p>
          </div>

          <div className="flex items-center gap-6 font-poppins text-xs tracking-widest text-[#E8E2D5]/70 uppercase">
            <a href="#love-story" className="hover:text-[#D4AF37] transition-colors">Story</a>
            <a href="#event-details" className="hover:text-[#D4AF37] transition-colors">Details</a>
            <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</a>
            <a href="#timeline" className="hover:text-[#D4AF37] transition-colors">Timeline</a>

          </div>

          <div className="font-poppins text-[10px] tracking-[0.4em] text-[#E8E2D5]/40 uppercase">
            © 2026 Ahmed & Esraa. Cinematic Experience.
          </div>
        </footer>
      </main>
    </LenisProvider>
  );
}
