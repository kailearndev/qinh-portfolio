"use client";

import RotatingText from "@/components/RotatingText";
import { IHome } from "@/types/Home";
import { Download } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Introduce({ data }: { data: IHome }) {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* CỘT TRÁI: NỘI DUNG VĂN BẢN */}
        <div className="order-2 lg:order-1 flex flex-col gap-6 text-center lg:text-left">
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

          <div className="space-y-1">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
              {data?.name || "Your Name"}
            </h2>
            <div className="flex justify-center lg:justify-start">
              <RotatingText
                texts={
                  data?.positions
                    ? data?.positions.split(", ")
                    : ["Developer", "Designer"]
                }
                mainClassName="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-md text-xl md:text-2xl font-semibold overflow-hidden flex"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0">
            I build high-quality digital experiences with a focus on clean code
            and user-centric design.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
            <Link
              download
              href={data?.file_cv || "/resume.pdf"}
              target="_blank"
              className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
            >
              <Download size={20} />
              <span>Download My CV</span>
            </Link>
          </div>
        </div>

        {/* CỘT PHẢI: HÌNH ẢNH */}
        {/* CỘT PHẢI: HÌNH ẢNH */}
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <div className="relative group">
            {/* 1. Hiệu ứng vòng tròn trang trí phía sau - Làm to hơn một chút để tạo độ lan tỏa */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity" />

            {/* 2. Khung chứa ảnh */}
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] overflow-hidden rounded-2xl border-4 border-white dark:border-gray-800 shadow-2xl">
              <Image
                src={data?.avatar_url || "/default-avatar.png"}
                alt="Profile Picture"
                fill // Sử dụng fill để ảnh tự lấp đầy khung chứa cha
                priority
                sizes="(max-width: 768px) 280px, 420px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* 3. Một lớp trang trí nhỏ ở góc (Tùy chọn) */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 backdrop-blur-xl rounded-full border border-white/20 z-10 hidden md:block" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
