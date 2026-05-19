"use client";

import { motion } from "framer-motion";
import { Church, Wine, MapPin, Clock, Compass } from "lucide-react";

export default function EventDetails() {
  const events = [
    {
      icon: Church,
      title: "Wedding Celebration & Katb El-Kitab",
      time: "8:00 PM – 11:30 PM",
      location: "Palace Hall, Toukh",
      address: "Toukh, Al Qalyubia, Egypt",
      description: "Witness the joy as we celebrate our marriage contract (Katb El-Kitab) and share our special wedding night in the elegant Palace Hall.",
    },
    {
      icon: Wine,
      title: "The Grand Dinner & Party",
      time: "9:30 PM onwards",
      location: "Palace Hall Gardens",
      address: "Toukh, Al Qalyubia, Egypt",
      description: "Join us for a delicious wedding dinner, followed by DJ sets, celebration, and dancing the night away with family and friends.",
    },
    {
      icon: Compass,
      title: "Dress Code & Details",
      time: "Formal / Black Tie",
      location: "Elegant & Majestic",
      address: "Colors: Emerald, Gold, Black & White",
      description: "We respectfully request our guests to dress in formal attire. Let's make the night visually stunning with elegant evening gowns and classic suits.",
    },
  ];

  return (
    <section id="event-details" className="relative w-full py-32 px-6 md:px-16 z-10 bg-[#040D0A]/90 backdrop-blur-xl border-t border-[#D4AF37]/10">
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
            The Itinerary
          </span>
          <h2 className="font-cormorant text-5xl md:text-7xl font-light tracking-tight text-[#E8E2D5]">
            EVENT <span className="text-[#D4AF37] italic font-playfair">Details</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#D4AF37]/40 mx-auto mt-6" />
        </motion.div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {events.map((evt, idx) => {
            const IconComponent = evt.icon;
            return (
              <motion.div
                key={evt.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
                whileHover={{ translateY: -10 }}
                className="group relative flex flex-col justify-between p-10 rounded-3xl bg-glass border border-[#D4AF37]/20 box-glow-gold hover:border-[#D4AF37] transition-all duration-500 overflow-hidden"
              >
                {/* Top Accent Shimmer */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <div className="mb-8 p-5 rounded-2xl bg-glass-gold w-max border border-[#D4AF37]/30 group-hover:scale-110 transition-transform duration-500">
                    <IconComponent className="w-8 h-8 text-[#D4AF37]" />
                  </div>

                  <h3 className="font-cormorant text-3xl md:text-4xl font-normal text-[#E8E2D5] mb-4">
                    {evt.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-3 text-xs md:text-sm font-poppins tracking-widest text-[#D4AF37]">
                    <Clock className="w-4 h-4" />
                    <span>{evt.time}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-6 text-xs md:text-sm font-poppins tracking-wider text-[#E8E2D5]/90">
                    <MapPin className="w-4 h-4 text-[#D4AF37]/70" />
                    <span>{evt.location}</span>
                  </div>

                  <p className="font-poppins text-sm md:text-base text-[#E8E2D5]/70 leading-relaxed font-light mb-6">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#D4AF37]/10 flex items-center justify-between text-xs font-poppins tracking-widest text-[#D4AF37]/80 group-hover:text-[#D4AF37]">
                  <span>{evt.address}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Google Maps Interactive Card Embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 bg-glass box-glow-gold p-4 md:p-6"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#040D0A] via-transparent to-transparent opacity-40 pointer-events-none z-10" />
          <div className="w-full h-[450px] rounded-2xl overflow-hidden relative filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
            <iframe
              title="Palace Hall Toukh"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.651113442299!2d31.208638099999998!3d30.360863799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458730007df51d5%3A0xde99229acb191f79!2z2YLYp9i52Kkg2KfZhNmC2LXYsSDZhNmE2Krdg9mE2KfYqiDZiNin2YTZhdmG2KfYs9io2KfYqg!5e0!3m2!1sar!2seg!4v1779188964939!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
            <div>
              <h4 className="font-cormorant text-2xl text-[#E8E2D5] font-medium">قاعة القصر - Palace Hall, Toukh</h4>
              <p className="font-poppins text-xs tracking-widest text-[#D4AF37]">Toukh, Al Qalyubia, Egypt</p>
            </div>
            <a
              href="https://maps.app.goo.gl/BqTfLzc7SkgsPvMy8"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic px-8 py-3 rounded-full bg-[#D4AF37] text-[#040D0A] font-poppins font-semibold text-xs tracking-widest uppercase hover:bg-[#F3E5AB] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
