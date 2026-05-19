"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 600); // Small delay for the fade-out transition
          return 100;
        }
        // Random increments for a realistic load feel (Faster)
        const next = prev + Math.floor(Math.random() * 15) + 5;
        return next > 100 ? 100 : next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#040D0A] text-[#E8E2D5]"
        >
          {/* Decorative Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0,transparent_75%)] pointer-events-none" />

          <div className="relative flex flex-col items-center max-w-md w-full px-6 z-10">
            {/* Elegant Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative mb-8 flex items-center justify-center w-32 h-32 rounded-full border border-[#D4AF37]/30 bg-glass-gold box-glow-gold animate-float"
            >
              <span className="font-playfair text-4xl text-[#D4AF37] font-bold tracking-widest text-glow-gold">
                A&E
              </span>
              <div className="absolute inset-0 rounded-full border border-[#D4AF37] animate-ping opacity-20" />
            </motion.div>

            {/* Names */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="font-cormorant text-4xl md:text-5xl font-light tracking-wide text-[#E8E2D5] mb-2 text-center"
            >
              AHMED <span className="text-[#D4AF37] italic">&</span> ESRAA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="font-poppins text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase mb-12 text-center"
            >
              The Wedding Celebration
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-full h-[2px] bg-[#D4AF37]/10 rounded-full overflow-hidden relative mb-4">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#AA820A] via-[#D4AF37] to-[#F3E5AB]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            {/* Progress Percentage */}
            <div className="flex justify-between w-full font-poppins text-[10px] tracking-widest text-[#E8E2D5]/60 uppercase">
              <span>Loading Experience</span>
              <span className="tabular-nums">{progress}%</span>
            </div>
          </div>

          {/* Bottom Branding */}
          <div className="absolute bottom-10 font-poppins text-[9px] tracking-[0.5em] text-[#D4AF37]/40 uppercase text-center w-full">
            © 2026 Ahmed & Esraa
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
