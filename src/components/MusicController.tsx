"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Disc, Play, Pause, Volume2, VolumeX, Music } from "lucide-react";

export default function MusicController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;

      const playAudio = () => {
        if (audioRef.current && audioRef.current.paused) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {});
        }
        document.removeEventListener("click", playAudio);
        document.removeEventListener("scroll", playAudio);
        document.removeEventListener("touchstart", playAudio);
      };

      // Attempt immediate autoplay
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Fallback: wait for user's first interaction if browser blocks autoplay
        document.addEventListener("click", playAudio);
        document.addEventListener("scroll", playAudio);
        document.addEventListener("touchstart", playAudio);
      });

      return () => {
        document.removeEventListener("click", playAudio);
        document.removeEventListener("scroll", playAudio);
        document.removeEventListener("touchstart", playAudio);
      };
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn("Audio playback notice (browser autoplay/policy interaction):", err);
          // Keep UI state stable even if browser blocks audio
          setIsPlaying(false);
        });
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex items-center gap-4">
      <audio ref={audioRef} autoPlay loop preload="auto" onError={(e) => console.warn("Audio stream fallback notice:", e)}>
        <source src="/wedding-song.mp3" type="audio/mpeg" />
      </audio>

      {/* Expanded Track Info Card */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden rounded-full bg-glass-emerald border border-[#D4AF37]/30 box-glow-gold flex items-center gap-3 px-6 py-3"
      >
        <Music className="w-4 h-4 text-[#D4AF37] animate-pulse" />
        <div className="flex flex-col pr-2">
          <span className="font-cormorant text-sm text-[#E8E2D5] font-medium leading-none whitespace-nowrap">
            Our Wedding Song
          </span>
          <span className="font-poppins text-[10px] tracking-widest text-[#D4AF37] uppercase mt-1 whitespace-nowrap">
            Ahmed &amp; Esraa
          </span>
        </div>

        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-glass hover:bg-[#D4AF37]/20 text-[#E8E2D5] hover:text-[#D4AF37] transition-colors ml-2"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </motion.div>

      {/* Main Floating Vinyl Button */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={togglePlay}
        className="relative group flex items-center justify-center w-16 h-16 rounded-full bg-glass-emerald border border-[#D4AF37]/40 box-glow-gold cursor-pointer overflow-hidden shadow-2xl"
      >
        {/* Spinning Vinyl Disc */}
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 bg-[#040D0A] flex items-center justify-center shadow-[inset_0_0_10px_rgba(212,175,55,0.2)]">
            <div className="w-4 h-4 rounded-full bg-[#D4AF37] border border-[#040D0A]" />
          </div>
        </motion.div>

        {/* Center Play/Pause Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#040D0A]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {isPlaying ? (
            <Pause className="w-6 h-6 text-[#D4AF37]" />
          ) : (
            <Play className="w-6 h-6 text-[#D4AF37] translate-x-[1px]" />
          )}
        </div>

        {/* Ambient pulse ring when playing */}
        {isPlaying && (
          <div className="absolute inset-0 rounded-full border border-[#D4AF37] animate-ping opacity-30 pointer-events-none" />
        )}
      </motion.div>
    </div>
  );
}
