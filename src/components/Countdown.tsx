"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Target date: August 30, 2026 at 4:00 PM (16:00:00)
    const targetDate = new Date("2026-08-30T16:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#040D0A] to-[#061B14] z-10">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative flex flex-col items-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="font-poppins text-xs tracking-[0.4em] text-[#D4AF37] uppercase font-medium">
            Counting The Moments
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-[#E8E2D5] font-light mt-3">
            Until We Say <span className="italic text-[#D4AF37] font-playfair">I Do</span>
          </h2>
        </motion.div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
          {timeUnits.map((unit, idx) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
              className="relative group rounded-2xl p-6 md:p-8 bg-glass border border-[#D4AF37]/20 box-glow-gold flex flex-col items-center justify-center hover:border-[#D4AF37]/50 transition-colors duration-500"
            >
              <span className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-[#E8E2D5] tracking-tighter mb-2 text-glow-gold">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="font-poppins text-[10px] md:text-xs tracking-[0.3em] text-[#D4AF37] uppercase font-medium">
                {unit.label}
              </span>

              {/* Top border ambient shimmer on hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#D4AF37]/30 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
