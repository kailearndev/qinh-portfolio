"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function GlobalLoading() {
  const stars = Array.from({ length: 15 }); // Tăng thêm sao cho dày

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-2xl overflow-hidden">
      <div className="relative flex flex-col items-center justify-center">
        
        {/* 1. Sao băng - Tốc độ bàn thờ (0.2s - 0.4s) */}
        {stars.map((_, i) => (
          <motion.span
            key={i}
            initial={{ x: Math.random() * 1000 - 500, y: -500, opacity: 0 }}
            animate={{ y: 700, opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 0.2 + 0.2, // Siêu nhanh
              repeat: Infinity,
              delay: Math.random() * 1,
              ease: "linear",
            }}
            className="absolute text-blue-400/50 pointer-events-none"
          >
            <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
          </motion.span>
        ))}

        {/* 2. Hào quang - Nhịp thở nhanh */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute w-[400px] h-[400px] bg-blue-600/30 blur-[120px] rounded-full"
        />

        {/* 3. Group Logo và Chữ - Vút lên (0.4s) */}
        <motion.div
          initial={{ y: 150, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.175, 0.885, 0.32, 1.1] }} // Kiểu backOut cho gắt
          className="flex flex-col items-center gap-4 relative z-10"
        >
          {/* Logo nhún nhảy nhanh */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/loading.png"
              alt="Logo"
              width={240}
              height={240}
              priority
              className="drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]"
            />
          </motion.div>

          {/* Tên Quynh Nguyen hiện ra ngay lập tức */}
          <motion.div className="text-center">
            <motion.h1 
              initial={{ letterSpacing: "0.5em", opacity: 0 }}
              animate={{ letterSpacing: "0.2em", opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest"
            >
              Quynh <span className="text-blue-500">Nguyen</span>
            </motion.h1>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="h-[3px] bg-blue-500 mt-2 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            />
          </motion.div>
        </motion.div>

        {/* 4. Tia chớp quét qua */}
        <motion.div
          animate={{ x: [-600, 600], opacity: [0, 1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
          className="absolute h-[2px] w-[300px] bg-gradient-to-r from-transparent via-white to-transparent -rotate-45"
        />

      </div>
    </div>
  );
}