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
    <section className="py-10  h-full flex items-center justify-center  overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 grid grid-cols-1 2xl:grid-cols-2 gap-12 items-center"
      >
        <div className="order-2 lg:order-1 flex flex-col text-center lg:text-left ">
          <div className="flex flex-col gap-1 md:gap-2">
            {/* Phần dẫn nhập: Giữ màu Primary của bạn */}
            <div className="space-y-0">
              <p className="text-primary font-light tracking-[0.4em] uppercase text-xs md:text-sm opacity-80">
                Nice to
              </p>
              <p className="text-white font-bold tracking-widest uppercase text-sm md:text-base">
                Meet you!
              </p>
            </div>

            {/* Khối tiêu đề chính */}
            <h1 className="flex flex-col mt-4 md:mt-6">
              {/* Dòng 1: WELCOME - Mạnh mẽ */}
              <span className="text-6xl lg:text-9xl font-black tracking-tighter text-white leading-[0.8]">
                WELCOME
              </span>

              {/* Dòng 2: TO MY - Đã phóng to, dùng font Bold và Uppercase cho hài hòa */}
              <span className="text-3xl md:text-6xl font-black tracking-tight uppercase text-white/20 my-2 md:my-4 leading-none">
                TO MY
              </span>

              {/* Dòng 3: CREATIVE WORLD - Giữ nguyên dải màu từ Blue đến Pink của bạn */}
              <span className="relative inline-block text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Creative <br className="md:hidden" /> World
              </span>
            </h1>
            {/* Slogan với hiệu ứng gõ chữ */}

          </div>

        </div>

        {/* CỘT PHẢI: HÌNH ẢNH (Giữ nguyên) */}
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity" />
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl backdrop-blur-sm">
              <Image
                src={aboutThumbnail || "/default-avatar.png"}
                alt="Profile"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
