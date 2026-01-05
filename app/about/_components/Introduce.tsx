"use client";

import DownloadButton from "@/components/DownloadButton";
import { IHome } from "@/types/Home";
import { Quote } from "lucide-react";
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
  data,
  slogan,
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
        className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* CỘT TRÁI: NỘI DUNG VĂN BẢN */}
        <div className="order-2 lg:order-1 flex flex-col  text-center lg:text-left">
          <div className="space-y-2">
            <p className="text-primary font-medium tracking-widest uppercase">
              Nice to meet you!
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              WELCOME TO MY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                CREATIVE WORLD
              </span>
            </h1>
          </div>

          {/* --- PHẦN SLOGAN ĐƯỢC CHÈN VÀO ĐÂY --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative max-w-lg mt-4 group"
          >
            <div className="relative flex items-start gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Hiệu ứng Glow chạy ngầm */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl opacity-50" />

              {/* Icon Quote nhảy nhẹ */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="flex-shrink-0"
              >
                <Quote className="text-blue-400 rotate-180" size={28} />
              </motion.div>

              {/* Chữ Typing */}
              <p className="italic font-medium leading-relaxed bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
                “
                <TypingText
                  text={
                    slogan || // Lấy từ data nếu có
                    "Driven by challenges, I find joy in pushing my limits and bringing ideas to life through design."
                  }
                />
                ”
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <DownloadButton cvUrl={data?.file_cv || "/resume.pdf"} />
            </div>
          </motion.div>
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
