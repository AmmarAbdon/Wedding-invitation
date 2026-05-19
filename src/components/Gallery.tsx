"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 0,
      src: "/couple-balloons.jpg",
      title: "A Festive Beginning",
      subtitle: "Under the Balloons",
      aspect: "aspect-[3/4]",
    },
    {
      id: 1,
      src: "/couple-store.jpg",
      title: "Our Little Adventures",
      subtitle: "Together Everywhere",
      aspect: "aspect-[4/5]",
    },
    {
      id: 2,
      src: "/couple-studio.jpg",
      title: "Dreaming Together",
      subtitle: "Planning Our Forever",
      aspect: "aspect-[4/5]",
    },
    {
      id: 3,
      src: "/couple-cafe.jpg",
      title: "In Full Bloom",
      subtitle: "Joyful Moments",
      aspect: "aspect-[4/5]",
    },
    {
      id: 4,
      src: "/couple-formal.jpg",
      title: "Dressed in Love",
      subtitle: "An Elegant Evening",
      aspect: "aspect-[3/4]",
    },
    {
      id: 5,
      src: "/couple-extra.jpg",
      title: "Side by Side",
      subtitle: "Always Together",
      aspect: "aspect-[4/5]",
    },
  ];

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="relative w-full py-32 px-6 md:px-16 z-10 bg-[#040D0A]/60 backdrop-blur-lg border-t border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="font-poppins text-xs tracking-[0.4em] text-[#D4AF37] uppercase font-medium block mb-3">
            Cinematic Memories
          </span>
          <h2 className="font-cormorant text-5xl md:text-7xl font-light tracking-tight text-[#E8E2D5]">
            CAPTURED <span className="text-[#D4AF37] italic font-playfair">Moments</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#D4AF37]/40 mx-auto mt-6" />
        </motion.div>

        {/* Horizontal Scrollable Gallery */}
        <div className="relative">
          {/* Scroll hint gradient - left */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#040D0A] to-transparent z-10 pointer-events-none" />
          {/* Scroll hint gradient - right */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#040D0A] to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-6 overflow-x-auto pb-6 scroll-smooth"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "thin",
              scrollbarColor: "#D4AF37 #0a1f17",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {galleryImages.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                className="relative group overflow-hidden rounded-3xl bg-glass border border-[#D4AF37]/20 box-glow-gold cursor-pointer flex-shrink-0"
                style={{
                  scrollSnapAlign: "center",
                  width: "320px",
                  height: "440px",
                }}
                onClick={() => setSelectedImage(img.id)}
              >
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040D0A] via-[#040D0A]/40 to-transparent opacity-80 lg:opacity-60 lg:group-hover:opacity-40 transition-opacity duration-500" />

                {/* Overlay Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 lg:delay-100">
                    <div className="h-[1px] w-6 bg-[#D4AF37]" />
                    <span className="font-poppins text-xs tracking-[0.3em] text-[#D4AF37] uppercase font-medium">
                      {img.subtitle}
                    </span>
                  </div>
                  <h3 className="font-cormorant text-2xl text-[#E8E2D5] font-normal mb-1">
                    {img.title}
                  </h3>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#D4AF37]/20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 lg:delay-200">
                    <span className="font-poppins text-xs tracking-widest text-[#E8E2D5]/70 uppercase">Explore</span>
                    <ZoomIn className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicator dots */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, idx) => (
              <div key={idx} className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
            ))}
          </div>
        </div>

        {/* Cinematic Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#040D0A]/95 backdrop-blur-2xl p-4 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              <div className="absolute top-8 right-8 z-50">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-4 rounded-full bg-glass text-[#E8E2D5] hover:text-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox Navigation */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-4 md:left-12 p-4 rounded-full bg-glass text-[#E8E2D5] hover:text-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 z-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 md:right-12 p-4 rounded-full bg-glass text-[#E8E2D5] hover:text-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 z-50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Main Image */}
              <motion.div
                key={selectedImage}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative max-w-5xl max-h-[85vh] rounded-3xl overflow-hidden border border-[#D4AF37]/30 box-glow-gold bg-glass flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].title}
                  className="max-h-[70vh] w-auto object-contain rounded-2xl"
                />
                <div className="w-full p-6 bg-glass-emerald border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                  <div>
                    <h4 className="font-cormorant text-3xl text-[#E8E2D5] font-light">{galleryImages[selectedImage].title}</h4>
                    <p className="font-poppins text-xs tracking-[0.3em] text-[#D4AF37] uppercase mt-1">{galleryImages[selectedImage].subtitle}</p>
                  </div>
                  <span className="font-poppins text-xs tracking-widest text-[#E8E2D5]/60">
                    {selectedImage + 1} / {galleryImages.length}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
