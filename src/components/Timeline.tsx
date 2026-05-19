"use client";

import { motion } from "framer-motion";
import { UserCheck, Church, Utensils, Music, Sparkles } from "lucide-react";

export default function Timeline() {
  const schedule = [
    {
      time: "7:30 PM",
      title: "Guest Arrival & Welcome",
      subtitle: "The Palace Promenade",
      description: "Guests are welcomed with fresh mocktails and ambient classical violin music at the main entrance of Palace Hall.",
      icon: UserCheck,
    },
    {
      time: "8:00 PM",
      title: "The Ceremony (Katb El-Kitab)",
      subtitle: "Palace Hall Main Court",
      description: "The exchange of wedding vows and signing of the marriage contract (Katb El-Kitab) in a blessed family gathering.",
      icon: Church,
    },
    {
      time: "9:00 PM",
      title: "Celebration & First Dance",
      subtitle: "The Grand Ballroom",
      description: "Ahmed and Esraa take the floor for their magical first dance, officially opening the celebration under the crystal chandeliers.",
      icon: Music,
    },
    {
      time: "10:00 PM",
      title: "Gourmet Dinner",
      subtitle: "The Dinner Hall",
      description: "A spectacular multi-course feast featuring premium oriental and international delicacies, curated sweets, and drinks.",
      icon: Utensils,
    },
    {
      time: "11:30 PM",
      title: "The After Party",
      subtitle: "Outdoor Terrace",
      description: "DJ sets, dancing, and celebrating with friends and family to make it an unforgettable night continuing into the late hours.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="timeline" className="relative w-full py-32 px-6 md:px-16 z-10 bg-gradient-to-b from-[#040D0A] via-[#061B14]/60 to-[#040D0A] border-t border-[#D4AF37]/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="font-poppins text-xs tracking-[0.4em] text-[#D4AF37] uppercase font-medium block mb-3">
            Cinematic Flow
          </span>
          <h2 className="font-cormorant text-5xl md:text-7xl font-light tracking-tight text-[#E8E2D5]">
            THE WEDDING <span className="text-[#D4AF37] italic font-playfair">Timeline</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#D4AF37]/40 mx-auto mt-6" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative relative-wrap my-12">
          {/* Central Animated Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#D4AF37]/20 hidden md:block" />
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] box-glow-gold hidden md:block"
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-16 md:gap-24">
            {schedule.map((item, idx) => {
              const IconComponent = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""} gap-8 md:gap-16`}
                >
                  {/* Central Node Icon */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 + 0.3, ease: "easeOut" }}
                    className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:flex w-16 h-16 rounded-full bg-glass-emerald border-2 border-[#D4AF37] box-glow-gold items-center justify-center group hover:scale-110 transition-transform duration-300"
                  >
                    <IconComponent className="w-6 h-6 text-[#D4AF37]" />
                    <div className="absolute inset-0 rounded-full border border-[#D4AF37] animate-ping opacity-20 pointer-events-none" />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
                    whileHover={{ translateY: -5 }}
                    className="w-full md:w-[calc(50%-3rem)] p-8 md:p-10 rounded-3xl bg-glass border border-[#D4AF37]/20 box-glow-gold hover:border-[#D4AF37] transition-all duration-500 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-playfair text-2xl md:text-3xl font-bold text-[#D4AF37] text-glow-gold">
                        {item.time}
                      </span>
                      <div className="md:hidden p-3 rounded-xl bg-glass-gold border border-[#D4AF37]/30">
                        <IconComponent className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                    </div>

                    <h3 className="font-cormorant text-3xl text-[#E8E2D5] font-normal mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-4 text-xs font-poppins tracking-[0.3em] text-[#D4AF37]/80 uppercase">
                      <div className="h-[1px] w-4 bg-[#D4AF37]" />
                      <span>{item.subtitle}</span>
                    </div>

                    <p className="font-poppins text-sm md:text-base text-[#E8E2D5]/70 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </motion.div>

                  {/* Empty Spacer for alignment */}
                  <div className="hidden md:block w-[calc(50%-3rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
