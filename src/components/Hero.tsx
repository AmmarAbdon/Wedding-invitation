"use client";

import { motion, Variants } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center px-6 md:px-16 z-10 overflow-hidden">
      {/* Ambient glowing rings */}
      <div className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full border border-[#D4AF37]/10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0,transparent_70%)] animate-pulse-glow pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center max-w-5xl"
      >
        {/* Top Announcement Tag */}
        <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
          <div className="h-[1px] w-8 bg-[#D4AF37]" />
          <span className="font-poppins text-xs md:text-sm tracking-[0.4em] text-[#D4AF37] uppercase font-medium">
            The Wedding Celebration
          </span>
          <div className="h-[1px] w-8 bg-[#D4AF37]" />
        </motion.div>

        {/* Main Names */}
        <motion.h1
          variants={itemVariants}
          className="font-cormorant text-6xl sm:text-7xl md:text-9xl font-light tracking-tight text-[#E8E2D5] mb-6 leading-none drop-shadow-2xl"
        >
          AHMED <span className="text-[#D4AF37] italic font-playfair">&</span> ESRAA
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-playfair text-xl sm:text-2xl md:text-3xl italic text-[#E8E2D5]/90 mb-12 tracking-wide max-w-2xl text-glow-gold"
        >
          “Save The Date”
        </motion.p>

        {/* Event Quick Details */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12 text-xs md:text-sm font-poppins tracking-widest text-[#E8E2D5]/80 bg-glass px-8 py-4 rounded-full border border-[#D4AF37]/20 box-glow-gold"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span>AUGUST 30, 2026</span>
          </div>
          <div className="hidden md:block h-4 w-[1px] bg-[#D4AF37]/40" />
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span>SUNDAY</span>
          </div>
          <div className="hidden md:block h-4 w-[1px] bg-[#D4AF37]/40" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>PALACE HALL, TOUKH</span>
          </div>
        </motion.div>


      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() => {
          const el = document.getElementById("love-story");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="font-poppins text-xs tracking-[0.3em] text-[#D4AF37]/70 uppercase">
          Scroll to discover
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-[#D4AF37]/40 flex justify-center p-1"
        >
          <motion.div
            className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
