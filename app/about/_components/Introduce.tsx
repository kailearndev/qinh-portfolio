"use client";

import { IHome } from "@/types/Home";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Component TypingText giữ nguyên logic của bạn
function TypingText({ text, speed = 35 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <>{displayed}</>;
}

export default function Introduce({
  aboutThumbnail,
}: {
  data: IHome;
  slogan?: string;
  aboutThumbnail?: string;
}) {
  return (
    <section className="py-10 h-full flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 grid grid-cols-1 2xl:grid-cols-2 gap-12 items-center"
      >
        <div className="order-2 lg:order-1 flex flex-col text-center lg:text-left ">
          <div className="flex flex-col gap-1 md:gap-2">
            <div className="space-y-0">
              <p className="text-primary font-light tracking-[0.4em] uppercase text-xs md:text-sm opacity-80">
                Nice to
              </p>
              <p className="text-white font-bold tracking-widest uppercase text-sm md:text-base">
                Meet you!
              </p>
            </div>

            <h1 className="flex flex-col mt-4 md:mt-6">
              <span className="text-6xl lg:text-9xl font-black tracking-tighter text-white leading-[0.8]">
                WELCOME
              </span>
              <span className="text-3xl md:text-6xl font-black tracking-tight uppercase text-white/20 my-2 md:my-4 leading-none">
                TO MY
              </span>
              <span className="relative inline-block text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Creative <br className="md:hidden" /> World
              </span>
            </h1>
          </div>
        </div>

        {/* CỘT PHẢI: HÌNH ẢNH VỚI VIỀN CHẠY */}
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <motion.div 
            className="relative group p-[3px] rounded-[32px] overflow-hidden"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Lớp viền chạy (Rotating Border) */}
            <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_150deg,#3b82f6_180deg,#a855f7_270deg,#ec4899_360deg)] opacity-100" />

            {/* Container ảnh chính (đè lên lớp viền) */}
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] overflow-hidden rounded-[29px] bg-[#0a0a0a] z-10">
              <Image
                src={aboutThumbnail || "/default-avatar.png"}
                alt="Profile"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Lớp phủ mờ nhẹ để ảnh trông sâu hơn */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Hào quang phía sau (Glow) */}
            <div className="absolute -inset-4 rounded-full blur-3xl opacity-20 bg-primary group-hover:opacity-40 transition-opacity z-0" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}