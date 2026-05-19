"use client";

import { motion } from "framer-motion";

export default function LoveStory() {
  const storyChapters = [
    {
      year: "2022",
      title: "The First Encounter • اللقاء الأول",
      subtitle: "March 23, 2022 • ٢٣ مارس ٢٠٢٢",
      content: "Our story began with a chance encounter that changed everything. A simple conversation sparked a connection that grew deeper with every passing day, seamlessly merging two separate paths into a journey of love and understanding.",
      image: "/couple-first.jpg",
    },
    {
      year: "2025",
      title: "Reading Al-Fatiha • قراءة الفاتحة",
      subtitle: "April 28, 2025 • ٢٨ أبريل ٢٠٢٥",
      content: "Surrounded by our beloved families, we took a sacred step toward our forever by reading Al-Fatiha. It was a day filled with blessings, warmth, and the official promise to build a lifetime of love, faith, and devotion together.",
      image: "/couple-2.png",
    },
    {
      year: "2025",
      title: "The Engagement Ceremony • الشبكة",
      subtitle: "May 25, 2025 • ٢٥ مايو ٢٠٢٥",
      content: "With joy in our hearts, we celebrated our official engagement (Shabka). Dressed in elegance, surrounded by family, we wore our rings as a symbol of our commitment and the beautiful bond that will unite us forever.",
      image: "/couple-4.jpg",
    },
  ];

  return (
    <section id="love-story" className="relative w-full py-32 px-6 md:px-16 z-10 bg-[#040D0A]/80 backdrop-blur-md border-t border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="font-poppins text-xs tracking-[0.4em] text-[#D4AF37] uppercase font-medium block mb-3">
            Editorial Story
          </span>
          <h2 className="font-cormorant text-5xl md:text-7xl font-light tracking-tight text-[#E8E2D5]">
            THE CHAPTERS OF <span className="text-[#D4AF37] italic font-playfair">Our Love</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#D4AF37]/40 mx-auto mt-6" />
        </motion.div>

        {/* Chapters Split Screen Layout */}
        <div className="flex flex-col gap-32">
          {storyChapters.map((chapter, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-24`}
            >
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full lg:w-1/2"
              >
                <div className="relative group overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-glass box-glow-gold aspect-[4/5] max-h-[600px] w-full mx-auto">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={chapter.image}
                    alt={chapter.title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040D0A] via-transparent to-transparent opacity-60" />

                  {/* Floating Year Badge */}
                  <div className="absolute bottom-6 left-6 bg-glass-emerald px-6 py-2 rounded-full border border-[#D4AF37]/40">
                    <span className="font-playfair text-xl text-[#D4AF37] font-bold tracking-widest">
                      {chapter.year}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                className="w-full lg:w-1/2 flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[1px] w-12 bg-[#D4AF37]" />
                  <span className="font-poppins text-xs md:text-sm tracking-[0.3em] text-[#D4AF37] uppercase">
                    {chapter.subtitle}
                  </span>
                </div>

                <h3 className="font-cormorant text-4xl md:text-5xl font-normal text-[#E8E2D5] mb-6 leading-tight">
                  {chapter.title}
                </h3>

                <p className="font-poppins text-base md:text-lg text-[#E8E2D5]/80 leading-relaxed font-light mb-8 max-w-xl">
                  {chapter.content}
                </p>

                <div className="flex items-center gap-4 group cursor-pointer w-max">
                  <span className="font-poppins text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold group-hover:tracking-[0.4em] transition-all duration-300">
                    Explore Moment
                  </span>
                  <div className="w-8 h-[1px] bg-[#D4AF37] group-hover:w-12 transition-all duration-300" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
