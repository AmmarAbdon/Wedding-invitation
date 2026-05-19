"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Send, Heart, User, Mail, Utensils } from "lucide-react";
import confetti from "canvas-confetti";

export default function RSVP() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    attending: "yes",
    guestsCount: "1",
    dietary: "",
    songRequest: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock Backend / Supabase integration fallback
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Save to localStorage for persistence
    try {
      const existingRsvps = JSON.parse(localStorage.getItem("wedding_rsvps") || "[]");
      existingRsvps.push({ ...formData, submittedAt: new Date().toISOString() });
      localStorage.setItem("wedding_rsvps", JSON.stringify(existingRsvps));
    } catch (err) {
      console.error("Storage error:", err);
    }

    setIsSubmitting(false);
    setIsSuccess(true);

    // Launch beautiful gold & emerald confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#0D3327", "#F3E5AB", "#ffffff"],
    });
  };

  return (
    <section id="rsvp" className="relative w-full py-32 px-6 md:px-16 z-10 bg-[#040D0A]/80 backdrop-blur-xl border-t border-[#D4AF37]/10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="font-poppins text-xs tracking-[0.4em] text-[#D4AF37] uppercase font-medium block mb-3">
            Reserve Your Place
          </span>
          <h2 className="font-cormorant text-5xl md:text-7xl font-light tracking-tight text-[#E8E2D5]">
            ACCEPT THE <span className="text-[#D4AF37] italic font-playfair">Invitation</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#D4AF37]/40 mx-auto mt-6" />
        </motion.div>

        {/* RSVP Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-3xl bg-glass-emerald border border-[#D4AF37]/30 box-glow-gold p-8 md:p-16 overflow-hidden"
        >
          {/* Ambient Lighting inside card */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1),transparent_50%)] pointer-events-none" />

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="relative z-10 flex flex-col gap-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Full Name Field */}
                  <div className="relative flex flex-col">
                    <label className="font-poppins text-xs tracking-widest text-[#E8E2D5]/80 uppercase mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-[#D4AF37]" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onFocus={() => setFocusedField("fullName")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Lord / Lady Ahmed"
                      className={`w-full px-6 py-4 rounded-2xl bg-glass border ${focusedField === "fullName" ? "border-[#D4AF37] box-glow-gold" : errors.fullName ? "border-red-500" : "border-[#D4AF37]/20"} text-[#E8E2D5] placeholder-[#E8E2D5]/30 focus:outline-none transition-all duration-300 font-poppins text-sm`}
                    />
                    {errors.fullName && (
                      <span className="flex items-center gap-1 text-xs text-red-400 mt-2 font-poppins">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="relative flex flex-col">
                    <label className="font-poppins text-xs tracking-widest text-[#E8E2D5]/80 uppercase mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#D4AF37]" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ahmed@luxurywedding.com"
                      className={`w-full px-6 py-4 rounded-2xl bg-glass border ${focusedField === "email" ? "border-[#D4AF37] box-glow-gold" : errors.email ? "border-red-500" : "border-[#D4AF37]/20"} text-[#E8E2D5] placeholder-[#E8E2D5]/30 focus:outline-none transition-all duration-300 font-poppins text-sm`}
                    />
                    {errors.email && (
                      <span className="flex items-center gap-1 text-xs text-red-400 mt-2 font-poppins">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Attendance Radios */}
                  <div className="relative flex flex-col justify-center">
                    <label className="font-poppins text-xs tracking-widest text-[#E8E2D5]/80 uppercase mb-3 flex items-center gap-2">
                      <Heart className="w-4 h-4 text-[#D4AF37]" />
                      Will You Attend? *
                    </label>
                    <div className="flex items-center gap-6">
                      <label className="flex items-center gap-3 cursor-pointer group font-poppins text-sm text-[#E8E2D5]">
                        <input
                          type="radio"
                          name="attending"
                          value="yes"
                          checked={formData.attending === "yes"}
                          onChange={() => setFormData({ ...formData, attending: "yes" })}
                          className="w-5 h-5 accent-[#D4AF37] cursor-pointer"
                        />
                        <span className="group-hover:text-[#D4AF37] transition-colors duration-300">Joyfully Accepts</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group font-poppins text-sm text-[#E8E2D5]">
                        <input
                          type="radio"
                          name="attending"
                          value="no"
                          checked={formData.attending === "no"}
                          onChange={() => setFormData({ ...formData, attending: "no" })}
                          className="w-5 h-5 accent-[#D4AF37] cursor-pointer"
                        />
                        <span className="group-hover:text-[#D4AF37] transition-colors duration-300">Regretfully Declines</span>
                      </label>
                    </div>
                  </div>

                  {/* Guests Count */}
                  <div className="relative flex flex-col">
                    <label className="font-poppins text-xs tracking-widest text-[#E8E2D5]/80 uppercase mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-[#D4AF37]" />
                      Number of Guests
                    </label>
                    <select
                      value={formData.guestsCount}
                      onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                      disabled={formData.attending === "no"}
                      className="w-full px-6 py-4 rounded-2xl bg-[#061B14] border border-[#D4AF37]/20 text-[#E8E2D5] focus:border-[#D4AF37] focus:outline-none transition-all duration-300 font-poppins text-sm cursor-pointer disabled:opacity-50"
                    >
                      <option value="1">1 (Just Myself)</option>
                      <option value="2">2 (Couple)</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                    </select>
                  </div>
                </div>

                {/* Dietary Requirements */}
                <div className="relative flex flex-col">
                  <label className="font-poppins text-xs tracking-widest text-[#E8E2D5]/80 uppercase mb-2 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-[#D4AF37]" />
                    Dietary Requirements / Restrictions
                  </label>
                  <input
                    type="text"
                    value={formData.dietary}
                    onFocus={() => setFocusedField("dietary")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                    disabled={formData.attending === "no"}
                    placeholder="e.g. Vegetarian, Gluten-Free, None"
                    className={`w-full px-6 py-4 rounded-2xl bg-glass border ${focusedField === "dietary" ? "border-[#D4AF37] box-glow-gold" : "border-[#D4AF37]/20"} text-[#E8E2D5] placeholder-[#E8E2D5]/30 focus:outline-none transition-all duration-300 font-poppins text-sm disabled:opacity-50`}
                  />
                </div>

                {/* Song Request */}
                <div className="relative flex flex-col">
                  <label className="font-poppins text-xs tracking-widest text-[#E8E2D5]/80 uppercase mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#D4AF37]" />
                    Special Song Request for the Dance Floor
                  </label>
                  <textarea
                    value={formData.songRequest}
                    onFocus={() => setFocusedField("songRequest")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
                    disabled={formData.attending === "no"}
                    placeholder="What song will get you on the dance floor?"
                    rows={3}
                    className={`w-full px-6 py-4 rounded-2xl bg-glass border ${focusedField === "songRequest" ? "border-[#D4AF37] box-glow-gold" : "border-[#D4AF37]/20"} text-[#E8E2D5] placeholder-[#E8E2D5]/30 focus:outline-none transition-all duration-300 font-poppins text-sm disabled:opacity-50 resize-none`}
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-4 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="magnetic relative group px-12 py-5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#AA820A] to-[#D4AF37] text-[#040D0A] font-poppins font-semibold text-sm tracking-widest uppercase overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100 w-full md:w-auto"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#040D0A] border-t-transparent rounded-full animate-spin" />
                          Sending Reservation...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Confirm Reservation
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Success State */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center justify-center text-center py-12"
              >
                <div className="mb-6 p-6 rounded-full bg-glass-gold border border-[#D4AF37]/40 box-glow-gold animate-bounce">
                  <CheckCircle2 className="w-16 h-16 text-[#D4AF37]" />
                </div>

                <h3 className="font-cormorant text-4xl md:text-5xl text-[#E8E2D5] font-light mb-4">
                  RESERVATION <span className="text-[#D4AF37] italic font-playfair">Confirmed</span>
                </h3>

                <p className="font-poppins text-base md:text-lg text-[#E8E2D5]/80 font-light mb-8 max-w-lg leading-relaxed">
                  {formData.attending === "yes"
                    ? `Thank you, ${formData.fullName}. We are absolutely thrilled to celebrate our special day with you at Palace Hall.`
                    : `Thank you, ${formData.fullName}. We will miss you dearly, but your love and warm wishes are felt.`}
                </p>

                <div className="p-6 rounded-2xl bg-glass border border-[#D4AF37]/20 max-w-md w-full text-left font-poppins text-xs tracking-wider text-[#E8E2D5]/70 flex flex-col gap-2">
                  <div className="flex justify-between border-b border-[#D4AF37]/10 pb-2">
                    <span>GUEST NAME:</span>
                    <span className="text-[#D4AF37] font-medium">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#D4AF37]/10 pb-2">
                    <span>ATTENDANCE:</span>
                    <span className="text-[#D4AF37] font-medium">{formData.attending === "yes" ? "Accepted" : "Declined"}</span>
                  </div>
                  {formData.attending === "yes" && (
                    <div className="flex justify-between">
                      <span>GUESTS COUNT:</span>
                      <span className="text-[#D4AF37] font-medium">{formData.guestsCount}</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ fullName: "", email: "", attending: "yes", guestsCount: "1", dietary: "", songRequest: "" });
                  }}
                  className="mt-10 px-8 py-3 rounded-full bg-glass border border-[#D4AF37]/30 text-[#E8E2D5] font-poppins text-xs tracking-widest uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                >
                  Submit Another RSVP
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
