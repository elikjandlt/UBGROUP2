"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function HomePage() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              Хөрөнгө оруулалт
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
              UB group нь эрмэлзэл дүүрэн, дэвшилтэт хөгжилд тэмүүлэх хүслээр
              хэн бүхэнд нээлттэй, харилцан хүндэлэл бүхий нийгмийн тулгуур
              хамтралыг бүрдүүлж, тогтвортой эх дэлхийг бүтээгч, залууч эрч
              хүч нь байна.
            </p>
            <button className="group inline-flex items-center gap-3 px-8 py-4 border border-white/40 text-white text-sm font-medium tracking-wide hover:bg-[#F0F4F8] hover:text-[#1E3A5F] transition-all duration-500 rounded-full backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-[#F0F4F8]/20 flex items-center justify-center group-hover:bg-[#1E3A5F] group-hover:text-white transition-all duration-500">
                <Play size={18} fill="currentColor" />
              </div>
              Introduction Video
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#F0F4F8]/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
